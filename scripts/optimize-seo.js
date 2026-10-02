const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'scraped', 'pages');

const DEFAULT_KEYWORDS = 'mutual fund distributor in chennai, investment advisor, mutual fund advisor, sip planning chennai, financial advisor t nagar, wealth management chennai, amfi registered distributor arn 274361, top mutual fund distributor chennai';

const SEO_CONFIGS = {
  'index.html': {
    title: 'Viruksham Finmart | AMFI Registered Mutual Fund Distributor in Chennai | Investment Advisor',
    description: 'Viruksham Finmart - Leading AMFI Registered Mutual Fund Distributor in Chennai (ARN 274361). Goal-based SIP planning, investment advisor assistance, and wealth management solutions.',
    keywords: 'mutual fund distributor in chennai, investment advisor, mutual fund advisor, financial advisor chennai, sip planning chennai, mutual fund agents in chennai, amfi registered distributor arn 274361, wealth management chennai, viruksham finmart',
    canonical: 'https://www.virukshamfin.com/',
    ogTitle: 'Viruksham Finmart | Mutual Fund Distributor in Chennai | Investment Advisor',
    ogDescription: 'Trusted AMFI Registered Mutual Fund Distributor & Advisor in Chennai (ARN 274361). Systematic SIP guidance, retirement planning & disciplined wealth growth.',
    includeFaqSchema: true,
    faqs: [
      {
        q: 'Who is the best Mutual Fund Distributor in Chennai?',
        a: 'Viruksham Finmart, led by AMFI-Registered Mutual Fund Distributor K P Venkataramakrishnan (ARN 274361, EUIN E353458), is a trusted mutual fund distributor and investment advisor based in T. Nagar, Chennai, offering personalised SIP planning, portfolio reviews, and goal-based wealth management.'
      },
      {
        q: 'What is the role of an AMFI Registered Mutual Fund Distributor?',
        a: 'An AMFI Registered Mutual Fund Distributor assists investors in assessing financial goals, selecting appropriate equity and debt mutual fund schemes, completing KYC documentation, executing seamless transactions, and offering ongoing review and rebalancing assistance.'
      },
      {
        q: 'How do I start a Systematic Investment Plan (SIP) in Chennai?',
        a: 'You can start an SIP with Viruksham Finmart by completing a fast one-time KYC verification with your PAN, Aadhaar, and bank account. We assist you in selecting the top-performing funds matching your time horizon and risk profile.'
      },
      {
        q: 'What is the ARN registration of K P Venkataramakrishnan?',
        a: 'K P Venkataramakrishnan is registered with the Association of Mutual Funds in India (AMFI) under ARN No. 274361 and EUIN E353458, valid till June 2027.'
      },
      {
        q: 'Where is the Viruksham Finmart office located in Chennai?',
        a: 'Our office is located at 47, Unnamalai Ammal Street, T. Nagar, Chennai - 600 017, Tamil Nadu. Phone: +91 44 4770 5027 | WhatsApp: +91 98840 27436 | Email: kpvenkat02@gmail.com.'
      }
    ]
  },
  'about.html': {
    title: 'About K P Venkataramakrishnan | Mutual Fund Distributor & Advisor in Chennai',
    description: 'Meet K P Venkataramakrishnan (ARN 274361), founder of Viruksham Finmart - leading Mutual Fund Distributor and Investment Advisor in Chennai providing disciplined financial guidance.',
    keywords: 'mutual fund distributor in chennai, investment advisor, mutual fund advisor, k p venkataramakrishnan, arn 274361, financial consultant t nagar chennai, amfi registered distributor',
    canonical: 'https://www.virukshamfin.com/about.html',
    ogTitle: 'About K P Venkataramakrishnan | Mutual Fund Distributor Chennai',
    ogDescription: 'Jargon-free, disciplined mutual fund & investment advisor guidance by K P Venkataramakrishnan (ARN 274361).'
  },
  'services.html': {
    title: 'Mutual Fund Distribution & Investment Advisor Services Chennai | Viruksham Finmart',
    description: 'Services by AMFI Mutual Fund Distributor & Investment Advisor in Chennai: Goal-based SIPs, lumpsum mutual fund investments, ELSS tax savings & retirement corpus planning.',
    keywords: 'mutual fund distributor in chennai, investment advisor, mutual fund advisor, mutual fund distribution services, sip consultant chennai, tax saving elss, retirement planning chennai, wealth management services',
    canonical: 'https://www.virukshamfin.com/services.html',
    ogTitle: 'Mutual Fund & Investment Advisor Services in Chennai | Viruksham Finmart',
    ogDescription: 'Comprehensive investor onboarding, scheme selection, goal-driven SIPs, and disciplined investment strategies in Chennai.'
  },
  'tools.html': {
    title: 'SIP Calculator & Investment Planning Tools | Mutual Fund Advisor Chennai',
    description: 'Calculate future wealth with our free SIP Calculator, Lumpsum Calculator, SWP Calculator, and Retirement Goal Planner. Built by Viruksham Finmart Mutual Fund Distributor Chennai.',
    keywords: 'sip calculator india, mutual fund distributor in chennai, investment advisor, mutual fund advisor, lumpsum calculator, swp calculator, retirement corpus calculator, child education planner',
    canonical: 'https://www.virukshamfin.com/tools.html',
    ogTitle: 'Free Mutual Fund SIP & Financial Calculators | Viruksham Finmart',
    ogDescription: 'Interactive tools to plan your wealth: SIP calculator, Retirement corpus planner, SWP, and Child Education calculators.'
  },
  'contact.html': {
    title: 'Contact Viruksham Finmart | Mutual Fund Distributor & Advisor in T. Nagar, Chennai',
    description: 'Contact AMFI Registered Mutual Fund Distributor & Investment Advisor K P Venkataramakrishnan (ARN 274361) at T. Nagar Chennai. Phone: +91 44 4770 5027.',
    keywords: 'mutual fund distributor in chennai, investment advisor, mutual fund advisor, viruksham finmart t nagar, financial advisor chennai contact, sip agent chennai, mutual fund office chennai',
    canonical: 'https://www.virukshamfin.com/contact.html',
    ogTitle: 'Contact Viruksham Finmart | Mutual Fund Advisor in T. Nagar, Chennai',
    ogDescription: 'Connect with us to structure your investments. Office at 47, Unnamalai Ammal Street, T. Nagar, Chennai - 600 017.'
  },
  'media.html': {
    title: 'Market Insights, Mutual Fund Articles & Guides | Viruksham Finmart Chennai',
    description: 'Expert mutual fund articles, market analysis, tax-saving tips, and SIP guides from Viruksham Finmart - Mutual Fund Distributor & Investment Advisor in Chennai.',
    keywords: 'mutual fund news, market updates, mutual fund distributor in chennai, investment advisor, mutual fund advisor, financial planning articles, sip guides india',
    canonical: 'https://www.virukshamfin.com/media.html',
    ogTitle: 'Market Insights & Financial Resources | Viruksham Finmart',
    ogDescription: 'Stay updated with market news, mutual fund commentary, and wealth-building tips from AMFI Registered Distributor K P Venkataramakrishnan.'
  },
  'article_sip-for-1-crore.html': {
    title: 'How Much SIP is Needed for ₹1 Crore in 15 Years? | Mutual Fund Advisor Guide',
    description: 'Calculate monthly SIP needed for ₹1 Crore in 15 years. Expert investment guide by AMFI Registered Mutual Fund Distributor in Chennai K P Venkataramakrishnan.',
    keywords: 'how much sip for 1 crore, sip calculator 1 crore in 15 years, mutual fund distributor in chennai, investment advisor, mutual fund advisor, step up sip, compounding wealth india',
    canonical: 'https://www.virukshamfin.com/article_sip-for-1-crore.html',
    ogTitle: 'How Much SIP is Needed for ₹1 Crore in 15 Years? | Viruksham Finmart',
    ogDescription: 'Step-by-step breakdown of SIP amounts, 12% CAGR projections, and step-up strategies to reach ₹1 Crore in 15 years.'
  },
  'article_elss-vs-ppf.html': {
    title: 'ELSS Mutual Funds vs PPF: Which is Better for Tax Saving? | Investment Advisor Chennai',
    description: 'Compare ELSS mutual funds vs PPF for Section 80C tax saving. Returns, 3-year lock-in vs 15 years, and tax implications explained by Mutual Fund Distributor Chennai.',
    keywords: 'elss vs ppf, tax saving mutual funds 2026, section 80c tax saving, mutual fund distributor in chennai, investment advisor, mutual fund advisor, best tax saver funds',
    canonical: 'https://www.virukshamfin.com/article_elss-vs-ppf.html',
    ogTitle: 'ELSS Mutual Funds vs PPF: Tax Saving Comparison | Viruksham Finmart',
    ogDescription: 'Detailed comparison of ELSS and PPF returns, lock-in, and wealth creation potential.'
  },
  'article_regular-vs-direct-mutual-funds.html': {
    title: 'Regular vs Direct Mutual Funds: Which is Right for You? | Mutual Fund Advisor Chennai',
    description: 'Understand the key differences between Regular and Direct Mutual Funds, distributor support, rebalancing, and behavioral coaching by Viruksham Finmart Chennai.',
    keywords: 'regular vs direct mutual funds, difference between direct and regular mutual fund, mutual fund distributor in chennai, investment advisor, mutual fund advisor, value of mutual fund distributor',
    canonical: 'https://www.virukshamfin.com/article_regular-vs-direct-mutual-funds.html',
    ogTitle: 'Regular vs Direct Mutual Funds: The Complete Guide | Viruksham Finmart',
    ogDescription: 'Why choosing between direct and regular mutual funds depends on your need for professional guidance and ongoing portfolio discipline.'
  },
  'news_lakshya-mutual-fund-launches-lakshya-overnight-fund.html': {
    title: 'Lakshya Mutual Fund Launches Overnight Fund | Viruksham Finmart Insights',
    description: 'Read about the newly launched Lakshya Overnight Fund, key features, asset allocation, and liquidity advantages for short-term parking of funds.',
    keywords: 'overnight mutual funds, lakshya mutual fund, mutual fund distributor in chennai, investment advisor, mutual fund advisor, emergency fund parking',
    canonical: 'https://www.virukshamfin.com/news_lakshya-mutual-fund-launches-lakshya-overnight-fund.html',
    ogTitle: 'Lakshya Mutual Fund Launches Overnight Fund | Market News',
    ogDescription: 'Key features, investment objectives, and insights on the new Overnight Fund.'
  },
  'privacy.html': {
    title: 'Privacy Policy | Viruksham Finmart Mutual Fund Distributor Chennai',
    description: 'Privacy Policy of Viruksham Finmart regarding investor data protection, confidentiality, and regulatory adherence.',
    keywords: 'privacy policy, viruksham finmart, mutual fund distributor in chennai, investment advisor',
    canonical: 'https://www.virukshamfin.com/privacy.html'
  },
  'terms.html': {
    title: 'Terms of Use | Viruksham Finmart Mutual Fund Distributor Chennai',
    description: 'Terms and conditions governing the use of the Viruksham Finmart website, SIP calculators, and advisory resources.',
    keywords: 'terms of use, viruksham finmart, mutual fund advisor, investment advisor chennai',
    canonical: 'https://www.virukshamfin.com/terms.html'
  },
  'disclaimer.html': {
    title: 'Statutory Disclaimer & AMFI Notice | Viruksham Finmart Chennai',
    description: 'Statutory disclosures, AMFI registration details (ARN 274361), and regulatory notices for mutual fund investments.',
    keywords: 'mutual fund disclaimer, arn 274361, amfi registered distributor, mutual fund distributor in chennai',
    canonical: 'https://www.virukshamfin.com/disclaimer.html'
  },
  'disclosure.html': {
    title: 'Commission Disclosures | Viruksham Finmart Mutual Fund Distributor Chennai',
    description: 'Regulatory commission disclosure rates and transparency details in accordance with SEBI and AMFI guidelines.',
    keywords: 'commission disclosure, mutual fund distributor in chennai, investment advisor, mutual fund advisor, arn 274361',
    canonical: 'https://www.virukshamfin.com/disclosure.html'
  }
};

