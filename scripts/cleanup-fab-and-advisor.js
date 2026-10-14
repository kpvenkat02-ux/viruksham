const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'scraped', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const fabRegex = /\s*<!-- Mobile Floating WhatsApp FAB \(m-only\) -->\s*<a id="m-whatsapp-fab"[\s\S]*?<\/a>/g;

let count = 0;
for (const f of files) {
  const filePath = path.join(dir, f);
  let c = fs.readFileSync(filePath, 'utf8');
  if (c.includes('m-whatsapp-fab')) {
    c = c.replace(fabRegex, '');
    c = c.replace(/<a id="m-whatsapp-fab"[\s\S]*?<\/a>\s*/g, '');
    fs.writeFileSync(filePath, c, 'utf8');
    count++;
  }
}
console.log('Stripped m-whatsapp-fab from', count, 'files.');

// Update index.html hero advisor
const indexPath = path.join(dir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

indexContent = indexContent.replace(
  '<div class="hero-advisor-name">K P VENKATARAMAKRISHNAN</div>',
  '<div class="hero-advisor-name">K&nbsp;P&nbsp;VENKATARAMAKRISHNAN</div>'
);

// Add white-space: nowrap to .hero-advisor-name CSS
indexContent = indexContent.replace(
  /\.hero-advisor-name\s*\{([^}]*)\}/g,
  (match, p1) => {
    if (!p1.includes('white-space')) {
      return `.hero-advisor-name {${p1}  white-space: nowrap;\n    }`;
    }
    return match;
  }
);

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Updated index.html hero advisor block.');
