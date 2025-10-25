import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Eye, TrendingUp, Clock } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { getVisitorStats, getMostVisitedPages } from '@/utils/analytics';
import { useState, useEffect } from 'react';

const Analytics = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<any>(null);
  const [topPages, setTopPages] = useState<Array<{ page: string; views: number }>>([]);

  useEffect(() => {
    const visitorStats = getVisitorStats();
    const mostVisited = getMostVisitedPages();
    
    setStats(visitorStats);
    setTopPages(mostVisited);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!stats) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e] flex items-center justify-center">
        <div className="text-white">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
      {/* Header */}
      <div className="relative z-10 px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="text-center flex-1">
            <h1 className="text-2xl font-bold text-white">Analytics</h1>
            <p className="text-xs text-white/60">Visitor Statistics</p>
          </div>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 pb-24">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Total Visitors */}
          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Users size={20} className="text-purple-400" />
              </div>
            </div>
            <p className="text-white/60 text-xs mb-1">Total Visitors</p>
            <p className="text-white text-2xl font-bold">{stats.totalVisitors}</p>
          </div>

          {/* Your Visits */}
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Eye size={20} className="text-blue-400" />
              </div>
            </div>
            <p className="text-white/60 text-xs mb-1">Your Visits</p>
            <p className="text-white text-2xl font-bold">{stats.totalVisits}</p>
          </div>
        </div>

        {/* Visit Info */}
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-5 mb-6">
          <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <Clock size={20} />
            Your Visit History
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-white/60 text-xs mb-1">First Visit</p>
              <p className="text-white text-sm">{formatDate(stats.firstVisit)}</p>
            </div>
            <div className="h-px bg-white/10"></div>
            <div>
              <p className="text-white/60 text-xs mb-1">Last Visit</p>
              <p className="text-white text-sm">{formatDate(stats.lastVisit)}</p>
            </div>
            <div className="h-px bg-white/10"></div>
            <div>
              <p className="text-white/60 text-xs mb-1">User ID</p>
              <p className="text-white text-xs font-mono truncate">{stats.userId}</p>
            </div>
          </div>
        </div>

        {/* Most Visited Pages */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
          <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <TrendingUp size={20} />
            Your Top Pages
          </h3>
          {topPages.length > 0 ? (
            <div className="space-y-3">
              {topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-white text-sm capitalize">{page.page}</p>
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full">
                    <p className="text-white text-xs font-semibold">{page.views} views</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/60 text-sm">No page views yet</p>
          )}
        </div>

        {/* Note */}
        <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
          <p className="text-white/60 text-xs text-center">
            📊 Analytics are stored locally on your device. For production, integrate with a backend API for accurate global visitor tracking.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Analytics;

