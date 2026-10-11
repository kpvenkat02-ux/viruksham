const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9223;

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

async function diffImagesInBrowser(img1Path, img2Path, diffOutPath) {
  const img1Base64 = fs.readFileSync(img1Path).toString('base64');
  const img2Base64 = fs.readFileSync(img2Path).toString('base64');

  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
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

  const browserClient = new CDPClient(versionInfo.webSocketDebuggerUrl);
  await browserClient.connect();

  const { targetId } = await browserClient.send('Target.createTarget', { url: 'about:blank' });
  const targets = await getJson(`http://127.0.0.1:${PORT}/json`);
  const pageTarget = targets.find(t => t.id === targetId);

  const pageClient = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await pageClient.connect();
  await pageClient.send('Runtime.enable');

  const diffScript = `
    (async function() {
      function loadImage(src) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      }

      const img1 = await loadImage('data:image/png;base64,${img1Base64}');
      const img2 = await loadImage('data:image/png;base64,${img2Base64}');

      const width = Math.max(img1.width, img2.width);
      const height = Math.max(img1.height, img2.height);

      const c1 = document.createElement('canvas');
      c1.width = width; c1.height = height;
      const ctx1 = c1.getContext('2d');
      ctx1.drawImage(img1, 0, 0);
      const d1 = ctx1.getImageData(0, 0, width, height).data;

      const c2 = document.createElement('canvas');
      c2.width = width; c2.height = height;
      const ctx2 = c2.getContext('2d');
      ctx2.drawImage(img2, 0, 0);
      const d2 = ctx2.getImageData(0, 0, width, height).data;

      const cDiff = document.createElement('canvas');
      cDiff.width = width; cDiff.height = height;
      const ctxDiff = cDiff.getContext('2d');
      const imgDiff = ctxDiff.createImageData(width, height);
      const dDiff = imgDiff.data;

      let diffPixels = 0;
      const totalPixels = width * height;

      for (let i = 0; i < d1.length; i += 4) {
        const rDiff = Math.abs(d1[i] - d2[i]);
        const gDiff = Math.abs(d1[i+1] - d2[i+1]);
        const bDiff = Math.abs(d1[i+2] - d2[i+2]);
        const aDiff = Math.abs(d1[i+3] - d2[i+3]);

        if (rDiff > 0 || gDiff > 0 || bDiff > 0 || aDiff > 0) {
          diffPixels++;
          dDiff[i] = 255;   // Red
          dDiff[i+1] = 0;
          dDiff[i+2] = 0;
          dDiff[i+3] = 255;
        } else {
          dDiff[i] = d1[i];
          dDiff[i+1] = d1[i+1];
          dDiff[i+2] = d1[i+2];
          dDiff[i+3] = Math.max(30, Math.floor(d1[i+3] * 0.2));
        }
      }

      ctxDiff.putImageData(imgDiff, 0, 0);
      return {
        width,
        height,
        img1Width: img1.width,
        img1Height: img1.height,
        img2Width: img2.width,
        img2Height: img2.height,
        totalPixels,
        diffPixels,
        diffPercentage: (diffPixels / totalPixels) * 100,
        diffDataUrl: cDiff.toDataURL('image/png')
      };
    })()
  `;

  const evalResult = await pageClient.send('Runtime.evaluate', {
    expression: diffScript,
    awaitPromise: true,
    returnByValue: true
  });

  const res = evalResult.result.value;

  if (res && res.diffDataUrl && diffOutPath) {
    const base64 = res.diffDataUrl.replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync(diffOutPath, Buffer.from(base64, 'base64'));
  }

  pageClient.close();
  browserClient.close();
  chromeProc.kill();
  await sleep(400);

  return res;
}

async function main() {
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');

  console.log('====================================================');
  console.log('   PIXEL-BY-PIXEL DESKTOP UI DIFF VALIDATION        ');
  console.log('====================================================\n');

  // Test 1: Desktop 1280px
  console.log('Comparing 1280px Desktop Screenshots (before vs after)...');
  const d1280 = await diffImagesInBrowser(
    path.join(screenshotsDir, 'desktop-1280-before.png'),
    path.join(screenshotsDir, 'desktop-1280-after.png'),
    path.join(screenshotsDir, 'diff-1280.png')
  );
  console.log(`Dimensions Before: ${d1280.img1Width}x${d1280.img1Height}`);
  console.log(`Dimensions After:  ${d1280.img2Width}x${d1280.img2Height}`);
  console.log(`Total Pixels:      ${d1280.totalPixels.toLocaleString()}`);
  console.log(`Different Pixels:  ${d1280.diffPixels.toLocaleString()}`);
  console.log(`Difference:        ${d1280.diffPercentage.toFixed(4)}%`);
  console.log(`Diff Image Saved:  ${path.join(screenshotsDir, 'diff-1280.png')}\n`);

  // Test 2: Desktop 1440px
  console.log('Comparing 1440px Desktop Screenshots (before vs after)...');
  const d1440 = await diffImagesInBrowser(
    path.join(screenshotsDir, 'desktop-1440-before.png'),
    path.join(screenshotsDir, 'desktop-1440-after.png'),
    path.join(screenshotsDir, 'diff-1440.png')
  );
  console.log(`Dimensions Before: ${d1440.img1Width}x${d1440.img1Height}`);
  console.log(`Dimensions After:  ${d1440.img2Width}x${d1440.img2Height}`);
  console.log(`Total Pixels:      ${d1440.totalPixels.toLocaleString()}`);
  console.log(`Different Pixels:  ${d1440.diffPixels.toLocaleString()}`);
  console.log(`Difference:        ${d1440.diffPercentage.toFixed(4)}%`);
  console.log(`Diff Image Saved:  ${path.join(screenshotsDir, 'diff-1440.png')}\n`);

  // Test 3: Mobile 360px comparison (to show mobile redesign changed)
  console.log('Comparing 360px Mobile Screenshots (before vs after)...');
  const m360 = await diffImagesInBrowser(
    path.join(screenshotsDir, 'mobile-360-before.png'),
    path.join(screenshotsDir, 'mobile-360-after.png'),
    path.join(screenshotsDir, 'diff-mobile-360.png')
  );
  console.log(`Mobile 360 Redesign Delta: ${m360.diffPercentage.toFixed(2)}% changed (New Mobile UI active!)\n`);
}

main().catch(err => {
  console.error('Error running diff:', err);
  process.exit(1);
});
