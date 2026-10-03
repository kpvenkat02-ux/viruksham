/**
 * Viruksham Finmart - Dynamic Posts & Media Loader
 * Fetches dynamic articles & videos uploaded via Admin Portal and renders them for website visitors.
 */

(function () {
  'use strict';

  async function loadDynamicPosts() {
    try {
      const response = await fetch('/api/posts?limit=100');
      if (!response.ok) return;

      const result = await response.json();
      if (result.status !== 'ok' || !Array.isArray(result.posts) || result.posts.length === 0) {
        return;
      }

      const allPosts = result.posts;
      const articles = allPosts.filter(p => p.category === 'article' || p.category === 'news');
      const videos = allPosts.filter(p => p.category === 'video');

      if (articles.length > 0) {
        renderDynamicArticles(articles);
      }
      if (videos.length > 0) {
        renderDynamicVideos(videos);
      }
    } catch (err) {
      console.warn('[Viruksham] Dynamic posts loader fallback to static:', err.message);
    }
  }

  function renderDynamicArticles(articles) {
    const articleTrack = document.querySelector('.wr-track-articles');
    if (!articleTrack) return;

    // Helper to build a single article card HTML
    function buildArticleCard(post, isDuplicate = false) {
      const source = post.source || 'Viruksham Insights';
      const title = post.title || 'Market Insights';
      const link = post.link || '#';
      const desc = post.description ? `<p style="font-size:13.5px;color:#6B5A4B;margin-top:6px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(post.description)}</p>` : '';

      return `
        <a href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer" class="wr-card wr-card-article" aria-label="Read: ${escapeHtml(source)} - ${escapeHtml(title)}" ${isDuplicate ? 'aria-hidden="true" tabindex="-1"' : ''}>
          <div class="wr-article-top">
            <span class="wr-source-pill">${escapeHtml(source)}</span>
            <h3 class="wr-article-title">${escapeHtml(title)}</h3>
            ${desc}
          </div>
          <div class="wr-article-bottom">
            <div class="wr-article-divider" aria-hidden="true"></div>
            <span class="wr-article-cta">Read article <span class="wr-arrow" aria-hidden="true">&rarr;</span></span>
          </div>
        </a>
      `;
    }

    // Generate Set 1 (Originals) + Set 2 (Duplicates for smooth loop)
    let set1Html = articles.map(p => buildArticleCard(p, false)).join('');
    let set2Html = articles.map(p => buildArticleCard(p, true)).join('');

    // If fewer than 5 items, repeat more times so marquee is sufficiently wide
    if (articles.length < 5) {
      set1Html += articles.map(p => buildArticleCard(p, false)).join('');
      set2Html += articles.map(p => buildArticleCard(p, true)).join('');
    }

    articleTrack.innerHTML = set1Html + set2Html;
  }

  function renderDynamicVideos(videos) {
    const videoTrack = document.getElementById('videoTrack');
    if (!videoTrack) return;

    function extractYtId(url) {
      if (!url) return null;
      const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
      return match ? match[1] : null;
    }

    function buildVideoCard(video, isDuplicate = false) {
      const ytId = extractYtId(video.link) || 'ObCdt67vubs';
      const thumb = video.image_url || `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
      const title = video.title || 'Market Update';

      return `
        <div role="button" tabindex="${isDuplicate ? '-1' : '0'}" class="wr-card wr-card-video" ${isDuplicate ? 'aria-hidden="true"' : ''} onclick="openSamePageVideo('${escapeJs(ytId)}', '${escapeJs(title)}')" onkeydown="if(event.key==='Enter'||event.key===' ')openSamePageVideo('${escapeJs(ytId)}', '${escapeJs(title)}')" aria-label="Play video: ${escapeHtml(title)}">
          <div class="wr-video-thumb-box">
            <img src="${escapeHtml(thumb)}" alt="Thumbnail for ${escapeHtml(title)}" class="wr-video-thumb" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80';" />
            <div class="wr-play-btn" aria-hidden="true">
              <div class="wr-play-icon"></div>
            </div>
          </div>
          <h3 class="wr-video-title">${escapeHtml(title)}</h3>
          <span class="wr-play-now-hint">Play Video &#9654;</span>
        </div>
      `;
    }

    let set1Html = videos.map(v => buildVideoCard(v, false)).join('');
    let set2Html = videos.map(v => buildVideoCard(v, true)).join('');

    if (videos.length < 5) {
      set1Html += videos.map(v => buildVideoCard(v, false)).join('');
      set2Html += videos.map(v => buildVideoCard(v, true)).join('');
    }

    videoTrack.innerHTML = set1Html + set2Html;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeJs(str) {
    if (!str) return '';
    return String(str).replace(/'/g, "\\'").replace(/"/g, '\\"');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDynamicPosts);
  } else {
    loadDynamicPosts();
  }
})();
