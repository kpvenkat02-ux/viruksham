const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'scraped', 'pages');

const SEO_CONFIGS = {
  'index.html': {
    title: 'Viruksham Finmart | AMFI Registered Mutual Fund Distributor in Chennai (ARN 274361)',
    description: 'Goal-based mutual fund guidance, SIP planning, retirement & wealth solutions in Chennai & across India by K P Venkataramakrishnan (ARN 274361). Book a private consultation.',
    canonical: 'https://www.virukshamfin.com/',
    ogTitle: 'Viruksham Finmart | AMFI Registered Mutual Fund Distributor in Chennai',
    ogDescription: 'Goal-based mutual fund investments, disciplined SIP planning, and retirement guidance by K P Venkataramakrishnan (ARN 274361).',
    includeFaqSchema: true,
    faqs: [
      {
        q: 'What services does Viruksham Finmart provide?',
        a: 'Viruksham Finmart, led by AMFI-Registered Mutual Fund Distributor K P Venkataramakrishnan (ARN 274361), provides goal-based mutual fund guidance, Systematic Investment Plan (SIP) structuring, lumpsum investments, asset allocation, and retirement corpus planning in Chennai and across India.'
      },
      {
        q: 'How do I start a Systematic Investment Plan (SIP) in Chennai?',
        a: 'You can start an SIP by completing a one-time KYC verification with your PAN, Aadhaar, and bank details. We assist you in profiling your goals, selecting appropriate mutual fund schemes, and setting up automated monthly SIP debits.'
      },
      {
        q: 'What is the ARN registration of K P Venkataramakrishnan?',
        a: 'K P Venkataramakrishnan is registered with the Association of Mutual Funds in India (AMFI) under ARN No. 274361 and EUIN E353458, valid till June 2027.'
      },
      {
        q: 'Where is the Viruksham Finmart office located in Chennai?',
        a: 'Our office is located at 47, Unnamalai Ammal Street, T. Nagar, Chennai - 600 017, Tamil Nadu. You can also contact us by phone at +91 44 4770 5027 or email at kpvenkat02@gmail.com.'
      }
    ]
  },
  'about.html': {
    title: 'About K P Venkataramakrishnan | AMFI Registered Mutual Fund Distributor Chennai',
    description: 'Learn about K P Venkataramakrishnan (ARN 274361, EUIN E353458), founder of Viruksham Finmart. Helping families in Chennai invest with disciplined, jargon-free mutual fund plans.',
    canonical: 'https://www.virukshamfin.com/about.html',
    ogTitle: 'About K P Venkataramakrishnan | AMFI Registered Mutual Fund Distributor',
    ogDescription: 'The best plan is the one you can actually keep. Jargon-free mutual fund guidance by K P Venkataramakrishnan (ARN 274361).'
  },
  'services.html': {
    title: 'Mutual Fund Distribution & SIP Planning Services Chennai | Viruksham Finmart',
    description: 'Explore our mutual fund distribution services: Investor profiling, goal-based SIPs, lumpsum investments, tax-saving ELSS schemes, and portfolio reviews in Chennai.',
    canonical: 'https://www.virukshamfin.com/services.html',
    ogTitle: 'Mutual Fund & SIP Distribution Services in Chennai | Viruksham Finmart',
    ogDescription: 'Comprehensive investor onboarding, scheme selection, goal-driven SIPs, and disciplined investment strategies in Chennai.'
  },
  'tools.html': {
    title: 'Free SIP, Lumpsum & Financial Calculators India | Viruksham Finmart',
    description: 'Calculate your future investment value with our interactive SIP Calculator, Lumpsum Calculator, SWP Calculator, Goal Planner, Retirement, and Child Education calculators.',
    canonical: 'https://www.virukshamfin.com/tools.html',
    ogTitle: 'Free Mutual Fund SIP & Financial Calculators | Viruksham Finmart',
    ogDescription: 'Interactive tools to plan your wealth: SIP calculator, Retirement corpus planner, SWP, and Child Education calculators.'
  },
  'contact.html': {
    title: 'Contact Viruksham Finmart | Mutual Fund Distributor in T. Nagar, Chennai',
    description: 'Get in touch with K P Venkataramakrishnan (ARN 274361). Visit our T. Nagar Chennai office, call +91 44 4770 5027, or message us on WhatsApp for investment assistance.',
    canonical: 'https://www.virukshamfin.com/contact.html',
    ogTitle: 'Contact Viruksham Finmart | Financial Advisor in T. Nagar, Chennai',
    ogDescription: 'Connect with us to structure your investments. Office at 47, Unnamalai Ammal Street, T. Nagar, Chennai - 600 017.'
  },
  'media.html': {
    title: 'Market Insights, Articles & Financial Resources | Viruksham Finmart',
    description: 'Read the latest financial insights, market updates, mutual fund news, and investment guides from Viruksham Finmart Chennai.',
    canonical: 'https://www.virukshamfin.com/media.html',
    ogTitle: 'Market Insights & Financial Resources | Viruksham Finmart',
    ogDescription: 'Stay updated with market news, mutual fund commentary, and wealth-building tips from AMFI Registered Distributor K P Venkataramakrishnan.'
  },
  'news_lakshya-mutual-fund-launches-lakshya-overnight-fund.html': {
    title: 'Lakshya Mutual Fund Launches Overnight Fund | Viruksham Finmart Insights',
    description: 'Read about the newly launched Lakshya Overnight Fund, key features, asset allocation, and liquidity advantages for short-term parking of funds.',
    canonical: 'https://www.virukshamfin.com/news_lakshya-mutual-fund-launches-lakshya-overnight-fund.html',
    ogTitle: 'Lakshya Mutual Fund Launches Overnight Fund | Market News',
    ogDescription: 'Key features, investment objectives, and insights on the new Overnight Fund.'
  },
  'privacy.html': {
    title: 'Privacy Policy | Viruksham Finmart Chennai',
    description: 'Read the Privacy Policy of Viruksham Finmart regarding how your personal information is protected and managed.',
    canonical: 'https://www.virukshamfin.com/privacy.html'
  },
  'terms.html': {
    title: 'Terms of Use | Viruksham Finmart Chennai',
    description: 'Read the terms and conditions governing the use of the Viruksham Finmart website and financial tools.',
    canonical: 'https://www.virukshamfin.com/terms.html'
  },
  'disclaimer.html': {
    title: 'Statutory Disclaimer & AMFI Notice | Viruksham Finmart',
    description: 'Statutory disclosures, AMFI registration details (ARN 274361), and regulatory notices for mutual fund investments.',
    canonical: 'https://www.virukshamfin.com/disclaimer.html'
  },
  'disclosure.html': {
    title: 'Commission Disclosures | Viruksham Finmart',
    description: 'Regulatory commission disclosure rates and transparency details in accordance with SEBI and AMFI guidelines.',
    canonical: 'https://www.virukshamfin.com/disclosure.html'
  }
};

