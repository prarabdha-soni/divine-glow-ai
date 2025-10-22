// Immediate cache clearing script
// This runs before React loads
(function() {
  const APP_VERSION = '2.2.0';
  const VERSION_KEY = 'nishu_app_version';
  
  const storedVersion = localStorage.getItem(VERSION_KEY);
  
  if (storedVersion !== APP_VERSION) {
    console.log('🔄 Clearing all caches immediately...');
    
    // Clear all storage
    try {
      localStorage.clear();
      sessionStorage.clear();
      
      // Set new version
      localStorage.setItem(VERSION_KEY, APP_VERSION);
      
      // Clear service worker caches
      if ('caches' in window) {
        caches.keys().then(function(names) {
          for (let name of names) {
            caches.delete(name);
          }
        });
      }
      
      console.log('✅ Cache cleared! Version: ' + APP_VERSION);
    } catch (e) {
      console.error('Cache clear error:', e);
    }
  }
})();

