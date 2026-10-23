/**
 * Viruksham Finmart - Dynamic Posts & Media Loader
 * Fetches dynamic articles & videos uploaded by Admin via Admin Portal and renders them live.
 */

(function () {
  'use strict';

  function resolveArticleImage(post) {
    if (post.image_url && typeof post.image_url === 'string' && post.image_url.trim().length > 5) {
      return post.image_url.trim();
    }
    const link = (post.link || '').toLowerCase();
    const source = (post.source || '').toLowerCase();
    const title = (post.title || '').toLowerCase();

    if (link.includes('inflation') || title.includes('பணவீக்கம்') || title.includes('inflation')) {
      return 'https://gumlet.assettype.com/vikatan%2F2023-06%2Fb454faae-2b1d-4001-8b21-4f346a0c5c36%2Finflation.jpg';
    }
    if (link.includes('mutual') || title.includes('mutual fund') || title.includes('மியூச்சுவல்') || title.includes('fund')) {
      return 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&auto=format&fit=crop&q=80';
    }
    if (link.includes('metal') || title.includes('metal') || title.includes('மெட்டல்')) {
      return 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&auto=format&fit=crop&q=80';
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

  async function getSupabaseClient() {
    if (window.vksSupabase) return window.vksSupabase;
    if (window.supabase && window.VKS_SUPABASE_CONFIG) {
      window.vksSupabase = window.supabase.createClient(
        window.VKS_SUPABASE_CONFIG.url,
        window.VKS_SUPABASE_CONFIG.key
      );
      return window.vksSupabase;
    }
    return null;
  }

  async function loadDynamicPosts() {
    try {
      let sb = await getSupabaseClient();
      let allPosts = [];

      // 1. Fetch live from Supabase
      if (sb) {
        let { data, error } = await sb
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(100);

        if (error || !data || data.length === 0) {
          const fallbackRes = await sb
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
          try {
            localStorage.setItem('vks_cached_posts', JSON.stringify(data));
          } catch (e) {}
        }
      }

      // 2. Local fallback if Supabase network failed
      if (allPosts.length === 0) {
        try {
          const cached = localStorage.getItem('vks_cached_posts');
          if (cached) {
            allPosts = JSON.parse(cached);
          }
        } catch (e) {}
      }

      // 3. Separate articles and videos
      const articles = allPosts.filter(p => (p.category === 'article' || p.category === 'news'));
      const videos = allPosts.filter(p => p.category === 'video');

      renderDynamicArticles(articles);

      if (videos.length > 0) {
        renderDynamicVideos(videos);
      }
    } catch (err) {
      console.warn('loadDynamicPosts error:', err);
    }
  }

  function renderDynamicArticles(articles) {
    const articleTrack = document.getElementById('articleTrack') || document.querySelector('.wr-track-articles');
    if (!articleTrack) return;

    if (!Array.isArray(articles) || articles.length === 0) {
      articleTrack.style.animation = 'none';
      articleTrack.innerHTML = `
        <div class="wr-card wr-card-article" style="min-width: 360px; justify-content: center; align-items: center; text-align: center; padding: 32px 24px; border-style: dashed;">
          <div style="font-size: 32px; margin-bottom: 10px;">📰</div>
          <h4 style="font-size: 17px; font-weight: 700; color: #3B2A1A; margin-bottom: 8px;">Articles Published by Admin</h4>
          <p style="font-size: 13.5px; color: #6B5A4B; line-height: 1.5; margin-bottom: 14px;">Articles and insights published via the Admin Portal will be displayed here live.</p>
          <a href="/information#admin" style="display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 700; color: #A9782A; text-decoration: none; border: 1px solid #A9782A; border-radius: 999px; padding: 6px 14px;"><span>🔒</span> Admin Portal &rarr;</a>
        </div>
      `;
      return;
    }

    // Helper to build a single article card HTML with image
    function buildArticleCard(post, isDuplicate = false) {
      const source = post.source || 'Viruksham Insights';
      const title = post.title || 'Market Insights';
      const link = post.link || '#';
      const thumb = resolveArticleImage(post);
      const desc = post.description ? `<p style="font-size:13.5px;color:#6B5A4B;margin-top:8px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(post.description)}</p>` : '';

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

    // Repeat items so the marquee has plenty of width to scroll smoothly
    let itemsToRepeat = articles;
    while (itemsToRepeat.length < 5) {
      itemsToRepeat = itemsToRepeat.concat(articles);
    }

    const set1Html = itemsToRepeat.map(p => buildArticleCard(p, false)).join('');
    const set2Html = itemsToRepeat.map(p => buildArticleCard(p, true)).join('');

    articleTrack.style.animation = '';
    articleTrack.innerHTML = set1Html + set2Html;
  }

  function renderDynamicVideos(videos) {
    const videoTrack = document.getElementById('videoTrack');
    if (!videoTrack || !Array.isArray(videos) || videos.length === 0) return;

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

    let itemsToRepeat = videos;
    while (itemsToRepeat.length < 5) {
      itemsToRepeat = itemsToRepeat.concat(videos);
    }

    const set1Html = itemsToRepeat.map(v => buildVideoCard(v, false)).join('');
    const set2Html = itemsToRepeat.map(v => buildVideoCard(v, true)).join('');

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

  // Initialize and retry until Supabase client is ready
  function initLoader() {
    loadDynamicPosts();
    let retries = 0;
    const interval = setInterval(() => {
      retries++;
      if (window.vksSupabase || retries > 10) {
        clearInterval(interval);
        loadDynamicPosts();
      }
    }, 400);

    // Listen to real-time changes if Supabase channel is available
    setTimeout(async () => {
      const sb = await getSupabaseClient();
      if (sb && typeof sb.channel === 'function') {
        try {
          sb.channel('realtime:posts')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, () => {
              loadDynamicPosts();
            })
            .subscribe();
        } catch (e) {}
      }
    }, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoader);
  } else {
    initLoader();
  }
})();
