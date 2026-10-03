const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

function handler(req, res) {
  let urlPath = (req.url || '/').split('?')[0].split('#')[0];
  if (urlPath === '' || urlPath === '/') {
    urlPath = '/index.html';
  }

  // Potential file locations
  const candidates = [
    path.join(__dirname, 'dist', urlPath),
    path.join(__dirname, 'dist', `${urlPath}.html`),
    path.join(__dirname, 'dist', urlPath, 'index.html'),
    path.join(__dirname, 'public', urlPath),
    path.join(__dirname, 'scraped', 'pages', urlPath),
    path.join(__dirname, 'scraped', 'pages', `${urlPath}.html`),
    path.join(__dirname, urlPath)
  ];

  for (const candidate of candidates) {
    try {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        const ext = path.extname(candidate).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': ext === '.html' ? 'public, max-age=0, must-revalidate' : 'public, max-age=31536000, immutable'
        });
        return fs.createReadStream(candidate).pipe(res);
      }
    } catch (e) {
      // ignore and try next
    }
  }

  // 404 Fallback
  const fallback404 = path.join(__dirname, 'dist', '404.html');
  if (fs.existsSync(fallback404)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return fs.createReadStream(fallback404).pipe(res);
  }

  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>404 Not Found</h1><p><a href="/">Return Home</a></p>');
}

// Export for Vercel Serverless Function / Node.js preset
module.exports = handler;

// Standalone runner for local node execution
if (require.main === module) {
  const http = require('http');
  const PORT = process.env.PORT || 3000;
  http.createServer(handler).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
