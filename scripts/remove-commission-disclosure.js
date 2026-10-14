const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'scraped', 'pages');

const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));

let modifiedCount = 0;

files.forEach(filename => {
  const filePath = path.join(PAGES_DIR, filename);

  if (filename === 'disclosure.html') {
    // Replace disclosure.html entirely with client-side redirect to /disclaimer
    const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Redirecting to Disclaimer | Viruksham Finmart</title>
  <meta http-equiv="refresh" content="0; url=/disclaimer">
  <link rel="canonical" href="https://virukshamfin.com/disclaimer.html">
  <script>
    window.location.replace('/disclaimer');
  </script>
</head>
<body style="font-family: sans-serif; padding: 40px; text-align: center;">
  <p>Redirecting to <a href="/disclaimer">Disclaimer</a>...</p>
</body>
</html>
`;
    fs.writeFileSync(filePath, redirectHtml, 'utf8');
    console.log(`Rewrote disclosure.html to redirect to /disclaimer`);
    modifiedCount++;
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  let originalHtml = html;

  // 1. Remove footer link: <a class="footer__LegalLink-sc-9b980077-29 kjDWew" href="/disclosure">Commission Disclosure</a>
  // Handle both inline and formatted across multiple lines
  html = html.replace(/\s*<a\s+class="[^"]*footer__LegalLink[^"]*"\s+href="\/disclosure">\s*Commission Disclosure\s*<\/a>/gi, '');
  html = html.replace(/\s*<a\s+href="\/disclosure"\s+class="[^"]*footer__LegalLink[^"]*">\s*Commission Disclosure\s*<\/a>/gi, '');

  // 2. Remove legal rail link: <li><a class="legal__RailItem-sc-1bbcd625-7 bfGEvm" href="/disclosure">Commission Disclosure</a></li>
  html = html.replace(/\s*<li>\s*<a\s+class="[^"]*legal__RailItem[^"]*"\s+href="\/disclosure">\s*Commission Disclosure\s*<\/a>\s*<\/li>/gi, '');
  html = html.replace(/\s*<li>\s*<a\s+href="\/disclosure"\s+class="[^"]*legal__RailItem[^"]*">\s*Commission Disclosure\s*<\/a>\s*<\/li>/gi, '');

  // 3. Prefooter disclaimer: replace Disclosures (/disclosure) with Disclaimer (/disclaimer)
  html = html.replace(
    /<a\s+href="\/disclosure"\s+style="([^"]*)">\s*Disclosures\s*<\/a>/gi,
    '<a href="/disclaimer" style="$1">Disclaimer</a>'
  );
  // Also any remaining href="/disclosure"
  html = html.replace(/href="\/disclosure"/g, 'href="/disclaimer"');

  if (html !== originalHtml) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Cleaned Commission Disclosure references from ${filename}`);
    modifiedCount++;
  }
});

console.log(`Completed: updated ${modifiedCount} files.`);
