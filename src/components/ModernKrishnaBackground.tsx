import React from 'react';
import { Moon, Star, Sparkles, Heart } from 'lucide-react';

export const ModernKrishnaBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Sleep App Background - Calm & Peaceful */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
        {/* Floating Moon Phases */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10 animate-gentle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            >
              <Moon size={16 + Math.random() * 12} className="text-blue-200" />
            </div>
          ))}
        </div>

        {/* Dreamy Glow Effect */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full blur-3xl" />
        </div>

        {/* Twinkling Stars - Sleep Theme */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Peaceful Moon */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full blur-2xl" />
        </div>

        {/* Soft Ambient Glows - Sleep Theme */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-radial from-blue-500/5 to-transparent blur-3xl" />
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
