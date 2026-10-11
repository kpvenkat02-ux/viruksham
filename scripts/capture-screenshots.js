const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9222;

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.id = 1;
    this.callbacks = new Map();
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const { resolve, reject } = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) reject(new Error(msg.error.message));
          else resolve(msg.result);
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function capture(url, outPath, width, height, isMobile = false) {
  console.log(`Launching Chrome for ${width}x${height} -> ${outPath}...`);
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
    '--hide-scrollbars',
    'about:blank'
  ]);

  let versionInfo = null;
  for (let i = 0; i < 30; i++) {
    await sleep(200);
    try {
      versionInfo = await getJson(`http://127.0.0.1:${PORT}/json/version`);
      if (versionInfo && versionInfo.webSocketDebuggerUrl) break;
    } catch (e) {}
  }

  if (!versionInfo || !versionInfo.webSocketDebuggerUrl) {
    chromeProc.kill();
    throw new Error('Chrome did not start in time');
  }

  const browserClient = new CDPClient(versionInfo.webSocketDebuggerUrl);
  await browserClient.connect();

  const { targetId } = await browserClient.send('Target.createTarget', { url: 'about:blank' });
  const targets = await getJson(`http://127.0.0.1:${PORT}/json`);
  const pageTarget = targets.find(t => t.id === targetId);

  const pageClient = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await pageClient.connect();

  await pageClient.send('Page.enable');
  await pageClient.send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: height,
    deviceScaleFactor: 1,
    mobile: isMobile
  });

  await pageClient.send('Page.navigate', { url });
  await sleep(2500); // Wait for fonts, render & hydration

  const screenshot = await pageClient.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });

  const buffer = Buffer.from(screenshot.data, 'base64');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log(`Saved screenshot (${buffer.length} bytes): ${outPath}`);

  pageClient.close();
  browserClient.close();
  chromeProc.kill();
  await sleep(500);
}

async function main() {
  const args = process.argv.slice(2);
  const phase = args[0] || 'before'; // 'before' or 'after'
  const outDir = path.join(__dirname, '..', 'screenshots');

  const configs = [
    { name: `desktop-1280-${phase}.png`, width: 1280, height: 900, mobile: false },
    { name: `desktop-1440-${phase}.png`, width: 1440, height: 900, mobile: false },
    { name: `mobile-360-${phase}.png`, width: 360, height: 800, mobile: true },
    { name: `mobile-390-${phase}.png`, width: 390, height: 844, mobile: true }
  ];

  for (const cfg of configs) {
    const dest = path.join(outDir, cfg.name);
    await capture('http://localhost:3000/', dest, cfg.width, cfg.height, cfg.mobile);
  }
  console.log(`\nAll ${phase} screenshots captured successfully!`);
}

main().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
