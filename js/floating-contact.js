/**
 * Floating Contact Widget & Mobile Dock
 * Viruksham Wealth Management
 */
(function() {
  'use strict';

  // Configurable Contact Data
  const contact = {
    whatsapp: "919841034997",            // Country code + number without + or spaces
    phone:    "+91 98410 34997",
    email:    "venkat@viruksham.biz",
    message:  "Hi, I'd like to know more about your services."
  };

  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.message)}`;
  const phoneClean = contact.phone.replace(/[^\d+]/g, '');
  const callUrl = `tel:${phoneClean}`;
  const emailUrl = `mailto:${contact.email}?subject=${encodeURIComponent("Enquiry")}&body=${encodeURIComponent(contact.message)}`;

  // SVG Icons
  const ICONS = {
    chat: `<svg stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="24" height="24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    close: `<svg stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="22" height="22"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    whatsapp: `<svg stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="22" height="22"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>`,
    call: `<svg stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="22" height="22"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    email: `<svg stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="22" height="22"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    copy: `<svg stroke="currentColor" fill="none" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="14" height="14"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`
  };

  // Build HTML Elements
  const container = document.createElement('div');
  container.id = 'fcWidgetContainer';
  container.innerHTML = `
    <!-- Dim Backdrop -->
    <div class="fc-backdrop" id="fcBackdrop" aria-hidden="true"></div>

    <!-- Toast Notification -->
    <div class="fc-toast" id="fcToast" role="status" aria-live="polite">Copied to clipboard</div>

    <!-- Desktop / Tablet Floating Speed-Dial -->
    <div class="fc-speed-dial-wrap" id="fcSpeedDial">
      <div class="fc-actions-stack" id="fcActionsStack" role="region" aria-label="Contact channels">
        
        <!-- 1. WhatsApp (Top Most Prominent) -->
        <div class="fc-action-pill-wrap">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="fc-action-pill fc-action-pill--whatsapp" aria-label="Chat on WhatsApp">
            <div class="fc-action-text">
              <span class="fc-action-title">WhatsApp</span>
              <span class="fc-action-subtitle">Instant chat support</span>
            </div>
            <div class="fc-icon-well">${ICONS.whatsapp}</div>
          </a>
        </div>

        <!-- 2. Email Us -->
        <div class="fc-action-pill-wrap">
          <button type="button" class="fc-copy-btn" data-copy="${contact.email}" title="Copy email address" aria-label="Copy email address">
            ${ICONS.copy}
          </button>
          <a href="${emailUrl}" class="fc-action-pill fc-action-pill--email" aria-label="Email us at ${contact.email}">
            <div class="fc-action-text">
              <span class="fc-action-title">Email Us</span>
              <span class="fc-action-subtitle">${contact.email}</span>
            </div>
            <div class="fc-icon-well">${ICONS.email}</div>
          </a>
        </div>

        <!-- 3. Call Us (Bottom of Stack) -->
        <div class="fc-action-pill-wrap">
          <button type="button" class="fc-copy-btn" data-copy="${contact.phone}" title="Copy phone number" aria-label="Copy phone number">
            ${ICONS.copy}
          </button>
          <a href="${callUrl}" class="fc-action-pill fc-action-pill--call" aria-label="Call us at ${contact.phone}">
            <div class="fc-action-text">
              <span class="fc-action-title">Call Us</span>
              <span class="fc-action-subtitle">${contact.phone}</span>
            </div>
            <div class="fc-icon-well">${ICONS.call}</div>
          </a>
        </div>

      </div>

      <!-- Main Floating Trigger Button -->
      <button type="button" class="fc-main-trigger has-pulse" id="fcMainTrigger" aria-expanded="false" aria-controls="fcActionsStack" aria-label="Open contact options">
        <span class="fc-trigger-icon-wrap">
          <span class="fc-trigger-icon-chat">${ICONS.chat}</span>
          <span class="fc-trigger-icon-close">${ICONS.close}</span>
        </span>
        <span class="fc-trigger-label">Contact us</span>
      </button>
    </div>

    <!-- Mobile Bottom-Docked Glass Bar (<= 640px) -->
    <nav class="fc-mobile-dock" id="fcMobileDock" aria-label="Mobile quick contact">
      <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="fc-mobile-btn fc-mobile-btn--whatsapp" aria-label="WhatsApp">
        ${ICONS.whatsapp}
        <span>WhatsApp</span>
      </a>
      <a href="${callUrl}" class="fc-mobile-btn fc-mobile-btn--call" aria-label="Call">
        ${ICONS.call}
        <span>Call</span>
      </a>
      <a href="${emailUrl}" class="fc-mobile-btn fc-mobile-btn--email" aria-label="Email">
        ${ICONS.email}
        <span>Email</span>
      </a>
    </nav>
  `;

  document.body.appendChild(container);

  // DOM Elements
  const speedDial = document.getElementById('fcSpeedDial');
  const trigger = document.getElementById('fcMainTrigger');
  const backdrop = document.getElementById('fcBackdrop');
  const toast = document.getElementById('fcToast');
  const mobileDock = document.getElementById('fcMobileDock');

  let isOpen = false;
  let toastTimer = null;

  // Toggle Function
  function toggleSpeedDial(open) {
    isOpen = typeof open === 'boolean' ? open : !isOpen;
    if (isOpen) {
      speedDial.classList.add('is-open');
      backdrop.classList.add('is-active');
      trigger.setAttribute('aria-expanded', 'true');
      trigger.classList.remove('has-pulse'); // Stop pulse once opened
    } else {
      speedDial.classList.remove('is-open');
      backdrop.classList.remove('is-active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  }

  // Trigger Event
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSpeedDial();
  });

  // Close on Backdrop Click
  backdrop.addEventListener('click', () => toggleSpeedDial(false));

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggleSpeedDial(false);
      trigger.focus();
    }
  });

  // Copy-to-Clipboard Handler
  document.querySelectorAll('.fc-copy-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard`);
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied "${textToCopy}"`);
      }
    });
  });

  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-show');
    }, 1800);
  }

  // Scroll Behavior:
  // - Desktop: Shrink main pill to circular button on scroll down, expand back on scroll up
  // - Mobile: Hide dock bar on scroll down, reveal on scroll up
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const diff = currentScrollY - lastScrollY;

        if (currentScrollY > 100) {
          if (diff > 8) {
            // Scrolling down
            speedDial.classList.add('is-shrunk');
            if (mobileDock) mobileDock.classList.add('is-hidden');
            if (isOpen) toggleSpeedDial(false);
          } else if (diff < -8) {
            // Scrolling up
            speedDial.classList.remove('is-shrunk');
            if (mobileDock) mobileDock.classList.remove('is-hidden');
          }
        } else {
          speedDial.classList.remove('is-shrunk');
          if (mobileDock) mobileDock.classList.remove('is-hidden');
        }

        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

})();
