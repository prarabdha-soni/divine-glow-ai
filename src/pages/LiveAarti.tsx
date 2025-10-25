import { useState, useEffect } from 'react';
import { ArrowLeft, Radio, Calendar, Play, Clock, X } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { useNavigate } from 'react-router-dom';

interface AartiSchedule {
  name: string;
  time: string;
  duration: string;
  isNext?: boolean;
}

interface TempleSchedule {
  temple: string;
  location: string;
  aartis: AartiSchedule[];
}

const LiveAarti = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [videoThumbnails, setVideoThumbnails] = useState<Record<string, string>>({});
  
  // YouTube API Key
  const YOUTUBE_API_KEY = "AIzaSyBvQcLcPhoGKqhh6bRKnGHQ4By7O6ZaMjw";

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Today's Aarti Schedule
  const todaySchedule: TempleSchedule[] = [
    {
      temple: "Shirdi Sai Baba",
      location: "Shirdi, Maharashtra",
      aartis: [
        { name: "Kakad Aarti", time: "05:00", duration: "30 min", isNext: false },
        { name: "Madhyan Aarti", time: "12:00", duration: "30 min", isNext: false },
        { name: "Dhoop Aarti", time: "18:30", duration: "30 min", isNext: false },
        { name: "Shej Aarti", time: "22:00", duration: "30 min", isNext: false }
      ]
    },
    {
      temple: "Mahakaleshwar Temple",
      location: "Ujjain, Madhya Pradesh",
      aartis: [
        { name: "Bhasma Aarti", time: "04:00", duration: "45 min", isNext: false },
        { name: "Morning Aarti", time: "07:00", duration: "30 min", isNext: false },
        { name: "Evening Aarti", time: "19:00", duration: "30 min", isNext: false },
        { name: "Shayan Aarti", time: "22:30", duration: "30 min", isNext: false }
      ]
    },
    {
      temple: "ISKCON Vrindavan",
      location: "Vrindavan, Uttar Pradesh",
      aartis: [
        { name: "Mangal Aarti", time: "04:30", duration: "45 min", isNext: false },
        { name: "Tulsi Aarti", time: "07:30", duration: "30 min", isNext: false },
        { name: "Raj Bhog Aarti", time: "12:00", duration: "30 min", isNext: false },
        { name: "Sandhya Aarti", time: "19:00", duration: "30 min", isNext: false }
      ]
    }
  ];

  // Mark next upcoming aarti for each temple
  const getScheduleWithNextAarti = () => {
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    
    return todaySchedule.map(temple => ({
      ...temple,
      aartis: temple.aartis.map((aarti, index) => {
        const [hours, mins] = aarti.time.split(':').map(Number);
        const aartiMinutes = hours * 60 + mins;
        
        // Find next aarti
        const nextAartiIndex = temple.aartis.findIndex((a) => {
          const [h, m] = a.time.split(':').map(Number);
          return (h * 60 + m) > currentMinutes;
        });
        
        return {
          ...aarti,
          isNext: index === nextAartiIndex
        };
      })
    }));
  };

  // Curated list of live aarti streams from famous temples
  const liveContent = [
    {
      id: 1,
      aartiId: 'vaishno-devi',
      title: "Maa Vaishno Devi Bhawan - Live Darshan",
      scholar: "Shri Mata Vaishno Devi Shrine Board",
      type: "aarti",
      youtubeId: "IKNfQl0-4wk",
      isLive: true,
      timing: "24/7 Live Darshan"
    },
    {
      id: 2,
      aartiId: 'haridwar',
      title: "Ganga Aarti - Haridwar",
      scholar: "Har Ki Pauri, Haridwar",
      type: "aarti",
      youtubeId: "9s4SoCaLoMU",
      isLive: true,
      timing: "Daily Evening Aarti"
    },
    {
      id: 3,
      aartiId: 'varanasi',
      title: "Ganga Aarti - Varanasi (Assi Ghat)",
      scholar: "Assi Ghat, Kashi",
      type: "aarti",
      youtubeId: "5KIZ674msxI",
      isLive: true,
      timing: "Daily Morning & Evening"
    },
    {
      id: 4,
      aartiId: 'mahakaleshwar',
      title: "Mahakaleshwar Bhasma Aarti - Ujjain",
      scholar: "Mahakaleshwar Jyotirlinga Temple",
      type: "aarti",
      youtubeId: "5Wyg0zNlyp4",
      isLive: true,
      timing: "Daily 4:00 AM Bhasma Aarti"
    },
    {
      id: 5,
      aartiId: 'ram-mandir',
      title: "Shri Ram Lalla Sringaar Aarti - Ayodhya",
      scholar: "Ram Mandir, Ayodhya",
      type: "aarti",
      youtubeId: "9airRIcDGWA",
      isLive: true,
      timing: "Daily Multiple Aartis"
    },
    {
      id: 6,
      aartiId: 'shirdi',
      title: "Sai Baba Live Darshan & Aarti",
      scholar: "Shirdi Sai Baba Temple",
      type: "aarti",
      youtubeId: "0ogMwBJEoqk",
      isLive: true,
      timing: "24/7 Live Darshan"
    }
  ];

  // Fetch YouTube thumbnails
  useEffect(() => {
    const fetchThumbnails = async () => {
      const videoIds = liveContent.map(content => content.youtubeId).join(',');
      
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        
        if (data.items) {
          const thumbnails: Record<string, string> = {};
          data.items.forEach((item: any) => {
            thumbnails[item.id] = item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url;
          });
          setVideoThumbnails(thumbnails);
        }
      } catch (error) {
        console.error('Error fetching thumbnails:', error);
      }
    };

    fetchThumbnails();
  }, []);

  const filteredContent = selectedCategory === 'all' 
    ? liveContent 
    : liveContent.filter(item => item.type === selectedCategory);

  const [selectedVideo, setSelectedVideo] = useState<typeof liveContent[0] | null>(null);

  const scheduleWithNext = getScheduleWithNextAarti();

  // Map temple names to video IDs
  const getVideoForTemple = (templeName: string) => {
    const templeVideoMap: Record<string, string> = {
      "Shirdi Sai Baba": "0ogMwBJEoqk",
      "Mahakaleshwar Temple": "5Wyg0zNlyp4",
      "ISKCON Vrindavan": "IKNfQl0-4wk"
    };
    return templeVideoMap[templeName] || liveContent[0].youtubeId;
  };

  const handleAartiClick = (templeName: string, aartiName: string) => {
    const videoId = getVideoForTemple(templeName);
    const video = liveContent.find(v => v.youtubeId === videoId);
    if (video) {
      setSelectedVideo(video);
      // Scroll to top smoothly to show the video player
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleVideoClick = (video: typeof liveContent[0]) => {
    setSelectedVideo(video);
    // Scroll to top smoothly to show the video player
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/95 backdrop-blur-xl border-b border-white/10">
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-serif text-white">Live Temple Darshan</h1>
            <p className="text-xs text-white/60 mt-1">Experience divine aarti and darshan from sacred temples</p>
          </div>
          <div className="w-10 h-10 flex items-center justify-center">
            <Radio size={20} className="text-red-500 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Current Playing Video - YouTube Style */}
      {selectedVideo && (
        <div className="sticky top-[80px] z-40 bg-black">
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
      )}

      <div className="pt-32 pb-24">
        {/* Current Time & Info Cards */}
        <div className="px-6 mb-6 grid grid-cols-3 gap-3">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center">
            <Clock size={24} className="mx-auto mb-2 text-white" />
            <p className="text-white/60 text-xs mb-1">Current Time</p>
            <p className="text-white font-bold text-lg">
              {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })}
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center">
            <Radio size={24} className="mx-auto mb-2 text-red-500 animate-pulse" />
            <p className="text-white/60 text-xs mb-1">Live Streams</p>
            <p className="text-white font-bold text-lg">{liveContent.filter(c => c.isLive).length}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center">
            <Calendar size={24} className="mx-auto mb-2 text-orange-400" />
            <p className="text-white/60 text-xs mb-1">Aarti Schedule</p>
            <p className="text-white font-bold text-lg">Daily timings</p>
          </div>
        </div>

        {/* Today's Aarti Schedule */}
        <div className="px-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Today's Aarti Schedule</h2>
          <div className="space-y-4">
            {scheduleWithNext.map((temple, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-base">{temple.temple}</h3>
                    <p className="text-white/60 text-xs">{temple.location}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {temple.aartis.map((aarti, aartiIndex) => (
                    <div
                      key={aartiIndex}
                      onClick={() => handleAartiClick(temple.temple, aarti.name)}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all hover:scale-[1.02] ${
                        aarti.isNext 
                          ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 hover:from-orange-500/30 hover:to-pink-500/30' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{aarti.name}</p>
                        <p className="text-white/60 text-xs">{aarti.duration}</p>
                      </div>
                      <div className="text-right flex items-center gap-2">
                        <p className="text-white font-bold text-lg">{aarti.time}</p>
                        {aarti.isNext && (
                          <span className="inline-block px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full">
                            Next
                          </span>
                        )}
                        <Play size={16} className="text-white/60" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Category Tabs */}
        <div className="px-6 mb-6 mt-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('aarti')}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'aarti'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              🪔 Aarti
            </button>
            <button
              onClick={() => setSelectedCategory('katha')}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'katha'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              📖 Katha
            </button>
          </div>
        </div>

        {/* Live Now Section */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Radio size={16} className="text-red-500 animate-pulse" />
            <h2 className="text-lg font-semibold text-white">Live Now</h2>
          </div>
          <div className="grid gap-4">
            {filteredContent.filter(item => item.isLive).map((item) => (
              <div
                key={item.id}
                onClick={() => handleVideoClick(item)}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="relative aspect-video">
                  <img
                    src={videoThumbnails[item.youtubeId] || "/assets/images/krishna.png"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Live Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    LIVE
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center">
                      <Play size={32} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-2">{item.scholar}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-orange-400" />
                      <span className="text-orange-400 text-xs">{item.timing}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/aarti/${item.aartiId}`);
                      }}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded-full transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scheduled Content */}
        {filteredContent.filter(item => !item.isLive).length > 0 && (
          <div className="px-6">
            <h2 className="text-lg font-semibold text-white mb-3">Today's Schedule</h2>
            <div className="grid gap-3">
              {filteredContent.filter(item => !item.isLive).map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleVideoClick(item)}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={videoThumbnails[item.youtubeId] || "/assets/images/krishna.png"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play size={24} className="text-white" fill="white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm mb-1">{item.title}</h3>
                      <p className="text-white/60 text-xs mb-2">{item.scholar}</p>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-purple-400" />
                        <span className="text-purple-400 text-xs">{item.timing}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default LiveAarti;

