/**
 * Viruksham Finmart - Supabase Information Feed & In-Page Admin CRUD Manager
 */

(function () {
  'use strict';

  let currentAdminUser = null;
  let allPosts = [];
  let filteredPosts = [];
  let activeCategory = 'all';
  let activeSearch = '';

  // Known article image registry / smart extractor for articles
  const KNOWN_ARTICLE_IMAGES = {
    'mutual-fund-selection-guidance': 'https://gumlet.vikatan.com/vikatan%2F2026-10-05%2Fqf9ixkzi%2Fimg1_crop_16x9_0_0_10000_8055.jpg?rect=0%2C0%2C2009%2C1055&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100',
    'guidance-for-inflation-based-income-investments': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    'a-new-opportunity-to-invest-in-metal': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80',
    'kee-pi-vengkttraamkirussnnnnn': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80'
  };

  document.addEventListener('DOMContentLoaded', () => {
    initApp();
  });

  async function initApp() {
    setupEventListeners();
    await checkAuthSession();
    await fetchPosts();
    checkAdminUrlTrigger();
  }

  function checkAdminUrlTrigger() {
    if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
      setTimeout(() => {
        window.vksOpenLoginModal();
      }, 200);
    }
  }

  // Check Supabase Auth
  async function checkAuthSession() {
    const sb = window.vksSupabase;
    if (!sb) return;

    try {
      const { data: { session } } = await sb.auth.getSession();
      currentAdminUser = session?.user || null;
      updateAdminBarUI();

      sb.auth.onAuthStateChange((_event, session) => {
        currentAdminUser = session?.user || null;
        updateAdminBarUI();
        renderPosts();
      });
    } catch (e) {
      console.warn('Auth check error:', e);
    }
  }

  function updateAdminBarUI() {
    const adminBanner = document.getElementById('adminBanner');
    const footerLoginBtn = document.getElementById('footerAdminBtn');
    
    if (currentAdminUser) {
      if (adminBanner) adminBanner.classList.remove('d-none');
      if (footerLoginBtn) footerLoginBtn.innerHTML = '<span>⚡</span> Admin Dashboard (Active)';
    } else {
      if (adminBanner) adminBanner.classList.add('d-none');
      if (footerLoginBtn) footerLoginBtn.innerHTML = '<span>🔒</span> Admin Login';
    }
  }

  // Fetch Posts strictly from Supabase
  async function fetchPosts() {
    const container = document.getElementById('postsGrid');
    const loadingEl = document.getElementById('feedLoading');
    if (loadingEl) loadingEl.classList.remove('d-none');

    const sb = window.vksSupabase;
    if (!sb) {
      allPosts = [];
      renderPosts();
      if (loadingEl) loadingEl.classList.add('d-none');
      return;
    }

    try {
      const { data, error } = await sb
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Supabase query error:', error.message);
        allPosts = [];
      } else {
        allPosts = data || [];
      }
    } catch (err) {
      console.warn('Supabase fetch error:', err);
      allPosts = [];
    } finally {
      if (loadingEl) loadingEl.classList.add('d-none');
      renderPosts();
    }
  }

  function renderPosts() {
    const container = document.getElementById('postsGrid');
    const emptyState = document.getElementById('feedEmpty');
    const countEl = document.getElementById('feedCount');
    if (!container) return;

    filteredPosts = allPosts.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const q = activeSearch.toLowerCase().trim();
      const matchesSearch = !q ||
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.source && p.source.toLowerCase().includes(q)) ||
        (p.link && p.link.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    if (countEl) {
      countEl.textContent = `${filteredPosts.length} Update${filteredPosts.length === 1 ? '' : 's'}`;
    }

    if (filteredPosts.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('d-none');
      return;
    }

    if (emptyState) emptyState.classList.add('d-none');
    container.innerHTML = filteredPosts.map(post => buildPostCard(post)).join('');
  }

  function extractYouTubeId(url) {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    return match ? match[1] : null;
  }

  function resolvePostImage(post) {
    if (post.image_url && post.image_url.trim()) {
      return post.image_url.trim();
    }
    const isVideo = post.category === 'video' || (post.link && post.link.includes('youtube'));
    const ytId = extractYouTubeId(post.link);
    if (isVideo && ytId) {
      return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    }

    if (post.link) {
      for (const [key, img] of Object.entries(KNOWN_ARTICLE_IMAGES)) {
        if (post.link.includes(key)) {
          return img;
        }
      }
    }
    return '';
  }

  function buildPostCard(post) {
    const isVideo = post.category === 'video' || (post.link && post.link.includes('youtube'));
    const ytId = extractYouTubeId(post.link);
    const dateStr = post.created_at ? new Date(post.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
    const source = post.source || (isVideo ? 'YouTube' : 'Viruksham Insights');
    const badgeClass = isVideo ? 'badge-video' : (post.category === 'news' ? 'badge-news' : 'badge-article');
    const imageUrl = resolvePostImage(post);

    // Admin Action Buttons
    const adminControls = currentAdminUser ? `
      <div class="info-card-admin-actions">
        <button class="btn-card-edit" onclick="window.vksOpenEditModal('${escapeJs(post.id)}')" title="Edit Post">✏️ Edit</button>
        <button class="btn-card-del" onclick="window.vksDeletePost('${escapeJs(post.id)}')" title="Delete Post">🗑️</button>
      </div>
    ` : '';

    // Media Thumbnail Box (Both Article & Video)
    let mediaThumbHtml = '';
    if (isVideo && ytId) {
      const vidImg = imageUrl || `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
      mediaThumbHtml = `
        <div class="info-thumb-box info-video-thumb" onclick="window.vksPlayVideo('${escapeJs(ytId)}', '${escapeJs(post.title)}')">
          <img src="${escapeHtml(vidImg)}" alt="${escapeHtml(post.title)}" loading="lazy" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${ytId}/hqdefault.jpg';" />
          <div class="info-play-overlay"><div class="info-play-icon"></div></div>
          <span class="info-thumb-badge"><span>▶</span> Video</span>
        </div>
      `;
    } else if (imageUrl) {
      mediaThumbHtml = `
        <a href="${escapeHtml(post.link)}" target="_blank" rel="noopener noreferrer" class="info-thumb-box info-article-thumb" style="display:block; text-decoration:none;" aria-label="Open article: ${escapeHtml(post.title)}">
          <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(post.title)}" loading="lazy" onerror="this.parentElement.style.display='none';" />
          <span class="info-thumb-badge" style="background:rgba(1, 47, 106, 0.88);"><span>📰</span> ${escapeHtml(source)}</span>
        </a>
      `;
    }

    // Action CTA Button
    const actionButton = isVideo ? `
      <button type="button" class="info-btn-cta" onclick="window.vksPlayVideo('${escapeJs(ytId || '')}', '${escapeJs(post.title)}')">
        Watch Video <span class="cta-arrow">▶</span>
      </button>
    ` : `
      <a href="${escapeHtml(post.link)}" target="_blank" rel="noopener noreferrer" class="info-btn-cta">
        Read Full Information <span class="cta-arrow">&rarr;</span>
      </a>
    `;

    return `
      <div class="info-card ${isVideo ? 'is-video-card' : ''} ${imageUrl ? 'has-thumb' : ''}" id="post-${escapeHtml(post.id)}">
        <div class="info-card-top">
          <div class="info-card-meta">
            <span class="info-source-badge ${badgeClass}">${escapeHtml(source)}</span>
            ${dateStr ? `<span class="info-date">${dateStr}</span>` : ''}
          </div>
          ${adminControls}
        </div>

        ${mediaThumbHtml}

        <h3 class="info-card-title"><a href="${escapeHtml(post.link)}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;">${escapeHtml(post.title)}</a></h3>
        ${post.description ? `<p class="info-card-desc">${escapeHtml(post.description)}</p>` : ''}

        <div class="info-card-footer">
          <div class="info-card-divider"></div>
          <div class="info-card-action-row">
            ${actionButton}
            <a href="${escapeHtml(post.link)}" target="_blank" rel="noopener noreferrer" class="info-link-subtle" title="Open source URL">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function updateImagePreview(url) {
    const previewBox = document.getElementById('postFormImagePreview');
    const previewImg = document.getElementById('postFormImagePreviewImg');
    if (!previewBox || !previewImg) return;

    if (url && url.trim()) {
      previewImg.src = url.trim();
      previewImg.onerror = () => {
        previewBox.style.display = 'none';
      };
      previewImg.onload = () => {
        previewBox.style.display = 'block';
      };
    } else {
      previewBox.style.display = 'none';
      previewImg.src = '';
    }
  }

  function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('feedSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        activeSearch = e.target.value;
        renderPosts();
      });
    }

    // Category Tabs
    document.querySelectorAll('.feed-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.feed-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category || 'all';
        renderPosts();
      });
    });

    // Image Input preview listener
    const imgInput = document.getElementById('postFormImage');
    if (imgInput) {
      imgInput.addEventListener('input', (e) => {
        updateImagePreview(e.target.value);
      });
    }

    // Auto source & image detector on URL input
    const linkInput = document.getElementById('postFormLink');
    if (linkInput) {
      linkInput.addEventListener('input', (e) => {
        const url = e.target.value.trim();
        const urlLower = url.toLowerCase();
        const catSelect = document.getElementById('postFormCategory');
        const srcInput = document.getElementById('postFormSource');
        const imgInputEl = document.getElementById('postFormImage');

        if (urlLower.includes('youtube.com') || urlLower.includes('youtu.be')) {
          if (catSelect) catSelect.value = 'video';
          if (srcInput && !srcInput.value) srcInput.value = 'YouTube';
          const ytId = extractYouTubeId(url);
          if (ytId && imgInputEl && !imgInputEl.value) {
            imgInputEl.value = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
            updateImagePreview(imgInputEl.value);
          }
        } else if (urlLower.includes('vikatan.com')) {
          if (catSelect) catSelect.value = 'article';
          if (srcInput && !srcInput.value) srcInput.value = 'Vikatan';
          for (const [key, img] of Object.entries(KNOWN_ARTICLE_IMAGES)) {
            if (urlLower.includes(key) && imgInputEl && !imgInputEl.value) {
              imgInputEl.value = img;
              updateImagePreview(img);
            }
          }
        } else if (urlLower.includes('myreality.co.in')) {
          if (catSelect) catSelect.value = 'article';
          if (srcInput && !srcInput.value) srcInput.value = 'MyReality';
          if (imgInputEl && !imgInputEl.value) {
            imgInputEl.value = 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80';
            updateImagePreview(imgInputEl.value);
          }
        } else if (urlLower.includes('nithimuthaleedu')) {
          if (catSelect) catSelect.value = 'article';
          if (srcInput && !srcInput.value) srcInput.value = 'Nithi Muthal Eedu';
        }
      });
    }
  }

  // Window Global Handlers for In-Page Modals & CRUD
  window.vksOpenLoginModal = function (e) {
    if (e && e.preventDefault) e.preventDefault();
    if (window.location.hash !== '#admin') {
      try { history.pushState(null, '', '#admin'); } catch (_) {}
    }
    if (currentAdminUser) {
      window.vksOpenPostModal();
      return;
    }
    const modal = document.getElementById('adminLoginModal');
    if (modal) modal.classList.add('is-active');
  };

  window.vksCloseLoginModal = function () {
    const modal = document.getElementById('adminLoginModal');
    if (modal) modal.classList.remove('is-active');
    if (window.location.hash === '#admin') {
      try { history.replaceState(null, '', window.location.pathname + window.location.search); } catch (_) {}
    }
  };

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin') {
      window.vksOpenLoginModal();
    }
  });

  window.vksHandleLogin = async function (e) {
    e.preventDefault();
    const sb = window.vksSupabase;
    if (!sb) {
      showToast('Supabase client not initialized', 'error');
      return;
    }

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const btn = document.getElementById('btnLoginSubmit');

    if (btn) btn.disabled = true;

    try {
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      if (error) {
        showToast(error.message || 'Invalid credentials', 'error');
      } else {
        currentAdminUser = data.user;
        showToast('Welcome back, Admin!', 'success');
        window.vksCloseLoginModal();
        updateAdminBarUI();
        renderPosts();
      }
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      if (btn) btn.disabled = false;
    }
  };

  window.vksHandleLogout = async function () {
    const sb = window.vksSupabase;
    if (!sb) return;

    if (!confirm('Log out from Admin session?')) return;
    await sb.auth.signOut();
    currentAdminUser = null;
    updateAdminBarUI();
    renderPosts();
    showToast('Logged out of Admin session', 'info');
  };

  // Post CRUD Modals
  window.vksOpenPostModal = function (postId = null) {
    const modal = document.getElementById('postCrudModal');
    const form = document.getElementById('postCrudForm');
    const titleEl = document.getElementById('postModalHeading');

    if (!modal || !form) return;

    form.reset();
    document.getElementById('postFormId').value = '';
    const imgInputEl = document.getElementById('postFormImage');
    if (imgInputEl) imgInputEl.value = '';
    updateImagePreview('');

    if (postId) {
      const post = allPosts.find(p => p.id === postId);
      if (post) {
        titleEl.textContent = 'Edit Information Post';
        document.getElementById('postFormId').value = post.id;
        document.getElementById('postFormTitle').value = post.title || '';
        document.getElementById('postFormDesc').value = post.description || '';
        document.getElementById('postFormLink').value = post.link || '';
        document.getElementById('postFormCategory').value = post.category || 'article';
        document.getElementById('postFormSource').value = post.source || '';
        const resolvedImg = post.image_url || resolvePostImage(post);
        if (imgInputEl) {
          imgInputEl.value = resolvedImg || '';
          updateImagePreview(resolvedImg);
        }
      }
    } else {
      titleEl.textContent = 'Upload New Information / Link';
    }

    modal.classList.add('is-active');
  };

  window.vksClosePostModal = function () {
    const modal = document.getElementById('postCrudModal');
    if (modal) modal.classList.remove('is-active');
  };

  window.vksOpenEditModal = function (id) {
    window.vksOpenPostModal(id);
  };

  window.vksSavePost = async function (e) {
    e.preventDefault();
    const sb = window.vksSupabase;
    if (!sb || !currentAdminUser) {
      showToast('Please log in as Admin to save updates', 'error');
      return;
    }

    const id = document.getElementById('postFormId').value;
    const title = document.getElementById('postFormTitle').value.trim();
    const description = document.getElementById('postFormDesc').value.trim();
    const link = document.getElementById('postFormLink').value.trim();
    const category = document.getElementById('postFormCategory').value;
    const source = document.getElementById('postFormSource').value.trim() || 'Viruksham Insights';
    const imgInputEl = document.getElementById('postFormImage');
    const image_url = imgInputEl ? imgInputEl.value.trim() : '';
    const btn = document.getElementById('btnPostSubmit');

    if (!title || !link) {
      showToast('Title and Link are required!', 'error');
      return;
    }

    if (btn) btn.disabled = true;

    try {
      const payload = {
        title,
        description,
        link,
        category,
        source,
        image_url,
        updated_at: new Date().toISOString()
      };

      if (id) {
        // Update
        const { error } = await sb.from('posts').update(payload).eq('id', id);
        if (error) throw error;
        showToast('Information updated successfully!', 'success');
      } else {
        // Insert
        payload.created_at = new Date().toISOString();
        const { error } = await sb.from('posts').insert([payload]);
        if (error) throw error;
        showToast('New information published live!', 'success');
      }

      window.vksClosePostModal();
      await fetchPosts();
    } catch (err) {
      showToast('Save failed: ' + err.message, 'error');
    } finally {
      if (btn) btn.disabled = false;
    }
  };

  window.vksDeletePost = async function (id) {
    const post = allPosts.find(p => p.id === id);
    const title = post ? post.title : 'this item';
    if (!confirm(`Are you sure you want to delete:\n"${title}"?`)) return;

    const sb = window.vksSupabase;
    if (!sb || !currentAdminUser) {
      showToast('Please log in as Admin to delete', 'error');
      return;
    }

    try {
      const { error } = await sb.from('posts').delete().eq('id', id);
      if (error) throw error;
      showToast('Post removed successfully', 'success');
      await fetchPosts();
    } catch (err) {
      showToast('Delete failed: ' + err.message, 'error');
    }
  };

  // Video Modal
  window.vksPlayVideo = function (videoId, title) {
    if (!videoId) return;
    const modal = document.getElementById('infoVideoModal');
    const iframe = document.getElementById('infoVideoIframe');
    const titleEl = document.getElementById('infoVideoModalTitle');

    if (!modal || !iframe) return;
    if (titleEl) titleEl.textContent = title || 'Playing Video';

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  window.vksCloseVideo = function () {
    const modal = document.getElementById('infoVideoModal');
    const iframe = document.getElementById('infoVideoIframe');
    if (!modal || !iframe) return;

    iframe.src = '';
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  function showToast(msg, type = 'info') {
    let container = document.getElementById('vksToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'vksToastContainer';
      container.className = 'vks-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `vks-toast vks-toast-${type}`;
    toast.textContent = msg;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
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
})();
