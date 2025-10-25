import { useNavigate } from 'react-router-dom';
import { Bell, Sparkles } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
      {/* Header */}
      <div className="relative z-10 px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-white" />
          </div>
          <h1 className="text-3xl font-serif italic text-white absolute left-1/2 transform -translate-x-1/2">Sukoon</h1>
          <Bell size={20} className="text-white/80" />
        </div>

        {/* Hero Image Section */}
        <div className="mb-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/images/gemini.png" 
              alt="Divine Harmony" 
              className="w-full h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Cosmic Chronicles */}
        <div className="mb-24">
          <h3 className="text-xl font-semibold text-white mb-4">Cosmic Chronicles</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Whispers of the Gopies */}
            <div 
              onClick={() => navigate('/sleep')}
              className="cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/krishna.png" 
                  alt="Whispers of the Gopies" 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Whispers of the Gopies</h4>
              <p className="text-white/60 text-xs">Enigmatic Stories</p>
            </div>

            {/* Secret of Savarnal Jewel */}
            <div 
              onClick={() => navigate('/sleep')}
              className="cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/radha.png" 
                  alt="Secret of Savarnal Jewel" 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Secret of Savarnal Jewel</h4>
              <p className="text-white/60 text-xs">Eternal Macires</p>
            </div>

            {/* The Hidden Dhun Player */}
            <div 
              onClick={() => navigate('/sleep')}
              className="cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/gemini.png" 
                  alt="The Hidden Dhun Player" 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">The Hidden Dhun Player</h4>
              <p className="text-white/60 text-xs">Eternal Meloxes</p>
            </div>

            {/* Ancient Mysteries */}
            <div 
              onClick={() => navigate('/sleep')}
              className="cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/karan.png" 
                  alt="Ancient Mysteries" 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">The Hidden Dhun Player</h4>
              <p className="text-white/60 text-xs">Ancient Mysteries</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;