const MASTER_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://www.virukshamfin.com/#practice",
  "name": "Viruksham Finmart",
  "alternateName": [
    "Viruksham Finmart Mutual Fund Distributor in Chennai",
    "K P VENKATARAMAKRISHNAN Mutual Fund Distributor",
    "Viruksham Investment Advisor",
    "Viruksham Mutual Fund Advisor"
  ],
  "description": "Leading AMFI-registered Mutual Fund Distributor and Investment Advisor in Chennai providing goal-based SIP guidance, lumpsum investments, tax-saving ELSS, and retirement planning across Tamil Nadu and India.",
  "url": "https://www.virukshamfin.com/",
  "image": "https://www.virukshamfin.com/images/viruksham-logo.png",
  "logo": "https://www.virukshamfin.com/images/viruksham-logo.png",
  "telephone": "+91 44 4770 5027",
  "email": "kpvenkat02@gmail.com",
  "priceRange": "₹₹",
  "serviceType": [
    "Mutual Fund Distributor in Chennai",
    "Investment Advisor",
    "Mutual Fund Advisor",
    "SIP Planning & Structuring",
    "Retirement Corpus Planning",
    "Tax Saving ELSS Investment",
    "Portfolio Review & Rebalancing"
  ],
  "knowsAbout": [
    "Mutual Fund Distributor in Chennai",
    "Investment Advisor",
    "Mutual Fund Advisor",
    "Systematic Investment Plan (SIP)",
    "Equity Mutual Funds",
    "Debt Mutual Funds",
    "ELSS Tax Saving",
    "Retirement Planning",
    "AMFI ARN 274361"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "47, Unnamalai Ammal Street, T. Nagar",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600017",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0418,
    "longitude": 80.2341
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Chennai" },
    { "@type": "State", "name": "Tamil Nadu" },
    { "@type": "Country", "name": "India" }
  ],
  "sameAs": [
    "https://x.com/kpvenkat02",
    "https://www.amfiindia.com"
  ],
  "identifier": [
    { "@type": "PropertyValue", "name": "AMFI ARN", "value": "ARN 274361" },
    { "@type": "PropertyValue", "name": "EUIN", "value": "E353458" }
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://www.virukshamfin.com/#advisor",
    "name": "K P VENKATARAMAKRISHNAN",
    "jobTitle": "AMFI-Registered Mutual Fund Distributor & Investment Advisor",
    "email": "kpvenkat02@gmail.com",
    "telephone": "+91 44 4770 5027",
    "worksFor": { "@id": "https://www.virukshamfin.com/#practice" },
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "name": "AMFI-Registered Mutual Fund Distributor (ARN 274361)" },
      { "@type": "EducationalOccupationalCredential", "name": "NISM Series V-A Certified" },
      { "@type": "EducationalOccupationalCredential", "name": "Graduate in Commerce, Patna University" }
    ]
  }
};

function generateFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };
}

function processPage(fileName) {
  const filePath = path.join(PAGES_DIR, fileName);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  const cfg = SEO_CONFIGS[fileName] || {};

  // 1. Replace legacy domain milan-prism.vercel.app with www.virukshamfin.com
  content = content.replace(/https:\/\/milan-prism\.vercel\.app/g, 'https://www.virukshamfin.com');

  // 2. Update Title
  if (cfg.title) {
    if (content.match(/<title>[^<]*<\/title>/i)) {
      content = content.replace(/<title>[^<]*<\/title>/i, `<title>${cfg.title}</title>`);
    } else {
      content = content.replace(/<head>/i, `<head>\n<title>${cfg.title}</title>`);
    }
  }

  // 3. Update Meta Description
  if (cfg.description) {
    if (content.match(/<meta name="description" content="[^"]*"\s*\/?>/i)) {
      content = content.replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${cfg.description}"/>`);
    } else {
      content = content.replace(/<title>[^<]*<\/title>/i, `$&<meta name="description" content="${cfg.description}"/>`);
    }
  }

  // 4. Update or Inject Meta Keywords
  const keywordsVal = cfg.keywords || DEFAULT_KEYWORDS;
  if (content.match(/<meta name="keywords" content="[^"]*"\s*\/?>/i)) {
    content = content.replace(/<meta name="keywords" content="[^"]*"\s*\/?>/i, `<meta name="keywords" content="${keywordsVal}"/>`);
  } else if (content.match(/<meta name="description" content="[^"]*"\s*\/?>/i)) {
    content = content.replace(/(<meta name="description" content="[^"]*"\s*\/?>)/i, (m, p1) => `${p1}<meta name="keywords" content="${keywordsVal}"/>`);
  } else if (content.match(/<title>[^<]*<\/title>/i)) {
    content = content.replace(/(<title>[^<]*<\/title>)/i, (m, p1) => `${p1}<meta name="keywords" content="${keywordsVal}"/>`);
  }

  // 5. Update Canonical
  if (cfg.canonical) {
    if (content.match(/<link rel="canonical" href="[^"]*"\s*\/?>/i)) {
      content = content.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${cfg.canonical}"/>`);
    } else {
      content = content.replace(/<meta name="keywords" content="[^"]*"\s*\/?>/i, `$&<link rel="canonical" href="${cfg.canonical}"/>`);
    }
  }

  // 6. Update OpenGraph & Twitter tags
  if (cfg.ogTitle) {
    if (content.match(/<meta property="og:title" content="[^"]*"\s*\/?>/i)) {
      content = content.replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${cfg.ogTitle}"/>`);
    }
    if (content.match(/<meta name="twitter:title" content="[^"]*"\s*\/?>/i)) {
      content = content.replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${cfg.ogTitle}"/>`);
    }
  }

  if (cfg.ogDescription) {
    if (content.match(/<meta property="og:description" content="[^"]*"\s*\/?>/i)) {
      content = content.replace(/<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${cfg.ogDescription}"/>`);
    }
    if (content.match(/<meta name="twitter:description" content="[^"]*"\s*\/?>/i)) {
      content = content.replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${cfg.ogDescription}"/>`);
    }
  }

  // 7. Ensure Twitter site / creator is present
  if (!content.includes('name="twitter:site"')) {
    content = content.replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/i, `$&<meta name="twitter:site" content="@kpvenkat02"/><meta name="twitter:creator" content="@kpvenkat02"/>`);
  }

  // 8. Inject FAQ schema on pages with FAQs
  if (cfg.includeFaqSchema && cfg.faqs) {
    const faqScript = `<script type="application/ld+json">${JSON.stringify(generateFaqSchema(cfg.faqs))}</script>`;
    if (content.includes('"@type": "FAQPage"') || content.includes('"@type":"FAQPage"')) {
      content = content.replace(/<script type="application\/ld\+json">[^<]*"@type":\s*"FAQPage"[^<]*<\/script>/gi, faqScript);
    } else {
      content = content.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `$&${faqScript}`);
    }
  }

  // 9. Update/Inject Master Organization Schema
  const orgScript = `<script type="application/ld+json">${JSON.stringify(MASTER_ORGANIZATION_SCHEMA)}</script>`;
  if (content.includes('"@id": "https://www.virukshamfin.com/#practice"') || content.includes('"@id":"https://www.virukshamfin.com/#practice"')) {
    content = content.replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@type":"FinancialService","@id":"https:\/\/www.virukshamfin.com\/#practice"[^<]*<\/script>/gi, orgScript);
  } else if (!content.includes('"name":"Viruksham Finmart"')) {
    content = content.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `$&${orgScript}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Fully Optimized SEO & Keywords for: ${fileName}`);
}

console.log('--- Starting Complete SEO & Keywords Optimization across all pages ---');
const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
for (const f of files) {
  processPage(f);
}
console.log('🎉 SEO & Keywords optimization successfully completed!');
