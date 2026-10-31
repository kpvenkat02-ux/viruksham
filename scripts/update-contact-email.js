const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'scraped', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updatedCount = 0;

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 1. Legal pages specific text
  if (f === 'privacy.html') {
    content = content.replace('Questions about anything below can go to kpvenkat02@gmail.com.', 'Questions about anything below can go to padma@virukshamfin.com.');
    content = content.replace('Write to kpvenkat02@gmail.com and we will act on it.', 'Write to padma@virukshamfin.com and we will act on it.');
    content = content.replace('contact K P VENKATARAMAKRISHNAN at kpvenkat02@gmail.com or +91 44 4770 5027.', 'contact K P VENKATARAMAKRISHNAN at padma@virukshamfin.com or +91 44 4770 5027.');
  } else if (f === 'terms.html') {
    content = content.replace('Questions about these terms can go to kpvenkat02@gmail.com.', 'Questions about these terms can go to padma@virukshamfin.com.');
  } else if (f === 'disclaimer.html') {
    content = content.replace('If you have a complaint, please write to K P VENKATARAMAKRISHNAN at kpvenkat02@gmail.com or call +91 44 4770 5027.', 'If you have a complaint, please write to K P VENKATARAMAKRISHNAN at padma@virukshamfin.com or call +91 44 4770 5027.');
  }

  // 2. Footer Email row
  // Matches: <a href="mailto:kpvenkat02@gmail.com" class="...footer__EmailRow...">...<span>kpvenkat02@gmail.com</span>
  content = content.replace(/href="mailto:kpvenkat02@gmail\.com"(\s+class="[^"]*footer__EmailRow[^"]*")/g, 'href="mailto:padma@virukshamfin.com"$1');
  content = content.replace(/(class="[^"]*footer__EmailRow[^"]*"[^>]*>[\s\S]*?<span>)kpvenkat02@gmail\.com(<\/span>)/g, '$1padma@virukshamfin.com$2');

  // 3. Footer grievance line
  // Grievance redressal: ... <a href="mailto:kpvenkat02@gmail.com">kpvenkat02@gmail.com</a>
  content = content.replace(/(Grievance redressal:[\s\S]*?<a\s+href=")mailto:kpvenkat02@gmail\.com(">kpvenkat02@gmail\.com<\/a>)/g, '$1mailto:padma@virukshamfin.com$2');
  content = content.replace(/(Grievance redressal:[\s\S]*?<a\s+href="mailto:padma@virukshamfin\.com">)kpvenkat02@gmail\.com(<\/a>)/g, '$1padma@virukshamfin.com$2');
  // 4. Person schema in head
  content = content.replace(/(plain language and without the jargon\.",\s*"email":\s*")kpvenkat02@gmail\.com(")/g, '$1padma@virukshamfin.com$2');
  if (content !== original) {
    updatedCount++;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${f}`);
  }
});

console.log(`Total files updated: ${updatedCount}`);
