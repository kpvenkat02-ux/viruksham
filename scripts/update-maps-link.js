const fs = require('fs');
const path = require('path');

const OLD_URL = 'https://maps.app.goo.gl/DkWdH7VXJ5ssZ18u6';
const NEW_URL = 'https://maps.app.goo.gl/ySUCmLV9JwxcFjDB7';

const pagesDir = path.join(__dirname, '..', 'scraped', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

let totalReplacements = 0;
let modifiedFiles = [];

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes(OLD_URL)) {
    const occurrences = (content.match(new RegExp(OLD_URL.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g')) || []).length;
    content = content.replaceAll(OLD_URL, NEW_URL);
    fs.writeFileSync(filePath, content, 'utf8');
    totalReplacements += occurrences;
    modifiedFiles.push({ file, occurrences });
  }
}

console.log(`Replaced ${totalReplacements} occurrences across ${modifiedFiles.length} files:`);
modifiedFiles.forEach(m => console.log(` - ${m.file}: ${m.occurrences} replacement(s)`));
