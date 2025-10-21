import { useNavigate } from 'react-router-dom';
import { Play, Clock, Star, Search, Filter, Heart, Zap, BookOpen, Music, Moon } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { KrishnaMusicPlayer } from '@/components/KrishnaMusicPlayer';
import { ModernKrishnaBackground, ModernKrishnaHero } from '@/components/ModernKrishnaBackground';
import { useState } from 'react';

const Discover = () => {
  const navigate = useNavigate();
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);

  const categories = [
    { name: 'Mantras', icon: '🕉️', color: 'blue' },
    { name: 'Bhajans', icon: '🎵', color: 'purple' },
    { name: 'Gita Teachings', icon: '📖', color: 'green' },
    { name: 'Krishna Stories', icon: '📚', color: 'orange' },
    { name: 'Sleep Stories', icon: '😴', color: 'pink' },
    { name: 'Vrindavan', icon: '🌿', color: 'teal' }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "Hare Krishna Mahamantra",
      description: "The most powerful mantra for spiritual awakening",
      duration: "10 min",
      category: "Mantras",
      instructor: "ISKCON Devotees",
      rating: 4.9,
      image: "🕉️",
      featured: true
    },
    {
      id: 2,
      title: "Bhagavad Gita Chapter 2",
      description: "The Eternal Soul - Krishna's divine teachings",
      duration: "15 min",
      category: "Gita Teachings",
      instructor: "Spiritual Master",
      rating: 4.9,
      image: "📖",
      featured: false
    },
    {
      id: 3,
      title: "Krishna's Flute Meditation",
      description: "Connect with Krishna through divine flute melodies",
      duration: "12 min",
      category: "Bhajans",
      instructor: "Divine Musician",
      rating: 4.8,
      image: "🪈",
      featured: false
    }
  ];

  const trendingContent = [
    {
      id: 1,
      title: "Radha Krishna Love Story",
      description: "The eternal love story for peaceful sleep",
      duration: "25 min",
      category: "Sleep Stories",
      instructor: "Divine Narrator",
      rating: 4.9,
      image: "💕"
    },
    {
      id: 2,
      title: "Morning Gayatri Mantra",
      description: "Start your day with divine light",
      duration: "8 min",
      category: "Mantras",
      instructor: "Vedic Master",
      rating: 4.8,
      image: "☀️"
    },
    {
      id: 3,
      title: "Krishna's Wisdom",
      description: "Quick teachings for instant peace",
      duration: "5 min",
      category: "Gita Teachings",
      instructor: "Spiritual Guide",
      rating: 4.9,
      image: "🕉️"
    }
  ];

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      pink: 'bg-pink-100 text-pink-600',
      teal: 'bg-teal-100 text-teal-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

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
            <h1 className="text-2xl font-light text-white">Discover</h1>
          </div>
          <div className="flex items-center gap-3">
            <Search size={24} className="text-white/60" />
            <Filter size={24} className="text-white/60" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search mantras, bhajans, Gita teachings, Krishna stories..."
              className="w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-light text-white mb-4">Categories</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 min-w-[120px] text-center cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-sm font-light text-white">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-light text-white">Featured</h2>
            <span className="text-sm text-amber-400 font-light">See all</span>
          </div>
          <div className="space-y-4">
            {featuredContent.map((content) => (
              <div key={content.id} className="calm-card rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-2xl">
                    {content.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-800">{content.title}</h3>
                      {content.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{content.description}</p>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor('blue')}`}>
                        {content.category}
                      </span>
                      <span className="text-xs text-gray-500">by {content.instructor}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-800">{content.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{content.duration}</div>
                    <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                      <Play size={16} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Content */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Trending</h2>
            <span className="text-sm text-blue-600 font-medium">See all</span>
          </div>
          <div className="space-y-3">
            {trendingContent.map((content) => (
              <div key={content.id} className="calm-card rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center text-xl">
                    {content.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{content.title}</h3>
                    <p className="text-xs text-gray-600 mb-1">{content.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{content.duration}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{content.instructor}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-400 fill-current" />
                      <span className="text-xs font-medium text-gray-800">{content.rating}</span>
                    </div>
                    <button className="p-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                      <Play size={12} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <div 
            className="calm-card rounded-2xl p-6 text-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowMusicPlayer(true)}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Music size={24} className="calm-purple-text" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Random Music</h3>
            <p className="text-xs text-gray-600">Krishna bhajans & mantras</p>
          </div>
          <div className="calm-card rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap size={24} className="text-yellow-500" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Quick Start</h3>
            <p className="text-xs text-gray-600">5-minute sessions</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Music Player */}
      <KrishnaMusicPlayer 
        isVisible={showMusicPlayer} 
        onClose={() => setShowMusicPlayer(false)} 
      />
    </div>
  );
};

export default Discover;
