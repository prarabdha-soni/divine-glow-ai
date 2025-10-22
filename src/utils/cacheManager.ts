/**
 * Cache Manager - Programmatic cache control
 * Auto-clears cache for all users when version changes
 */

const APP_VERSION = '2.2.0'; // Increment this when you want to force cache clear
const VERSION_KEY = 'nishu_app_version';

/**
 * Check if app version has changed and clear cache if needed
 * Forces hard reload for all users on version change
 */
export const checkAndClearCache = (): void => {
  const storedVersion = localStorage.getItem(VERSION_KEY);
  const shouldClearCache = storedVersion !== APP_VERSION;
  
  if (shouldClearCache) {
    console.log('🔄 New version detected! Clearing cache and reloading...');
    
    // Clear all storage
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear all caches
    if ('caches' in window) {
      caches.keys().then(names => {
        Promise.all(names.map(name => caches.delete(name))).then(() => {
          // Set new version
          localStorage.setItem(VERSION_KEY, APP_VERSION);
          
          console.log('✅ Cache cleared! Reloading...');
          
          // Force hard reload from server (bypass all caches)
          window.location.reload();
        });
      });
    } else {
      // Set new version
      localStorage.setItem(VERSION_KEY, APP_VERSION);
      
      // Force hard reload
      window.location.reload();
    }
  }
  
  // Always set version for first-time users
  if (!storedVersion) {
    localStorage.setItem(VERSION_KEY, APP_VERSION);
  }
};

/**
 * Force clear all caches
 */
export const forceClearCache = async (): Promise<void> => {
  try {
    // Clear all caches
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
    }
    
    // Clear storage
    localStorage.clear();
    sessionStorage.clear();
    
    console.log('✅ All caches cleared!');
    
    // Reload page
    window.location.reload();
  } catch (error) {
    console.error('❌ Error clearing cache:', error);
  }
};


/**
 * Get current app version
 */
export const getAppVersion = (): string => {
  return APP_VERSION;
};

/**
 * Check if running latest version
 */
export const isLatestVersion = (): boolean => {
  const storedVersion = localStorage.getItem(VERSION_KEY);
  return storedVersion === APP_VERSION;
};

