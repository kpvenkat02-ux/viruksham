/**
 * Viruksham Finmart - Mobile Behavior Module
 * Scoped strictly to max-width: 767px with automatic desktop cleanup
 */

(function () {
  'use strict';

  const MOBILE_MQ = '(max-width: 767px)';
  const mql = window.matchMedia(MOBILE_MQ);

  // ---------------------------------------------------------------------------
  // Helper: Breakpoint Guard
  // ---------------------------------------------------------------------------
  function isMobile() {
    return mql.matches;
  }

  // ---------------------------------------------------------------------------
  // 1. Header Scroll Shadow & Drawer Controller
  // ---------------------------------------------------------------------------
  function initMobileHeader() {
    if (!isMobile()) return;

    const header = document.querySelector('header');
    if (!header) return;

    function onScroll() {
      if (!isMobile()) return;
      if (window.scrollY > 15) {
        header.classList.add('m-header-scrolled');
      } else {
        header.classList.remove('m-header-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Hook existing hamburger button
    const hamburger = document.querySelector('button.header__Toggle-sc-347dc4f8-20') ||
                      document.querySelector('header button[aria-controls="mobile-nav"]') ||
                      document.querySelector('.m-header-hamburger');

    if (hamburger) {
      hamburger.addEventListener('click', function (e) {
        if (!isMobile()) return;
        e.preventDefault();
        e.stopPropagation();
        openDrawer();
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 2. Mobile Slide-in Drawer Sheet
  // ---------------------------------------------------------------------------
  function openDrawer() {
    if (!isMobile()) return;
    const sheet = document.getElementById('m-drawer-sheet');
    const backdrop = document.getElementById('m-drawer-backdrop');
    if (!sheet || !backdrop) return;

    sheet.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    const closeBtn = sheet.querySelector('.m-drawer-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    const sheet = document.getElementById('m-drawer-sheet');
    const backdrop = document.getElementById('m-drawer-backdrop');
    if (sheet) sheet.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initMobileDrawer() {
    if (!isMobile()) return;

    const sheet = document.getElementById('m-drawer-sheet');
    const backdrop = document.getElementById('m-drawer-backdrop');
    if (!sheet) return;

    const closeBtn = sheet.querySelector('.m-drawer-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }

    // Close on Escape key
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeDrawer();
        closeConsultationSheet();
        closeVideoSheet();
      }
    });

    // Swipe-right to close drawer
    let touchStartX = 0;
    let touchStartY = 0;
    sheet.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    sheet.addEventListener('touchend', function (e) {
      const diffX = e.changedTouches[0].screenX - touchStartX;
      const diffY = e.changedTouches[0].screenY - touchStartY;
      if (diffX > 60 && Math.abs(diffX) > Math.abs(diffY)) {
        closeDrawer();
      }
    }, { passive: true });

    // Drawer accordions
    const accordions = sheet.querySelectorAll('.m-drawer-accordion-btn');
    accordions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        const submenu = btn.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle('open', !expanded);
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 3. Bottom Navigation Bar Auto-Hide on Scroll
  // ---------------------------------------------------------------------------
  function initBottomNav() {
    if (!isMobile()) return;

    const bottomNav = document.getElementById('m-bottom-nav');
    if (!bottomNav) return;

    // Highlight current active tab
    const pathname = window.location.pathname.replace(/\/$/, '') || '/';
    const navItems = bottomNav.querySelectorAll('.m-nav-item');
    navItems.forEach(function (item) {
      const href = item.getAttribute('href') || '';
      const cleanHref = href.split('#')[0].replace(/\/$/, '') || '/';
      if (cleanHref === pathname || (pathname === '' && cleanHref === '/')) {
        item.classList.add('active');
        item.setAttribute('aria-current', 'page');
      } else {
        item.classList.remove('active');
        item.removeAttribute('aria-current');
      }
    });

    // Ensure navigation buttons stay pinned and visible
    function onScroll() {
      if (!isMobile()) return;
      bottomNav.classList.remove('nav-hidden');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // 4. Sticky CTA Bar Observer
  // ---------------------------------------------------------------------------
  function initStickyCTA() {
    if (!isMobile()) return;

    const stickyBar = document.getElementById('m-sticky-cta');
    const hero = document.getElementById('hero');
    const footer = document.querySelector('footer');

    if (!stickyBar) return;

    function checkStickyVisibility() {
      if (!isMobile()) return;
      let heroPast = true;
      let footerVisible = false;

      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        heroPast = heroRect.bottom < 100;
      }

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        footerVisible = footerRect.top < window.innerHeight;
      }

      if (heroPast && !footerVisible) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', checkStickyVisibility, { passive: true });
    checkStickyVisibility();

    stickyBar.addEventListener('click', function (e) {
      e.preventDefault();
      openConsultationSheet();
    });

    // Hero buttons trigger bottom sheet too
    const heroStartBtn = document.querySelector('.hero-btn-primary');
    if (heroStartBtn && heroStartBtn.getAttribute('href') === '/contact') {
      heroStartBtn.addEventListener('click', function (e) {
        if (!isMobile()) return;
        e.preventDefault();
        openConsultationSheet();
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 5. 3-Step Consultation Bottom Sheet
  // ---------------------------------------------------------------------------
  let currentStep = 1;
  const formData = {
    fullName: '',
    phone: '',
    email: '',
    incomeRange: '',
    netWorth: '',
    horizon: ''
  };

  function openConsultationSheet() {
    if (!isMobile()) return;
    const sheet = document.getElementById('m-consultation-sheet');
    const backdrop = document.getElementById('m-consultation-backdrop');
    if (!sheet || !backdrop) return;

    sheet.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    setStep(1);
  }

  function closeConsultationSheet() {
    const sheet = document.getElementById('m-consultation-sheet');
    const backdrop = document.getElementById('m-consultation-backdrop');
    if (sheet) sheet.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function setStep(stepNum) {
    currentStep = stepNum;
    const sheet = document.getElementById('m-consultation-sheet');
    if (!sheet) return;

    // Update progress bar
    const bar = sheet.querySelector('.m-step-progress-bar');
    const label = sheet.querySelector('.m-step-progress-labels span:last-child');
    if (bar) bar.style.width = `${(currentStep / 3) * 100}%`;
    if (label) label.textContent = `Step ${currentStep} of 3`;

    // Toggle step contents
    sheet.querySelectorAll('.m-step-content').forEach(function (content, idx) {
      content.classList.toggle('active', idx + 1 === currentStep);
    });
  }

  function initConsultationSheet() {
    if (!isMobile()) return;

    const sheet = document.getElementById('m-consultation-sheet');
    const backdrop = document.getElementById('m-consultation-backdrop');
    if (!sheet) return;

    const closeBtn = sheet.querySelector('.m-sheet-close');
    if (closeBtn) closeBtn.addEventListener('click', closeConsultationSheet);
    if (backdrop) backdrop.addEventListener('click', closeConsultationSheet);

    // Chip selection handler
    sheet.querySelectorAll('.m-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        const parent = chip.closest('.m-chips-grid');
        if (!parent) return;

        parent.querySelectorAll('.m-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');

        const field = parent.dataset.field;
        const val = chip.dataset.value;
        if (field) formData[field] = val;

        // Auto advance on chip selection after slight delay for tactile feedback
        setTimeout(function () {
          if (currentStep < 3) {
            setStep(currentStep + 1);
          }
        }, 180);
      });
    });

    // Prev step buttons
    sheet.querySelectorAll('.m-step-btn-prev').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (currentStep > 1) {
          setStep(currentStep - 1);
        }
      });
    });

    // Next step buttons
    sheet.querySelectorAll('.m-step-btn-next').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (currentStep < 3) {
          setStep(currentStep + 1);
        }
      });
    });

    // Form submission
    const submitBtn = sheet.querySelector('.m-step-btn-submit');
    const formStatus = sheet.querySelector('.m-sheet-status');
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw20IaErW_2yK6-QwXGVTcbk4a5U8CwoG61Lk6NDbfPUriFmnjpCsY-mGmtzqDP12If/exec';

    if (submitBtn) {
      submitBtn.addEventListener('click', async function (e) {
        e.preventDefault();

        const nameInput = sheet.querySelector('#m-consult-name');
        const phoneInput = sheet.querySelector('#m-consult-phone');
        const emailInput = sheet.querySelector('#m-consult-email');

        formData.fullName = nameInput ? nameInput.value.trim() : '';
        formData.phone = phoneInput ? phoneInput.value.trim() : '';
        formData.email = emailInput ? emailInput.value.trim() : '';

        if (!formData.fullName) {
          alert('Please enter your full name.');
          if (nameInput) nameInput.focus();
          return;
        }

        if (!formData.phone || formData.phone.length < 10) {
          alert('Please enter a valid 10-digit mobile number.');
          if (phoneInput) phoneInput.focus();
          return;
        }

        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Booking Appointment...</span>';

        try {
          await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fullName: formData.fullName,
              phone: formData.phone,
              email: formData.email,
              incomeRange: formData.incomeRange || 'Not Specified',
              netWorth: formData.netWorth || 'Not Specified',
              horizon: formData.horizon || 'Not Specified'
            })
          });

          if (formStatus) {
            formStatus.style.display = 'block';
            formStatus.style.background = '#e6f4ea';
            formStatus.style.color = '#137333';
            formStatus.style.border = '1px solid #ceead6';
            formStatus.style.padding = '12px 14px';
            formStatus.style.borderRadius = '8px';
            formStatus.style.marginTop = '12px';
            formStatus.style.fontSize = '14px';
            formStatus.style.fontWeight = '600';
            formStatus.innerHTML = '✓ Consultation booked successfully! K P Venkat will contact you shortly.';
          }

          submitBtn.innerHTML = '✓ Confirmed';

          setTimeout(function () {
            closeConsultationSheet();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            if (formStatus) formStatus.style.display = 'none';
          }, 3500);
        } catch (err) {
          if (formStatus) {
            formStatus.style.display = 'block';
            formStatus.style.background = '#fce8e6';
            formStatus.style.color = '#c5221f';
            formStatus.style.border = '1px solid #fad2cf';
            formStatus.style.padding = '12px 14px';
            formStatus.style.borderRadius = '8px';
            formStatus.style.marginTop = '12px';
            formStatus.style.fontSize = '14px';
            formStatus.innerHTML = '⚠ Request received. Please call +91 44 4770 5027 if urgent.';
          }
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 6. Stats Section Count-Up Animation
  // ---------------------------------------------------------------------------
  function initStatsAnimation() {
    if (!isMobile()) return;

    const statsSection = document.getElementById('luxury-stat-counter') ||
                         document.querySelector('.luxury-stats-section');
    if (!statsSection) return;

    let animated = false;

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        animateStats(statsSection);
      }
    }, { threshold: 0.25 });

    observer.observe(statsSection);
  }

  function animateStats(container) {
    const statCards = container.querySelectorAll('.luxury-stat-item, [class*="stat-card"]');
    statCards.forEach(function (card) {
      const numEl = card.querySelector('.luxury-stat-num, h3, [class*="Number"], [class*="num"]');
      if (!numEl) return;

      const originalText = numEl.textContent.trim();
      // Extract numeric part
      const match = originalText.match(/\d+/);
      if (!match) return;

      const target = parseInt(match[0], 10);
      const prefix = originalText.substring(0, match.index);
      const suffix = originalText.substring(match.index + match[0].length);

      const duration = 1200;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quadratic
        const easeProgress = 1 - Math.pow(1 - progress, 2);
        const current = Math.floor(easeProgress * target);

        numEl.textContent = prefix + current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          numEl.textContent = originalText; // Ensure exact final text
        }
      }

      requestAnimationFrame(update);
    });
  }

  // ---------------------------------------------------------------------------
  // 7. Founder Bio Truncate & Read More
  // ---------------------------------------------------------------------------
  function initFounderBio() {
    if (!isMobile()) return;

    const readMoreBtn = document.querySelector('.m-read-more-btn');
    const bioText = document.querySelector('.m-bio-truncate');

    if (readMoreBtn && bioText) {
      readMoreBtn.addEventListener('click', function () {
        const isExp = bioText.classList.toggle('expanded');
        readMoreBtn.innerHTML = isExp ? 'Read less &uarr;' : 'Read more &darr;';
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 8. Media Horizontal Carousel & Video Player Bottom Sheet
  // ---------------------------------------------------------------------------
  function openVideoSheet(videoId, title) {
    if (!isMobile()) return;
    const sheet = document.getElementById('m-video-sheet');
    const backdrop = document.getElementById('m-video-backdrop');
    if (!sheet || !backdrop) return;

    const titleEl = sheet.querySelector('.m-video-sheet-title');
    const embedContainer = sheet.querySelector('.m-video-embed-container');

    if (titleEl) titleEl.textContent = title || 'Viruksham Video';
    if (embedContainer) {
      embedContainer.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="${title}"></iframe>`;
    }

    sheet.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoSheet() {
    const sheet = document.getElementById('m-video-sheet');
    const backdrop = document.getElementById('m-video-backdrop');
    if (sheet) {
      sheet.classList.remove('active');
      const embedContainer = sheet.querySelector('.m-video-embed-container');
      if (embedContainer) embedContainer.innerHTML = ''; // Stop video playback
    }
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initMediaCarousel() {
    if (!isMobile()) return;

    const carousel = document.querySelector('.m-video-carousel');
    const dots = document.querySelectorAll('.m-dot');

    if (carousel && dots.length > 0) {
      carousel.addEventListener('scroll', function () {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector('.m-video-card')?.offsetWidth || 300;
        const activeIdx = Math.round(scrollLeft / cardWidth);

        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === activeIdx);
        });
      }, { passive: true });
    }

    // Video card click handlers
    document.querySelectorAll('.m-video-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const videoId = card.dataset.videoId;
        const title = card.querySelector('.m-video-title')?.textContent || '';
        if (videoId) openVideoSheet(videoId, title);
      });
    });

    const sheet = document.getElementById('m-video-sheet');
    const backdrop = document.getElementById('m-video-backdrop');
    if (sheet) {
      const closeBtn = sheet.querySelector('.m-video-sheet-close');
      if (closeBtn) closeBtn.addEventListener('click', closeVideoSheet);
    }
    if (backdrop) {
      backdrop.addEventListener('click', closeVideoSheet);
    }

    // Lazy load mobile video thumbnails with hqdefault
    document.querySelectorAll('.m-video-thumb-wrap img').forEach(function (img) {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 9. Mutual Fund Journey Segmented Control
  // ---------------------------------------------------------------------------
  function initJourneyStepper() {
    if (!isMobile()) return;

    const segButtons = document.querySelectorAll('.m-segment-btn');
    const groups = document.querySelectorAll('.m-journey-group');
    const container = document.querySelector('.viruksham-dark-motion-section');

    segButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        segButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetGroup = btn.dataset.group;
        groups.forEach(function (g) {
          g.style.display = g.dataset.group === targetGroup ? 'flex' : 'none';
        });
      });
    });

    // Swipe left/right gestures
    if (container) {
      let startX = 0;
      container.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
      }, { passive: true });

      container.addEventListener('touchend', e => {
        const diffX = e.changedTouches[0].screenX - startX;
        if (Math.abs(diffX) > 50) {
          if (diffX < 0 && segButtons[1]) segButtons[1].click();
          else if (diffX > 0 && segButtons[0]) segButtons[0].click();
        }
      }, { passive: true });
    }
  }

  // ---------------------------------------------------------------------------
  // 10. Testimonials Carousel & Counter
  // ---------------------------------------------------------------------------
  function initTestimonialsCarousel() {
    if (!isMobile()) return;

    const carousel = document.querySelector('.m-testimonial-carousel');
    const counter = document.querySelector('.m-testi-counter');
    const cards = document.querySelectorAll('.m-testimonial-card');

    if (!carousel || cards.length === 0) return;

    carousel.addEventListener('scroll', function () {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth;
      const activeIdx = Math.min(Math.round(scrollLeft / cardWidth) + 1, cards.length);

      if (counter) {
        counter.textContent = `${activeIdx} / ${cards.length}`;
      }
    }, { passive: true });

    // Expandable review text
    document.querySelectorAll('.m-testi-text').forEach(function (textEl) {
      textEl.addEventListener('click', function () {
        textEl.classList.toggle('expanded');
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 11. Footer Accordions
  // ---------------------------------------------------------------------------
  function initFooterAccordions() {
    if (!isMobile()) return;

    document.querySelectorAll('.m-footer-accordion-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const content = btn.nextElementSibling;
        if (content) {
          const isOpen = content.classList.toggle('open');
          const chevron = btn.querySelector('svg');
          if (chevron) {
            chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
          }
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 12. Tools Page Calculators Sync & Sticky Bar
  // ---------------------------------------------------------------------------
  function initToolsPage() {
    if (!isMobile()) return;

    const calcTabs = document.querySelectorAll('.sip-tab-btn');
    calcTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        // Scroll active tab into view smoothly
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Master Initialization & Breakpoint Switch Cleanup
  // ---------------------------------------------------------------------------
  function initAllMobile() {
    if (!isMobile()) {
      // Clean up if resized to desktop
      closeDrawer();
      closeConsultationSheet();
      closeVideoSheet();
      return;
    }

    initMobileHeader();
    initMobileDrawer();
    initBottomNav();
    initStickyCTA();
    initConsultationSheet();
    initStatsAnimation();
    initFounderBio();
    initMediaCarousel();
    initJourneyStepper();
    initTestimonialsCarousel();
    initFooterAccordions();
    initToolsPage();
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllMobile);
  } else {
    initAllMobile();
  }

  // Listen for breakpoint changes
  mql.addEventListener('change', function (e) {
    if (e.matches) {
      initAllMobile();
    } else {
      // Switched to desktop (>767px): reset everything
      closeDrawer();
      closeConsultationSheet();
      closeVideoSheet();
      document.body.style.overflow = '';
      const bottomNav = document.getElementById('m-bottom-nav');
      if (bottomNav) bottomNav.classList.remove('nav-hidden');
    }
  });

})();
