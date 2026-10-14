const fs = require('fs');

const mobileCss = fs.readFileSync('public/css/mobile.css', 'utf8');
const navbarCss = fs.readFileSync('public/css/navbar.css', 'utf8');
const mOnlyCss = fs.readFileSync('public/css/m-only.css', 'utf8');
const mobileJs = fs.readFileSync('public/js/mobile.js', 'utf8');

const checks = [
  { name: 'm-only scoped to desktop', pass: mOnlyCss.includes('@media (min-width: 768px)') },
  { name: 'navbar.css hides Talk to us on mobile', pass: navbarCss.includes('@media (max-width: 767px)') && navbarCss.includes('header .ctjA-Da') },
  { name: 'mobile.css logo flush left', pass: mobileCss.includes('header .header__Brand-sc-347dc4f8-2') && mobileCss.includes('margin-left: 0 !important;') },
  { name: 'mobile.css Client Login right corner', pass: mobileCss.includes('.m-header-login-pill') && mobileCss.includes('order: 3 !important;') },
  { name: 'mobile.css Talk to us hidden in header', pass: mobileCss.includes('header a[href*="contact"]') && mobileCss.includes('display: none !important;') },
  { name: 'mobile.css bottom nav permanent visible', pass: mobileCss.includes('.m-bottom-nav') && mobileCss.includes('display: flex !important;') },
  { name: 'mobile.css drawer sheet active transforms', pass: mobileCss.includes('.m-drawer-sheet.active') && mobileCss.includes('transform: translateX(0) !important;') },
  { name: 'mobile.js keeps bottomNav visible', pass: mobileJs.includes("bottomNav.classList.remove('nav-hidden');") && !mobileJs.includes("bottomNav.classList.add('nav-hidden');") }
];

console.log('--- Verification Report ---');
checks.forEach(c => console.log((c.pass ? '✅ PASS: ' : '❌ FAIL: ') + c.name));
const allPassed = checks.every(c => c.pass);
console.log('\nAll Checks Passed:', allPassed);
process.exit(allPassed ? 0 : 1);
