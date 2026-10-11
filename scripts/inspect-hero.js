const fs = require('fs');
const html = fs.readFileSync('scraped/pages/index.html', 'utf8');

const heroIdx = html.indexOf('id="hero"');
const formIdx = html.indexOf('id="heroConsultationForm"');
console.log('=== HERO HTML BEFORE FORM ===');
console.log(html.substring(heroIdx + 2500, formIdx));
