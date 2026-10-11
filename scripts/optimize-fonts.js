const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'scraped', 'pages');

const FONT_LINK = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" media="print" onload="this.media=\'all\'"/><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"/></noscript>';

const files = fs.readdirSync(PAGES_DIR);

for (const file of files) {
  if (!file.endsWith('.html')) continue;
  const filePath = path.join(PAGES_DIR, file);
  let html = fs.readFileSync(filePath, 'utf8');

  if (!html.includes('family=Manrope')) {
    html = html.replace('<head>', `<head>${FONT_LINK}`);
    fs.writeFileSync(filePath, html, 'utf8');
  }
}

console.log('Added high-performance Google Fonts parallel loader to all pages.');
