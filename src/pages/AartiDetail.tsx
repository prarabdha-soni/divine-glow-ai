import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Play, Radio, Calendar, X } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { useState, useEffect } from 'react';

const AartiDetail = () => {
  const navigate = useNavigate();
  const { aartiId } = useParams<{ aartiId: string }>();
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId: string;
    title: string;
    scholar: string;
    timing: string;
    isLive: boolean;
  } | null>(null);
  const [videoThumbnail, setVideoThumbnail] = useState<string>('');

  const YOUTUBE_API_KEY = "AIzaSyBvQcLcPhoGKqhh6bRKnGHQ4By7O6ZaMjw";

  // Define aarti content
  const aartiContent: Record<string, {
    id: string;
    title: string;
    scholar: string;
    youtubeId: string;
    isLive: boolean;
    timing: string;
    description: string;
  }> = {
    'vaishno-devi': {
      id: 'vaishno-devi',
      title: "Maa Vaishno Devi Bhawan - Live Darshan",
      scholar: "Shri Mata Vaishno Devi Shrine Board",
      youtubeId: "IKNfQl0-4wk",
      isLive: true,
      timing: "24/7 Live Darshan",
      description: "Experience the divine darshan of Maa Vaishno Devi from the holy shrine"
    },
    'haridwar': {
      id: 'haridwar',
      title: "Ganga Aarti - Haridwar",
      scholar: "Har Ki Pauri, Haridwar",
      youtubeId: "9s4SoCaLoMU",
      isLive: true,
      timing: "Daily Evening Aarti",
      description: "Witness the mesmerizing Ganga Aarti at Har Ki Pauri, Haridwar"
    },
    'varanasi': {
      id: 'varanasi',
      title: "Ganga Aarti - Varanasi (Assi Ghat)",
      scholar: "Assi Ghat, Kashi",
      youtubeId: "5KIZ674msxI",
      isLive: true,
      timing: "Daily Morning & Evening",
      description: "Experience the spiritual Ganga Aarti at Assi Ghat, Varanasi"
    },
    'mahakaleshwar': {
      id: 'mahakaleshwar',
      title: "Mahakaleshwar Bhasma Aarti - Ujjain",
      scholar: "Mahakaleshwar Jyotirlinga Temple",
      youtubeId: "5Wyg0zNlyp4",
      isLive: true,
      timing: "Daily 4:00 AM Bhasma Aarti",
      description: "Witness the sacred Bhasma Aarti at Mahakaleshwar Jyotirlinga, one of the 12 Jyotirlingas"
    },
    'ram-mandir': {
      id: 'ram-mandir',
      title: "Shri Ram Lalla Sringaar Aarti - Ayodhya",
      scholar: "Ram Mandir, Ayodhya",
      youtubeId: "9airRIcDGWA",
      isLive: true,
      timing: "Daily Multiple Aartis",
      description: "Divine darshan and aarti from the holy Ram Mandir in Ayodhya"
    },
    'shirdi': {
      id: 'shirdi',
      title: "Sai Baba Live Darshan & Aarti",
      scholar: "Shirdi Sai Baba Temple",
      youtubeId: "0ogMwBJEoqk",
      isLive: true,
      timing: "24/7 Live Darshan",
      description: "Experience the blessings of Sai Baba with live darshan from Shirdi"
    }
  };

  const aarti = aartiId ? aartiContent[aartiId] : null;

  // Fetch thumbnail
  useEffect(() => {
    if (!aarti) return;

    const fetchThumbnail = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${aarti.youtubeId}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          const thumbnail = data.items[0].snippet.thumbnails.high?.url || 
                           data.items[0].snippet.thumbnails.medium?.url;
          if (thumbnail) {
            setVideoThumbnail(thumbnail);
          }
        }
      } catch (error) {
        console.error('Error fetching thumbnail:', error);
      }
    };

    fetchThumbnail();
  }, [aarti]);

  const handlePlayClick = () => {
    if (aarti) {
      setSelectedVideo({
        youtubeId: aarti.youtubeId,
        title: aarti.title,
        scholar: aarti.scholar,
        timing: aarti.timing,
        isLive: aarti.isLive
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!aarti) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-xl mb-4">Aarti not found</h2>
          <button
            onClick={() => navigate('/live-aarti')}
            className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
          >
            Back to Live Aarti
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/95 backdrop-blur-xl border-b border-white/10">
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/live-aarti')}
              className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="text-center flex-1">
              <h1 className="text-xl font-bold text-white">{aarti.title}</h1>
              <p className="text-xs text-white/60">{aarti.scholar}</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              {aarti.isLive && <Radio size={20} className="text-red-500 animate-pulse" />}
            </div>
          </div>
        </div>
      </div>

      {/* Content with padding for fixed header */}
      <div className="pt-24">
        {/* Current Playing Video - YouTube Style */}
        {selectedVideo ? (
          <div className="sticky top-24 z-40 bg-black">
            <div className="relative w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] px-4 py-3 border-b border-white/10">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {selectedVideo.isLive && (
                      <div className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        LIVE
                      </div>
                    )}
                    <h3 className="text-white font-semibold text-sm line-clamp-2">{selectedVideo.title}</h3>
                  </div>
                  <p className="text-white/60 text-xs">{selectedVideo.scholar}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar size={12} className="text-orange-400" />
                    <span className="text-orange-400 text-xs">{selectedVideo.timing}</span>
                  </div>
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
        ) : (
          /* Large Featured Video Card */
          <div className="px-6 pb-6">
            <div
              onClick={handlePlayClick}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <div className="relative aspect-video">
                <img
                  src={videoThumbnail || "/assets/images/krishna.png"}
                  alt={aarti.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Live Badge */}
                {aarti.isLive && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    LIVE
                  </div>
                )}
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                    <Play size={40} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Details Section */}
        <div className="px-6 pb-24">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-white text-xl font-bold mb-3">About</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-4">{aarti.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Calendar size={20} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">Timing</p>
                  <p className="text-white text-sm font-medium">{aarti.timing}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Radio size={20} className="text-red-400" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">Status</p>
                  <p className="text-white text-sm font-medium">{aarti.isLive ? 'Live Now' : 'Scheduled'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};

export default AartiDetail;

