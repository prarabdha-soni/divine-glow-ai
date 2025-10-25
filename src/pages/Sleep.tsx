import { useNavigate } from 'react-router-dom';
import { Play, Clock, Star, Headphones, Volume2, Moon, Sparkles, Heart, ArrowLeft, Timer, Zap, Pause, X } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ModernKrishnaBackground, ModernKrishnaHero } from '@/components/ModernKrishnaBackground';
import { FullScreenVideoPlayer } from '@/components/FullScreenVideoPlayer';
import { useState, useRef, useEffect } from 'react';

const Sleep = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);
  
  const [currentStory, setCurrentStory] = useState<{
    id: string;
    title: string;
    description: string;
    audioUrl: string;
  } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlayStory = (story: { id: string; title: string; description: string; audioUrl: string }) => {
    // Stop all other audio elements on the page
    const allAudio = document.querySelectorAll('audio');
    allAudio.forEach(audio => audio.pause());
    
    if (currentStory?.id === story.id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (currentStory?.id !== story.id) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        audioRef.current = new Audio(story.audioUrl);
        setCurrentStory(story);
      }
      
      audioRef.current?.play();
      setIsPlaying(true);
      
      if (audioRef.current) {
        audioRef.current.onended = () => {
          setIsPlaying(false);
        };
      }
    }
  };

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

  const [activeTab, setActiveTab] = useState('Sleep Stories');
  const tabs = ['Sleep Stories', 'All', 'Meditations', 'Tools'];

  return (
    <div className="min-h-screen krishna-bg">
      {/* Modern Krishna Background */}
      <ModernKrishnaBackground />
      
      {/* Header - Smaller */}
      <div className="relative z-10 pt-8 pb-4">
        <h1 className="text-2xl calm-heading calm-text text-center mb-4">Sleep</h1>

        {/* Tabs - Smaller */}
        <div className="px-6 mb-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full font-medium text-xs whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-white text-purple-900 shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between px-6 mb-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Bedtime Mysteries</h2>
              <p className="text-xs text-white/60 mt-1">Close your eyes and discover...</p>
            </div>
            <span className="text-sm text-amber-400 font-medium">See All</span>
          </div>
          
          <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide">
            {/* Main Featured Krishna Card */}
            <div 
              onClick={() => handlePlayStory({
                id: 'radha-story',
                title: "Radha Krishna ki shaadi kyon nhi hui",
                description: "Unravel the mystery of divine love - why Radha and Krishna never married",
                audioUrl: '/assets/story/radha.mp3'
              })}
              className="relative flex-shrink-0 w-64 cursor-pointer group"
            >
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/images/krishna.png" 
                  alt="Krishna Sleep Story" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* New Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                    New
                  </span>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                    <Play size={12} fill="currentColor" />
                    <span>45 min</span>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                    {currentStory?.id === 'radha-story' && isPlaying ? (
                      <Pause size={28} className="text-white" fill="currentColor" />
                    ) : (
                      <Play size={28} className="text-white ml-1" fill="currentColor" />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Story Info Below Card */}
              <div className="mt-2 flex items-start gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-orange-400 to-pink-500">
                  <div className="w-full h-full flex items-center justify-center text-white text-xs">
                    DN
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-0.5">Radha Krishna ki shaadi kyon nhi hui</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-amber-400">✨ Most addictive tonight</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mahabharat Secrets Card */}
            <div 
              onClick={() => handlePlayStory({
                id: 'mahabharat-secrets',
                title: "Mahabharat Secrets",
                description: "Discover the untold secrets and divine wisdom from the great epic Mahabharat",
                audioUrl: '/assets/story/karan.mp3'
              })}
              className="relative flex-shrink-0 w-64 cursor-pointer group"
            >
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/images/karan.png" 
                  alt="Mahabharat Secrets" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* New Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                    New
                  </span>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                    <Play size={12} fill="currentColor" />
                    <span>30 min</span>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                    {currentStory?.id === 'mahabharat-secrets' && isPlaying ? (
                      <Pause size={28} className="text-white" fill="currentColor" />
                    ) : (
                      <Play size={28} className="text-white ml-1" fill="currentColor" />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Story Info Below Card */}
              <div className="mt-2 flex items-start gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-red-400 to-orange-500">
                  <div className="w-full h-full flex items-center justify-center text-white text-xs">
                    MS
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-0.5">Mahabharat Secrets</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-red-400">🔥 5.2K listening now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Featured Cards */}
            <div className="relative flex-shrink-0 w-64 cursor-pointer group">
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-xl border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <Moon size={48} className="mx-auto mb-2" />
                    <p className="text-sm">More stories coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Stories Section */}
        <div className="mb-8">
          <div className="px-6 mb-4">
            <h2 className="text-lg font-semibold text-white mb-1">Featured Stories</h2>
            <p className="text-xs text-white/60">Handpicked for peaceful sleep</p>
          </div>

          <div className="px-6">
            {/* Featured Story Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer">
              <div className="flex gap-4 p-4">
                {/* Story Thumbnail */}
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                  <img 
                    src="/assets/images/radha.png" 
                    alt="Featured Story"
                    className="w-full h-full object-cover"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play size={20} fill="white" className="text-white ml-0.5" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                    45:30
                  </div>
                </div>

                {/* Story Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-base mb-1">The Divine Love of Radha Krishna</h3>
                      <p className="text-white/60 text-xs mb-2">A soothing tale of eternal devotion that gently guides you into peaceful slumber</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                      <span className="text-white text-xs font-medium">4.9</span>
                    </div>
                    <span className="text-white/50 text-xs">•</span>
                    <span className="text-white/50 text-xs">2.3K plays</span>
                    <span className="text-white/50 text-xs">•</span>
                    <span className="text-white/50 text-xs">Divine Narrator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Mini Audio Player - Shows when story is playing */}
      {currentStory && (
        <div className="fixed bottom-20 left-0 right-0 z-50 px-4">
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-4">
              {/* Story Image */}
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src={currentStory.id === 'mahabharat-secrets' ? '/assets/images/karan.png' : '/assets/images/krishna.png'}
                  alt="Story" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Story Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-base truncate">
                  {currentStory.title}
                </h3>
                <p className="text-white/70 text-sm truncate">
                  {currentStory.description}
                </p>
              </div>
              
              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (isPlaying) {
                      audioRef.current?.pause();
                      setIsPlaying(false);
                    } else {
                      audioRef.current?.play();
                      setIsPlaying(true);
                    }
                  }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? (
                    <Pause size={24} fill="currentColor" />
                  ) : (
                    <Play size={24} fill="currentColor" />
                  )}
                </button>
                
                <button
                  onClick={() => {
                    audioRef.current?.pause();
                    setCurrentStory(null);
                    setIsPlaying(false);
                  }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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