import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface RadhaKrishnaAvatarsProps {
  size?: 'sm' | 'md' | 'lg';
  showHearts?: boolean;
}

export const RadhaKrishnaAvatars = ({ size = 'md', showHearts = true }: RadhaKrishnaAvatarsProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Radha Avatar */}
      <div className={`${sizeClasses[size]} relative z-10`}>
        <div className="w-full h-full rounded-full radha-pink-text bg-gradient-to-br from-radha-pink/20 to-radha-pink/5 border-2 border-radha-pink/30 flex items-center justify-center temple-glow animate-float">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3/4 h-3/4">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
          </svg>
        </div>
        
        {/* Radha's Crown */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-3 temple-gold-text">
            <svg viewBox="0 0 24 12" fill="currentColor">
              <path d="M12 0L8 8L4 0L0 8L4 12L8 8L12 12L16 8L20 8L16 0L12 0Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Hearts */}
      {showHearts && (
        <>
          <Heart 
            size={12} 
            className="absolute -top-2 -left-2 radha-pink-text animate-pulse" 
            style={{ animationDelay: '0.5s' }}
          />
          <Heart 
            size={10} 
            className="absolute -top-1 -right-3 radha-pink-text animate-pulse" 
            style={{ animationDelay: '1s' }}
          />
          <Heart 
            size={8} 
            className="absolute top-2 -left-4 radha-pink-text animate-pulse" 
            style={{ animationDelay: '1.5s' }}
          />
        </>
      )}

      {/* Krishna Avatar */}
      <div className={`${sizeClasses[size]} relative z-10 -ml-4`}>
        <div className="w-full h-full rounded-full krishna-blue-text bg-gradient-to-br from-krishna-blue/20 to-krishna-blue/5 border-2 border-krishna-blue/30 flex items-center justify-center temple-glow animate-float" 
             style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3/4 h-3/4">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
          </svg>
        </div>
        
        {/* Krishna's Crown */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-3 temple-gold-text">
            <svg viewBox="0 0 24 12" fill="currentColor">
              <path d="M12 0L8 8L4 0L0 8L4 12L8 8L12 12L16 8L20 8L16 0L12 0Z" />
            </svg>
          </div>
        </div>
        
        {/* Flute */}
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
          <div className="w-8 h-1 flute-wood-text bg-gradient-to-r from-flute-wood/60 to-flute-wood/40 rounded-full" />
        </div>
      </div>

      {/* Sparkles */}
      {showHearts && (
        <>
          <Sparkles 
            size={8} 
            className="absolute top-4 -right-6 temple-gold-text animate-pulse" 
            style={{ animationDelay: '2s' }}
          />
          <Sparkles 
            size={6} 
            className="absolute bottom-2 -left-6 temple-gold-text animate-pulse" 
            style={{ animationDelay: '2.5s' }}
          />
        </>
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-temple-gold/20 via-transparent to-transparent blur-xl" />
    </div>
  );
};
