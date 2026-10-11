const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'scraped', 'pages');

const files = fs.readdirSync(PAGES_DIR);

for (const file of files) {
  if (!file.endsWith('.html')) continue;
  const filePath = path.join(PAGES_DIR, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Add preconnect for Google Fonts if not present
  if (!html.includes('rel="preconnect" href="https://fonts.googleapis.com"')) {
    html = html.replace('<head>', '<head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
  }

  // 2. Fix footer brand link accessible name
  html = html.replace(/<a class="footer__BrandLink-sc-9b980077-5([^>]*)href="\/"([^>]*)>/g, '<a class="footer__BrandLink-sc-9b980077-5$1href="/" aria-label="Viruksham Finmart Home"$2>');

  // 3. Fix select elements missing labels / aria-label
  html = html.replace(/<select name="incomeRange"([^>]*)>/g, '<select name="incomeRange" aria-label="Annual Income Range"$1>');
  html = html.replace(/<select name="netWorth"([^>]*)>/g, '<select name="netWorth" aria-label="Estimated Net Worth"$1>');
  html = html.replace(/<select name="horizon"([^>]*)>/g, '<select name="horizon" aria-label="Investment Horizon"$1>');

  // 4. Ensure video tags have preload="none" so mobile doesn't download video data
  html = html.replace(/<video(?![^>]*preload=)/g, '<video preload="none"');

  // 5. Ensure images below the fold have loading="lazy" and decoding="async"
  html = html.replace(/<img(?![^>]*loading=)(?![^>]*header__Mark)/g, '<img loading="lazy" decoding="async"');

  // 6. Fix roadmap card accessible names if mismatched
  html = html.replace(/role="button" aria-label="Step (\d+): [^"]*"/g, 'role="button"');

  fs.writeFileSync(filePath, html, 'utf8');
}

console.log('Optimized HTML pages for Accessibility & Performance.');
