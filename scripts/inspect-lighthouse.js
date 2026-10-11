const fs = require('fs');

const data = JSON.parse(fs.readFileSync('screenshots/lighthouse-after.json', 'utf8'));

console.log('=== ACCESSIBILITY AUDITS < 1 ===');
for (const [id, audit] of Object.entries(data.audits)) {
  if (audit.score !== null && audit.score < 1 && data.categories.accessibility.auditRefs.some(a => a.id === id)) {
    console.log(`- ${id} (${audit.score}): ${audit.title}`);
    if (audit.details && audit.details.items) {
      console.log('  Items:', audit.details.items.slice(0, 3).map(i => i.node ? i.node.snippet : i));
    }
  }
}

console.log('\n=== LCP AUDIT ===');
const lcp = data.audits['largest-contentful-paint-element'];
if (lcp && lcp.details && lcp.details.items) {
  console.log('LCP Element:', lcp.details.items[0]);
}

console.log('\n=== OPPORTUNITIES ===');
for (const [id, audit] of Object.entries(data.audits)) {
  if (audit.details && audit.details.type === 'opportunity' && audit.details.overallSavingsMs > 200) {
    console.log(`- ${id}: ${audit.title} (Savings: ${audit.details.overallSavingsMs}ms)`);
  }
}
