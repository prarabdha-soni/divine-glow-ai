import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, X } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { useState, useEffect } from 'react';
import { guruCollections } from '@/data/guruCollections';

const Guru = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);
  const [videoThumbnails, setVideoThumbnails] = useState<Record<string, string>>({});

  const handleVideoClick = (youtubeId: string, title: string, description: string) => {
    // Automatically close current video and open new one
    setSelectedVideo({
      url: `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`,
      title: title,
      description: description
    });
    
    // Scroll to top smoothly to show the video player
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fetch thumbnails for all videos
  useEffect(() => {
    const fetchThumbnails = async () => {
      try {
        const apiKey = 'AIzaSyBvQcLcPhoGKqhh6bRKnGHQ4By7O6ZaMjw';
        
        // Collect all video IDs from all guru collections
        const allVideoIds = guruCollections.flatMap(guru => 
          guru.videos.map(video => video.youtubeId)
        );
        
        if (allVideoIds.length > 0) {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${allVideoIds.join(',')}&key=${apiKey}`
          );
          const data = await response.json();
          
          if (data.items) {
            const thumbnails: Record<string, string> = {};
            data.items.forEach((item: any) => {
              thumbnails[item.id] = item.snippet.thumbnails.high?.url || 
                                    item.snippet.thumbnails.medium?.url ||
                                    item.snippet.thumbnails.default?.url;
            });
            setVideoThumbnails(thumbnails);
          }
        }
      } catch (error) {
        console.error('Error fetching thumbnails:', error);
      }
    };

    fetchThumbnails();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/95 backdrop-blur-xl border-b border-white/10">
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="text-center flex-1">
              <h1 className="text-2xl font-bold text-white">Guru</h1>
              <p className="text-xs text-white/60">Divine Spiritual Guidance</p>
            </div>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      {/* Content with padding for fixed header */}
      <div className="pt-24">
        {/* Current Playing Video - YouTube Style */}
        {selectedVideo && (
        <div className="sticky top-0 z-40 bg-black">
          <div className="relative w-full aspect-video">
            <iframe
              src={selectedVideo.url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] px-4 py-3 border-b border-white/10">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm line-clamp-2">{selectedVideo.title}</h3>
                <p className="text-white/60 text-xs mt-1">{selectedVideo.description}</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Guru Collections - Netflix Style */}
      <div className="px-6 pb-24 pt-4">
        {guruCollections.map((guru) => (
          <div key={guru.id} className="mb-12">
            {/* Guru Name Header */}
            <h2 className="text-2xl font-bold text-white mb-4">{guru.name}</h2>

            {/* Videos Grid */}
            <div className="grid grid-cols-2 gap-4">
              {guru.videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoClick(video.youtubeId, video.title, guru.description)}
                  className="relative rounded-lg overflow-hidden cursor-pointer group transition-transform hover:scale-[1.05]"
                >
                  <div className="relative aspect-video">
                    {videoThumbnails[video.youtubeId] ? (
                      <img 
                        src={videoThumbnails[video.youtubeId]} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play size={24} fill="black" className="text-black ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Title */}
                  <div className="mt-2">
                    <h3 className="text-white text-sm font-medium line-clamp-2">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};

export default Guru;

