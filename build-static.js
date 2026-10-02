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

const PAGE_NAMES = [
  'about', 'contact', 'disclaimer', 'disclosure', 'media',
  'news_lakshya-mutual-fund-launches-lakshya-overnight-fund',
  'privacy', 'services', 'terms', 'tools'
];

const ROUTE_ALIASES = {
  '/mutual-funds': 'services.html#mutual-funds',
  '/blog': 'media.html',
  '/news': 'media.html',
  '/research': 'services.html'
};

function fixPathsForGhPages(htmlContent, depth = 0) {
  const prefix = depth === 0 ? './' : '../';

  let fixed = htmlContent;

  // 1. Assets: images, css, js, videos, _next
  fixed = fixed.replace(/(href|src|poster|data-src)=["']\/_next\//g, `$1="${prefix}_next/`);
  fixed = fixed.replace(/(href|src|poster|data-src)=["']\/images\//g, `$1="${prefix}images/`);
  fixed = fixed.replace(/(href|src|poster|data-src)=["']\/css\//g, `$1="${prefix}css/`);
  fixed = fixed.replace(/(href|src|poster|data-src)=["']\/js\//g, `$1="${prefix}js/`);
  fixed = fixed.replace(/(href|src|poster|data-src)=["']\/videos\//g, `$1="${prefix}videos/`);

  // 2. CSS inline background url(/images/...)
  fixed = fixed.replace(/url\(["']?\/images\//g, `url("${prefix}images/`);
  fixed = fixed.replace(/url\(["']?\/_next\//g, `url("${prefix}_next/`);
  fixed = fixed.replace(/url\(["']?\/videos\//g, `url("${prefix}videos/`);

  // 3. Icons & root meta
  fixed = fixed.replace(/(href|src)=["']\/(favicon\.ico|icon\.png|icon\.svg|og\.png|robots\.txt|sitemap\.xml)["']/g, `$1="${prefix}$2"`);

  // 4. Preload tags
  fixed = fixed.replace(/href=["']\/(_next|images|css|js|videos)\//g, `href="${prefix}$1/`);

  // 5. Route aliases (/mutual-funds, /blog, etc.)
  for (const [route, target] of Object.entries(ROUTE_ALIASES)) {
    const reg = new RegExp(`href=["']${route}(#[^"']*)?["']`, 'g');
    fixed = fixed.replace(reg, (match, hash) => `href="${prefix}${target}${hash || ''}"`);
  }

  // 6. Internal page navigation links
  for (const page of PAGE_NAMES) {
    const reg = new RegExp(`href=["']\\/${page}(#[^"']*)?["']`, 'g');
    fixed = fixed.replace(reg, (match, hash) => `href="${prefix}${page}.html${hash || ''}"`);
  }

  // 7. Home page links: href="/"
  fixed = fixed.replace(/href=["']\/["']/g, `href="${prefix}index.html"`);

  return fixed;
}

function createRedirectHtml(targetUrl) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <script>window.location.replace('${targetUrl}');</script>
</head>
<body>
  <p>Redirecting to <a href="${targetUrl}">${targetUrl}</a>...</p>
</body>
</html>`;
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

  // 2. Copy and transform scraped pages as root and nested HTML files
  if (fs.existsSync(PAGES_DIR)) {
    console.log('Transforming and copying pages from scraped/pages to dist/...');
    const pages = fs.readdirSync(PAGES_DIR);
    for (const page of pages) {
      if (page.endsWith('.html')) {
        const pageSrc = path.join(PAGES_DIR, page);
        const rawContent = fs.readFileSync(pageSrc, 'utf8');

        // Root level page (depth 0 -> ./ prefix)
        const rootContent = fixPathsForGhPages(rawContent, 0);
        const pageDest = path.join(DIST_DIR, page);
        fs.writeFileSync(pageDest, rootContent, 'utf8');

        // Also create clean URL directory (e.g., /about/index.html from about.html with depth 1 -> ../ prefix)
        if (page !== 'index.html' && page !== '404.html') {
          const pageName = page.replace('.html', '');
          const dirDest = path.join(DIST_DIR, pageName);
          if (!fs.existsSync(dirDest)) {
            fs.mkdirSync(dirDest, { recursive: true });
          }
          const nestedContent = fixPathsForGhPages(rawContent, 1);
          fs.writeFileSync(path.join(dirDest, 'index.html'), nestedContent, 'utf8');
        }
      }
    }
  }

  // 3. Create fallback alias routes (e.g. /mutual-funds, /blog) as redirect pages
  for (const [route, target] of Object.entries(ROUTE_ALIASES)) {
    const routeName = route.replace('/', '');
    const aliasDir = path.join(DIST_DIR, routeName);
    if (!fs.existsSync(aliasDir)) {
      fs.mkdirSync(aliasDir, { recursive: true });
    }
    fs.writeFileSync(path.join(aliasDir, 'index.html'), createRedirectHtml(`../${target}`), 'utf8');
    fs.writeFileSync(path.join(DIST_DIR, `${routeName}.html`), createRedirectHtml(`./${target}`), 'utf8');
  }

  // 4. Create 404.html (using transformed index.html)
  const indexSrc = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(indexSrc)) {
    fs.copyFileSync(indexSrc, path.join(DIST_DIR, '404.html'));
  }

  // 5. Create .nojekyll (CRITICAL for GitHub Pages to serve _next/ folder)
  fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '', 'utf8');

  console.log('✅ Static build complete with relative paths! Output directory: dist/');
}

build();
