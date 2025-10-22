/**
 * Cache Manager - Programmatic cache control
 */

const APP_VERSION = '2.0.0'; // Increment this when you want to force cache clear
const VERSION_KEY = 'nishu_app_version';

/**
 * Check if app version has changed and clear cache if needed
 */
export const checkAndClearCache = (): void => {
  const storedVersion = localStorage.getItem(VERSION_KEY);
  
  if (storedVersion !== APP_VERSION) {
    console.log('🔄 New version detected, clearing cache...');
    
    // Clear localStorage (except version key)
    const keysToKeep = [VERSION_KEY];
    Object.keys(localStorage).forEach(key => {
      if (!keysToKeep.includes(key)) {
        localStorage.removeItem(key);
      }
    });
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    // Update version
    localStorage.setItem(VERSION_KEY, APP_VERSION);
    
    // Force reload from server (bypass cache)
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
    
    console.log('✅ Cache cleared successfully!');
    
    // Optional: Show a toast notification to user
    showUpdateNotification();
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
 * Show update notification to user
 */
const showUpdateNotification = (): void => {
  // You can replace this with your toast notification system
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    z-index: 10000;
    font-family: system-ui, -apple-system, sans-serif;
    animation: slideIn 0.3s ease-out;
  `;
  notification.innerHTML = '✨ App updated to latest version!';
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
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

