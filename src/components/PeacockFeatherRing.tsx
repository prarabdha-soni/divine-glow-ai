import React from 'react';
import { Crown, Flame } from 'lucide-react';

interface PeacockFeatherRingProps {
  streak: number;
  maxStreak?: number;
}

export const PeacockFeatherRing = ({ streak, maxStreak = 7 }: PeacockFeatherRingProps) => {
  const streakPercentage = Math.min((streak / maxStreak) * 100, 100);
  
  return (
    <div className="relative w-32 h-32 mx-auto mb-6">
      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border-4 border-muted/30">
        <div 
          className="absolute inset-0 rounded-full border-4 border-transparent peacock-feather"
          style={{
            background: `conic-gradient(from 0deg, hsl(var(--peacock-teal)) 0%, hsl(var(--krishna-blue)) 25%, hsl(var(--lotus-gold)) 50%, hsl(var(--temple-gold)) 75%, hsl(var(--peacock-teal)) 100%)`,
            mask: `conic-gradient(from 0deg, transparent 0%, transparent ${100 - streakPercentage}%, black ${100 - streakPercentage}%, black 100%)`,
            WebkitMask: `conic-gradient(from 0deg, transparent 0%, transparent ${100 - streakPercentage}%, black ${100 - streakPercentage}%, black 100%)`,
          }}
        />
      </div>

      {/* Inner Circle */}
      <div className="absolute inset-4 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold temple-gold-text mb-1">
            {streak}
          </div>
          <div className="text-xs text-muted-foreground">
            Day Streak
          </div>
        </div>
      </div>

      {/* Peacock Feather Icon */}
      <div className="absolute -top-2 -right-2 w-8 h-8 temple-gold-text animate-float">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
        </svg>
      </div>

      {/* Crown for Max Streak */}
      {streak >= maxStreak && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Crown size={20} className="temple-gold-text animate-pulse" />
        </div>
      )}

      {/* Flame for Active Streak */}
      {streak > 0 && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <Flame size={16} className="text-orange-400 animate-pulse" />
        </div>
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full temple-glow opacity-50" />
    </div>
  );
};
