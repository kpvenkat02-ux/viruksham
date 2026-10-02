/**
 * Viruksham Navigation Controller
 * Handles desktop dropdowns, mobile hamburger drawer, scroll effects, and active links.
 */
(function () {
  function initNavbar() {
    const header = document.querySelector('.header__Root-sc-347dc4f8-0, header');
    if (!header) return;

    // 0. Clean up any brand text from header brand area to show only the Viruksham logo
    const brandNameCols = header.querySelectorAll('.header__NameCol-sc-347dc4f8-5, .header__Name-sc-347dc4f8-6, .header__BrandTag-sc-347dc4f8-3');
    brandNameCols.forEach(el => el.remove());

    // 1. Desktop Nav Dropdowns
    const navGroups = document.querySelectorAll('.header__NavGroup-sc-347dc4f8-9');
    
    navGroups.forEach(group => {
      const trigger = group.querySelector('.header__NavTrigger-sc-347dc4f8-10, .header__NavItem-sc-347dc4f8-17');
      const menu = group.querySelector('.header__NavMenu-sc-347dc4f8-12');
      const caret = group.querySelector('.header__NavCaret-sc-347dc4f8-11');

      if (!menu) return;

      // Mouse enter / leave for desktop hover
      group.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 1024) {
          openDropdown(group, trigger, menu, caret);
        }
      });

      group.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 1024) {
          closeDropdown(group, trigger, menu, caret);
        }
      });

      // Click trigger
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          if (trigger.tagName === 'BUTTON') {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = group.classList.contains('is-open') || trigger.getAttribute('aria-expanded') === 'true';
            
            // Close other dropdowns
            navGroups.forEach(g => {
              if (g !== group) {
                const otherTrigger = g.querySelector('.header__NavTrigger-sc-347dc4f8-10, .header__NavItem-sc-347dc4f8-17');
                const otherMenu = g.querySelector('.header__NavMenu-sc-347dc4f8-12');
                const otherCaret = g.querySelector('.header__NavCaret-sc-347dc4f8-11');
                closeDropdown(g, otherTrigger, otherMenu, otherCaret);
              }
            });

            if (isOpen) {
              closeDropdown(group, trigger, menu, caret);
            } else {
              openDropdown(group, trigger, menu, caret);
            }
          }
        });
      }
    });

    function openDropdown(group, trigger, menu, caret) {
      group.classList.add('is-open');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
      if (menu) {
        menu.style.opacity = '1';
        menu.style.pointerEvents = 'auto';
        menu.style.transform = 'translateX(-50%) translateY(0)';
        menu.style.visibility = 'visible';
      }
      if (caret) {
        caret.style.transform = 'rotate(180deg)';
      }
    }

    function closeDropdown(group, trigger, menu, caret) {
      group.classList.remove('is-open');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      if (menu) {
        menu.style.opacity = '';
        menu.style.pointerEvents = '';
        menu.style.transform = '';
        menu.style.visibility = '';
      }
      if (caret) {
        caret.style.transform = '';
      }
    }

    // Close on click outside or escape key
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header__NavGroup-sc-347dc4f8-9')) {
        navGroups.forEach(g => {
          const t = g.querySelector('.header__NavTrigger-sc-347dc4f8-10, .header__NavItem-sc-347dc4f8-17');
          const m = g.querySelector('.header__NavMenu-sc-347dc4f8-12');
          const c = g.querySelector('.header__NavCaret-sc-347dc4f8-11');
          closeDropdown(g, t, m, c);
        });
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navGroups.forEach(g => {
          const t = g.querySelector('.header__NavTrigger-sc-347dc4f8-10, .header__NavItem-sc-347dc4f8-17');
          const m = g.querySelector('.header__NavMenu-sc-347dc4f8-12');
          const c = g.querySelector('.header__NavCaret-sc-347dc4f8-11');
          closeDropdown(g, t, m, c);
        });
        closeMobileNav();
      }
    });

    // 2. Mobile Drawer & Hamburger Menu Toggle
    const mobileToggle = document.querySelector('.header__Toggle-sc-347dc4f8-20, button[aria-controls="mobile-nav"]');
    const mobileDrawer = document.querySelector('#mobile-nav, .header__Drawer-sc-347dc4f8-23');

    if (mobileToggle && mobileDrawer) {
      const openIcon = mobileToggle.querySelector('.header__ToggleIcon-sc-347dc4f8-22:first-child');
      const closeIcon = mobileToggle.querySelector('.header__ToggleIcon-sc-347dc4f8-22:last-child');
      const drawerItems = mobileDrawer.querySelectorAll('.header__DrawerItem-sc-347dc4f8-27');

      mobileToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true' || mobileDrawer.classList.contains('is-open');
        if (isOpen) {
          closeMobileNav();
        } else {
          openMobileNav();
        }
      });

      function openMobileNav() {
        mobileToggle.setAttribute('aria-expanded', 'true');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        mobileDrawer.classList.add('is-open');
        document.body.classList.add('mobile-nav-open');

        // Toggle icons
        if (openIcon) {
          openIcon.style.transform = 'rotate(90deg) scale(0.75)';
          openIcon.style.opacity = '0';
        }
        if (closeIcon) {
          closeIcon.style.transform = 'rotate(0deg) scale(1)';
          closeIcon.style.opacity = '1';
        }

        // Show drawer & animate items
        mobileDrawer.style.opacity = '1';
        mobileDrawer.style.pointerEvents = 'auto';
        mobileDrawer.style.transform = 'translateY(0)';

        drawerItems.forEach((item, index) => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
          item.style.transitionDelay = (index * 40) + 'ms';
        });
      }

      function closeMobileNav() {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        mobileDrawer.classList.remove('is-open');
        document.body.classList.remove('mobile-nav-open');

        // Toggle icons
        if (openIcon) {
          openIcon.style.transform = 'rotate(0deg) scale(1)';
          openIcon.style.opacity = '1';
        }
        if (closeIcon) {
          closeIcon.style.transform = 'rotate(-90deg) scale(0.75)';
          closeIcon.style.opacity = '0';
        }

        // Hide drawer
        mobileDrawer.style.opacity = '';
        mobileDrawer.style.pointerEvents = '';
        mobileDrawer.style.transform = '';

        drawerItems.forEach((item) => {
          item.style.opacity = '';
          item.style.transform = '';
          item.style.transitionDelay = '';
        });
      }

      // Close mobile drawer when clicking any nav link inside it
      const drawerLinks = mobileDrawer.querySelectorAll('a');
      drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
          closeMobileNav();
        });
      });
    }

    // 3. Highlight current active page link automatically
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    const allNavLinks = document.querySelectorAll('.header__NavItem-sc-347dc4f8-17, .header__DrawerItem-sc-347dc4f8-27');
    allNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === currentPath || (currentPath !== '/' && href !== '/' && currentPath.startsWith(href)))) {
        link.setAttribute('aria-current', 'page');
      } else if (href && href !== currentPath) {
        link.removeAttribute('aria-current');
      }
    });

    // 4. Animate Stats Counters when in viewport
    const statCounters = document.querySelectorAll('.luxury-stat-number');
    if (statCounters.length > 0) {
      const animateStat = (el) => {
        const target = parseFloat(el.getAttribute('data-target')) || 0;
        const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const startTime = performance.now();

        const updateCount = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // easeOutExpo
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = (ease * target).toFixed(decimals);
          el.textContent = prefix + current + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = prefix + target.toFixed(decimals) + suffix;
          }
        };

        requestAnimationFrame(updateCount);
      };

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateStat(entry.target);
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });

        statCounters.forEach(el => observer.observe(el));
      } else {
        statCounters.forEach(el => animateStat(el));
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();

