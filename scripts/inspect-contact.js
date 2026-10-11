const fs = require('fs');
const html = fs.readFileSync('scraped/pages/contact.html', 'utf8');

const secIdx = html.indexOf('class="contact__Grid');
if (secIdx === -1) {
  const formIdx = html.indexOf('<form');
  console.log(html.substring(formIdx - 400, formIdx + 1200));
} else {
  console.log(html.substring(secIdx, secIdx + 1600));
}
