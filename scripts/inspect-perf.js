const fs = require('fs');

const data = JSON.parse(fs.readFileSync('screenshots/lighthouse-after.json', 'utf8'));

console.log('=== PERFORMANCE AUDITS ===');
for (const [id, audit] of Object.entries(data.audits)) {
  if (audit.score !== null && audit.score < 0.9 && data.categories.performance.auditRefs.some(a => a.id === id)) {
    console.log(`- ${id} (${audit.score}): ${audit.title} -> ${audit.displayValue || ''}`);
  }
}
