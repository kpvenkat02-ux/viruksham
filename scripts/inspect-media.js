const fs = require('fs');
const html = fs.readFileSync('scraped/pages/index.html', 'utf8');

const startIdx = html.indexOf('id="latest-blogs"');
const endIdx = html.indexOf('</section>', startIdx);
console.log('=== LATEST-BLOGS HTML ===');
console.log(html.substring(startIdx, endIdx));
