const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../scraped/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Remove woff2 font preloads that cause 404
  if (html.includes('.woff2')) {
    html = html.replace(/\s*<link rel="preload"[^>]*\.woff2[^>]*>/gi, '');
    modified = true;
  }

  // 2. Replace 2s-tmlh8ad9wh.css or any _next/static/immutable/chunks/*.css with /css/main-core.css
  if (html.includes('/_next/static/immutable/chunks/2s-tmlh8ad9wh.css') || html.includes('2s-tmlh8ad9wh.css')) {
    html = html.replace(/\s*<link rel="stylesheet"[^>]*2s-tmlh8ad9wh\.css[^>]*>/gi, '\n<link rel="stylesheet" href="/css/main-core.css"/>');
    modified = true;
  }

  // 3. Replace any other remaining _next/ css
  if (html.includes('/_next/static/immutable/chunks/')) {
    html = html.replace(/\/_next\/static\/immutable\/chunks\//g, '/css/');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Cleaned asset links in ${file}`);
  }
});

console.log('All pages asset links updated successfully!');
