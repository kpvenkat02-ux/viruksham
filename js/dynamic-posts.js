/**
 * Viruksham Finmart - Dynamic Posts & Media Loader
 * Fetches dynamic articles & videos uploaded via Admin Portal and renders them for website visitors.
 */

(function () {
  'use strict';

  function resolveArticleImage(post) {
    if (post.image_url && post.image_url.trim()) {
      return post.image_url.trim();
    }
    const link = (post.link || '').toLowerCase();
    const source = (post.source || '').toLowerCase();
    const title = (post.title || '').toLowerCase();

    if (link.includes('inflation') || title.includes('பணவீக்கம்') || title.includes('inflation')) {
      return 'https://gumlet.assettype.com/vikatan%2F2023-06%2Fb454faae-2b1d-4001-8b21-4f346a0c5c36%2Finflation.jpg';
    }
    if (link.includes('metal') || title.includes('metal') || title.includes('மெட்டல்')) {
      return 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&auto=format&fit=crop&q=80';
    }
    if (source.includes('vikatan') || link.includes('vikatan')) {
      return 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80';
    }
    if (source.includes('myreality') || link.includes('myreality')) {
      return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80';
    }
    if (source.includes('nithi') || link.includes('nithimuthaleedu')) {
      return 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80';
    }
    return 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80';
  }

  async function loadDynamicPosts() {
    try {
      let allPosts = [];

      // 1. If Supabase client is available, fetch live posts from 'posts' table
      if (window.vksSupabase) {
        let { data, error } = await window.vksSupabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(100);
        if (error || !data || data.length === 0) {
          const fallbackRes = await window.vksSupabase
            .from('information_posts')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(100);
          if (!fallbackRes.error && fallbackRes.data) {
            data = fallbackRes.data;
          }
        }
        if (Array.isArray(data) && data.length > 0) {
          allPosts = data;
        }
      }

      // 2. Check local fallback cache if any
      if (allPosts.length === 0) {
        try {
          const cached = localStorage.getItem('vks_cached_posts');
          if (cached) {
            allPosts = JSON.parse(cached);
          }
        } catch (e) {}
      }

      if (!Array.isArray(allPosts) || allPosts.length === 0) {
        return;
      }

      const articles = allPosts.filter(p => p.category === 'article' || p.category === 'news');
      const videos = allPosts.filter(p => p.category === 'video');

      if (articles.length > 0) {
        renderDynamicArticles(articles);
      }
      if (videos.length > 0) {
        renderDynamicVideos(videos);
      }
    } catch (err) {
      // Fallback silently to static HTML cards
    }
  }

  function renderDynamicArticles(articles) {
    const articleTrack = document.querySelector('.wr-track-articles');
    if (!articleTrack) return;

    // Helper to build a single article card HTML with thumbnail image
    function buildArticleCard(post, isDuplicate = false) {
      const source = post.source || 'Viruksham Insights';
      const title = post.title || 'Market Insights';
      const link = post.link || '#';
      const thumb = resolveArticleImage(post);
      const desc = post.description ? `<p style="font-size:13.5px;color:#6B5A4B;margin-top:6px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(post.description)}</p>` : '';

      return `
        <a href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer" class="wr-card wr-card-article" aria-label="Read: ${escapeHtml(source)} - ${escapeHtml(title)}" ${isDuplicate ? 'aria-hidden="true" tabindex="-1"' : ''}>
          <div class="wr-article-thumb-box">
            <img src="${escapeHtml(thumb)}" alt="${escapeHtml(title)}" class="wr-article-thumb" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80';" />
          </div>
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

    let set1Html = articles.map(p => buildArticleCard(p, false)).join('');
    let set2Html = articles.map(p => buildArticleCard(p, true)).join('');

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
