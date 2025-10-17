import { useState } from 'react';
import { Heart, MessageCircle, ShoppingBag, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/BottomNav';

const moments = [
  {
    id: 1,
    videoId: "Tx3VbD4PzjI",
    title: "Krishna Dance Meditation",
    affirmation: "Move with devotion, release what weighs you down",
    category: "Weight Loss"
  },
  {
    id: 2,
    videoId: "t8eYkDyVq2c",
    title: "Hare Krishna Calm",
    affirmation: "Breathe in peace, breathe out worry",
    category: "Stress Relief"
  },
  {
    id: 3,
    videoId: "hfzI-yPjKzA",
    title: "Radiance Meditation",
    affirmation: "Your inner light shines through your skin",
    category: "Glowing Skin"
  },
  {
    id: 4,
    videoId: "2qA0UJ8YbTo",
    title: "Krishna's Lullaby",
    affirmation: "Rest in divine embrace, sleep comes naturally",
    category: "Better Sleep"
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
              <div className="max-w-md mx-auto">
                <div className="text-xs text-divine-saffron font-medium mb-2">
                  {moment.category}
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {moment.title}
                </h3>
                <p className="text-white/90 text-sm italic">
                  "{moment.affirmation}"
                </p>
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
