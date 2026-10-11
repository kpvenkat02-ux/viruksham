const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9224;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => { try { resolve(JSON.parse(data)); } catch (e) { reject(e); } });
    }).on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) { this.wsUrl = wsUrl; this.id = 1; this.callbacks = new Map(); }
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
  close() { if (this.ws) this.ws.close(); }
}

async function locateDiffRegions(diffImgPath) {
  const base64 = fs.readFileSync(diffImgPath).toString('base64');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new', '--no-sandbox', '--disable-gpu',
    `--remote-debugging-port=${PORT}`, 'about:blank'
  ]);
  let versionInfo = null;
  for (let i = 0; i < 30; i++) {
    await sleep(200);
    try {
      versionInfo = await getJson(`http://127.0.0.1:${PORT}/json/version`);
      if (versionInfo && versionInfo.webSocketDebuggerUrl) break;
    } catch (e) {}
  }
  const browserClient = new CDPClient(versionInfo.webSocketDebuggerUrl);
  await browserClient.connect();
  const { targetId } = await browserClient.send('Target.createTarget', { url: 'about:blank' });
  const targets = await getJson(`http://127.0.0.1:${PORT}/json`);
  const pageTarget = targets.find(t => t.id === targetId);
  const pageClient = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await pageClient.connect();
  await pageClient.send('Runtime.enable');

  const script = `
    (async function() {
      const img = new Image();
      await new Promise(r => { img.onload = r; img.src = 'data:image/png;base64,${base64}'; });
      const c = document.createElement('canvas');
      c.width = img.width; c.height = img.height;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, img.width, img.height).data;

      const diffY = {};
      for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
          const idx = (y * img.width + x) * 4;
          // Look for red pixels (255, 0, 0)
          if (data[idx] === 255 && data[idx+1] === 0 && data[idx+2] === 0) {
            const bucket = Math.floor(y / 500) * 500;
            diffY[bucket] = (diffY[bucket] || 0) + 1;
          }
        }
      }
      return diffY;
    })()
  `;

  const evalRes = await pageClient.send('Runtime.evaluate', {
    expression: script,
    awaitPromise: true,
    returnByValue: true
  });
  console.log('Diff Pixel Counts by Y Coordinate (500px buckets):', evalRes.result.value);

  pageClient.close();
  browserClient.close();
  chromeProc.kill();
}

locateDiffRegions(path.join(__dirname, '..', 'screenshots', 'diff-1280.png'));
