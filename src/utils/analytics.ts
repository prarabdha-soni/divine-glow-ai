/**
 * Simple Analytics Utility
 * Tracks page views and unique visitors using localStorage
 * Can be easily upgraded to use a backend API
 */

interface VisitorData {
  userId: string;
  firstVisit: string;
  lastVisit: string;
  totalVisits: number;
  pageViews: Record<string, number>;
}

const ANALYTICS_KEY = 'nishu_analytics';
const VISITOR_COUNT_KEY = 'nishu_visitor_count';

// Generate a unique user ID
const generateUserId = (): string => {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get or create visitor data
export const getVisitorData = (): VisitorData => {
  const stored = localStorage.getItem(ANALYTICS_KEY);
  
  if (stored) {
    return JSON.parse(stored);
  }
  
  // New visitor
  const newVisitor: VisitorData = {
    userId: generateUserId(),
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
    totalVisits: 0,
    pageViews: {}
  };
  
  return newVisitor;
};

// Save visitor data
const saveVisitorData = (data: VisitorData): void => {
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
};

// Track page view
export const trackPageView = (pageName: string): void => {
  const visitorData = getVisitorData();
  
  // Update visit count
  visitorData.totalVisits += 1;
  visitorData.lastVisit = new Date().toISOString();
  
  // Update page views
  if (!visitorData.pageViews[pageName]) {
    visitorData.pageViews[pageName] = 0;
  }
  visitorData.pageViews[pageName] += 1;
  
  saveVisitorData(visitorData);
  
  // Update global visitor count (simulated - in production, use backend API)
  updateGlobalVisitorCount();
};

// Get total visitor count (simulated - in production, fetch from backend)
export const getTotalVisitorCount = (): number => {
  const count = localStorage.getItem(VISITOR_COUNT_KEY);
  return count ? parseInt(count) : 0;
};

// Update global visitor count (simulated)
const updateGlobalVisitorCount = (): void => {
  const currentCount = getTotalVisitorCount();
  localStorage.setItem(VISITOR_COUNT_KEY, (currentCount + 1).toString());
};

// Get visitor stats
export const getVisitorStats = () => {
  const visitorData = getVisitorData();
  const totalVisitors = getTotalVisitorCount();
  
  return {
    userId: visitorData.userId,
    firstVisit: visitorData.firstVisit,
    lastVisit: visitorData.lastVisit,
    totalVisits: visitorData.totalVisits,
    pageViews: visitorData.pageViews,
    totalVisitors: totalVisitors
  };
};

// Check if user is new (first visit)
export const isNewVisitor = (): boolean => {
  const data = getVisitorData();
  return data.totalVisits === 0;
};

// Get most visited pages
export const getMostVisitedPages = (): Array<{ page: string; views: number }> => {
  const data = getVisitorData();
  return Object.entries(data.pageViews)
    .map(([page, views]) => ({ page, views }))
    .sort((a, b) => b.views - a.views);
};

// Initialize analytics on app load
export const initializeAnalytics = (): void => {
  const isNew = isNewVisitor();
  
  if (isNew) {
    console.log('🎉 New visitor detected!');
  } else {
    const stats = getVisitorStats();
    console.log('👋 Welcome back! Total visits:', stats.totalVisits);
  }
};

