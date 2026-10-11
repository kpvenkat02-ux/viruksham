const fs = require('fs');
const html = fs.readFileSync('scraped/pages/index.html', 'utf8');

const bodyIdx = html.indexOf('<body');
const headerIdx = html.indexOf('<header', bodyIdx);
const mainIdx = html.indexOf('<main', bodyIdx);
console.log('HTML header in body:');
console.log(html.substring(headerIdx, mainIdx));
