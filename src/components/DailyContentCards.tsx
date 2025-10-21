import React, { useState, useEffect } from 'react';
import { Play, Clock, Star, Music, Heart, Moon, Sparkles } from 'lucide-react';
import { spiritualMusicLibrary, getFeaturedMusic } from '@/data/spiritualMusic';

interface DailyContent {
  id: string;
  title: string;
  description: string;
  category: 'meditation' | 'music' | 'story' | 'breathing';
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  vrindavanScene: string;
  icon: React.ReactNode;
  featured: boolean;
}

const dailyContentLibrary: DailyContent[] = [
  {
    id: 'morning-krishna',
    title: 'Morning Krishna - Sunrise Meditation',
    description: 'Start your day with Krishna\'s divine energy as the sun rises over Vrindavan',
    category: 'meditation',
    duration: 15,
    difficulty: 'beginner',
    vrindavanScene: 'gokul-village',
    icon: <Moon size={20} />,
    featured: true
  },
  {
    id: 'radha-love-story',
    title: 'Radha\'s Love Story - Bedtime Tale',
    description: 'Drift to sleep with the beautiful story of Radha and Krishna\'s eternal love',
    category: 'story',
    duration: 25,
    difficulty: 'beginner',
    vrindavanScene: 'lotus-pond',
    icon: <Heart size={20} />,
    featured: true
  },
  {
    id: 'yamuna-breathing',
    title: 'Yamuna River Breathing',
    description: 'Breathe like the flowing Yamuna river for deep relaxation',
    category: 'breathing',
    duration: 10,
    difficulty: 'beginner',
    vrindavanScene: 'temple-river',
    icon: <Sparkles size={20} />,
    featured: false
  },
  {
    id: 'krishna-flute-mastery',
    title: 'Krishna Flute Mastery - Advanced',
    description: 'Master the art of inner peace through Krishna\'s flute techniques',
    category: 'meditation',
    duration: 45,
    difficulty: 'advanced',
    vrindavanScene: 'forest-moonlight',
    icon: <Music size={20} />,
    featured: false
  },
  {
    id: 'govardhan-hill-journey',
    title: 'Govardhan Hill Journey',
    description: 'Embark on a spiritual journey up the sacred Govardhan Hill',
    category: 'story',
    duration: 30,
    difficulty: 'intermediate',
    vrindavanScene: 'govardhan-hill',
    icon: <Star size={20} />,
    featured: true
  },
  {
    id: 'lotus-pond-meditation',
    title: 'Lotus Pond Meditation',
    description: 'Meditate by the sacred Radha Kund lotus pond',
    category: 'meditation',
    duration: 20,
    difficulty: 'intermediate',
    vrindavanScene: 'lotus-pond',
    icon: <Heart size={20} />,
    featured: false
  }
];

export const DailyContentCards = () => {
  const [todayContent, setTodayContent] = useState<DailyContent[]>([]);
  const [featuredMusic, setFeaturedMusic] = useState(spiritualMusicLibrary.slice(0, 2));

  useEffect(() => {
    // Get today's content based on day of week
    const today = new Date().getDay();
    const contentForToday = dailyContentLibrary.filter((_, index) => index % 3 === today % 3);
    setTodayContent(contentForToday.slice(0, 2)); // Show 2 daily content items
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-red-400';
      default: return 'text-muted-foreground';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'meditation': return <Moon size={16} className="krishna-blue-text" />;
      case 'music': return <Music size={16} className="radha-pink-text" />;
      case 'story': return <Heart size={16} className="temple-gold-text" />;
      case 'breathing': return <Sparkles size={16} className="peacock-teal-text" />;
      default: return <Star size={16} className="temple-gold-text" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Daily Content Header */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold temple-gold-text mb-2">Today's Spiritual Journey</h2>
        <p className="text-sm text-muted-foreground">Fresh content inspired by Vrindavan's divine energy</p>
      </div>

      {/* Daily Content Cards */}
      {todayContent.map((content) => (
        <div key={content.id} className="divine-card rounded-3xl p-6 relative overflow-hidden temple-glow">
          {/* Featured Badge */}
          {content.featured && (
            <div className="absolute top-4 left-4">
              <div className="px-3 py-1 rounded-full temple-gradient text-xs font-semibold temple-gold-text">
                Today's Pick
              </div>
            </div>
          )}

          {/* Vrindavan Scene Indicator */}
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
              <div className="w-4 h-4 temple-gold-text">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Title and Category */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                {getCategoryIcon(content.category)}
                <span className="text-sm font-medium text-muted-foreground capitalize">
                  {content.category}
                </span>
                <span className={`text-xs font-medium ${getDifficultyColor(content.difficulty)}`}>
                  {content.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold temple-gold-text mb-2">
                {content.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {content.description}
              </p>
            </div>

            {/* Duration and Play Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Clock size={16} className="temple-gold-text" />
                  <span className="text-sm text-muted-foreground">{content.duration} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="temple-gold-text" />
                  <span className="text-sm text-muted-foreground">4.8</span>
                </div>
              </div>
              <button className="px-6 py-3 rounded-2xl temple-gradient text-primary-foreground font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Play size={16} fill="currentColor" />
                Start
              </button>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-16 h-16 temple-gold-text">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Featured Music Section */}
      <div className="divine-card rounded-3xl p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold temple-gold-text mb-2">Featured Music</h3>
          <p className="text-sm text-muted-foreground">Divine melodies for your spiritual practice</p>
        </div>
        
        <div className="space-y-3">
          {featuredMusic.map((music) => (
            <div key={music.id} className="flex items-center gap-4 p-3 rounded-2xl bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-xl temple-gradient flex items-center justify-center text-2xl">
                {music.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold temple-gold-text truncate">{music.title}</h4>
                <p className="text-xs text-muted-foreground truncate">{music.artist}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock size={12} className="temple-gold-text" />
                  <span className="text-xs text-muted-foreground">{music.duration} min</span>
                  <Star size={12} className="temple-gold-text" />
                  <span className="text-xs text-muted-foreground">{music.rating}</span>
                </div>
              </div>
              <button className="p-2 rounded-full temple-gradient text-primary-foreground hover:scale-110 transition-transform">
                <Play size={16} fill="currentColor" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
