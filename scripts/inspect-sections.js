const fs = require('fs');

const html = fs.readFileSync('scraped/pages/index.html', 'utf8');

function showSection(idOrClass, length = 1500) {
  const idx = html.indexOf(idOrClass);
  console.log(`=== ${idOrClass} (index: ${idx}) ===`);
  if (idx !== -1) {
    console.log(html.substring(idx, idx + length));
  } else {
    console.log('Not found');
  }
}

console.log('--- Inspecting Sections ---');
showSection('id="hero"', 1800);
showSection('id="luxury-stat-counter"', 1200);
showSection('id="about-preview"', 1500);
showSection('id="latest-blogs"', 1500);
showSection('id="process"', 1500);
showSection('id="roadmap"', 1500);
showSection('id="testimonials"', 1200);
showSection('referral-section-clean', 1200);
showSection('lead-cta__Band', 1200);
showSection('<footer', 1500);
