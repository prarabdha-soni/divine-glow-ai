import { useNavigate } from 'react-router-dom';
import { Bell, Sparkles, Play, Pause, X } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { FullScreenVideoPlayer } from '@/components/FullScreenVideoPlayer';
import { useState, useRef, useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);
  const [currentAudio, setCurrentAudio] = useState<{
    id: string;
    title: string;
    type: 'story' | 'music';
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

  const handlePlayAudio = (id: string, audioUrl: string, title: string, type: 'story' | 'music') => {
    // Stop all other audio elements on the page
    const allAudio = document.querySelectorAll('audio');
    allAudio.forEach(audio => audio.pause());
    
    if (currentAudio?.id === id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (currentAudio?.id !== id) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        audioRef.current = new Audio(audioUrl);
        audioRef.current.volume = 1.0;
        audioRef.current.preload = 'auto';
        setCurrentAudio({ id, title, type });
        
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
      {/* Header */}
      <div className="relative z-10 px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-white" />
          </div>
          <h1 className="text-3xl font-serif italic text-white absolute left-1/2 transform -translate-x-1/2">Sukoon</h1>
          <Bell size={20} className="text-white/80" />
        </div>

        {/* Hero Image Section - Smaller */}
        <div className="mb-4">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/assets/images/gemini.png" 
              alt="Divine Harmony" 
              className="w-full h-[180px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Stories Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Stories</h3>
            <button 
              onClick={() => navigate('/sleep')}
              className="text-xs text-purple-400 font-medium"
            >
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Radha Krishna ki shaadi kyon nhi hui */}
            <div 
              onClick={() => handlePlayAudio(
                'radha-story',
                '/assets/story/radha.mp3',
                'Radha Krishna ki shaadi kyon nhi hui',
                'story'
              )}
              className="cursor-pointer group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/radha.png" 
                  alt="Radha Krishna Story" 
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                  30 min
                </div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Radha Krishna ki shaadi kyon nhi hui</h4>
              <p className="text-white/60 text-xs">Divine Love Mystery</p>
            </div>

            {/* Karan itna mahan kaisa tha */}
            <div 
              onClick={() => handlePlayAudio(
                'karan-story',
                '/assets/story/karan.mp3',
                'Karan itna mahan kaisa tha',
                'story'
              )}
              className="cursor-pointer group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/karan.png" 
                  alt="Mahabharat Secrets" 
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                  40 min
                </div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Karan itna mahan kaisa tha</h4>
              <p className="text-white/60 text-xs">Epic Warrior</p>
            </div>
          </div>
        </div>

        {/* Music Album Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Music Album</h3>
            <button 
              onClick={() => navigate('/discover')}
              className="text-xs text-purple-400 font-medium"
            >
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Ram Siya Ram */}
            <div 
              onClick={() => handlePlayAudio(
                'ram-siya-ram',
                '/assets/music/Ram Siya Ram (Lyrical) Adipurush _ Prabhas _ Sachet-Parampara,Manoj Muntashir S _Om Raut _ Bhushan K.mp3',
                'Ram Siya Ram',
                'music'
              )}
              className="cursor-pointer group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/krishna.png" 
                  alt="Ram Siya Ram" 
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                  4 min
                </div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Ram Siya Ram</h4>
              <p className="text-white/60 text-xs">Devotional Song</p>
            </div>

            {/* Shyama Aan Baso */}
            <div 
              onClick={() => handlePlayAudio(
                'shyama-aan-baso',
                '/assets/music/shyama.mp3',
                'Shyama Aan Baso',
                'music'
              )}
              className="cursor-pointer group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/radha.png" 
                  alt="Shyama Aan Baso" 
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                  5 min
                </div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Shyama Aan Baso</h4>
              <p className="text-white/60 text-xs">Peaceful Bhajan</p>
            </div>
          </div>
        </div>

      </div>

      {/* Mini Audio Player - Shows when audio is playing */}
      {currentAudio && (
        <div className="fixed bottom-20 left-0 right-0 z-50 px-4">
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-4">
              {/* Audio Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                {currentAudio.type === 'story' ? '📖' : '🎵'}
              </div>
              
              {/* Audio Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-base truncate">
                  {currentAudio.title}
                </h3>
                <p className="text-white/70 text-sm truncate">
                  {currentAudio.type === 'story' ? 'Story' : 'Music'}
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
                    setCurrentAudio(null);
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

export default Index;