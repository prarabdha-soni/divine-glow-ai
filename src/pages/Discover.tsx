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
        setCurrentTrack(trackId);
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
      
      {/* Header */}
      <div className="relative z-10 px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-semibold calm-text">Radhe</h1>
            <p className="text-xs text-white/60 mt-1">Sacred Secrets Collection</p>
          </div>
          <button className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors">
            <MoreVertical size={24} />
          </button>
        </div>

        {/* Header Image - Radha */}
        <div className="mb-6 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-80 bg-gradient-to-br from-pink-400/20 via-rose-300/20 to-orange-400/20 backdrop-blur-xl border border-white/20">
            <img 
              src="/assets/images/radha.png" 
              alt="Radhe" 
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-3xl calm-heading text-white drop-shadow-lg">राधे तेरे चरणों की</h3>
              <p className="text-sm text-white/90 mt-2 drop-shadow-md">Divine Devotional Music</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={handlePlayAll}
            className="flex-1 bg-white text-purple-900 rounded-full py-4 px-6 flex items-center justify-center gap-2 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Play size={20} fill="currentColor" />
            Play
          </button>
          <button
            onClick={handleShuffle}
            className="flex-1 bg-white/10 backdrop-blur-xl text-white rounded-full py-4 px-6 flex items-center justify-center gap-2 font-semibold border border-white/20 hover:bg-white/20 transition-colors"
          >
            <Shuffle size={20} />
            Shuffle
          </button>
        </div>

        {/* Description */}
        <p className="calm-text-muted text-base leading-relaxed mb-4 calm-body italic">
          ✨ These melodies hold secrets whispered only at midnight... Will you listen?
        </p>

        {/* Track Info */}
        <p className="calm-text-subtle text-sm calm-caption mb-6">
          {getTrackCount()} tracks, {getTotalDuration()}
        </p>
      </div>

      {/* Track List */}
      <div className="relative z-10 bg-gradient-to-b from-white/5 to-transparent px-6 pt-4 pb-32">
        <div className="space-y-1">
          {krishnaMusicLibrary.map((track) => {
            const isCurrentTrack = currentTrack === track.id;
            const isTrackPlaying = isCurrentTrack && isPlaying;
            const isLiked = likedTracks.has(track.id);

            return (
              <div
                key={track.id}
                onClick={() => handlePlayTrack(track.id, track.audioUrl)}
                className="py-4 flex items-center justify-between group hover:bg-white/5 rounded-xl px-3 transition-all cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="calm-text font-medium text-base mb-1">
                    {track.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="calm-text-muted text-sm">{track.artist}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="calm-text-subtle text-sm calm-caption">{track.duration}</span>
                  
                  <div className="w-8 h-8 flex items-center justify-center calm-text-muted">
                    {isTrackPlaying ? (
                      <Pause size={20} fill="currentColor" className="text-amber-400" />
                    ) : (
                      <Play size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(track.id);
                    }}
                    className="w-8 h-8 flex items-center justify-center transition-colors"
                  >
                    <Heart
                      size={20}
                      className={isLiked ? 'fill-amber-400 text-amber-400' : 'calm-text-subtle hover:calm-text'}
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
