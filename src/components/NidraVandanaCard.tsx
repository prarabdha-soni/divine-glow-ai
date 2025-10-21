import React from 'react';
import { Play, Clock, Star, Music } from 'lucide-react';

interface NidraVandanaCardProps {
  onPlay?: () => void;
}

export const NidraVandanaCard = ({ onPlay }: NidraVandanaCardProps) => {
  return (
    <div className="divine-card rounded-3xl p-6 mb-6 relative overflow-hidden temple-glow">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-16 h-16 temple-gold-text">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 w-12 h-12 krishna-blue-text">
          <Music className="w-full h-full" />
        </div>
      </div>

      {/* Featured Badge */}
      <div className="absolute top-4 left-4">
        <div className="px-3 py-1 rounded-full temple-gradient text-xs font-semibold temple-gold-text">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold temple-gold-text mb-2">
            Nidra Vandana
          </h2>
          <p className="text-lg text-muted-foreground">
            Krishna Flute Sleep Meditation
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Drift into peaceful sleep with the divine melodies of Krishna's flute. 
          This guided meditation combines ancient Vedic wisdom with soothing sounds 
          to help you achieve deep, restorative sleep.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Clock size={16} className="temple-gold-text" />
            <span className="text-sm text-muted-foreground">45 min</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="temple-gold-text" />
            <span className="text-sm text-muted-foreground">4.9 (2.3k)</span>
          </div>
          <div className="flex items-center gap-2">
            <Music size={16} className="krishna-blue-text" />
            <span className="text-sm text-muted-foreground">Flute</span>
          </div>
        </div>

        {/* Play Button */}
        <button
          onClick={onPlay}
          className="w-full py-4 rounded-2xl temple-gradient text-primary-foreground font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Play size={20} fill="currentColor" />
          Start Meditation
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 -right-2 w-4 h-4 temple-gold-text opacity-30 animate-float">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
        </svg>
      </div>
    </div>
  );
};
