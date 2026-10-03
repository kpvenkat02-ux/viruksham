/**
 * Viruksham Finmart - Supabase Cloud Configuration
 * Handles direct real-time communication with Supabase for user read & admin CRUD.
 */
window.VKS_SUPABASE_CONFIG = {
  url: 'https://vnonkucqeasptbivcntp.supabase.co',
  key: 'sb_publishable_qE0TCfr1vuHIDNi8ydrXIw_h7uOZOUU'
};

(function () {
  function initSupabase() {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
      window.vksSupabase = window.supabase.createClient(
        window.VKS_SUPABASE_CONFIG.url,
        window.VKS_SUPABASE_CONFIG.key
      );
    }
  }

  if (window.supabase) {
    initSupabase();
  } else {
    window.addEventListener('DOMContentLoaded', initSupabase);
  }
})();
