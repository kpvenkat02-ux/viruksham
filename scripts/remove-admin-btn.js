const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'scraped', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

console.log('--- Removing Admin Login buttons ---');

const re = /\s*<!--\s*Footer Admin Trigger Button\s*-->\s*<a\s+[^>]*>[\s\S]*?Admin Login[\s\S]*?<\/a>|\s*<a\s+[^>]*href=["']\/information#admin["'][^>]*>[\s\S]*?Admin Login[\s\S]*?<\/a>/gi;

let totalRemoved = 0;
files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  if (re.test(content)) {
    content = content.replace(re, '');
    fs.writeFileSync(filePath, content, 'utf8');
    totalRemoved++;
    console.log(`✅ Removed button from ${f}`);
  }
});

console.log(`Total files updated: ${totalRemoved}`);

// Also create scraped/pages/kpvenkat.html
const kpvenkatHtmlPath = path.join(dir, 'kpvenkat.html');
const kpvenkatContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Admin Portal | Viruksham Finmart</title>
  <meta name="robots" content="noindex, nofollow">
  <meta http-equiv="refresh" content="0; url=/information#admin">
  <script>
    window.location.replace('/information#admin');
  </script>
</head>
<body style="margin:0; background:#0c0d0e; color:#d4af37; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display:flex; align-items:center; justify-content:center; height:100vh;">
  <p style="font-size:16px; letter-spacing:0.5px;">Redirecting to Admin Portal...</p>
</body>
</html>
`;
fs.writeFileSync(kpvenkatHtmlPath, kpvenkatContent, 'utf8');
console.log('✅ Created scraped/pages/kpvenkat.html');
