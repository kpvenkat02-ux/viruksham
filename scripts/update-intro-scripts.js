const fs = require('fs');

const code = `/**
 * Viruksham Fullscreen Video Intro Controller
 * File: /js/intro.js (< 3KB)
 */
(function() {
  'use strict';

  // --- CONFIGURATION KNOBS ---
  var EARLY_FADE_SECONDS = 9.95; // Waits for video completion (10s) before sliding up.
  var PLAYBACK_SPEED = 1.75;     // Playback speed multiplier (1.75 = snappy ~5.7s duration).
  var SHORT_MOBILE = false;      // Set true to skip to final 4s on mobile (<1024px).
  var DISABLE_INTRO = false;     // Set true to bypass intro during development.

  // URL query overrides: ?intro=1 (force play), ?speed=1.75 (custom speed)
  var qSpeed = (location.search.match(/[?&]speed=([0-9.]+)/) || [])[1];
  if (qSpeed) PLAYBACK_SPEED = parseFloat(qSpeed);

  var d = document, de = d.documentElement;
  var $ = function(id) { return d.getElementById(id); };
  var overlay = $('intro-overlay'), video = $('intro-video');
  if (!overlay || !video) return;

  // Enforce permanent mute
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;

  var isDemo = /[?&]intro=1\\b/.test(location.search);
  var seen = false;
  try { seen = sessionStorage.getItem('v_intro_seen') === '1'; } catch(e) {}

  function showPage() {
    de.classList.remove('intro-active');
    d.body.classList.remove('intro-active');
    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
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
    overlay.classList.add('intro-fading');
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
  var skip = d.querySelector('a[href="#main"]');
  if (skip) skip.onclick = finish;

  // Motion reduction and Data-Saver checks
  var redMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var c = navigator.connection;
  var slowConn = c && (c.saveData || (c.effectiveType && /2g/.test(c.effectiveType)));
  if (redMotion || slowConn) {
    video.pause();
    return setTimeout(finish, slowConn ? 800 : 400);
  }

  function applySpeed() {
    try {
      video.muted = true;
      if (PLAYBACK_SPEED && PLAYBACK_SPEED !== 1.0) {
        video.defaultPlaybackRate = PLAYBACK_SPEED;
        video.playbackRate = PLAYBACK_SPEED;
      }
    } catch(e) {}
  }

  if (SHORT_MOBILE && window.innerWidth < 1024) video.currentTime = 6.0;

  var stall = setTimeout(finish, 5000);
  function on(t, f, o) { video.addEventListener(t, f, o); }
  on('loadstart', applySpeed);
  on('loadedmetadata', applySpeed);
  on('play', applySpeed);
  on('playing', function() {
    applySpeed();
    clearTimeout(stall);
  }, { once: true });
  on('error', finish);
  on('stalled', function() { if (!stall) stall = setTimeout(finish, 2000); });
  on('timeupdate', function() {
    if (EARLY_FADE_SECONDS && video.currentTime >= EARLY_FADE_SECONDS) finish();
  });
  on('ended', function() { setTimeout(finish, 120); });

  var started = false;
  function start() {
    if (started) return;
    started = true;
    applySpeed();
    var p = video.play();
    if (p && p.catch) p.catch(function() { setTimeout(finish, 1200); });
  }
  on('loadeddata', start, { once: true });
  on('canplay', start, { once: true });
  on('canplaythrough', start, { once: true });
  setTimeout(start, 600);
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
  .replace(/SHORT_MOBILE/g, 'S_MOB')
  .replace(/DISABLE_INTRO/g, 'DIS')
  .replace(/isFinished/g, 'fin')
  .replace(/redMotion/g, 'rm')
  .replace(/slowConn/g, 'sc')
  .replace(/cleanUp/g, 'cu')
  .replace(/showPage/g, 'sp')
  .replace(/applySpeed/g, 'as');

console.log('intro.min.js byte length:', Buffer.byteLength(min, 'utf8'), 'bytes (', (Buffer.byteLength(min, 'utf8') / 1024).toFixed(2), 'KB )');
fs.writeFileSync('public/js/intro.min.js', min, 'utf8');
