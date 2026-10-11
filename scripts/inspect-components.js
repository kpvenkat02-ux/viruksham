const fs = require('fs');

const html = fs.readFileSync('scraped/pages/index.html', 'utf8');

function inspectSnippet(startPattern, endPattern, label) {
  const startIdx = html.indexOf(startPattern);
  if (startIdx === -1) {
    console.log(`[${label}] Start not found: ${startPattern}`);
    return;
  }
  const endIdx = endPattern ? html.indexOf(endPattern, startIdx) : startIdx + 1500;
  console.log(`=== [${label}] ===`);
  console.log(html.substring(startIdx, endIdx !== -1 ? endIdx + 200 : startIdx + 1500));
}

inspectSnippet('id="latest-blogs"', '</section>', 'MEDIA / YOUTUBE SECTION');
inspectSnippet('id="about-preview"', '</section>', 'ABOUT / FOUNDER SECTION');
inspectSnippet('id="roadmap"', '</section>', 'ROADMAP / JOURNEY SECTION');
inspectSnippet('id="testimonials"', '</section>', 'TESTIMONIALS SECTION');
