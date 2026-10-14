const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'scraped', 'pages');

const M_ONLY_COMPONENTS_TEMPLATE = `
<!-- Mobile Drawer Backdrop & Sheet (m-only) -->
<div id="m-drawer-backdrop" class="m-only m-drawer-backdrop" aria-hidden="true"></div>
<div id="m-drawer-sheet" class="m-only m-drawer-sheet" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
  <div class="m-drawer-header">
    <a href="/" style="display:flex;align-items:center;">
      <img src="/images/viruksham-logo.png" alt="Viruksham" style="height:30px;width:auto;" />
    </a>
    <button type="button" class="m-drawer-close" aria-label="Close Navigation Menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>
  <div class="m-drawer-content">
    <ul class="m-drawer-nav-list">
      <li class="m-drawer-nav-item"><a class="m-drawer-link" href="/">Home</a></li>
      <li class="m-drawer-nav-item"><a class="m-drawer-link" href="/about">About</a></li>
      <li class="m-drawer-nav-item">
        <button type="button" class="m-drawer-accordion-btn" aria-expanded="false">
          <span>Services</span>
          <svg class="m-drawer-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <ul class="m-drawer-submenu">
          <li><a class="m-drawer-sublink" href="/services#mutual-funds">Mutual Funds</a></li>
          <li><a class="m-drawer-sublink" href="/services#fd-bonds">Fixed Deposits &amp; Bonds</a></li>
        </ul>
      </li>
      <li class="m-drawer-nav-item">
        <button type="button" class="m-drawer-accordion-btn" aria-expanded="false">
          <span>Calculators</span>
          <svg class="m-drawer-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <ul class="m-drawer-submenu">
          <li><a class="m-drawer-sublink" href="/tools#sip">SIP Calculator</a></li>
          <li><a class="m-drawer-sublink" href="/tools#lumpsum">Lumpsum Calculator</a></li>
          <li><a class="m-drawer-sublink" href="/tools#crorepati">Become A Crorepati</a></li>
          <li><a class="m-drawer-sublink" href="/tools#retirement">Retirement Calculator</a></li>
          <li><a class="m-drawer-sublink" href="/tools#stepup">SIP Step Up Calculator</a></li>
          <li><a class="m-drawer-sublink" href="/tools#targetsip">Target Amount SIP Calculator</a></li>
        </ul>
      </li>
      <li class="m-drawer-nav-item">
        <button type="button" class="m-drawer-accordion-btn" aria-expanded="false">
          <span>Resources</span>
          <svg class="m-drawer-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <ul class="m-drawer-submenu">
          <li><a class="m-drawer-sublink" href="/media">Media</a></li>
          <li><a class="m-drawer-sublink" href="/information">Information &amp; Updates</a></li>
        </ul>
      </li>
      <li class="m-drawer-nav-item"><a class="m-drawer-link" href="/contact">Contact</a></li>
    </ul>
  </div>
  <div class="m-drawer-footer">
    <a href="/contact" class="m-drawer-btn m-drawer-btn-primary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
      <span>Talk to us</span>
    </a>
    <div class="m-drawer-footer-row">
      <a href="tel:+914447705027" class="m-drawer-btn m-drawer-btn-secondary">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>Call</span>
      </a>
      <a href="https://wa.me/914447705027" target="_blank" rel="noopener noreferrer" class="m-drawer-btn m-drawer-btn-wa">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>
        <span>WhatsApp</span>
      </a>
    </div>
  </div>
</div>

<!-- Mobile Bottom Navigation Bar (m-only) -->
<nav id="m-bottom-nav" class="m-only m-bottom-nav" aria-label="Mobile Navigation Bar">
  <a href="/" class="m-nav-item active" aria-label="Home">
    <div class="m-nav-pill">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    </div>
    <span class="m-nav-label">Home</span>
  </a>
  <a href="/tools" class="m-nav-item" aria-label="Calculators">
    <div class="m-nav-pill">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
    </div>
    <span class="m-nav-label">Calculators</span>
  </a>
  <a href="/media" class="m-nav-item" aria-label="Media">
    <div class="m-nav-pill">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    </div>
    <span class="m-nav-label">Media</span>
  </a>
  <a href="https://wealthelite.in/client-login" target="_blank" rel="noopener noreferrer" class="m-nav-item" aria-label="Login">
    <div class="m-nav-pill">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
    </div>
    <span class="m-nav-label">Login</span>
  </a>
  <a href="/contact" class="m-nav-item" aria-label="Contact">
    <div class="m-nav-pill">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    </div>
    <span class="m-nav-label">Contact</span>
  </a>
</nav>


<!-- Mobile Sticky Consultation Bar (m-only) -->
<button type="button" id="m-sticky-cta" class="m-only m-sticky-cta" aria-label="Book Free Consultation">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  <span>Book Free Consultation</span>
</button>

<!-- Mobile 3-Step Consultation Bottom Sheet (m-only) -->
<div id="m-consultation-backdrop" class="m-only m-sheet-backdrop" aria-hidden="true"></div>
<div id="m-consultation-sheet" class="m-only m-sheet" role="dialog" aria-modal="true" aria-label="Consultation Booking Flow">
  <div class="m-sheet-handle"></div>
  <div class="m-sheet-header">
    <h3 class="m-sheet-title">Request a Private Consultation</h3>
    <p class="m-sheet-subtitle">Connect directly with K P Venkat, AMFI Registered Distributor</p>
    <button type="button" class="m-sheet-close" aria-label="Close consultation modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>
  <div class="m-step-progress-wrap">
    <div class="m-step-progress-labels">
      <span>Progress</span>
      <span>Step 1 of 3</span>
    </div>
    <div class="m-step-progress-track">
      <div class="m-step-progress-bar" style="width: 33%;"></div>
    </div>
  </div>
  <div class="m-sheet-body">
    <!-- Step 1: Income Range -->
    <div class="m-step-content active" data-step="1">
      <h4 class="m-step-question">What is your annual income range?</h4>
      <div class="m-chips-grid" data-field="incomeRange">
        <button type="button" class="m-chip" data-value="&lt; ₹10 Lakhs">&lt; ₹10 Lakhs</button>
        <button type="button" class="m-chip" data-value="₹10L - ₹25 Lakhs">₹10L - ₹25 Lakhs</button>
        <button type="button" class="m-chip" data-value="₹25L - ₹50 Lakhs">₹25L - ₹50 Lakhs</button>
        <button type="button" class="m-chip" data-value="₹50L - ₹1 Crore">₹50L - ₹1 Crore</button>
        <button type="button" class="m-chip" data-value="Above ₹1 Crore">Above ₹1 Crore</button>
      </div>
      <div class="m-step-actions">
        <button type="button" class="m-step-btn-next">Next &rarr;</button>
      </div>
    </div>

    <!-- Step 2: Net Worth -->
    <div class="m-step-content" data-step="2">
      <h4 class="m-step-question">What is your estimated net worth?</h4>
      <div class="m-chips-grid" data-field="netWorth">
        <button type="button" class="m-chip" data-value="&lt; ₹25 Lakhs">&lt; ₹25 Lakhs</button>
        <button type="button" class="m-chip" data-value="₹25L - ₹50 Lakhs">₹25L - ₹50 Lakhs</button>
        <button type="button" class="m-chip" data-value="₹50L - ₹1 Crore">₹50L - ₹1 Crore</button>
        <button type="button" class="m-chip" data-value="₹1 Cr - ₹5 Crores">₹1 Cr - ₹5 Crores</button>
        <button type="button" class="m-chip" data-value="₹5 Cr - ₹10 Crores">₹5 Cr - ₹10 Crores</button>
        <button type="button" class="m-chip" data-value="Above ₹10 Crores">Above ₹10 Crores</button>
      </div>
      <div class="m-step-actions">
        <button type="button" class="m-step-btn-prev">&larr; Back</button>
        <button type="button" class="m-step-btn-next">Next &rarr;</button>
      </div>
    </div>

    <!-- Step 3: Investment Horizon & Contact Info -->
    <div class="m-step-content" data-step="3">
      <h4 class="m-step-question">What is your investment horizon?</h4>
      <div class="m-chips-grid" data-field="horizon">
        <button type="button" class="m-chip" data-value="Short Term (&lt; 3 Years)">Short Term (&lt; 3 Years)</button>
        <button type="button" class="m-chip" data-value="Medium Term (3 - 7 Years)">Medium Term (3 - 7 Years)</button>
        <button type="button" class="m-chip" data-value="Long Term (7 - 15 Years)">Long Term (7 - 15 Years)</button>
        <button type="button" class="m-chip" data-value="Generational Wealth (15+ Years)">Generational Wealth (15+ Years)</button>
      </div>

      <div style="margin-top: 18px; border-top: 1px solid var(--m-color-line-soft); padding-top: 14px;">
        <div class="m-input-group">
          <label class="m-input-label" for="m-consult-name">Full Name *</label>
          <input type="text" id="m-consult-name" class="m-sheet-input" placeholder="Your Name" required autocomplete="name" />
        </div>
        <div class="m-input-group">
          <label class="m-input-label" for="m-consult-phone">Mobile Number *</label>
          <div class="m-phone-input-row">
            <span class="m-phone-prefix">+91</span>
            <input type="tel" id="m-consult-phone" class="m-sheet-input" placeholder="10-digit number" inputmode="numeric" required autocomplete="tel" />
          </div>
        </div>
        <div class="m-input-group">
          <label class="m-input-label" for="m-consult-email">Email Address (Optional)</label>
          <input type="email" id="m-consult-email" class="m-sheet-input" placeholder="name@domain.com" autocomplete="email" />
        </div>
      </div>

      <div class="m-step-actions">
        <button type="button" class="m-step-btn-prev">&larr; Back</button>
        <button type="button" class="m-step-btn-submit">
          <span>Book Free Consultation</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </button>
      </div>

      <div class="m-sheet-status" style="display:none;"></div>

      <div class="m-secure-lock">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span>Secure &amp; Confidential | AMFI ARN 274361</span>
      </div>
    </div>
  </div>
</div>

<!-- Mobile YouTube Video Player Sheet (m-only) -->
<div id="m-video-backdrop" class="m-only m-sheet-backdrop" aria-hidden="true"></div>
<div id="m-video-sheet" class="m-only m-video-sheet" role="dialog" aria-modal="true" aria-label="Video Player">
  <div class="m-video-sheet-header">
    <h4 class="m-video-sheet-title">Video Player</h4>
    <button type="button" class="m-video-sheet-close" aria-label="Close video player">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>
  <div class="m-video-embed-container"></div>
</div>
`;

function processHtmlFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Ensure <link rel="stylesheet" href="/css/m-only.css"/> is present
  if (!html.includes('/css/m-only.css')) {
    html = html.replace('</head>', '<link rel="stylesheet" href="/css/m-only.css"/></head>');
  }

  // 2. Ensure <link rel="stylesheet" href="/css/mobile.css" media="(max-width: 767px)"/> is loaded LAST in head
  if (!html.includes('/css/mobile.css')) {
    html = html.replace('</head>', '<link rel="stylesheet" href="/css/mobile.css" media="(max-width: 767px)"/></head>');
  }

  // 3. Ensure <script src="/js/mobile.js" defer></script> is present before </body>
  if (!html.includes('/js/mobile.js')) {
    html = html.replace('</body>', '<script src="/js/mobile.js" defer></script></body>');
  }

  // 4. Ensure m-only components are injected before </body>
  if (!html.includes('id="m-bottom-nav"')) {
    html = html.replace('</body>', `${M_ONLY_COMPONENTS_TEMPLATE}\n</body>`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

console.log('Applying mobile redesign links and components to scraped/pages/*.html...');
const files = fs.readdirSync(PAGES_DIR);
for (const file of files) {
  if (file.endsWith('.html')) {
    processHtmlFile(path.join(PAGES_DIR, file));
    console.log(`Updated ${file}`);
  }
}
console.log('Done!');
