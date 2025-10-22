import { useNavigate } from 'react-router-dom';
import { Settings, Crown, Trophy, Calendar, Clock, Star, Download, Bell, HelpCircle, LogOut, RefreshCw } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { forceClearCache, getAppVersion } from '@/utils/cacheManager';

const Profile = () => {
  const navigate = useNavigate();
  
  const handleClearCache = () => {
    if (confirm('Clear all cache and reload app? This will sign you out.')) {
      forceClearCache();
    }
  };

  const stats = [
    { label: 'Current Streak', value: '5 days', icon: Crown, color: 'text-yellow-500' },
    { label: 'Total Sessions', value: '127', icon: Trophy, color: 'text-blue-500' },
    { label: 'This Month', value: '23 sessions', icon: Calendar, color: 'text-green-500' },
    { label: 'Total Time', value: '12h 45m', icon: Clock, color: 'text-purple-500' }
  ];

  const achievements = [
    { name: 'First Mantra', description: 'Complete your first Hare Krishna chant', earned: true, icon: '🕉️' },
    { name: 'Devotion Week', description: 'Complete 7 days of spiritual practice', earned: true, icon: '🏆' },
    { name: 'Krishna Consciousness', description: 'Complete 30 days of divine connection', earned: false, icon: '🧘' },
    { name: 'Divine Stories', description: 'Complete 10 Krishna sleep stories', earned: true, icon: '📚' }
  ];

  const menuItems = [
    { icon: Download, label: 'Download for Offline', arrow: true },
    { icon: Bell, label: 'Notifications', arrow: true },
    { icon: Settings, label: 'Settings', arrow: true },
    { icon: RefreshCw, label: 'Clear Cache & Refresh', arrow: false, action: handleClearCache, info: true },
    { icon: HelpCircle, label: 'Help & Support', arrow: true },
    { icon: LogOut, label: 'Sign Out', arrow: false, danger: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <div className="px-6 pt-16 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 calm-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🕉️</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
          </div>
          <Settings size={24} className="text-gray-600" />
        </div>

        {/* User Info */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">JD</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">Krishna Devotee</h2>
          <p className="text-gray-600">Divine Member</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="calm-card rounded-2xl p-4 text-center">
              <div className={`w-8 h-8 mx-auto mb-2 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className="text-lg font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className={`calm-card rounded-xl p-4 ${achievement.earned ? 'opacity-100' : 'opacity-50'}`}>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{achievement.name}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  {achievement.earned && (
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star size={16} className="text-yellow-500 fill-current" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Chart Placeholder */}
        <div className="calm-card rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">This Week's Progress</h3>
          <div className="flex items-end justify-between h-24">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <div key={day} className="flex flex-col items-center">
                <div 
                  className={`w-6 rounded-t-lg ${
                    index === 2 ? 'bg-blue-500 h-16' : 
                    index === 4 ? 'bg-blue-400 h-12' : 
                    'bg-gray-200 h-8'
                  }`}
                />
                <span className="text-xs text-gray-600 mt-2">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              onClick={item.action}
              className={`calm-card rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors ${
                item.danger ? 'text-red-600' : item.info ? 'text-blue-600' : 'text-gray-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.arrow && (
                <span className="text-gray-400">›</span>
              )}
            </div>
          ))}
          
          {/* App Version */}
          <div className="text-center pt-4 pb-2">
            <p className="text-xs text-gray-400">
              Nishu v{getAppVersion()} • Made with 💜
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Profile;
