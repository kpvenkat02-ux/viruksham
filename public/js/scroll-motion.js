/**
 * Viruksham - Bidirectional Scroll Motion & Reveal Animation Engine
 * Enables smooth scroll reveals, 3D perspective transforms, and counter animations
 * in BOTH forward (scroll down) and reverse (scroll up) directions.
 */

(function () {
  'use strict';

  function initBidirectionalScrollMotion() {
    // 1. Inject Global Scroll Motion Styles
    if (!document.getElementById('bidirectional-scroll-styles')) {
      const style = document.createElement('style');
      style.id = 'bidirectional-scroll-styles';
      style.textContent = `
        [data-reveal="true"] {
          opacity: 0 !important;
          transform: perspective(1400px) translateY(24px) translateZ(-60px) rotateX(4deg) !important;
          transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) !important;
          will-change: opacity, transform;
        }
        [data-reveal="true"].is-revealed {
          opacity: 1 !important;
          transform: perspective(1400px) translateY(0) translateZ(0) rotateX(0deg) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal="true"] {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // 2. Bidirectional Reveal Observer
    const revealElements = document.querySelectorAll('[data-reveal="true"]');
    
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
            } else {
              const rect = entry.target.getBoundingClientRect();
              if (rect.top > window.innerHeight || rect.bottom < 0) {
                entry.target.classList.remove('is-revealed');
              }
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '50px 0px -20px 0px'
        }
      );

      revealElements.forEach((el) => {
        // Immediate reveal for elements already visible
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add('is-revealed');
        }
        revealObserver.observe(el);
      });
    } else {
      revealElements.forEach((el) => el.classList.add('is-revealed'));
    }

    // 3. Bidirectional Stat Counter Animation
    const statSection = document.getElementById('luxury-stat-counter');
    if (statSection) {
      const counters = statSection.querySelectorAll('.luxury-stat-number');
      let isCounting = false;
      let animationFrameId = null;

      function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
      }

      function startCountUp() {
        if (isCounting) return;
        isCounting = true;

        const duration = 2000;
        const startTime = performance.now();

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutQuart(progress);

          counters.forEach((counter) => {
            const target = parseFloat(counter.getAttribute('data-target') || '0');
            const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
            const suffix = counter.getAttribute('data-suffix') || '';

            const currentVal = target * easedProgress;
            let formattedNumber;
            if (decimals > 0) {
              formattedNumber = currentVal.toFixed(decimals);
            } else {
              formattedNumber = Math.round(currentVal).toString();
            }

            counter.textContent = formattedNumber + (progress >= 1 ? suffix : '+');
          });

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(update);
          } else {
            counters.forEach((counter) => {
              const target = parseFloat(counter.getAttribute('data-target') || '0');
              const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
              const suffix = counter.getAttribute('data-suffix') || '';
              counter.textContent = (decimals > 0 ? target.toFixed(decimals) : target) + suffix;
            });
            isCounting = false;
          }
        }

        animationFrameId = requestAnimationFrame(update);
      }

      function resetCounters() {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        isCounting = false;
        counters.forEach((counter) => {
          const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
          counter.textContent = (decimals > 0 ? '0.0' : '0') + '+';
        });
      }

      if ('IntersectionObserver' in window) {
        const statObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                statSection.classList.add('is-revealed');
                startCountUp();
              } else {
                const rect = statSection.getBoundingClientRect();
                if (rect.top > window.innerHeight || rect.bottom < 0) {
                  statSection.classList.remove('is-revealed');
                  resetCounters();
                }
              }
            });
          },
          {
            threshold: 0.15,
            rootMargin: '0px 0px -30px 0px'
          }
        );

        statObserver.observe(statSection);
      }
    }

    // 4. Interactive 3D Card Tilt Effects
    const tiltCards = document.querySelectorAll('[data-tilt="true"]');
    tiltCards.forEach((card) => {
      const face = card.querySelector('.tilt__Face-sc-fb2f1faa-0') || card;
      const glare = card.querySelector('.tilt__Glare-sc-fb2f1faa-1');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        face.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
        face.style.transition = 'transform 0.1s ease-out';

        if (glare) {
          const glareX = (x / rect.width) * 100;
          const glareY = (y / rect.height) * 100;
          glare.style.opacity = '1';
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        face.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        face.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        if (glare) glare.style.opacity = '0';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBidirectionalScrollMotion);
  } else {
    initBidirectionalScrollMotion();
  }
})();
