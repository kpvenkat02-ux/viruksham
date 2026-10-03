const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '../scraped/pages');

function getUrlsFromHtml(html) {
  const urls = new Set();
  const srcRegex = /(?:src|href|poster)\s*=\s*["']([^"']+)["']/gi;
  let match;
  while ((match = srcRegex.exec(html)) !== null) {
    const url = match[1].trim();
    if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:') && !url.startsWith('mailto:') && !url.startsWith('tel:') && !url.startsWith('#') && !url.startsWith('javascript:')) {
      urls.add(url);
    }
  }

  // Also check inline css url(...)
  const cssUrlRegex = /url\(["']?([^"')]+)["']?\)/gi;
  while ((match = cssUrlRegex.exec(html)) !== null) {
    const url = match[1].trim();
    if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:') && !url.startsWith('#')) {
      urls.add(url);
    }
  }

  return Array.from(urls);
}

async function testUrl(baseUrl, targetUrl) {
  return new Promise((resolve) => {
    let cleanTarget = targetUrl.split('#')[0].split('?')[0];
    if (!cleanTarget.startsWith('/')) {
      cleanTarget = '/' + cleanTarget;
    }
    const fullUrl = baseUrl + cleanTarget;
    const client = fullUrl.startsWith('https') ? https : http;

    client.get(fullUrl, (res) => {
      resolve({ url: cleanTarget, status: res.statusCode, fullUrl });
    }).on('error', (err) => {
      resolve({ url: cleanTarget, status: 500, error: err.message, fullUrl });
    });
  });
}

async function run() {
  console.log('--- Testing all assets on http://localhost:3000 ---');
  const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
  const allUrls = new Set();

  for (const file of files) {
    const content = fs.readFileSync(path.join(PAGES_DIR, file), 'utf8');
    const urls = getUrlsFromHtml(content);
    urls.forEach(u => allUrls.add(u));
  }

  // Also parse public/css/
  const cssFiles = fs.readdirSync(path.join(__dirname, '../public/css')).filter(f => f.endsWith('.css'));
  for (const f of cssFiles) {
    const content = fs.readFileSync(path.join(__dirname, '../public/css', f), 'utf8');
    const cssUrlRegex = /url\(["']?([^"')]+)["']?\)/gi;
    let match;
    while ((match = cssUrlRegex.exec(content)) !== null) {
      const url = match[1].trim();
      if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:')) {
        allUrls.add(url);
      }
    }
  }

  console.log(`Found ${allUrls.size} unique internal asset/page links across all files.`);

  const errors = [];
  for (const url of Array.from(allUrls)) {
    const res = await testUrl('http://localhost:3000', url);
    if (res.status === 404 || res.status >= 400) {
      console.log(`❌ [${res.status}] ${url} -> ${res.fullUrl}`);
      errors.push(res);
    } else {
      // console.log(`✓ [${res.status}] ${url}`);
    }
  }

  if (errors.length === 0) {
    console.log('✅ ALL local assets and pages loaded with 200/300 status codes! No 404 found.');
  } else {
    console.log(`⚠️ Found ${errors.length} broken 404 links!`);
  }
}

run();
