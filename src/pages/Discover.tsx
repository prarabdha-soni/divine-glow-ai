import { useNavigate } from 'react-router-dom';
import { Play, Clock, Star, Search, Filter, Heart, Zap, BookOpen, Music, Moon, ArrowLeft } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ModernKrishnaBackground, ModernKrishnaHero } from '@/components/ModernKrishnaBackground';
import { FullScreenVideoPlayer } from '@/components/FullScreenVideoPlayer';
import { useState } from 'react';

const Discover = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);

  const categories = [
    { name: 'Sleep Stories', icon: '😴', color: 'from-slate-600 to-blue-700' },
    { name: 'Peaceful Bhajans', icon: '🎵', color: 'from-amber-500 to-orange-600' },
    { name: 'Mantras', icon: '🕉️', color: 'from-purple-500 to-pink-600' },
    { name: 'Gita Teachings', icon: '📖', color: 'from-emerald-500 to-teal-600' },
    { name: 'Krishna Stories', icon: '📚', color: 'from-rose-500 to-pink-600' },
    { name: 'Vrindavan', icon: '🌿', color: 'from-green-500 to-emerald-600' }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "Krishna's Flute for Deep Sleep",
      description: "Divine flute melodies to guide you into peaceful sleep",
      duration: "45 min",
      category: "Sleep Stories",
      instructor: "Divine Narrator",
      rating: 4.9,
      image: "🪈",
      featured: true,
      youtubeEmbed: "https://www.youtube.com/embed/5qap5aO4i9A"
    },
    {
      id: 2,
      title: "Radha Krishna Love Story",
      description: "The eternal love story for peaceful sleep",
      duration: "30 min",
      category: "Sleep Stories",
      instructor: "Spiritual Guide",
      rating: 4.9,
      image: "💕",
      featured: true,
      youtubeEmbed: "https://www.youtube.com/embed/8V4X0CE7fvc"
    },
    {
      id: 3,
      title: "Hare Krishna Mahamantra - Sleep Version",
      description: "Powerful mantra for deep sleep and tranquility",
      duration: "30 min",
      category: "Mantras",
      instructor: "ISKCON Devotees",
      rating: 4.9,
      image: "🕉️",
      featured: false,
      youtubeEmbed: "https://www.youtube.com/embed/7kKJO8LtL-M"
    },
    {
      id: 4,
      title: "Peaceful Bhajans for Sleep",
      description: "Gentle devotional songs for peaceful sleep",
      duration: "20 min",
      category: "Peaceful Bhajans",
      instructor: "Divine Musician",
      rating: 4.8,
      image: "🎵",
      featured: false,
      youtubeEmbed: "https://www.youtube.com/embed/8VVbqI2OjFA"
    }
  ];

  const trendingContent = [
    {
      id: 1,
      title: "Yamuna River at Moonlight",
      description: "A gentle journey along the sacred Yamuna river under the moonlight",
      duration: "25 min",
      category: "Sleep Stories",
      instructor: "Vedic Storyteller",
      rating: 4.7,
      image: "🌙",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw"
    },
    {
      id: 2,
      title: "Om Namah Shivaya - Sleep Version",
      description: "Sacred Shiva mantra for inner peace and sleep",
      duration: "25 min",
      category: "Mantras",
      instructor: "Spiritual Masters",
      rating: 4.8,
      image: "🕉️",
      youtubeEmbed: "https://www.youtube.com/embed/8VVbqI2OjFA"
    },
    {
      id: 3,
      title: "Vrindavan Forest Sounds",
      description: "Peaceful forest ambience for deep sleep",
      duration: "60 min",
      category: "Vrindavan",
      instructor: "Nature Sounds",
      rating: 4.6,
      image: "🌲",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw"
    },
    {
      id: 4,
      title: "Krishna's Childhood Stories",
      description: "Sweet stories of little Krishna's divine pastimes",
      duration: "50 min",
      category: "Krishna Stories",
      instructor: "Divine Storyteller",
      rating: 4.9,
      image: "👶",
      youtubeEmbed: "https://www.youtube.com/embed/8VVbqI2OjFA"
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
    <div className="min-h-screen krishna-bg">
      {/* Modern Krishna Background */}
      <ModernKrishnaBackground />
      
      {/* Header */}
      <div className="relative z-10 px-6 pt-16 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="w-10 h-10 krishna-gradient rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🕉️</span>
            </div>
            <h1 className="text-2xl calm-heading krishna-text">Discover</h1>
          </div>
          <div className="flex items-center gap-3">
            <Search size={24} className="krishna-text-subtle" />
            <Filter size={24} className="krishna-text-subtle" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 calm-text-subtle" />
            <input
              type="text"
              placeholder="Search sleep stories, peaceful bhajans, mantras, Krishna teachings..."
              className="w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 calm-text placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent calm-body"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl calm-heading calm-text mb-4">Categories</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 min-w-[120px] text-center cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-sm calm-heading calm-text">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl calm-heading calm-text">Featured</h2>
            <span className="text-sm text-amber-400 font-light">See all</span>
          </div>
          <div className="space-y-6">
            {featuredContent.map((content) => (
              <div key={content.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {content.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg calm-heading calm-text">{content.title}</h3>
                      {content.featured && (
                        <span className="px-2 py-1 bg-amber-400/20 text-amber-300 text-xs rounded-full font-light">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm calm-text-muted mb-1 calm-body">{content.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full font-light">
                        {content.category}
                      </span>
                      <span className="text-xs calm-text-subtle calm-caption">by {content.instructor}</span>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs calm-text-subtle calm-caption">{content.rating}</span>
                      </div>
                      <span className="text-xs calm-text-subtle calm-caption">{content.duration}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo({
                    url: content.youtubeEmbed,
                    title: content.title,
                    description: content.description
                  })}
                  className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center text-white hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300 border border-white/20"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-3">
                      <Play size={24} className="text-white" />
                    </div>
                    <p className="text-sm font-light">Tap to watch full screen</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Content */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl calm-heading calm-text">Trending</h2>
            <span className="text-sm text-amber-400 font-light">See all</span>
          </div>
          <div className="space-y-4">
            {trendingContent.map((content) => (
              <div key={content.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    {content.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg calm-heading calm-text mb-1">{content.title}</h3>
                    <p className="text-sm calm-text-muted mb-1 calm-body">{content.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full font-light">
                        {content.category}
                      </span>
                      <span className="text-xs calm-text-subtle calm-caption">by {content.instructor}</span>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs calm-text-subtle calm-caption">{content.rating}</span>
                      </div>
                      <span className="text-xs calm-text-subtle calm-caption">{content.duration}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo({
                    url: content.youtubeEmbed,
                    title: content.title,
                    description: content.description
                  })}
                  className="w-full h-32 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl flex items-center justify-center text-white hover:from-emerald-500/30 hover:to-teal-600/30 transition-all duration-300 border border-white/20"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-2">
                      <Play size={18} className="text-white" />
                    </div>
                    <p className="text-xs font-light">Tap to play</p>
                  </div>
                </button>
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
            <h3 className="text-lg calm-heading calm-text mb-2">Sleep Stories</h3>
            <p className="text-sm calm-text-muted font-light">Divine bedtime tales</p>
          </div>
          <div 
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
            onClick={() => navigate('/gurus')}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <BookOpen size={28} className="text-white" />
            </div>
            <h3 className="text-lg calm-heading calm-text mb-2">Spiritual Gurus</h3>
            <p className="text-sm calm-text-muted font-light">Learn from masters</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Full Screen Video Player */}
      {selectedVideo && (
        <FullScreenVideoPlayer
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </div>
  );
};

export default Discover;
