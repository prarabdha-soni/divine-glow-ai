import React from 'react';
import { Moon, Star, Sparkles, Heart } from 'lucide-react';

export const ModernKrishnaBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Modern Krishna Temple - AI Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Floating Lotus Petals - Modern Style */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 opacity-20 animate-gentle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-pink-300">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Modern Krishna Flute Scene */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl" />
        </div>

        {/* Floating Om Symbols */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-10 animate-gentle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 3}s`,
              }}
            >
              🕉️
            </div>
          ))}
        </div>

        {/* Modern Krishna Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-96">
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full opacity-15"
            fill="none"
          >
            {/* Modern Krishna Figure */}
            <path
              d="M200 280 Q200 200 180 180 Q160 160 160 140 Q160 120 180 100 Q200 80 220 100 Q240 120 240 140 Q240 160 220 180 Q200 200 200 280 Z"
              fill="url(#krishnaGradient)"
            />
            
            {/* Flute */}
            <path
              d="M220 140 L280 120 L280 130 L220 150 Z"
              fill="url(#fluteGradient)"
            />
            
            {/* Peacock Feather */}
            <path
              d="M180 100 Q160 80 140 90 Q120 100 140 110 Q160 120 180 100 Z"
              fill="url(#featherGradient)"
            />
            
            {/* Lotus Pond */}
            <ellipse
              cx="200"
              cy="250"
              rx="80"
              ry="30"
              fill="url(#waterGradient)"
            />
            
            {/* Modern Lotus */}
            <circle cx="180" cy="240" r="12" fill="url(#lotusGradient)" />
            <circle cx="220" cy="245" r="10" fill="url(#lotusGradient)" />
            <circle cx="200" cy="250" r="11" fill="url(#lotusGradient)" />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="krishnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="fluteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#0891b2" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0e7490" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Soft Glow Effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-amber-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-radial from-blue-400/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-purple-400/5 to-transparent blur-2xl" />
      </div>
    </div>
  );
};

// Modern Krishna Hero Images Component
export const ModernKrishnaHero = ({ type = 'meditation' }: { type?: 'meditation' | 'sleep' | 'music' | 'wisdom' }) => {
  const heroImages = {
    meditation: {
      emoji: '🧘‍♂️',
      gradient: 'from-blue-600 via-purple-600 to-indigo-700',
      title: 'Krishna Meditation',
      description: 'Find inner peace through divine consciousness'
    },
    sleep: {
      emoji: '🌙',
      gradient: 'from-slate-800 via-blue-900 to-indigo-900',
      title: 'Krishna Sleep Stories',
      description: 'Drift into peaceful sleep with divine tales'
    },
    music: {
      emoji: '🎵',
      gradient: 'from-amber-600 via-orange-600 to-red-600',
      title: 'Krishna Bhajans',
      description: 'Immerse yourself in devotional melodies'
    },
    wisdom: {
      emoji: '📖',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      title: 'Gita Wisdom',
      description: 'Discover eternal truths and spiritual guidance'
    }
  };

  const current = heroImages[type];

  return (
    <div className={`w-full h-64 bg-gradient-to-br ${current.gradient} rounded-3xl relative overflow-hidden`}>
      {/* Modern Krishna Scene */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl opacity-30 animate-gentle-float">
          {current.emoji}
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6">
        <h2 className="text-2xl font-light text-white mb-2">{current.title}</h2>
        <p className="text-white/80 text-sm font-light">{current.description}</p>
      </div>
    </div>
  );
};
