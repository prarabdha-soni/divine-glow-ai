import React from 'react';
import { Moon, Star } from 'lucide-react';

export const VrindavanBackground = () => {
  return (
    <div className="fixed inset-0 night-sky-gradient overflow-hidden pointer-events-none">
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <Star
            key={i}
            size={Math.random() * 3 + 1}
            className="absolute text-moonlight-silver opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute top-8 right-8">
        <Moon 
          size={60} 
          className="text-moonlight-silver opacity-80 animate-float" 
        />
      </div>

      {/* Temple Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <svg
          viewBox="0 0 400 200"
          className="w-full h-full opacity-20"
          fill="none"
        >
          {/* Temple Base */}
          <path
            d="M50 180 L50 120 L80 120 L80 100 L110 100 L110 80 L140 80 L140 60 L170 60 L170 40 L200 40 L200 60 L230 60 L230 80 L260 80 L260 100 L290 100 L290 120 L320 120 L320 180 Z"
            fill="hsl(var(--temple-gold))"
          />
          
          {/* Temple Dome */}
          <path
            d="M200 40 Q200 20 180 20 Q160 20 160 40 Q160 60 180 60 Q200 60 200 40 Z"
            fill="hsl(var(--lotus-gold))"
          />
          
          {/* Temple Spires */}
          <path
            d="M120 100 Q120 80 100 80 Q80 80 80 100 Z"
            fill="hsl(var(--temple-gold))"
          />
          <path
            d="M280 100 Q280 80 300 80 Q320 80 320 100 Z"
            fill="hsl(var(--temple-gold))"
          />
          
          {/* Temple Details */}
          <rect x="90" y="140" width="20" height="40" fill="hsl(var(--lotus-gold))" />
          <rect x="290" y="140" width="20" height="40" fill="hsl(var(--lotus-gold))" />
        </svg>
      </div>

      {/* Floating Lotus Petals */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 temple-gold-text opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Soft Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-lotus-gold/10 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-krishna-blue/10 to-transparent blur-3xl" />
    </div>
  );
};
