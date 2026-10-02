const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const PAGES_DIR = path.join(ROOT_DIR, 'scraped', 'pages');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  console.log('--- Building static distribution for GitHub Pages ---');
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // 1. Copy public assets (CSS, JS, images, _next, icons, etc.)
  if (fs.existsSync(PUBLIC_DIR)) {
    console.log('Copying public assets to dist/...');
    copyDirRecursive(PUBLIC_DIR, DIST_DIR);
  }

  // 2. Copy scraped pages as root/nested HTML files
  if (fs.existsSync(PAGES_DIR)) {
    console.log('Copying pages from scraped/pages to dist/...');
    const pages = fs.readdirSync(PAGES_DIR);
    for (const page of pages) {
      if (page.endsWith('.html')) {
        const pageSrc = path.join(PAGES_DIR, page);
        const pageContent = fs.readFileSync(pageSrc, 'utf8');

        // Target file
        const pageDest = path.join(DIST_DIR, page);
        fs.writeFileSync(pageDest, pageContent, 'utf8');

        // Also create clean URL directory (e.g., /about/index.html from about.html)
        if (page !== 'index.html' && page !== '404.html') {
          const pageName = page.replace('.html', '');
          const dirDest = path.join(DIST_DIR, pageName);
          if (!fs.existsSync(dirDest)) {
            fs.mkdirSync(dirDest, { recursive: true });
          }
          fs.writeFileSync(path.join(dirDest, 'index.html'), pageContent, 'utf8');
        }
      }
    }
  }

  // 3. Create 404.html (using index.html as fallback for SPA routing)
  const indexSrc = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(indexSrc)) {
    fs.copyFileSync(indexSrc, path.join(DIST_DIR, '404.html'));
  }

  // 4. Create .nojekyll (CRITICAL for GitHub Pages to serve _next/ folder)
  fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '', 'utf8');

  console.log('✅ Static build complete! Output directory: dist/');
}

build();
