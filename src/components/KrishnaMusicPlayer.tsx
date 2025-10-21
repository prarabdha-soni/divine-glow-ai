import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Volume2, VolumeX } from 'lucide-react';
import { KrishnaMusic, getRandomKrishnaMusic, formatDuration } from '@/data/krishnaMusic';

interface KrishnaMusicPlayerProps {
  isVisible: boolean;
  onClose: () => void;
}

export const KrishnaMusicPlayer = ({ isVisible, onClose }: KrishnaMusicPlayerProps) => {
  const [currentMusic, setCurrentMusic] = useState<KrishnaMusic | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);

  // Initialize with random music
  useEffect(() => {
    if (isVisible && !currentMusic) {
      setCurrentMusic(getRandomKrishnaMusic());
    }
  }, [isVisible, currentMusic]);

  // Simulate music playback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentMusic) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= currentMusic.duration) {
            if (isRepeating) {
              return 0;
            } else if (isShuffled) {
              setCurrentMusic(getRandomKrishnaMusic());
              return 0;
            } else {
              setIsPlaying(false);
              return 0;
            }
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentMusic, isRepeating, isShuffled]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (isShuffled) {
      setCurrentMusic(getRandomKrishnaMusic());
    } else {
      // Simple next logic - in real app, you'd have a playlist
      setCurrentMusic(getRandomKrishnaMusic());
    }
    setCurrentTime(0);
  };

  const handlePrevious = () => {
    // Simple previous logic
    setCurrentMusic(getRandomKrishnaMusic());
    setCurrentTime(0);
  };

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
    if (!isShuffled) {
      setCurrentMusic(getRandomKrishnaMusic());
    }
  };

  const handleRepeat = () => {
    setIsRepeating(!isRepeating);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const progressPercentage = currentMusic ? (currentTime / currentMusic.duration) * 100 : 0;

  if (!isVisible || !currentMusic) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto p-4">
        {/* Music Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
            {currentMusic.category === 'mantra' ? '🕉️' :
             currentMusic.category === 'bhajan' ? '🎵' :
             currentMusic.category === 'flute' ? '🪈' :
             currentMusic.category === 'kirtan' ? '🎤' :
             currentMusic.category === 'classical' ? '🎼' : '🙏'}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 truncate">{currentMusic.title}</h3>
            <p className="text-sm text-gray-600 truncate">{currentMusic.artist}</p>
            <p className="text-xs text-gray-500 capitalize">{currentMusic.category}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>{formatDuration(currentTime)}</span>
            <span>{formatDuration(currentMusic.duration)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-blue-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleShuffle}
              className={`p-2 rounded-full ${isShuffled ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Shuffle size={16} />
            </button>
            <button
              onClick={handlePrevious}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <SkipBack size={20} />
            </button>
          </div>

          <button
            onClick={handlePlayPause}
            className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleNext}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <SkipForward size={20} />
            </button>
            <button
              onClick={handleRepeat}
              className={`p-2 rounded-full ${isRepeating ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Repeat size={16} />
            </button>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleMute}
            className="p-1 text-gray-600 hover:text-gray-800"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-xs text-gray-500 w-8">{isMuted ? 0 : volume}%</span>
        </div>

        {/* Random Music Button */}
        <div className="mt-4">
          <button
            onClick={() => {
              setCurrentMusic(getRandomKrishnaMusic());
              setCurrentTime(0);
              setIsPlaying(false);
            }}
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            🎵 Random Krishna Music
          </button>
        </div>
      </div>
    </div>
  );
};
