const fs = require('fs');
const path = require('path');

// 1. Update index.html
const indexPath = path.join(__dirname, '../scraped/pages/index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Remove .testimonials-controls CSS
const cssRegex = /\n\s*\.testimonials-controls\s*\{[\s\S]*?@keyframes testiPulse\s*\{[\s\S]*?\}\s*\}/;
if (cssRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(cssRegex, '');
  console.log('Removed testimonials-controls CSS from index.html');
}

// Remove .testimonials-controls HTML block
const htmlRegex = /<!-- Live 2-second Auto-scroll Controls -->\s*<div class="testimonials-controls"[\s\S]*?<\/div>\s*<\/div>/;
if (htmlRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(htmlRegex, '</div>');
  console.log('Removed testimonials-controls HTML from index.html');
}

fs.writeFileSync(indexPath, indexHtml, 'utf8');

// 2. Remove floating-contact.css and floating-contact.js tags across all HTML files in scraped/pages
const pagesDir = path.join(__dirname, '../scraped/pages');
const htmlFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  if (content.includes('floating-contact.css')) {
    content = content.replace(/\s*<link[^>]*floating-contact\.css[^>]*>/gi, '');
    modified = true;
  }
  if (content.includes('floating-contact.js')) {
    content = content.replace(/\s*<script[^>]*floating-contact\.js[^>]*><\/script>/gi, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned floating contact tags from ${file}`);
  }
});

console.log('All removals completed successfully!');
