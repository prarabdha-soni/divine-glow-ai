import { useNavigate } from 'react-router-dom';
import { Bell, Sparkles, Play, Pause, X } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { FullScreenVideoPlayer } from '@/components/FullScreenVideoPlayer';
import { useState, useRef, useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);
  const [canDismissWelcome, setCanDismissWelcome] = useState(false);
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

  // Allow dismissal after 3 seconds (compulsory viewing)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCanDismissWelcome(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-hide welcome screen after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const handlePlayAudio = (id: string, audioUrl: string, title: string, type: 'story' | 'music', shouldNavigate: boolean = false) => {
    // If should navigate to music page, do that first with track info
    if (shouldNavigate && type === 'music') {
      navigate('/discover', { state: { trackId: id, autoPlay: true } });
      return;
    }
    
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
      {/* Welcome Splash Screen */}
      {showWelcome && (
        <div 
          onClick={() => canDismissWelcome && setShowWelcome(false)}
          className={`fixed inset-0 z-[100] bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0f0f2e] flex items-center justify-center animate-in fade-in duration-1000 ${canDismissWelcome ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {/* Elegant background glow effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-pink-500/8 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
          </div>

          <div className="relative text-center px-8 max-w-xl">
            {/* Elegant decorative element */}
            <div className="mb-16 flex justify-center">
              <div className="relative">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-gradient-to-r from-orange-400/30 to-pink-400/30 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
              </div>
            </div>

            {/* Main content with refined animations */}
            <div className="space-y-8">
              {/* Breathe instruction */}
              <div className="animate-in fade-in duration-1000 delay-200">
                <p className="text-xl text-white/70 font-light tracking-wide mb-4">
                  Take a long breath
                </p>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300/30 to-transparent"></div>
              </div>

              {/* Main mantra */}
              <div className="py-8 animate-in scale-in-95 duration-1000 delay-500">
                <h1 className="text-7xl md:text-8xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 tracking-tight leading-tight">
                  Radhe Radhe
                </h1>
                <div className="mt-6 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-pink-300/30 to-transparent"></div>
              </div>

              {/* Subtle Sanskrit-inspired ornament */}
              <div className="flex justify-center items-center gap-3 animate-in fade-in duration-1000 delay-1000">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                <div className="text-orange-300/40 text-xs">॥</div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20"></div>
              </div>
            </div>

            {/* Dismissal hint - only shown after 3 seconds */}
            {canDismissWelcome && (
              <p className="text-xs text-white/20 mt-20 font-light tracking-wider animate-in fade-in duration-1000">
                TAP TO ENTER
              </p>
            )}
          </div>
        </div>
      )}

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/95 backdrop-blur-xl border-b border-white/10">
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-white" />
            </div>
            <h1 className="text-3xl font-serif italic text-white absolute left-1/2 transform -translate-x-1/2">Gloww</h1>
            <Bell size={20} className="text-white/80" />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="pt-24 px-6 pb-24">

        {/* Hero Image Section */}
        <div className="mb-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/images/korean_krishna.jpeg" 
              alt="Krishna" 
              className="w-full h-[240px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Live Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Live</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Daily Aarti Card */}
            <div
              onClick={() => navigate('/live-aarti')}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
            >
              <div className="relative h-48 bg-gradient-to-br from-orange-900/40 to-yellow-900/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🪔</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Daily Aarti</h3>
                  <p className="text-white/80 text-sm">Live from sacred temples</p>
                </div>
              </div>
            </div>

            {/* Live Katha Card */}
            <div
              onClick={() => navigate('/guru')}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">📿</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Live Katha</h3>
                  <p className="text-white/80 text-sm">Spiritual wisdom</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sound Therapy Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Sound Therapy</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-3 gap-4">
              {/* Sleep with Krishna */}
              <div
                onClick={() => handlePlayAudio(
                  'sleep-krishna',
                  '/assets/music/relaxing-krishna-flute-music-deep-sleep-relaxing-music-292793.mp3',
                  'Sleep with Krishna',
                  'music',
                  true
                )}
                className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
              >
                <div className="relative h-40 bg-gradient-to-br from-indigo-900/40 to-purple-900/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl">🪈</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white text-sm font-bold">Sleep with</h3>
                    <p className="text-white/80 text-xs">Krishna</p>
                  </div>
                </div>
              </div>

              {/* Calm Anxiety */}
              <div
                onClick={() => handlePlayAudio(
                  'calm-anxiety',
                  '/assets/music/shyama.mp3',
                  'Calm Anxiety',
                  'music',
                  true
                )}
                className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
              >
                <div className="relative h-40 bg-gradient-to-br from-amber-900/40 to-orange-900/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl">🕉️</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white text-sm font-bold">Calm Anxiety</h3>
                  </div>
                </div>
              </div>

              {/* Stories */}
              <div
                onClick={() => navigate('/sleep')}
                className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
              >
                <div className="relative h-40 bg-gradient-to-br from-slate-900/40 to-gray-900/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl">📖</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white text-sm font-bold">Stories</h3>
                    <p className="text-white/80 text-xs">Sleep tales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dance Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-4">Dance</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Morning Leela */}
            <div
              onClick={() => setSelectedVideo({
                url: 'https://www.youtube.com/embed/ByD_y86a_J4?autoplay=1&rel=0',
                title: 'Morning Leela',
                description: 'Divine Krishna morning prayers and bhajans'
              })}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
            >
              <div className="relative h-48 bg-gradient-to-br from-cyan-900/40 to-blue-900/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🪈</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Morning Leela</h3>
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                    <Play size={32} fill="white" className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Remove Stress with Radhe Dance */}
            <div
              onClick={() => navigate('/sleep', { state: { openDance: true } })}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group hover:scale-[1.02] transition-transform"
            >
              <div className="relative h-48 bg-gradient-to-br from-pink-900/40 to-fuchsia-900/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🌸</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Remove Stress with Radhe Dance</h3>
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                    <Play size={32} fill="white" className="text-white ml-1" />
                  </div>
                </div>
              </div>
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