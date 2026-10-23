const fs = require('fs');

const code = `/**
 * Viruksham Fullscreen Video Intro Controller
 * File: /js/intro.js (< 3.5KB)
 */
(function() {
  'use strict';

  // --- CONFIGURATION KNOBS ---
  var EARLY_FADE_SECONDS = 9.85; // Waits for video completion (10s) before sliding up
  var PLAYBACK_SPEED = 1.4;      // Default desktop speed multiplier
  var DISABLE_INTRO = false;     // Set true to bypass intro during development

  // URL query overrides: ?intro=1 (force play), ?speed=1.5 (custom speed)
  var qSpeed = (location.search.match(/[?&]speed=([0-9.]+)/) || [])[1];
  if (qSpeed) PLAYBACK_SPEED = parseFloat(qSpeed);

  var d = document, de = d.documentElement;
  var $ = function(id) { return d.getElementById(id); };
  var overlay = $('intro-overlay'), video = $('intro-video');
  if (!overlay || !video) return;

  // Detect mobile & touch devices
  var isMobile = (window.innerWidth < 768) || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
  if (isMobile && !qSpeed) {
    // Smooth 1.15x playback on mobile so hardware decoders don't drop frames or choke
    PLAYBACK_SPEED = 1.15;
  }

  // Strictly enforce mute and inline playback properties before any play attempts
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.playsInline = true;
  try {
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true');
    video.setAttribute('disablepictureinpicture', 'true');
    video.setAttribute('disableremoteplayback', 'true');
  } catch(e) {}

  var isDemo = /[?&]intro=1\\b/.test(location.search);
  var seen = false;
  try { seen = sessionStorage.getItem('v_intro_seen') === '1'; } catch(e) {}

  function showPage() {
    de.classList.remove('intro-active');
    d.body.classList.remove('intro-active');
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    window.dispatchEvent(new Event('scroll'));
  }

  function cleanUp() {
    showPage();
    d.querySelectorAll('.intro-reveal-step').forEach(function(el) {
      el.style.cssText = 'opacity:1;transform:none;visibility:visible';
    });
  }

  if (DISABLE_INTRO || (seen && !isDemo)) return cleanUp();

  var isFinished = false;
  function finish() {
    if (isFinished) return;
    isFinished = true;
    try { sessionStorage.setItem('v_intro_seen', '1'); } catch(e) {}
    if (overlay) overlay.classList.add('intro-fading');
    de.classList.remove('intro-active');
    d.body.classList.remove('intro-active');

    d.querySelectorAll('.intro-reveal-step').forEach(function(el, i) {
      setTimeout(function() {
        el.style.cssText = 'opacity:1;transform:none;visibility:visible';
      }, i * 60);
    });

    setTimeout(showPage, 800);
  }

  // Accessibility: Screen-reader skip link triggers instant reveal
  var skipLink = d.querySelector('a[href="#main"]');
  if (skipLink) skipLink.onclick = finish;

  // Dedicated Skip Button
  var skipBtn = $('intro-skip-btn');
  if (skipBtn) {
    skipBtn.addEventListener('click', function(e) {
      if (e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
      }
      finish();
    });
  }

  // Tap anywhere on overlay to skip seamlessly on mobile
  overlay.addEventListener('click', function(e) {
    finish();
  });
  overlay.addEventListener('touchstart', function(e) {
    if (e && e.target && skipBtn && (e.target === skipBtn || skipBtn.contains(e.target))) return;
    finish();
  }, { passive: true });

  // Escape & Space bar shortcuts to skip
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === ' ') finish();
  }, { once: true });

  // Motion reduction and Data-Saver checks: dismiss immediately WITHOUT pausing on-screen
  var redMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var c = navigator.connection;
  var slowConn = c && (c.saveData || (c.effectiveType && /2g/.test(c.effectiveType)));
  if (redMotion || slowConn) {
    return cleanUp();
  }

  // Safe playback speed application (only set once actively playing to avoid WebKit pause bug)
  function applySpeed() {
    try {
      video.muted = true;
      if (PLAYBACK_SPEED && PLAYBACK_SPEED !== 1.0) {
        video.playbackRate = PLAYBACK_SPEED;
      }
    } catch(e) {}
  }

  // Safety stall timeout: if mobile network is too slow, gracefully dismiss instead of hanging
  var stallTimer = setTimeout(finish, isMobile ? 3500 : 5000);

  function on(t, f, o) { video.addEventListener(t, f, o); }

  on('playing', function() {
    clearTimeout(stallTimer);
    applySpeed();
  }, { once: true });

  on('error', finish);
  on('stalled', function() {
    setTimeout(function() {
      if (video.paused || video.readyState < 3) finish();
    }, 1200);
  });
  on('waiting', function() {
    setTimeout(function() {
      if (video.paused || video.readyState < 3) finish();
    }, 1500);
  });
  on('timeupdate', function() {
    if (EARLY_FADE_SECONDS && video.currentTime >= EARLY_FADE_SECONDS) finish();
  });
  on('ended', function() {
    finish();
  });

  var started = false;
  function start() {
    if (started || isFinished) return;
    started = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    var p = video.play();
    if (p && typeof p.then === 'function') {
      p.then(function() {
        // Autoplay succeeded smoothly
      }).catch(function() {
        // If mobile browser blocks autoplay (e.g. Low Power Mode), finish immediately
        // DO NOT show a paused video with a pause button!
        finish();
      });
    }
  }

  on('loadeddata', start, { once: true });
  on('canplay', start, { once: true });
  on('canplaythrough', start, { once: true });

  // Kickstart playback attempt
  setTimeout(start, 250);
})();
`;

console.log('intro.js byte length:', Buffer.byteLength(code, 'utf8'), 'bytes');
fs.writeFileSync('public/js/intro.js', code, 'utf8');

// Minified version
let min = code
  .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
  .replace(/\r?\n\s*/g, ' ')
  .replace(/\s*([=+\-*\/%{}();,:<>!&|?])\s*/g, '$1')
  .trim();

min = min
  .replace(/EARLY_FADE_SECONDS/g, 'FADE_SEC')
  .replace(/PLAYBACK_SPEED/g, 'SPEED')
  .replace(/DISABLE_INTRO/g, 'DIS')
  .replace(/isFinished/g, 'fin')
  .replace(/redMotion/g, 'rm')
  .replace(/slowConn/g, 'sc')
  .replace(/cleanUp/g, 'cu')
  .replace(/showPage/g, 'sp')
  .replace(/applySpeed/g, 'as')
  .replace(/isMobile/g, 'mob')
  .replace(/stallTimer/g, 'st');

console.log('intro.min.js byte length:', Buffer.byteLength(min, 'utf8'), 'bytes (', (Buffer.byteLength(min, 'utf8') / 1024).toFixed(2), 'KB )');
fs.writeFileSync('public/js/intro.min.js', min, 'utf8');
