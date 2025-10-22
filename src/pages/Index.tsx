import { useNavigate } from 'react-router-dom';
import { Play, Gift, Moon } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ModernKrishnaBackground } from '@/components/ModernKrishnaBackground';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen krishna-bg">
      {/* Modern Krishna Background */}
      <ModernKrishnaBackground />
      
      {/* Header */}
      <div className="relative z-10 px-6 pt-16 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 krishna-gradient rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🕉️</span>
            </div>
            <h1 className="text-2xl calm-heading krishna-text">Nishu</h1>
          </div>
          <Gift size={24} className="krishna-text-subtle" />
        </div>

        {/* Greeting */}
        <div className="mb-8">
          <h2 className="text-3xl calm-heading calm-text mb-2">Good Afternoon, Prarabdha</h2>
          <p className="text-white/80 text-sm mt-2 calm-body italic">
            Tonight, uncover secrets that were never meant to be told... 🌙✨
          </p>
        </div>

        {/* Popular on Nishu */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl calm-heading calm-text">Popular Tonight</h3>
              <p className="text-xs text-white/60 mt-1">🔥 Everyone's listening before sleep</p>
            </div>
            <span className="text-sm text-amber-400 font-medium cursor-pointer">See All</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {/* Krishna Card */}
            <div 
              onClick={() => navigate('/sleep')}
              className="relative flex-shrink-0 w-80 cursor-pointer group"
            >
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/krishna.png" 
                  alt="Divine Sleep Story" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                    <Play size={12} fill="currentColor" />
                    <span>45 min</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1">Radha Krishna ki shaadi kyon nhi hui</h3>
                  <p className="text-white/70 text-sm">💔 The forbidden love that shook the heavens...</p>
                  <p className="text-amber-400 text-xs mt-1">45 min • Most listened tonight</p>
                </div>
              </div>
            </div>

            {/* Radha Card */}
            <div 
              onClick={() => navigate('/discover')}
              className="relative flex-shrink-0 w-80 cursor-pointer group"
            >
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/radha.png" 
                  alt="Radhe Music Collection" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                    <Play size={12} fill="currentColor" />
                    <span>29 min</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1">Radhe - Divine Melodies</h3>
                  <p className="text-white/70 text-sm">💫 Songs that made the gods weep...</p>
                  <p className="text-amber-400 text-xs mt-1">29 min • Listeners dream about this</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Featured Collection */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl calm-heading calm-text">⭐ Tonight's Special</h3>
              <p className="text-xs text-white/60 mt-1">Fall asleep to this mystery</p>
            </div>
            <span className="text-sm text-amber-400 font-medium cursor-pointer">See All</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {/* Mahabharat Secrets Card */}
            <div 
              onClick={() => navigate('/sleep')}
              className="relative flex-shrink-0 w-80 cursor-pointer group"
            >
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/karan.png" 
                  alt="Mahabharat Secrets" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* New Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                    New
                  </span>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                    <Play size={12} fill="currentColor" />
                    <span>30 min</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1">Mahabharat Secrets</h3>
                  <p className="text-white/70 text-sm">⚔️ The untold truth behind the greatest war...</p>
                  <p className="text-amber-400 text-xs mt-1">30 min • 🔥 Trending now</p>
                </div>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="relative flex-shrink-0 w-80 cursor-pointer group">
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/70 p-8">
                    <div className="text-5xl mb-4 animate-pulse">🔮</div>
                    <p className="text-base font-medium mb-2">Coming Tomorrow Night...</p>
                    <p className="text-sm italic text-white/60">A mystery you can't miss</p>
                  </div>
                </div>
              </div>
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