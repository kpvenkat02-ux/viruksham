const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'scraped', 'pages');
const allHtmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'kpvenkat.html');

const newDisclaimerHtml = `<!-- Statutory Regulatory Disclaimer Section -->
<section class="site-prefooter-disclaimer" style="background: #01244e; border-top: 1px solid rgba(255, 255, 255, 0.12); padding: 26px 0 22px 0;">
  <div class="ui__Shell-sc-ebfd46a2-3 KARJp" style="max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px; box-sizing: border-box;">
    <p style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; line-height: 1.68; color: rgba(255, 255, 255, 0.78); margin: 0 0 10px 0;">
      Viruksham Finmart Private Limited, CIN U64990TN2023PTC159888, AMFI-registered Mutual Fund Distributor, ARN-274361, valid till 17 Jun 2027, Registered office: Mogappair, Chennai 600037. Client office: 47, Unnamalai Ammal Street, T. Nagar, Chennai 600017.
    </p>
    <p style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; line-height: 1.68; color: rgba(255, 255, 255, 0.78); margin: 0;">
      Past performance is not indicative of future returns. Calculators on this site are for illustration and do not guarantee any return. <a href="/disclaimer" style="color: var(--color-gold, #D4AF37); text-decoration: underline; text-underline-offset: 3px; font-weight: 600;">Disclaimer</a>
    </p>
  </div>
</section>
`;

let count = 0;

allHtmlFiles.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace existing section if present
  const regex = /<!--\s*Statutory Regulatory Disclaimer Section\s*-->\s*<section class="site-prefooter-disclaimer"[\s\S]*?<\/section>/i;
  const genericRegex = /<section class="site-prefooter-disclaimer"[\s\S]*?<\/section>/i;

  if (regex.test(content)) {
    content = content.replace(regex, newDisclaimerHtml.trim());
  } else if (genericRegex.test(content)) {
    content = content.replace(genericRegex, newDisclaimerHtml.trim());
  } else {
    // Insert before footer or after </main>
    if (content.includes('<footer class="footer__Root-sc-9b980077-0')) {
      content = content.replace(
        '<footer class="footer__Root-sc-9b980077-0',
        newDisclaimerHtml + '<footer class="footer__Root-sc-9b980077-0'
      );
    } else if (content.includes('<footer')) {
      content = content.replace(/<footer/i, newDisclaimerHtml + '<footer');
    } else if (content.includes('</main>')) {
      content = content.replace('</main>', '</main>\n' + newDisclaimerHtml);
    }
  }

  // Update colophon line
  content = content.replace(
    /<p>©\s*(?:<!--\s*-->\s*)?2026(?:<!--\s*-->\s*)?(?:<!--\s*-->\s*)?K P VENKATARAMAKRISHNAN(?:<!--\s*-->\s*)?\.\s*(?:<!--\s*-->\s*)?ARN\s*274361(?:<!--\s*-->\s*)?·\s*EUIN(?:<!--\s*-->\s*)?(?:<!--\s*-->\s*)?E353458<\/p>/gi,
    '<p>© 2026 Viruksham Finmart Private Limited / K P VENKATARAMAKRISHNAN. ARN 274361 · EUIN E353458 · CIN U64990TN2023PTC159888</p>'
  );

  // Update disclaimer.html specifics if this is disclaimer.html
  if (f === 'disclaimer.html') {
    const distText = 'Distributor: K P VENKATARAMAKRISHNAN, K P VENKATARAMAKRISHNAN';
    if (content.includes(distText)) {
      content = content.replace(
        distText,
        'Corporate Entity: Viruksham Finmart Private Limited (CIN: U64990TN2023PTC159888)</span></li>' +
        '<li class="legal__Point-sc-1bbcd625-15 eTkblA"><span aria-hidden="true" class="legal__Bullet-sc-1bbcd625-16 itVrQs"></span><span class="legal__PointText-sc-1bbcd625-17 ljsyOz">Registered Office: Panneer Nagar, Mogappair, Chennai - 600037</span></li>' +
        '<li class="legal__Point-sc-1bbcd625-15 eTkblA"><span aria-hidden="true" class="legal__Bullet-sc-1bbcd625-16 itVrQs"></span><span class="legal__PointText-sc-1bbcd625-17 ljsyOz">Client Office: 47, Unnamalai Ammal Street, T. Nagar, Chennai - 600017</span></li>' +
        '<li class="legal__Point-sc-1bbcd625-15 eTkblA"><span aria-hidden="true" class="legal__Bullet-sc-1bbcd625-16 itVrQs"></span><span class="legal__PointText-sc-1bbcd625-17 ljsyOz">Key Person: K P VENKATARAMAKRISHNAN'
      );
      console.log('Updated disclaimer.html corporate points');
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  count++;
});

console.log(`Finished processing all ${count} pages.`);
