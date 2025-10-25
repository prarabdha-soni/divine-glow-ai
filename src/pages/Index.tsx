import { useNavigate } from 'react-router-dom';
import { Bell, Sparkles, Play } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { FullScreenVideoPlayer } from '@/components/FullScreenVideoPlayer';
import { useState } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);

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

        {/* Hero Image Section - Smaller */}
        <div className="mb-4">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/assets/images/gemini.png" 
              alt="Divine Harmony" 
              className="w-full h-[180px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Stories Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Stories</h3>
            <button 
              onClick={() => navigate('/sleep')}
              className="text-xs text-purple-400 font-medium"
            >
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Radha Krishna ki shaadi kyon nhi hui */}
            <div 
              onClick={() => setSelectedVideo({
                url: 'https://www.youtube.com/embed/8V4X0CE7fvc',
                title: 'Radha Krishna ki shaadi kyon nhi hui',
                description: 'The eternal mystery of divine love'
              })}
              className="cursor-pointer group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/radha.png" 
                  alt="Radha Krishna Story" 
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                  30 min
                </div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Radha Krishna ki shaadi kyon nhi hui</h4>
              <p className="text-white/60 text-xs">Divine Love Mystery</p>
            </div>

            {/* Mahabharat Secrets */}
            <div 
              onClick={() => setSelectedVideo({
                url: 'https://www.youtube.com/embed/7kKJO8LtL-M',
                title: 'Mahabharat Secrets',
                description: 'Untold stories from the great epic'
              })}
              className="cursor-pointer group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/karan.png" 
                  alt="Mahabharat Secrets" 
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                  40 min
                </div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Mahabharat Secrets</h4>
              <p className="text-white/60 text-xs">Epic Mysteries</p>
            </div>
          </div>
        </div>

        {/* Music Album Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Music Album</h3>
            <button 
              onClick={() => navigate('/discover')}
              className="text-xs text-purple-400 font-medium"
            >
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Radhe Tere Charno Ki */}
            <div 
              onClick={() => setSelectedVideo({
                url: 'https://www.youtube.com/embed/k-mHGA2lvnU',
                title: 'Radhe Tere Charno Ki',
                description: 'Peaceful devotional song'
              })}
              className="cursor-pointer group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-2">
                <img 
                  src="/assets/images/radha.png" 
                  alt="Radhe Tere Charno Ki" 
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
                  5 min
                </div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Radhe Tere Charno Ki</h4>
              <p className="text-white/60 text-xs">Devotional Bhajan</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Full Screen Video Player */}
      {selectedVideo && (
        <FullScreenVideoPlayer
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </div>
  );
};

export default Index;