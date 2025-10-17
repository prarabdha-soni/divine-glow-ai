import { useState } from 'react';
import { Heart, MessageCircle, ShoppingBag, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/BottomNav';

const moments = [
  {
    id: 1,
    videoId: "Tx3VbD4PzjI",
    title: "Krishna Dance Meditation",
    affirmation: "I dance in devotion, releasing all that is heavy. My body is a temple moving in Krishna's rhythm.",
    mantra: "Om Namo Bhagavate Vasudevaya",
    category: "Kapha Balance • Weight Release"
  },
  {
    id: 2,
    videoId: "t8eYkDyVq2c",
    title: "Hare Krishna Maha Mantra",
    affirmation: "Each breath is Krishna's flute, each heartbeat His drum. I surrender my worries to divine protection.",
    mantra: "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare",
    category: "Vata Healing • Inner Peace"
  },
  {
    id: 3,
    videoId: "hfzI-yPjKzA",
    title: "Radha's Glow Sadhana",
    affirmation: "I am radiant with divine love. My skin reflects the light of my devotional heart.",
    mantra: "Om Shri Radhayai Namaha",
    category: "Ojas Radiance • Gopi Beauty"
  },
  {
    id: 4,
    videoId: "2qA0UJ8YbTo",
    title: "Krishna's Night Blessings",
    affirmation: "I rest in the lap of the divine mother. Sleep is my sacred surrender to Krishna's love.",
    mantra: "Om Shanti Shanti Shanti",
    category: "Vata Grounding • Divine Sleep"
  }
];

const DivineMoments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(false);
  const currentMoment = moments[currentIndex];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const itemHeight = e.currentTarget.clientHeight;
    const newIndex = Math.round(scrollTop / itemHeight);
    if (newIndex !== currentIndex && newIndex < moments.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      {/* Fullscreen Video Feed */}
      <div 
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        onScroll={handleScroll}
      >
        {moments.map((moment, index) => (
          <div 
            key={moment.id}
            className="h-screen w-full snap-start relative flex items-center justify-center"
          >
            {/* Video Player */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${moment.videoId}?autoplay=${index === currentIndex ? 1 : 0}&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${moment.videoId}`}
              title={moment.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Bottom Info */}
            <div className="absolute bottom-24 left-0 right-0 px-6 pointer-events-none">
              <div className="max-w-md mx-auto space-y-3">
                <div className="text-xs text-divine-saffron font-medium tracking-wide">
                  {moment.category}
                </div>
                <h3 className="text-white text-xl font-semibold">
                  {moment.title}
                </h3>
                <p className="text-white/95 text-sm leading-relaxed italic">
                  "{moment.affirmation}"
                </p>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <span className="text-base">🕉️</span>
                  <span className="font-medium">{moment.mantra}</span>
                </div>
              </div>
            </div>

            {/* Side Actions */}
            <div className="absolute right-4 bottom-32 flex flex-col gap-6 pointer-events-auto">
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              >
                <Heart className="w-6 h-6" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              >
                <MessageCircle className="w-6 h-6" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              >
                <ShoppingBag className="w-6 h-6" />
              </Button>
            </div>

            {/* Mute Toggle */}
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white pointer-events-auto"
              onClick={() => setMuted(!muted)}
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </Button>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DivineMoments;