const MASTER_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://www.virukshamfin.com/#practice",
  "name": "Viruksham Finmart",
  "alternateName": "K P VENKATARAMAKRISHNAN Mutual Fund Distributor",
  "description": "AMFI-registered mutual fund distributor providing goal-based SIP guidance, lumpsum investments, and retirement planning in Chennai, Tamil Nadu and across India.",
  "url": "https://www.virukshamfin.com/",
  "image": "https://www.virukshamfin.com/images/viruksham-logo.png",
  "logo": "https://www.virukshamfin.com/images/viruksham-logo.png",
  "telephone": "+91 44 4770 5027",
  "email": "kpvenkat02@gmail.com",
  "priceRange": "₹₹",
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
    "jobTitle": "AMFI-Registered Mutual Fund Distributor",
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
    content = content.replace(/<title>[^<]*<\/title>/i, `<title>${cfg.title}</title>`);
  }

  // 3. Update Meta Description
  if (cfg.description) {
    content = content.replace(/<meta name="description" content="[^"]*"\/>/i, `<meta name="description" content="${cfg.description}"/>`);
  }

  // 4. Update Canonical
  if (cfg.canonical) {
    content = content.replace(/<link rel="canonical" href="[^"]*"\/>/i, `<link rel="canonical" href="${cfg.canonical}"/>`);
  }

  // 5. Update OpenGraph & Twitter tags
  if (cfg.ogTitle) {
    content = content.replace(/<meta property="og:title" content="[^"]*"\/>/i, `<meta property="og:title" content="${cfg.ogTitle}"/>`);
    content = content.replace(/<meta name="twitter:title" content="[^"]*"\/>/i, `<meta name="twitter:title" content="${cfg.ogTitle}"/>`);
  }
  if (cfg.ogDescription) {
    content = content.replace(/<meta property="og:description" content="[^"]*"\/>/i, `<meta property="og:description" content="${cfg.ogDescription}"/>`);
    content = content.replace(/<meta name="twitter:description" content="[^"]*"\/>/i, `<meta name="twitter:description" content="${cfg.ogDescription}"/>`);
  }

  // 6. Ensure Twitter site / creator is present
  if (!content.includes('name="twitter:site"')) {
    content = content.replace(/<\/head>/i, `<meta name="twitter:site" content="@kpvenkat02"/><meta name="twitter:creator" content="@kpvenkat02"/></head>`);
  }

  // 7. Inject FAQ schema on pages with FAQs
  if (cfg.includeFaqSchema && cfg.faqs) {
    const faqScript = `<script type="application/ld+json">${JSON.stringify(generateFaqSchema(cfg.faqs))}</script>`;
    if (!content.includes('"@type":"FAQPage"')) {
      content = content.replace(/<\/head>/i, `${faqScript}</head>`);
    }
  }

  // 8. Inject Master Organization Schema if missing
  if (!content.includes('"name":"Viruksham Finmart"')) {
    const orgScript = `<script type="application/ld+json">${JSON.stringify(MASTER_ORGANIZATION_SCHEMA)}</script>`;
    content = content.replace(/<\/head>/i, `${orgScript}</head>`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Optimized SEO for: ${fileName}`);
}

console.log('--- Starting Complete SEO Optimization across all pages ---');
const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
for (const f of files) {
  processPage(f);
}
console.log('🎉 SEO optimization successfully completed!');
