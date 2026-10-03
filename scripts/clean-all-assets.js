const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '../scraped/pages');
const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(PAGES_DIR, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let original = html;

  // 1. Remove all old next/turbopack/chunk script tags and preload tags
  html = html.replace(/\s*<link rel="preload"[^>]*\.woff2[^>]*>/gi, '');
  html = html.replace(/\s*<link rel="preload"[^>]*as="script"[^>]*>/gi, '');
  html = html.replace(/\s*<script src="\/css\/[^"]+\.js"[^>]*><\/script>/gi, '');
  html = html.replace(/\s*<script src="\/_next\/[^"]+\.js"[^>]*><\/script>/gi, '');
  html = html.replace(/\s*<link rel="stylesheet"[^>]*(?:40lw60hw3tx3z|0egqdy7-oee2u|2s-tmlh8ad9wh|3zo59s37hpl-r|0s2bp-fj0r2zt)[^>]*>/gi, '');

  // 2. Fix logo-mark.png
  html = html.replace(/\/images\/logo-mark\.png/g, '/images/viruksham-logo.png');

  // 3. Ensure main-core.css is in the head if not present
  if (!html.includes('/css/main-core.css')) {
    html = html.replace(/<head>/i, '<head>\n<link rel="stylesheet" href="/css/main-core.css"/>');
  }

  if (html !== original) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Cleaned: ${file}`);
  }
});

console.log('All files processed cleanly.');
