const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'scraped', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const targetAttr = 'title="Twitter @kpvenkat02" style="display:inline-flex; align-items:center; gap:7px; font-size:13px; color:#012F6A; text-decoration:none; padding:6px 14px; background:#ffffff; border-radius:999px; font-weight:600; box-shadow:0 2px 8px rgba(0,0,0,0.15);"';

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace any footer Twitter link
  content = content.replace(
    /<a\s+href="https:\/\/x\.com\/kpvenkat02"\s+target="_blank"\s+rel="noreferrer"\s+title="Twitter @kpvenkat02"[\s\S]*?>/g,
    `<a href="https://x.com/kpvenkat02" target="_blank" rel="noreferrer" ${targetAttr}>`
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log('Updated:', file);
  }
}

console.log('Total files updated:', updatedCount);
