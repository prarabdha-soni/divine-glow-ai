import { useNavigate } from 'react-router-dom';
import { Play, ArrowLeft, MoreVertical, Shuffle, Pause, Heart, Cloud, ThumbsUp, Share2, Plus, RotateCcw, RotateCw, Square } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ModernKrishnaBackground } from '@/components/ModernKrishnaBackground';
import { useState, useRef, useEffect } from 'react';
import { krishnaMusicLibrary, getTotalDuration, getTrackCount } from '@/data/krishnaMusic';

const Discover = () => {
  const navigate = useNavigate();
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());
  const [showFullPlayer, setShowFullPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Cleanup audio on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlayTrack = (trackId: string, audioUrl: string) => {
    // Stop all other audio elements on the page
    const allAudio = document.querySelectorAll('audio');
    allAudio.forEach(audio => audio.pause());
    
    if (currentTrack === trackId && isPlaying) {
      // Pause current track
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      // Play new track or resume
      if (currentTrack !== trackId) {
        // Stop previous audio if exists
        if (audioRef.current) {
          audioRef.current.pause();
        }
        
        // Create new audio
        audioRef.current = new Audio(audioUrl);
        audioRef.current.volume = 1.0;
        audioRef.current.preload = 'auto';
        setCurrentTrack(trackId);
        
        // Skip first 5 seconds after metadata is loaded
        audioRef.current.onloadedmetadata = () => {
          if (audioRef.current) {
            audioRef.current.currentTime = 5;
          }
        };
      }
      
      audioRef.current?.play();
      setIsPlaying(true);
      
      // Handle track end
      if (audioRef.current) {
        audioRef.current.onended = () => {
          setIsPlaying(false);
          setCurrentTrack(null);
        };
      }
    }
  };

  const handlePlayAll = () => {
    if (krishnaMusicLibrary.length > 0) {
      const firstTrack = krishnaMusicLibrary[0];
      handlePlayTrack(firstTrack.id, firstTrack.audioUrl);
    }
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * krishnaMusicLibrary.length);
    const randomTrack = krishnaMusicLibrary[randomIndex];
    handlePlayTrack(randomTrack.id, randomTrack.audioUrl);
  };

  const toggleLike = (trackId: string) => {
    setLikedTracks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(trackId)) {
        newSet.delete(trackId);
      } else {
        newSet.add(trackId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen krishna-bg">
      {/* Modern Krishna Background */}
      <ModernKrishnaBackground />
      
      {/* Header - Smaller */}
      <div className="relative z-10 px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="text-center">
            <h1 className="text-lg font-semibold calm-text">Music</h1>
            <p className="text-xs text-white/60">Sacred Melodies</p>
          </div>
          <button className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>

        {/* Header Image - Radha - Smaller */}
        <div className="mb-4 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-48 bg-gradient-to-br from-pink-400/20 via-rose-300/20 to-orange-400/20 backdrop-blur-xl border border-white/20">
            <img 
              src="/assets/images/radha.png" 
              alt="Radhe" 
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl calm-heading text-white drop-shadow-lg">राधे तेरे चरणों की</h3>
              <p className="text-xs text-white/90 mt-1 drop-shadow-md">Divine Devotional Music</p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Smaller */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={handlePlayAll}
            className="flex-1 bg-white text-purple-900 rounded-full py-3 px-5 flex items-center justify-center gap-2 font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm"
          >
            <Play size={18} fill="currentColor" />
            Play All
          </button>
          <button
            onClick={handleShuffle}
            className="flex-1 bg-white/10 backdrop-blur-xl text-white rounded-full py-3 px-5 flex items-center justify-center gap-2 font-semibold border border-white/20 hover:bg-white/20 transition-colors text-sm"
          >
            <Shuffle size={18} />
            Shuffle
          </button>
        </div>

        {/* Track Info */}
        <p className="calm-text-subtle text-xs calm-caption mb-4">
          {getTrackCount()} songs • {getTotalDuration()}
        </p>
      </div>

      {/* Music Track List - Spotify Style */}
      <div className="relative z-10 px-6 pt-2 pb-32">
        <h2 className="text-white font-semibold text-lg mb-3">Your Songs</h2>
        <div className="space-y-2">
          {krishnaMusicLibrary.map((track) => {
            const isCurrentTrack = currentTrack === track.id;
            const isTrackPlaying = isCurrentTrack && isPlaying;
            const isLiked = likedTracks.has(track.id);

            return (
              <div
                key={track.id}
                onClick={() => handlePlayTrack(track.id, track.audioUrl)}
                className="bg-white/5 hover:bg-white/10 rounded-lg p-3 flex items-center gap-3 group cursor-pointer transition-all"
              >
                {/* Album Art / Thumbnail */}
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center flex-shrink-0 shadow-md">
                  <img 
                    src="/assets/images/radha.png" 
                    alt={track.title}
                    className="w-full h-full object-cover rounded"
                  />
                  {/* Play overlay */}
                  <div className={`absolute inset-0 bg-black/40 rounded flex items-center justify-center transition-opacity ${isTrackPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {isTrackPlaying ? (
                      <Pause size={20} fill="white" className="text-white" />
                    ) : (
                      <Play size={20} fill="white" className="text-white" />
                    )}
                  </div>
                </div>
                
                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium text-sm mb-0.5 truncate ${isTrackPlaying ? 'text-amber-400' : 'text-white'}`}>
                    {track.title}
                  </h3>
                  <p className="text-white/60 text-xs truncate">{track.artist}</p>
                </div>
                
                {/* Duration and Like */}
                <div className="flex items-center gap-3">
                  <span className="text-white/50 text-xs">{track.duration}</span>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(track.id);
                    }}
                    className={`w-8 h-8 flex items-center justify-center transition-all ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  >
                    <Heart
                      size={18}
                      className={isLiked ? 'fill-amber-400 text-amber-400' : 'text-white/60 hover:text-white'}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mini Player - Shows when track is playing */}
      {currentTrack && !showFullPlayer && (
        <div 
          onClick={() => setShowFullPlayer(true)}
          className="fixed bottom-20 left-0 right-0 z-50 cursor-pointer"
        >
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 backdrop-blur-xl border-t border-white/20 shadow-2xl hover:bg-indigo-900/90 transition-colors">
            <div className="flex items-center gap-3 px-4 py-2">
              {/* Album Art */}
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-lg shadow-lg flex-shrink-0">
                🎵
              </div>
              
              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-sm truncate">
                  {krishnaMusicLibrary.find(t => t.id === currentTrack)?.title}
                </h3>
                <p className="text-white/70 text-xs truncate">
                  {krishnaMusicLibrary.find(t => t.id === currentTrack)?.artist}
                </p>
              </div>
              
              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isPlaying) {
                      audioRef.current?.pause();
                      setIsPlaying(false);
                    } else {
                      audioRef.current?.play();
                      setIsPlaying(true);
                    }
                  }}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? (
                    <Pause size={20} fill="currentColor" />
                  ) : (
                    <Play size={20} fill="currentColor" />
                  )}
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    audioRef.current?.pause();
                    setCurrentTrack(null);
                    setIsPlaying(false);
                  }}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Player - Calm Style */}
      {currentTrack && showFullPlayer && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-emerald-900 via-teal-800 to-teal-900 animate-in slide-in-from-bottom duration-300">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-12 pb-6">
              <button
                onClick={() => setShowFullPlayer(false)}
                className="w-10 h-10 bg-indigo-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
              >
                <ArrowLeft size={20} />
              </button>
              <button className="w-10 h-10 bg-indigo-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Cloud size={20} />
              </button>
            </div>

            {/* Album Art - Large Circle */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 pt-8">
              <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl mb-8 border-4 border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-6xl">
                  🎵
                </div>
              </div>

              {/* Track Title */}
              <h1 className="text-white text-2xl font-semibold text-center mb-4 px-4">
                {krishnaMusicLibrary.find(t => t.id === currentTrack)?.title}
              </h1>

              {/* Description */}
              <p className="text-white/80 text-center text-sm px-8 leading-relaxed max-w-md">
                Experience the mystery of divine love through sacred melodies that unlock eternal secrets and timeless devotion.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="px-8 pb-6">
              <div className="flex items-center justify-center gap-8 mb-8">
                <button className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-indigo-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <ThumbsUp size={20} />
                  </div>
                  <span className="text-white/80 text-xs">Rate</span>
                </button>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(currentTrack);
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 bg-indigo-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <Heart 
                      size={20}
                      className={likedTracks.has(currentTrack) ? 'fill-white' : ''}
                    />
                  </div>
                  <span className="text-white/80 text-xs">Favorite</span>
                </button>

                <button className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-indigo-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <Share2 size={20} />
                  </div>
                  <span className="text-white/80 text-xs">Share</span>
                </button>

                <button className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-indigo-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <Plus size={20} />
                  </div>
                  <span className="text-white/80 text-xs">Add</span>
                </button>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <button className="text-white/80 hover:text-white transition-colors">
                  <div className="relative">
                    <RotateCcw size={32} />
                    <span className="absolute -bottom-1 right-0 text-xs font-bold">15</span>
                  </div>
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isPlaying) {
                      audioRef.current?.pause();
                      setIsPlaying(false);
                    } else {
                      audioRef.current?.play();
                      setIsPlaying(true);
                    }
                  }}
                  className="text-white hover:scale-105 transition-transform"
                >
                  {isPlaying ? (
                    <Pause size={56} strokeWidth={2} />
                  ) : (
                    <Play size={56} strokeWidth={2} className="ml-1" />
                  )}
                </button>
                
                <button className="text-white/80 hover:text-white transition-colors">
                  <div className="relative">
                    <RotateCw size={32} />
                    <span className="absolute -bottom-1 left-0 text-xs font-bold">15</span>
                  </div>
                </button>

                <button className="text-white/80 hover:text-white transition-colors">
                  <Square size={24} />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="h-0.5 bg-white/30 rounded-full mb-2 relative">
                  <div className="h-full w-2/5 bg-white rounded-full relative">
                    <div className="absolute -right-1.5 -top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between text-white/60 text-xs">
                  <span>14:46</span>
                  <span>34:31</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Discover;
