const fs = require('fs');
const html = fs.readFileSync('scraped/pages/tools.html', 'utf8');

const ids = html.match(/id="[^"]+"/g) || [];
console.log('IDs in tools.html:', ids);
const mainIdx = html.indexOf('<main');
if (mainIdx !== -1) {
  console.log('Main snippet:', html.substring(mainIdx, mainIdx + 2500));
}
