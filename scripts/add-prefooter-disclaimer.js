const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'scraped', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const disclaimerHtml = `<!-- Statutory Regulatory Disclaimer Section -->
<section class="site-prefooter-disclaimer" style="background: #FFFFFF; border-top: 1px solid #E2E8F0; padding: 40px 0 36px 0;">
  <div class="ui__Shell-sc-ebfd46a2-3 KARJp" style="max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px; box-sizing: border-box;">
    <div style="font-family: 'Inter', sans-serif; font-size: 13.5px; font-weight: 500; color: #64748B; margin-bottom: 14px;">Disclaimer</div>
    
    <div class="disclaimer-alert-banner" style="background: #FEF2F2; border: 1px solid #FECACA; border-radius: 10px; padding: 14px 20px; display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style="flex-shrink: 0;" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#DC2626"/>
        <line x1="12" y1="8" x2="12" y2="12" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="12" cy="16" r="1.2" fill="#FFFFFF"/>
      </svg>
      <div style="font-family: 'Inter', sans-serif; font-size: 14.5px; font-weight: 700; color: #012F6A; line-height: 1.4;">
        Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
      </div>
    </div>
    
    <div class="disclaimer-columns-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 36px;">
      <p style="font-family: 'Inter', sans-serif; font-size: 13.5px; line-height: 1.65; color: #64748B; margin: 0;">
        Mutual Fund investments are subject to market fluctuations and may involve risks including possible loss of principal. The value of investments may go up or down depending on market conditions and the performance of the underlying securities.
      </p>
      <p style="font-family: 'Inter', sans-serif; font-size: 13.5px; line-height: 1.65; color: #64748B; margin: 0;">
        There is no assurance or guarantee that any investment strategy or scheme will achieve its investment objective or generate any particular return.
      </p>
    </div>
  </div>
</section>
`;

let count = 0;
for (const f of files) {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if disclaimer is already added
  if (content.includes('site-prefooter-disclaimer')) {
    console.log(f, 'already has disclaimer section.');
    continue;
  }

  // Insert right before <footer class="footer__Root-sc-9b980077-0
  if (content.includes('<footer class="footer__Root-sc-9b980077-0')) {
    content = content.replace(
      '<footer class="footer__Root-sc-9b980077-0',
      disclaimerHtml + '<footer class="footer__Root-sc-9b980077-0'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
    console.log('Added disclaimer to', f);
  } else if (content.includes('<footer')) {
    content = content.replace(
      /<footer/i,
      disclaimerHtml + '<footer'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
    console.log('Added disclaimer to', f);
  }
}

console.log(`Successfully added disclaimer section to ${count} pages.`);
