import { useNavigate, useLocation } from 'react-router-dom';
import { Play, Clock, Star, Headphones, Volume2, Moon, Sparkles, Heart, ArrowLeft, Timer, Zap, Pause, X, Calendar } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { useState, useRef, useEffect } from 'react';

const Sleep = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
        // Set higher volume for better audio experience
        audioRef.current.volume = 1.0;
        audioRef.current.preload = 'auto';
        setCurrentStory(story);
        
        // Skip first 5 seconds after metadata is loaded
        audioRef.current.onloadedmetadata = () => {
          if (audioRef.current) {
            audioRef.current.currentTime = 5;
          }
        };
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
      youtubeEmbed: "https://www.youtube.com/embed/5qap5aO4i9A?start=5"
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
      youtubeEmbed: "https://www.youtube.com/embed/8V4X0CE7fvc?start=5"
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
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw?start=5"
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
      youtubeEmbed: "https://www.youtube.com/embed/7kKJO8LtL-M?start=5"
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
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw?start=5"
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
      youtubeEmbed: "https://www.youtube.com/embed/8VVbqI2OjFA?start=5"
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
      youtubeEmbed: "https://www.youtube.com/embed/k-mHGA2lvnU?start=5"
    },
    {
      id: 2,
      title: "रात में सोने से पहले जरूर सुनें ये मन को शांति देने वाले भजन",
      duration: "10 min",
      description: "Peaceful bhajans for peaceful sleep",
      image: "🌙",
      category: "Bhajan",
      artist: "Divine Chants",
      youtubeEmbed: "https://www.youtube.com/embed/bqRTmMl6VbU?start=5"
    },
    {
      id: 3,
      title: "Krishna Bhajan Before Sleep - सांवला सलोना",
      duration: "8 min",
      description: "Beautiful Krishna bhajan for peaceful sleep",
      image: "😴",
      category: "Bhajan",
      artist: "Devotional Music",
      youtubeEmbed: "https://www.youtube.com/embed/fZWbEI4s_00?start=5"
    },
    {
      id: 4,
      title: "Radha Krishna Sleeping Peace Song",
      duration: "15 min",
      description: "Slow and peaceful Radha Krishna devotional song",
      image: "💕",
      category: "Bhajan",
      artist: "Slow + Reverb",
      youtubeEmbed: "https://www.youtube.com/embed/8V4X0CE7fvc?start=5"
    },
    {
      id: 5,
      title: "Hare Krishna Mahamantra - Sleep Meditation",
      duration: "30 min",
      description: "Powerful mantra for deep sleep and tranquility",
      image: "🙏",
      category: "Mantra",
      artist: "ISKCON Devotees",
      youtubeEmbed: "https://www.youtube.com/embed/7kKJO8LtL-M?start=5"
    },
    {
      id: 6,
      title: "Krishna Flute Sleep Music",
      duration: "20 min",
      description: "Divine flute melodies for peaceful sleep",
      image: "🪈",
      category: "Flute",
      artist: "Divine Music",
      youtubeEmbed: "https://www.youtube.com/embed/5qap5aO4i9A?start=5"
    },
    {
      id: 7,
      title: "Om Namah Shivaya - Sleep Version",
      duration: "25 min",
      description: "Sacred Shiva mantra for inner peace and sleep",
      image: "🕉️",
      category: "Mantra",
      artist: "Spiritual Masters",
      youtubeEmbed: "https://www.youtube.com/embed/8VVbqI2OjFA?start=5"
    },
    {
      id: 8,
      title: "Vrindavan Forest Sounds",
      duration: "60 min",
      description: "Peaceful forest ambience for deep sleep",
      image: "🌲",
      category: "Nature",
      artist: "Nature Sounds",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw?start=5"
    }
  ];

  const sleepSounds = [
    {
      id: 1,
      title: "Temple Bells",
      duration: "∞",
      description: "Sacred temple bells for peaceful sleep",
      image: "🔔",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw?start=5"
    },
    {
      id: 2,
      title: "Yamuna River",
      duration: "∞",
      description: "Gentle flowing water sounds",
      image: "🌊",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw?start=5"
    },
    {
      id: 3,
      title: "Vrindavan Forest",
      duration: "∞",
      description: "Sacred forest ambience",
      image: "🌲",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw?start=5"
    },
    {
      id: 4,
      title: "Peacock Calls",
      duration: "∞",
      description: "Divine peacock sounds",
      image: "🦚",
      youtubeEmbed: "https://www.youtube.com/embed/5qap5aO4i9A?start=5"
    },
    {
      id: 5,
      title: "Sacred Chants",
      duration: "∞",
      description: "Gentle devotional chants",
      image: "🙏",
      youtubeEmbed: "https://www.youtube.com/embed/7kKJO8LtL-M?start=5"
    },
    {
      id: 6,
      title: "Flute Melodies",
      duration: "∞",
      description: "Krishna's divine flute",
      image: "🪈",
      youtubeEmbed: "https://www.youtube.com/embed/5qap5aO4i9A?start=5"
    },
    {
      id: 7,
      title: "Rain in Vrindavan",
      duration: "∞",
      description: "Gentle rain sounds in sacred Vrindavan",
      image: "🌧️",
      youtubeEmbed: "https://www.youtube.com/embed/4Y0lBuQOCIw?start=5"
    },
    {
      id: 8,
      title: "Om Chanting",
      duration: "∞",
      description: "Sacred Om vibrations for deep sleep",
      image: "🕉️",
      youtubeEmbed: "https://www.youtube.com/embed/8VVbqI2OjFA?start=5"
    }
  ];

  const [activeTab, setActiveTab] = useState('Sleep Stories');
  const tabs = ['Sleep Stories', 'All', 'Meditations', 'Tools', 'Dance'];

  const danceVideos = [
    {
      id: 1,
      title: "Radha's Divine Grace",
      description: "Sacred movements of eternal love",
      youtubeId: "UQzwKqDpr00",
      youtubeEmbed: "https://www.youtube.com/embed/UQzwKqDpr00?autoplay=1&rel=0",
      thumbnail: ""
    },
    {
      id: 2,
      title: "Krishna's Celestial Dance",
      description: "Divine energy in motion",
      youtubeId: "2ed2mjG3CVs",
      youtubeEmbed: "https://www.youtube.com/embed/2ed2mjG3CVs?autoplay=1&rel=0",
      thumbnail: ""
    }
  ];

  const [danceThumbnails, setDanceThumbnails] = useState<Record<string, string>>({});
  const [youtubeStoryInfo, setYoutubeStoryInfo] = useState<{
    title: string;
    thumbnail: string;
    description: string;
  } | null>(null);
  const [radhaStoryInfo, setRadhaStoryInfo] = useState<{
    title: string;
    thumbnail: string;
    description: string;
  } | null>(null);
  const [karanStoryInfo, setKaranStoryInfo] = useState<{
    title: string;
    thumbnail: string;
    description: string;
  } | null>(null);
  const [musicThumbnails, setMusicThumbnails] = useState<Record<string, { title: string; thumbnail: string }>>({});

  // Fetch YouTube thumbnails for dance videos
  useEffect(() => {
    const fetchDanceThumbnails = async () => {
      const YOUTUBE_API_KEY = 'AIzaSyBvQcLcPhoGKqhh6bRKnGHQ4By7O6ZaMjw';
      const videoIds = danceVideos.map(v => v.youtubeId).join(',');
      
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        
        if (data.items) {
          const thumbnails: Record<string, string> = {};
          data.items.forEach((item: any) => {
            thumbnails[item.id] = item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url;
          });
          setDanceThumbnails(thumbnails);
        }
      } catch (error) {
        console.error('Error fetching dance thumbnails:', error);
      }
    };

    fetchDanceThumbnails();
  }, []);

  // Fetch YouTube story info
  useEffect(() => {
    const fetchYoutubeStoryInfo = async () => {
      const YOUTUBE_API_KEY = 'AIzaSyBvQcLcPhoGKqhh6bRKnGHQ4By7O6ZaMjw';
      const videoIds = 'FTIWyvx4pgo,xyJrm1LVk70,Ig6lQ3pj4_8';
      
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          data.items.forEach((video: any) => {
            if (video.id === 'FTIWyvx4pgo') {
              setYoutubeStoryInfo({
                title: video.snippet.title,
                thumbnail: video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url,
                description: video.snippet.description
              });
            } else if (video.id === 'xyJrm1LVk70') {
              setRadhaStoryInfo({
                title: video.snippet.title,
                thumbnail: video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url,
                description: video.snippet.description
              });
            } else if (video.id === 'Ig6lQ3pj4_8') {
              setKaranStoryInfo({
                title: video.snippet.title,
                thumbnail: video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url,
                description: video.snippet.description
              });
            }
          });
        }
      } catch (error) {
        console.error('Error fetching YouTube story info:', error);
      }
    };

    fetchYoutubeStoryInfo();
  }, []);

  // Fetch YouTube thumbnails for meditation music
  useEffect(() => {
    const fetchMusicThumbnails = async () => {
      const YOUTUBE_API_KEY = 'AIzaSyBvQcLcPhoGKqhh6bRKnGHQ4By7O6ZaMjw';
      
      // Extract video IDs from embed URLs
      const videoIds = sleepMusic.map(music => {
        const match = music.youtubeEmbed.match(/embed\/([^?]+)/);
        return match ? match[1] : null;
      }).filter(Boolean).join(',');
      
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        
        if (data.items) {
          const thumbnails: Record<string, { title: string; thumbnail: string }> = {};
          data.items.forEach((item: any) => {
            thumbnails[item.id] = {
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url
            };
          });
          setMusicThumbnails(thumbnails);
        }
      } catch (error) {
        console.error('Error fetching music thumbnails:', error);
      }
    };

    fetchMusicThumbnails();
  }, []);

  // Handle navigation from home page to auto-open dance
  useEffect(() => {
    const state = location.state as { openDance?: boolean } | null;
    if (state?.openDance) {
      setActiveTab('Dance');
      // Clear the state so it doesn't persist
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/95 backdrop-blur-xl border-b border-white/10">
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl calm-heading calm-text flex-1 text-center">Sleep</h1>
            <div className="w-10"></div>
          </div>

          {/* Tabs - Smaller */}
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
      </div>

      {/* Current Playing Video - YouTube Style */}
      {selectedVideo && (
        <div className="sticky top-[180px] z-40 bg-black">
          <div className="relative w-full aspect-video">
            <iframe
              src={selectedVideo.url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] px-4 py-3 border-b border-white/10">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm line-clamp-2">{selectedVideo.title}</h3>
                <p className="text-white/60 text-xs mt-1">{selectedVideo.description}</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content with padding for fixed header */}
      <div className="pt-[180px]">
        {/* Bedtime Stories Section - Show for Sleep Stories and All tabs */}
      {(activeTab === 'Sleep Stories' || activeTab === 'All') && (
        <div className="mb-8 px-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Bedtime Mysteries</h2>
              <p className="text-xs text-white/60 mt-1">Close your eyes and discover...</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Main Featured Krishna Card - Radha Krishna Story */}
            {radhaStoryInfo ? (
              <div 
                onClick={() => {
                  setSelectedVideo({
                    url: 'https://www.youtube.com/embed/xyJrm1LVk70?autoplay=1&rel=0&modestbranding=1&controls=1',
                    title: radhaStoryInfo.title,
                    description: radhaStoryInfo.description
                  });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative cursor-pointer group"
              >
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={radhaStoryInfo.thumbnail} 
                    alt={radhaStoryInfo.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                      <Play size={12} fill="currentColor" />
                      <span>Video</span>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-xs font-bold line-clamp-2">{radhaStoryInfo.title}</h3>
                </div>
              </div>
            ) : (
              <div 
                onClick={() => handlePlayStory({
                  id: 'radha-story',
                  title: "Radha Krishna ki shaadi kyon nhi hui",
                  description: "Unravel the mystery of divine love - why Radha and Krishna never married",
                  audioUrl: '/assets/story/radha.mp3'
                })}
                className="relative cursor-pointer group"
              >
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/assets/images/krishna.png" 
                    alt="Krishna Sleep Story" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                      <Play size={12} fill="currentColor" />
                      <span>Loading...</span>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-xs font-bold line-clamp-2">Loading...</h3>
                </div>
              </div>
            )}

            {/* Karan Story - YouTube Shorts */}
            {karanStoryInfo ? (
              <div 
                onClick={() => {
                  setSelectedVideo({
                    url: 'https://www.youtube.com/embed/Ig6lQ3pj4_8?autoplay=1&rel=0&modestbranding=1&controls=1',
                    title: karanStoryInfo.title,
                    description: karanStoryInfo.description
                  });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative cursor-pointer group"
              >
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={karanStoryInfo.thumbnail} 
                    alt={karanStoryInfo.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                      <Play size={12} fill="currentColor" />
                      <span>Short</span>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-xs font-bold line-clamp-2">{karanStoryInfo.title}</h3>
                </div>
              </div>
            ) : (
              <div className="relative cursor-pointer group">
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/assets/images/karan.png" 
                    alt="Loading..." 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                      <Play size={12} fill="currentColor" />
                      <span>Loading...</span>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-xs font-bold line-clamp-2">Loading...</h3>
                </div>
              </div>
            )}

            {/* YouTube Story Card */}
            {youtubeStoryInfo && (
              <div 
                onClick={() => {
                  setSelectedVideo({
                    url: 'https://www.youtube.com/embed/FTIWyvx4pgo?autoplay=1&rel=0&modestbranding=1&controls=1',
                    title: youtubeStoryInfo.title,
                    description: youtubeStoryInfo.description
                  });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative cursor-pointer group"
              >
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={youtubeStoryInfo.thumbnail} 
                    alt={youtubeStoryInfo.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                      <Play size={12} fill="currentColor" />
                      <span>Video</span>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-xs font-bold line-clamp-2">{youtubeStoryInfo.title}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sleep Music Section - Show for Meditations and All tabs */}
      {(activeTab === 'Meditations' || activeTab === 'All') && (
        <div className="mb-8 px-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Sleep Music & Bhajans</h2>
              <p className="text-xs text-white/60 mt-1">Peaceful melodies for deep rest</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {sleepMusic.slice(0, 6).map((music) => {
              // Extract video ID from embed URL
              const match = music.youtubeEmbed.match(/embed\/([^?]+)/);
              const videoId = match ? match[1] : null;
              const videoInfo = videoId && musicThumbnails[videoId];
              
              return (
                <div
                  key={music.id}
                  onClick={() => {
                    setSelectedVideo({
                      url: music.youtubeEmbed,
                      title: videoInfo?.title || music.title,
                      description: music.description
                    });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
                >
                  <div className="relative h-40">
                    {videoInfo?.thumbnail ? (
                      <img 
                        src={videoInfo.thumbnail} 
                        alt={videoInfo.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center">
                        <div className="text-4xl">{music.image}</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white text-xs font-bold mb-1 line-clamp-2">
                        {videoInfo?.title || music.title}
                      </h3>
                      <p className="text-white/60 text-xs">{music.duration}</p>
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                        <Play size={24} fill="white" className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sleep Sounds Section - Show for Tools and All tabs */}
      {(activeTab === 'Tools' || activeTab === 'All') && (
        <div className="mb-8 px-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Sleep Sounds</h2>
              <p className="text-xs text-white/60 mt-1">Ambient sounds for peaceful rest</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {sleepSounds.map((sound) => (
              <div
                key={sound.id}
                onClick={() => {
                  setSelectedVideo({
                    url: sound.youtubeEmbed,
                    title: sound.title,
                    description: sound.description
                  });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
              >
                <div className="relative h-40 bg-gradient-to-br from-cyan-900/40 to-blue-900/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl">{sound.image}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white text-sm font-bold mb-1">{sound.title}</h3>
                    <p className="text-white/60 text-xs">{sound.duration}</p>
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                      <Play size={24} fill="white" className="text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dance Section - Show when Dance tab is active */}
      {activeTab === 'Dance' && (
        <div className="mb-8 px-6">
            <h2 className="text-lg font-semibold text-white mb-4">Release Stress with Radhe Dance</h2>
            <div className="grid grid-cols-2 gap-4">
              {danceVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => {
                    setSelectedVideo({
                      url: video.youtubeEmbed,
                      title: video.title,
                      description: video.description
                    });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
                >
                  <div className="relative h-64">
                    {danceThumbnails[video.youtubeId] ? (
                      <img 
                        src={danceThumbnails[video.youtubeId]} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-900/40 to-fuchsia-900/40 flex items-center justify-center">
                        <div className="text-6xl">💃</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-base font-bold mb-1">{video.title}</h3>
                      <p className="text-white/80 text-xs">{video.description}</p>
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                        <Play size={32} fill="white" className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      )}

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
      </div>
    </div>
  );
};

export default Sleep;