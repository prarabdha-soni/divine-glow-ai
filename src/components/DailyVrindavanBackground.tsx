import React, { useState, useEffect } from 'react';
import { Moon, Star, Sparkles } from 'lucide-react';

interface VrindavanScene {
  id: string;
  name: string;
  description: string;
  elements: {
    temple: boolean;
    river: boolean;
    forest: boolean;
    peacocks: boolean;
    cows: boolean;
    lotus: boolean;
    moonPhase: 'new' | 'crescent' | 'full';
  };
}

const vrindavanScenes: VrindavanScene[] = [
  {
    id: 'temple-river',
    name: 'Yamuna Ghat at Dawn',
    description: 'The sacred Yamuna river flows gently past ancient temples',
    elements: {
      temple: true,
      river: true,
      forest: false,
      peacocks: true,
      cows: true,
      lotus: true,
      moonPhase: 'crescent'
    }
  },
  {
    id: 'forest-moonlight',
    name: 'Vrindavan Forest by Moonlight',
    description: 'Krishna\'s beloved forest under the silver moon',
    elements: {
      temple: false,
      river: false,
      forest: true,
      peacocks: true,
      cows: false,
      lotus: false,
      moonPhase: 'full'
    }
  },
  {
    id: 'lotus-pond',
    name: 'Radha Kund Lotus Pond',
    description: 'Sacred lotus pond where Radha and Krishna met',
    elements: {
      temple: true,
      river: false,
      forest: true,
      peacocks: true,
      cows: true,
      lotus: true,
      moonPhase: 'new'
    }
  },
  {
    id: 'gokul-village',
    name: 'Gokul Village at Sunset',
    description: 'Krishna\'s childhood village in golden hour',
    elements: {
      temple: true,
      river: true,
      forest: false,
      peacocks: false,
      cows: true,
      lotus: false,
      moonPhase: 'crescent'
    }
  },
  {
    id: 'govardhan-hill',
    name: 'Govardhan Hill at Night',
    description: 'The sacred hill where Krishna lifted the mountain',
    elements: {
      temple: true,
      river: false,
      forest: true,
      peacocks: true,
      cows: true,
      lotus: true,
      moonPhase: 'full'
    }
  },
  {
    id: 'mathura-temple',
    name: 'Mathura Temple Complex',
    description: 'Ancient temples of Mathura under starlit sky',
    elements: {
      temple: true,
      river: true,
      forest: false,
      peacocks: true,
      cows: false,
      lotus: true,
      moonPhase: 'crescent'
    }
  },
  {
    id: 'vrindavan-garden',
    name: 'Vrindavan Flower Garden',
    description: 'Blooming gardens where Radha and Krishna danced',
    elements: {
      temple: false,
      river: false,
      forest: false,
      peacocks: true,
      cows: false,
      lotus: true,
      moonPhase: 'full'
    }
  }
];

export const DailyVrindavanBackground = () => {
  const [currentScene, setCurrentScene] = useState<VrindavanScene | null>(null);

  useEffect(() => {
    // Get current day of year to cycle through scenes
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const sceneIndex = dayOfYear % vrindavanScenes.length;
    setCurrentScene(vrindavanScenes[sceneIndex]);
  }, []);

  if (!currentScene) return null;

  const { elements } = currentScene;

  return (
    <div className="fixed inset-0 night-sky-gradient overflow-hidden pointer-events-none">
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
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
        {elements.moonPhase === 'full' && <Moon size={60} className="text-moonlight-silver opacity-80 animate-float" />}
        {elements.moonPhase === 'crescent' && (
          <div className="w-12 h-12 text-moonlight-silver opacity-80 animate-float">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        )}
        {elements.moonPhase === 'new' && (
          <div className="w-8 h-8 text-moonlight-silver opacity-40 animate-float">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="8" />
            </svg>
          </div>
        )}
      </div>

      {/* Temple Silhouette */}
      {elements.temple && (
        <div className="absolute bottom-0 left-0 right-0 h-64">
          <svg viewBox="0 0 400 200" className="w-full h-full opacity-20">
            <path
              d="M50 180 L50 120 L80 120 L80 100 L110 100 L110 80 L140 80 L140 60 L170 60 L170 40 L200 40 L200 60 L230 60 L230 80 L260 80 L260 100 L290 100 L290 120 L320 120 L320 180 Z"
              fill="hsl(var(--temple-gold))"
            />
            <path
              d="M200 40 Q200 20 180 20 Q160 20 160 40 Q160 60 180 60 Q200 60 200 40 Z"
              fill="hsl(var(--lotus-gold))"
            />
            <path d="M120 100 Q120 80 100 80 Q80 80 80 100 Z" fill="hsl(var(--temple-gold))" />
            <path d="M280 100 Q280 80 300 80 Q320 80 320 100 Z" fill="hsl(var(--temple-gold))" />
            <rect x="90" y="140" width="20" height="40" fill="hsl(var(--lotus-gold))" />
            <rect x="290" y="140" width="20" height="40" fill="hsl(var(--lotus-gold))" />
          </svg>
        </div>
      )}

      {/* River */}
      {elements.river && (
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg viewBox="0 0 400 100" className="w-full h-full opacity-30">
            <path
              d="M0 80 Q100 60 200 70 Q300 50 400 60 L400 100 L0 100 Z"
              fill="hsl(var(--krishna-blue))"
            />
            <circle cx="100" cy="70" r="2" fill="hsl(var(--moonlight-silver))" opacity="0.6" />
            <circle cx="200" cy="65" r="1.5" fill="hsl(var(--moonlight-silver))" opacity="0.4" />
            <circle cx="300" cy="55" r="2.5" fill="hsl(var(--moonlight-silver))" opacity="0.5" />
          </svg>
        </div>
      )}

      {/* Forest Trees */}
      {elements.forest && (
        <div className="absolute bottom-0 left-0 right-0 h-48">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0"
              style={{ left: `${i * 12}%` }}
            >
              <svg viewBox="0 0 40 80" className="w-10 h-20 opacity-20">
                <path
                  d="M20 80 L15 60 Q10 50 15 40 Q20 30 25 40 Q30 50 25 60 Z"
                  fill="hsl(var(--peacock-teal))"
                />
                <rect x="18" y="60" width="4" height="20" fill="hsl(var(--flute-wood))" />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Peacocks */}
      {elements.peacocks && (
        <div className="absolute bottom-20 right-8">
          <div className="w-16 h-16 peacock-teal-text opacity-40 animate-float">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
            </svg>
          </div>
        </div>
      )}

      {/* Cows */}
      {elements.cows && (
        <div className="absolute bottom-16 left-8">
          <div className="w-12 h-8 temple-gold-text opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <svg viewBox="0 0 24 16" fill="currentColor">
              <ellipse cx="12" cy="8" rx="8" ry="4" />
              <circle cx="8" cy="6" r="1" />
              <circle cx="16" cy="6" r="1" />
            </svg>
          </div>
        </div>
      )}

      {/* Floating Lotus Petals */}
      {elements.lotus && (
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
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
      )}

      {/* Sparkles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={i}
            size={Math.random() * 4 + 2}
            className="absolute temple-gold-text opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Soft Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-lotus-gold/10 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-krishna-blue/10 to-transparent blur-3xl" />
    </div>
  );
};
