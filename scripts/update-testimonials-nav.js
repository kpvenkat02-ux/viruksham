const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'scraped', 'pages', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// 1. Replace CSS
const oldCssRegex = /\/\*\s*Manual Navigation Buttons\s*\*\/[\s\S]*?\.testi-counter\s*\{[\s\S]*?\}/;
const newCss = `/* Manual Navigation Buttons */
    .testi-nav-controls {
      max-width: 1200px;
      margin: 28px auto 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }

    .testi-nav-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #FFFFFF;
      border: 1.5px solid #EADFC4;
      color: #012F6A;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(1, 47, 106, 0.08);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      outline: none;
    }

    .testi-nav-btn:hover {
      background: #012F6A;
      color: #E0C989;
      border-color: #012F6A;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(1, 47, 106, 0.18);
    }

    .testi-nav-btn:active {
      transform: translateY(0) scale(0.94);
    }

    .testi-nav-btn svg {
      width: 22px;
      height: 22px;
      stroke-width: 2.5;
    }`;

content = content.replace(oldCssRegex, newCss);

// 2. Replace HTML markup for progress bar with navigation buttons
const oldHtmlRegex = /<!-- Progress Bar & Indicator -->[\s\S]*?<div class="testi-counter" id="testiCounter">1 \/ 10<\/div>\s*<\/div>/;
const newHtml = `<!-- Manual Navigation Controls -->
  <div class="testi-nav-controls">
    <button class="testi-nav-btn" id="testiPrevBtn" aria-label="Previous Testimonial" title="Previous">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <button class="testi-nav-btn" id="testiNextBtn" aria-label="Next Testimonial" title="Next">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  </div>`;

content = content.replace(oldHtmlRegex, newHtml);

// 3. Replace JS logic for smooth manual navigation
const oldScriptRegex = /<!-- Continuous Left-to-Right 2-Second Motion Script -->[\s\S]*?\(function initTestimonialsCarousel\(\) \{[\s\S]*?\}\)\(\);\s*<\/script>/;
const newScript = `<!-- Testimonials Manual Carousel Navigation Script -->
  <script>
    (function initTestimonialsCarousel() {
      const container = document.getElementById('testiSliderContainer');
      const track = document.getElementById('testiTrack');
      const prevBtn = document.getElementById('testiPrevBtn');
      const nextBtn = document.getElementById('testiNextBtn');

      if (!container || !track) return;

      const originalCards = Array.from(track.children);
      const totalCount = originalCards.length;
      if (totalCount === 0) return;
      
      // Clone cards to enable seamless infinite wrapping
      originalCards.forEach(card => {
        const cloneBefore = card.cloneNode(true);
        track.insertBefore(cloneBefore, track.firstChild);
      });
      originalCards.forEach(card => {
        const cloneAfter = card.cloneNode(true);
        track.appendChild(cloneAfter);
      });

      let allCards = Array.from(track.children);
      let gap = 24;
      let currentIndex = totalCount; // Start at first set of original cards
      let isAnimating = false;

      function getStepWidth() {
        return (allCards[0] ? allCards[0].offsetWidth : 375) + gap;
      }

      function goToIndex(index, smooth = true) {
        currentIndex = index;
        const offset = -currentIndex * getStepWidth();
        track.style.transition = smooth ? 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
        track.style.transform = \`translateX(\${offset}px)\`;
      }

      // Handle infinite wrapping after transition ends
      track.addEventListener('transitionend', () => {
        isAnimating = false;
        if (currentIndex <= 0) {
          currentIndex = currentIndex + totalCount;
          goToIndex(currentIndex, false);
        } else if (currentIndex >= totalCount * 2) {
          currentIndex = currentIndex - totalCount;
          goToIndex(currentIndex, false);
        }
      });

      function showPrev() {
        if (isAnimating) return;
        isAnimating = true;
        currentIndex--;
        goToIndex(currentIndex, true);
      }

      function showNext() {
        if (isAnimating) return;
        isAnimating = true;
        currentIndex++;
        goToIndex(currentIndex, true);
      }

      // Initial alignment
      goToIndex(currentIndex, false);

      window.addEventListener('resize', () => {
        goToIndex(currentIndex, false);
      });

      // Button listeners
      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.preventDefault();
          showPrev();
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.preventDefault();
          showNext();
        });
      }

      // Keyboard navigation (ArrowLeft / ArrowRight when hovering or focused)
      window.addEventListener('keydown', (e) => {
        const rect = container.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isInView) return;

        if (e.key === 'ArrowLeft') {
          showPrev();
        } else if (e.key === 'ArrowRight') {
          showNext();
        }
      });

      // Touch / Swipe support
      let startX = 0;
      let isDragging = false;

      container.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
      }, { passive: true });

      container.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = e.changedTouches[0].clientX - startX;
        if (diff > 40) {
          showPrev();
        } else if (diff < -40) {
          showNext();
        }
      }, { passive: true });

    })();
  </script>`;

content = content.replace(oldScriptRegex, newScript);

fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully updated testimonials navigation and removed progress bar in index.html');
