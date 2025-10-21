import { useNavigate } from 'react-router-dom';
import { Play, Clock, Star, Headphones, Volume2, Moon, Sparkles, Heart, ArrowLeft, Timer, Zap } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ModernKrishnaBackground, ModernKrishnaHero } from '@/components/ModernKrishnaBackground';
import { FullScreenVideoPlayer } from '@/components/FullScreenVideoPlayer';
import { useState } from 'react';

const Sleep = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);

  const sleepStories = [
    {
      id: 1,
      title: "Krishna's Flute in Vrindavan",
      author: "Divine Narrator",
      duration: "45 min",
      description: "Drift to sleep with Krishna's divine flute melodies in the sacred groves of Vrindavan",
      image: "🪈",
      featured: true,
      rating: 4.9,
      youtubeEmbed: "https://www.youtube.com/embed/5qap5aO4i9A"
    },
    {
      id: 2,
      title: "Radha's Love Story",
      author: "Spiritual Guide",
      duration: "30 min",
      description: "The eternal love story of Radha and Krishna for peaceful sleep",
      image: "💕",
      featured: false,
      rating: 4.8,
      youtubeEmbed: "https://www.youtube.com/embed/8V4X0CE7fvc"
    },
    {
      id: 3,
      title: "Yamuna River at Moonlight",
      author: "Vedic Storyteller",
      duration: "25 min",
      description: "A gentle journey along the sacred Yamuna river under the moonlight",
      image: "🌙",
      featured: false,
      rating: 4.7,
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw"
    },
    {
      id: 4,
      title: "Govardhan Hill Tales",
      author: "Divine Sage",
      duration: "40 min",
      description: "Ancient stories of Krishna lifting Govardhan Hill for protection",
      image: "🏔️",
      featured: false,
      rating: 4.8,
      youtubeEmbed: "https://www.youtube.com/embed/7kKJO8LtL-M"
    },
    {
      id: 5,
      title: "Vrindavan Forest Sounds",
      author: "Nature Narrator",
      duration: "35 min",
      description: "Peaceful forest sounds with Krishna's divine presence",
      image: "🌲",
      featured: false,
      rating: 4.6,
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw"
    },
    {
      id: 6,
      title: "Krishna's Childhood Stories",
      author: "Divine Storyteller",
      duration: "50 min",
      description: "Sweet stories of little Krishna's divine pastimes",
      image: "👶",
      featured: false,
      rating: 4.9,
      youtubeEmbed: "https://www.youtube.com/embed/8VVbqI2OjFA"
    }
  ];

  const sleepMusic = [
    {
      id: 1,
      title: "Radhe Tere Charno Ki Dhul Jo Mil Jaye",
      duration: "5 min",
      description: "Peaceful devotional song for deep sleep",
      image: "🕉️",
      category: "Bhajan",
      artist: "Bhumika Sharma",
      youtubeEmbed: "https://www.youtube.com/embed/k-mHGA2lvnU"
    },
    {
      id: 2,
      title: "रात में सोने से पहले जरूर सुनें ये मन को शांति देने वाले भजन",
      duration: "10 min",
      description: "Peaceful bhajans for peaceful sleep",
      image: "🌙",
      category: "Bhajan",
      artist: "Divine Chants",
      youtubeEmbed: "https://www.youtube.com/embed/bqRTmMl6VbU"
    },
    {
      id: 3,
      title: "Krishna Bhajan Before Sleep - सांवला सलोना",
      duration: "8 min",
      description: "Beautiful Krishna bhajan for peaceful sleep",
      image: "😴",
      category: "Bhajan",
      artist: "Devotional Music",
      youtubeEmbed: "https://www.youtube.com/embed/fZWbEI4s_00"
    },
    {
      id: 4,
      title: "Radha Krishna Sleeping Peace Song",
      duration: "15 min",
      description: "Slow and peaceful Radha Krishna devotional song",
      image: "💕",
      category: "Bhajan",
      artist: "Slow + Reverb",
      youtubeEmbed: "https://www.youtube.com/embed/8V4X0CE7fvc"
    },
    {
      id: 5,
      title: "Hare Krishna Mahamantra - Sleep Meditation",
      duration: "30 min",
      description: "Powerful mantra for deep sleep and tranquility",
      image: "🙏",
      category: "Mantra",
      artist: "ISKCON Devotees",
      youtubeEmbed: "https://www.youtube.com/embed/7kKJO8LtL-M"
    },
    {
      id: 6,
      title: "Krishna Flute Sleep Music",
      duration: "20 min",
      description: "Divine flute melodies for peaceful sleep",
      image: "🪈",
      category: "Flute",
      artist: "Divine Music",
      youtubeEmbed: "https://www.youtube.com/embed/5qap5aO4i9A"
    },
    {
      id: 7,
      title: "Om Namah Shivaya - Sleep Version",
      duration: "25 min",
      description: "Sacred Shiva mantra for inner peace and sleep",
      image: "🕉️",
      category: "Mantra",
      artist: "Spiritual Masters",
      youtubeEmbed: "https://www.youtube.com/embed/8VVbqI2OjFA"
    },
    {
      id: 8,
      title: "Vrindavan Forest Sounds",
      duration: "60 min",
      description: "Peaceful forest ambience for deep sleep",
      image: "🌲",
      category: "Nature",
      artist: "Nature Sounds",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw"
    }
  ];

  const sleepSounds = [
    {
      id: 1,
      title: "Temple Bells",
      duration: "∞",
      description: "Sacred temple bells for peaceful sleep",
      image: "🔔",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw"
    },
    {
      id: 2,
      title: "Yamuna River",
      duration: "∞",
      description: "Gentle flowing water sounds",
      image: "🌊",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw"
    },
    {
      id: 3,
      title: "Vrindavan Forest",
      duration: "∞",
      description: "Sacred forest ambience",
      image: "🌲",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw"
    },
    {
      id: 4,
      title: "Peacock Calls",
      duration: "∞",
      description: "Divine peacock sounds",
      image: "🦚",
      youtubeEmbed: "https://www.youtube.com/embed/5qap5aO4i9A"
    },
    {
      id: 5,
      title: "Sacred Chants",
      duration: "∞",
      description: "Gentle devotional chants",
      image: "🙏",
      youtubeEmbed: "https://www.youtube.com/embed/7kKJO8LtL-M"
    },
    {
      id: 6,
      title: "Flute Melodies",
      duration: "∞",
      description: "Krishna's divine flute",
      image: "🪈",
      youtubeEmbed: "https://www.youtube.com/embed/5qap5aO4i9A"
    },
    {
      id: 7,
      title: "Rain in Vrindavan",
      duration: "∞",
      description: "Gentle rain sounds in sacred Vrindavan",
      image: "🌧️",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw"
    },
    {
      id: 8,
      title: "Om Chanting",
      duration: "∞",
      description: "Sacred Om vibrations for deep sleep",
      image: "🕉️",
      youtubeEmbed: "https://www.youtube.com/embed/8VVbqI2OjFA"
    }
  ];

  return (
    <div className="min-h-screen krishna-bg">
      {/* Modern Krishna Background */}
      <ModernKrishnaBackground />
      
      {/* Header */}
      <div className="relative z-10 px-6 pt-16 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')}
              className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="w-10 h-10 krishna-gradient rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🕉️</span>
            </div>
            <h1 className="text-2xl calm-heading krishna-text">Krishna Sleep</h1>
          </div>
          <Heart size={24} className="text-white/60" />
        </div>

        {/* Featured Sleep Story - Calm Style Hero */}
        <div className="mb-8">
          <ModernKrishnaHero type="sleep" />
        </div>

        {/* Sleep Stories Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl calm-heading calm-text">Sleep Stories</h2>
            <span className="text-sm text-amber-400 font-light">See all</span>
          </div>
          <div className="space-y-6">
            {sleepStories.map((story) => (
              <div key={story.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {story.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg calm-heading calm-text">{story.title}</h3>
                      {story.featured && (
                        <span className="px-2 py-1 bg-amber-400/20 text-amber-300 text-xs rounded-full font-light">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm calm-text-muted mb-1 calm-body">{story.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs calm-text-subtle calm-caption">by {story.author}</span>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400 fill-current" />
                        <span className="text-xs calm-text-subtle calm-caption">{story.rating}</span>
                      </div>
                      <span className="text-xs calm-text-subtle calm-caption">{story.duration}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo({
                    url: story.youtubeEmbed,
                    title: story.title,
                    description: story.description
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

        {/* Sleep Music Section - Inline Video Players */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl calm-heading calm-text">Peaceful Sleep Bhajans</h2>
            <span className="text-sm text-amber-400 font-light">See all</span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {sleepMusic.map((music) => (
              <div key={music.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    {music.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg calm-heading calm-text mb-1">{music.title}</h3>
                    <p className="text-sm calm-text-muted mb-1 calm-body">{music.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full font-light">
                        {music.category}
                      </span>
                      <span className="text-xs calm-text-subtle calm-caption">by {music.artist}</span>
                      <span className="text-xs calm-text-subtle calm-caption">{music.duration}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo({
                    url: music.youtubeEmbed,
                    title: music.title,
                    description: music.description
                  })}
                  className="w-full h-48 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center text-white hover:from-amber-500/30 hover:to-orange-600/30 transition-all duration-300 border border-white/20"
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

        {/* Sleep Sounds Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl calm-heading calm-text">Divine Sounds</h2>
            <span className="text-sm text-amber-400 font-light">See all</span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {sleepSounds.map((sound) => (
              <div key={sound.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    {sound.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg calm-heading calm-text mb-1">{sound.title}</h3>
                    <p className="text-sm calm-text-muted mb-1 calm-body">{sound.description}</p>
                    <span className="text-xs calm-text-subtle calm-caption">{sound.duration}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo({
                    url: sound.youtubeEmbed,
                    title: sound.title,
                    description: sound.description
                  })}
                  className="w-full h-32 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center text-white hover:from-teal-500/30 hover:to-cyan-600/30 transition-all duration-300 border border-white/20"
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

        {/* Quick Sleep Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Timer size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-light text-white mb-2">Mantra Timer</h3>
            <p className="text-sm text-white/70 font-light">Sacred chanting timer</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Headphones size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-light text-white mb-2">Sleep Sounds</h3>
            <p className="text-sm text-white/70 font-light">Divine ambient sounds</p>
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

export default Sleep;