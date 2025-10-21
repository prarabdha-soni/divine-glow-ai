import { useNavigate } from 'react-router-dom';
import { Play, Clock, Star, Gift, Check, Heart, BookOpen, Moon } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ModernKrishnaBackground, ModernKrishnaHero } from '@/components/ModernKrishnaBackground';

const Index = () => {
  const navigate = useNavigate();
  
  // Sample data for Calm app
  const currentStreak = 1;
  const weeklyData = [
    { day: 'M', completed: false },
    { day: 'T', completed: false },
    { day: 'W', completed: true },
    { day: 'T', completed: false },
    { day: 'F', completed: false },
    { day: 'S', completed: false },
    { day: 'S', completed: false }
  ];

  return (
    <div className="min-h-screen calm-bg">
      {/* Modern Krishna Background */}
      <ModernKrishnaBackground />
      
      {/* Header */}
      <div className="relative z-10 px-6 pt-16 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🕉️</span>
            </div>
            <h1 className="text-2xl calm-heading calm-text">Krishna Calm</h1>
          </div>
          <Gift size={24} className="calm-text-subtle" />
        </div>

        {/* Daily Streak Counter */}
        <div className="text-center mb-8">
          <div className="relative w-40 h-40 mx-auto mb-6">
            {/* Progress Ring */}
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#progressGradient)"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${(currentStreak / 7) * 251.2} 251.2`}
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl calm-heading calm-text">{currentStreak}</div>
                <div className="text-sm calm-text-subtle calm-caption">Day</div>
              </div>
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="flex justify-center gap-3 mb-6">
            {weeklyData.map((day, index) => (
              <div
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  day.completed 
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg' 
                    : 'bg-white/10 text-white/40'
                }`}
              >
                {day.completed ? <Check size={18} /> : <span className="text-sm font-light">{day.day}</span>}
              </div>
            ))}
          </div>

          <p className="calm-text-muted calm-body text-sm leading-relaxed max-w-xs mx-auto">
            You're off to a great start with Krishna's divine guidance {currentStreak} day this week. Keep it up!
          </p>
        </div>

        {/* Featured Collections - Calm Style */}
        <div className="mb-8">
          <h2 className="text-xl calm-heading calm-text mb-4">Recommended Collections</h2>
          <div className="space-y-4">
            {/* Daily Krishna Meditation */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Play size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-light text-white mb-1">Daily Krishna Meditation</h3>
                  <p className="text-sm text-white/70 mb-1">Mantra • Hare Krishna Mahamantra</p>
                  <p className="text-xs text-white/50">Jan 24 • Divine Love Meditation</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-light text-white">10 min</div>
                </div>
              </div>
            </div>

            {/* Daily Gita Wisdom */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-light text-white mb-1">Daily Gita Wisdom</h3>
                  <p className="text-sm text-white/70 mb-1">Teaching • Bhagavad Gita Chapter 2</p>
                  <p className="text-xs text-white/50">Jan 24 • The Eternal Soul</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-light text-white">8 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters - Calm Style */}
        <div className="mb-8">
          <h2 className="text-xl font-light text-white mb-4">Categories</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[
              { name: 'Meditation', icon: '🧘‍♂️', color: 'from-blue-500 to-purple-600' },
              { name: 'Sleep', icon: '🌙', color: 'from-slate-600 to-blue-700' },
              { name: 'Music', icon: '🎵', color: 'from-amber-500 to-orange-600' },
              { name: 'Wisdom', icon: '📖', color: 'from-emerald-500 to-teal-600' },
              { name: 'Stories', icon: '📚', color: 'from-pink-500 to-rose-600' },
              { name: 'Kids', icon: '👶', color: 'from-purple-500 to-pink-600' }
            ].map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 min-w-[120px] text-center cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-sm font-light text-white">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div 
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
            onClick={() => navigate('/sleep')}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Moon size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-light text-white mb-2">Krishna Stories</h3>
            <p className="text-sm text-white/70 font-light">Divine bedtime tales</p>
          </div>
          <div 
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
            onClick={() => navigate('/discover')}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Star size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-light text-white mb-2">Discover</h3>
            <p className="text-sm text-white/70 font-light">Krishna teachings & bhajans</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;