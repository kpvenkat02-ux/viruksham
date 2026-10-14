const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'scraped', 'pages', 'index.html');
let content = fs.readFileSync(targetPath, 'utf8');

const searchComment = '<!-- Video Section Directly After Dark Blue CTA Section -->';
const hasComment = content.includes(searchComment);
console.log('Has comment:', hasComment);

if (hasComment) {
  const startIdx = content.indexOf(searchComment);
  const endMarker = '<section id="contact"';
  const endIdx = content.indexOf(endMarker, startIdx);
  if (endIdx !== -1) {
    const toRemove = content.slice(startIdx, endIdx);
    console.log('Found block to remove:\n', toRemove);
    content = content.slice(0, startIdx) + content.slice(endIdx);
    fs.writeFileSync(targetPath, content, 'utf8');
    console.log('Successfully removed video section from index.html');
  } else {
    console.error('Error: End marker <section id="contact" not found after comment');
    process.exit(1);
  }
} else {
  console.log('Notice: Video section comment was not found in index.html');
}
