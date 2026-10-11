const fs = require('fs');
const filePath = process.argv[2] || 'screenshots/lighthouse-before.json';
if (fs.existsSync(filePath)) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for (const [k, v] of Object.entries(data.categories)) {
    console.log(`${v.title}: ${Math.round(v.score * 100)}`);
  }
  if (data.audits) {
    const lcp = data.audits['largest-contentful-paint'];
    const cls = data.audits['cumulative-layout-shift'];
    const tbt = data.audits['total-blocking-time'];
    console.log(`LCP: ${lcp ? lcp.displayValue : 'N/A'}`);
    console.log(`CLS: ${cls ? cls.displayValue : 'N/A'}`);
    console.log(`TBT: ${tbt ? tbt.displayValue : 'N/A'}`);
  }
} else {
  console.log('File not found:', filePath);
}
