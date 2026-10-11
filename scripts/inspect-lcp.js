const fs = require('fs');

const data = JSON.parse(fs.readFileSync('screenshots/lighthouse-after.json', 'utf8'));

console.log('LCP displayValue:', data.audits['largest-contentful-paint'].displayValue);
const lcpElem = data.audits['largest-contentful-paint-element'];
if (lcpElem && lcpElem.details && lcpElem.details.items) {
  console.log('LCP Items:', JSON.stringify(lcpElem.details.items, null, 2));
}

const renderBlocking = data.audits['render-blocking-resources'];
if (renderBlocking && renderBlocking.details) {
  console.log('Render blocking items:', renderBlocking.details.items);
}
