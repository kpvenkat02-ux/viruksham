const fs = require('fs');
const html = fs.readFileSync('scraped/pages/index.html', 'utf8');

function showClasses(id) {
  const idx = html.indexOf(`id="${id}"`);
  if (idx === -1) {
    console.log(`id="${id}" not found`);
    return;
  }
  const end = html.indexOf('</section>', idx);
  const snippet = html.substring(idx, end);
  const classes = Array.from(new Set(snippet.match(/class="[^"]+"/g) || []));
  console.log(`Classes in #${id}:`, classes);
}

showClasses('about-preview');
showClasses('process');
showClasses('roadmap');
