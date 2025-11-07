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

interface LiveContentItem {
  id: number;
  aartiId: string;
  title: string;
  scholar: string;
  type: string;
  youtubeId: string;
  isLive: boolean;
  timing: string;
}

const LiveAarti = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [videoThumbnails, setVideoThumbnails] = useState<Record<string, string>>({});
  const [mahakalAartis, setMahakalAartis] = useState<LiveContentItem[]>([]);
  const [isLoadingMahakal, setIsLoadingMahakal] = useState(false);
  const [saiBabaAartis, setSaiBabaAartis] = useState<LiveContentItem[]>([]);
  const [isLoadingSaiBaba, setIsLoadingSaiBaba] = useState(false);
  
  // YouTube API Key
  const YOUTUBE_API_KEY = "AIzaSyBvQcLcPhoGKqhh6bRKnGHQ4By7O6ZaMjw";
  const DARSHAN_TEMPLE_CHANNEL = "darshantemple";
  const SAI_BABA_CHANNEL = "therealsoulshirdisai";

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
  const baseLiveContent: LiveContentItem[] = [
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
      id: 5,
      aartiId: 'ram-mandir',
      title: "Shri Ram Lalla Sringaar Aarti - Ayodhya",
      scholar: "Ram Mandir, Ayodhya",
      type: "aarti",
      youtubeId: "9airRIcDGWA",
      isLive: true,
      timing: "Daily Multiple Aartis"
    }
  ];

  // Combined live content with dynamically fetched Mahakal and Sai Baba aartis
  const liveContent = [...mahakalAartis, ...saiBabaAartis, ...baseLiveContent];

  // Fetch Mahakal live aarti and bhasma aarti from Darshan Temple channel
  useEffect(() => {
    const fetchMahakalAartis = async () => {
      setIsLoadingMahakal(true);
      try {
        // Step 1: Get channel ID from handle (@darshantemple)
        // Try multiple methods to find the channel
        let channelId: string | null = null;
        
        // Method 1: Search by handle
        try {
          const searchResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=@${DARSHAN_TEMPLE_CHANNEL}&type=channel&key=${YOUTUBE_API_KEY}&maxResults=1`
          );
          const searchData = await searchResponse.json();
          if (searchData.items && searchData.items.length > 0) {
            channelId = searchData.items[0].snippet.channelId;
          }
        } catch (e) {
          console.log('Method 1 failed, trying alternative');
        }
        
        // Method 2: Search by channel name
        if (!channelId) {
          try {
            const searchResponse2 = await fetch(
              `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${DARSHAN_TEMPLE_CHANNEL}&type=channel&key=${YOUTUBE_API_KEY}&maxResults=5`
            );
            const searchData2 = await searchResponse2.json();
            if (searchData2.items) {
              // Find the most relevant channel
              const relevantChannel = searchData2.items.find((item: any) => 
                item.snippet.title.toLowerCase().includes('darshan') || 
                item.snippet.title.toLowerCase().includes('temple')
              );
              if (relevantChannel) {
                channelId = relevantChannel.snippet.channelId;
              } else if (searchData2.items.length > 0) {
                channelId = searchData2.items[0].snippet.channelId;
              }
            }
          } catch (e) {
            console.log('Method 2 failed');
          }
        }
        
        // Method 3: Try forUsername (legacy)
        if (!channelId) {
          try {
            const channelResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${DARSHAN_TEMPLE_CHANNEL}&key=${YOUTUBE_API_KEY}`
            );
            const channelData = await channelResponse.json();
            if (channelData.items && channelData.items.length > 0) {
              channelId = channelData.items[0].id;
            }
          } catch (e) {
            console.log('Method 3 failed');
          }
        }
        
        if (channelId) {
          await fetchStreamsFromChannel(channelId);
        } else {
          console.warn('Could not find channel ID for', DARSHAN_TEMPLE_CHANNEL);
        }
      } catch (error) {
        console.error('Error fetching Mahakal aartis:', error);
      } finally {
        setIsLoadingMahakal(false);
      }
    };

    const fetchStreamsFromChannel = async (channelId: string) => {
      try {
        // Step 2: Get channel's uploads playlist ID
        let uploadsPlaylistId: string | null = null;
        try {
          const channelInfoResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
          );
          const channelInfo = await channelInfoResponse.json();
          if (channelInfo.items && channelInfo.items.length > 0) {
            uploadsPlaylistId = channelInfo.items[0].contentDetails?.relatedPlaylists?.uploads;
          }
        } catch (e) {
          console.log('Could not get uploads playlist');
        }

        const allVideos: LiveContentItem[] = [];
        let videoIdSet = new Set<string>();

        // Method 1: Get recent videos from uploads playlist and filter
        if (uploadsPlaylistId) {
          try {
            const playlistResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&key=${YOUTUBE_API_KEY}&maxResults=20&order=date`
            );
            const playlistData = await playlistResponse.json();

            if (playlistData.items) {
              playlistData.items.forEach((item: any) => {
                const videoId = item.snippet.resourceId.videoId;
                if (!videoIdSet.has(videoId)) {
                  videoIdSet.add(videoId);
                  const title = item.snippet.title.toLowerCase();
                  const isBhasmaAarti = title.includes('bhasma');
                  const isLiveAarti = title.includes('live') || title.includes('mahakal') || title.includes('aarti');
                  
                  if (isBhasmaAarti || isLiveAarti) {
                    // Check if it's actually live
                    const isLive = item.snippet.liveBroadcastContent === 'live';
                    
                    allVideos.push({
                      id: 1000 + allVideos.length,
                      aartiId: `mahakal-${isBhasmaAarti ? 'bhasma' : 'live'}-${allVideos.length}`,
                      title: item.snippet.title,
                      scholar: "Mahakaleshwar Jyotirlinga Temple, Ujjain",
                      type: "aarti",
                      youtubeId: videoId,
                      isLive: isLive,
                      timing: isBhasmaAarti ? "Daily 4:00 AM Bhasma Aarti" : (isLive ? "Live Aarti" : "Recent Aarti")
                    });
                  }
                }
              });
            }
          } catch (e) {
            console.log('Error fetching from uploads playlist:', e);
          }
        }

        // Method 2: Search for specific queries
        const searchQueries = [
          'mahakal live aarti',
          'bhasma aarti',
          'mahakaleshwar aarti'
        ];

        for (const query of searchQueries) {
          // Search for live streams
          try {
            const searchResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&eventType=live&key=${YOUTUBE_API_KEY}&maxResults=5&order=date`
            );
            const searchData = await searchResponse.json();

            if (searchData.items) {
              searchData.items.forEach((item: any) => {
                const videoId = item.id.videoId;
                if (!videoIdSet.has(videoId)) {
                  videoIdSet.add(videoId);
                  const title = item.snippet.title.toLowerCase();
                  const isBhasmaAarti = title.includes('bhasma');
                  const isLiveAarti = title.includes('live') || title.includes('mahakal');
                  
                  if (isBhasmaAarti || isLiveAarti) {
                    allVideos.push({
                      id: 1000 + allVideos.length,
                      aartiId: `mahakal-${isBhasmaAarti ? 'bhasma' : 'live'}-${allVideos.length}`,
                      title: item.snippet.title,
                      scholar: "Mahakaleshwar Jyotirlinga Temple, Ujjain",
                      type: "aarti",
                      youtubeId: videoId,
                      isLive: true,
                      timing: isBhasmaAarti ? "Daily 4:00 AM Bhasma Aarti" : "Live Aarti"
                    });
                  }
                }
              });
            }
          } catch (e) {
            console.log('Error searching for live streams:', e);
          }

          // Also check for recent videos (not just live)
          try {
            const recentResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&key=${YOUTUBE_API_KEY}&maxResults=3&order=date`
            );
            const recentData = await recentResponse.json();

            if (recentData.items) {
              recentData.items.forEach((item: any) => {
                const videoId = item.id.videoId;
                if (!videoIdSet.has(videoId)) {
                  videoIdSet.add(videoId);
                  const title = item.snippet.title.toLowerCase();
                  const isBhasmaAarti = title.includes('bhasma');
                  const isLiveAarti = title.includes('live') || title.includes('mahakal');
                  
                  if (isBhasmaAarti || isLiveAarti) {
                    allVideos.push({
                      id: 1000 + allVideos.length,
                      aartiId: `mahakal-${isBhasmaAarti ? 'bhasma' : 'live'}-${allVideos.length}`,
                      title: item.snippet.title,
                      scholar: "Mahakaleshwar Jyotirlinga Temple, Ujjain",
                      type: "aarti",
                      youtubeId: videoId,
                      isLive: false,
                      timing: isBhasmaAarti ? "Daily 4:00 AM Bhasma Aarti" : "Recent Aarti"
                    });
                  }
                }
              });
            }
          } catch (e) {
            console.log('Error searching for recent videos:', e);
          }
        }

        // Remove duplicates and limit to most relevant ones
        const uniqueVideos = Array.from(new Map(allVideos.map(v => [v.youtubeId, v])).values());
        const sortedVideos = uniqueVideos.sort((a, b) => {
          // Prioritize bhasma aarti and live streams
          const aPriority = a.title.toLowerCase().includes('bhasma') ? 2 : (a.isLive ? 1 : 0);
          const bPriority = b.title.toLowerCase().includes('bhasma') ? 2 : (b.isLive ? 1 : 0);
          return bPriority - aPriority;
        });

        // Take top 2-3 most relevant videos
        setMahakalAartis(sortedVideos.slice(0, 3));
      } catch (error) {
        console.error('Error fetching streams from channel:', error);
      }
    };

    fetchMahakalAartis();
    
    // Refresh daily - check if it's a new day
    const checkDailyRefresh = () => {
      const lastFetchDate = localStorage.getItem('mahakalAartiLastFetch');
      const today = new Date().toDateString();
      
      if (lastFetchDate !== today) {
        fetchMahakalAartis();
        localStorage.setItem('mahakalAartiLastFetch', today);
      }
    };

    // Check on mount and set up daily check
    checkDailyRefresh();
    const dailyCheckInterval = setInterval(checkDailyRefresh, 3600000); // Check every hour

    return () => clearInterval(dailyCheckInterval);
  }, []);

  // Fetch Sai Baba aarti from Real Soul Shirdi Sai channel
  useEffect(() => {
    const fetchSaiBabaAartis = async () => {
      setIsLoadingSaiBaba(true);
      try {
        // Step 1: Get channel ID from handle (@therealsoulshirdisai)
        let channelId: string | null = null;
        
        // Method 1: Search by handle
        try {
          const searchResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=@${SAI_BABA_CHANNEL}&type=channel&key=${YOUTUBE_API_KEY}&maxResults=1`
          );
          const searchData = await searchResponse.json();
          if (searchData.items && searchData.items.length > 0) {
            channelId = searchData.items[0].snippet.channelId;
          }
        } catch (e) {
          console.log('Method 1 failed, trying alternative');
        }
        
        // Method 2: Search by channel name
        if (!channelId) {
          try {
            const searchResponse2 = await fetch(
              `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${SAI_BABA_CHANNEL}&type=channel&key=${YOUTUBE_API_KEY}&maxResults=5`
            );
            const searchData2 = await searchResponse2.json();
            if (searchData2.items) {
              const relevantChannel = searchData2.items.find((item: any) => 
                item.snippet.title.toLowerCase().includes('sai') || 
                item.snippet.title.toLowerCase().includes('shirdi')
              );
              if (relevantChannel) {
                channelId = relevantChannel.snippet.channelId;
              } else if (searchData2.items.length > 0) {
                channelId = searchData2.items[0].snippet.channelId;
              }
            }
          } catch (e) {
            console.log('Method 2 failed');
          }
        }
        
        // Method 3: Try forUsername (legacy)
        if (!channelId) {
          try {
            const channelResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${SAI_BABA_CHANNEL}&key=${YOUTUBE_API_KEY}`
            );
            const channelData = await channelResponse.json();
            if (channelData.items && channelData.items.length > 0) {
              channelId = channelData.items[0].id;
            }
          } catch (e) {
            console.log('Method 3 failed');
          }
        }
        
        if (channelId) {
          await fetchStreamsFromChannel(channelId);
        } else {
          console.warn('Could not find channel ID for', SAI_BABA_CHANNEL);
        }
      } catch (error) {
        console.error('Error fetching Sai Baba aartis:', error);
      } finally {
        setIsLoadingSaiBaba(false);
      }
    };

    const fetchStreamsFromChannel = async (channelId: string) => {
      try {
        // Step 2: Get channel's uploads playlist ID
        let uploadsPlaylistId: string | null = null;
        try {
          const channelInfoResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
          );
          const channelInfo = await channelInfoResponse.json();
          if (channelInfo.items && channelInfo.items.length > 0) {
            uploadsPlaylistId = channelInfo.items[0].contentDetails?.relatedPlaylists?.uploads;
          }
        } catch (e) {
          console.log('Could not get uploads playlist');
        }

        const allVideos: LiveContentItem[] = [];
        let videoIdSet = new Set<string>();

        // Method 1: Get recent videos from uploads playlist and filter
        if (uploadsPlaylistId) {
          try {
            const playlistResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&key=${YOUTUBE_API_KEY}&maxResults=20&order=date`
            );
            const playlistData = await playlistResponse.json();

            if (playlistData.items) {
              playlistData.items.forEach((item: any) => {
                const videoId = item.snippet.resourceId.videoId;
                if (!videoIdSet.has(videoId)) {
                  videoIdSet.add(videoId);
                  const title = item.snippet.title.toLowerCase();
                  const isAarti = title.includes('aarti') || title.includes('kakad') || 
                                 title.includes('madhyan') || title.includes('dhoop') || 
                                 title.includes('shej') || title.includes('sai');
                  
                  if (isAarti) {
                    // Check if it's actually live
                    const isLive = item.snippet.liveBroadcastContent === 'live';
                    
                    // Determine aarti type from title
                    let aartiType = 'aarti';
                    let timing = "Live Aarti";
                    if (title.includes('kakad')) {
                      aartiType = 'kakad';
                      timing = "Daily 5:00 AM Kakad Aarti";
                    } else if (title.includes('madhyan')) {
                      aartiType = 'madhyan';
                      timing = "Daily 12:00 PM Madhyan Aarti";
                    } else if (title.includes('dhoop')) {
                      aartiType = 'dhoop';
                      timing = "Daily 6:30 PM Dhoop Aarti";
                    } else if (title.includes('shej')) {
                      aartiType = 'shej';
                      timing = "Daily 10:00 PM Shej Aarti";
                    }
                    
                    allVideos.push({
                      id: 2000 + allVideos.length, // Start from 2000 to avoid conflicts
                      aartiId: `sai-baba-${aartiType}-${allVideos.length}`,
                      title: item.snippet.title,
                      scholar: "Shirdi Sai Baba Temple",
                      type: "aarti",
                      youtubeId: videoId,
                      isLive: isLive,
                      timing: isLive ? timing : "Recent Aarti"
                    });
                  }
                }
              });
            }
          } catch (e) {
            console.log('Error fetching from uploads playlist:', e);
          }
        }

        // Method 2: Search for specific queries
        const searchQueries = [
          'sai baba aarti',
          'sai baba live',
          'shirdi aarti',
          'kakad aarti',
          'dhoop aarti'
        ];

        for (const query of searchQueries) {
          // Search for live streams
          try {
            const searchResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&eventType=live&key=${YOUTUBE_API_KEY}&maxResults=5&order=date`
            );
            const searchData = await searchResponse.json();

            if (searchData.items) {
              searchData.items.forEach((item: any) => {
                const videoId = item.id.videoId;
                if (!videoIdSet.has(videoId)) {
                  videoIdSet.add(videoId);
                  const title = item.snippet.title.toLowerCase();
                  const isAarti = title.includes('aarti') || title.includes('sai');
                  
                  if (isAarti) {
                    allVideos.push({
                      id: 2000 + allVideos.length,
                      aartiId: `sai-baba-live-${allVideos.length}`,
                      title: item.snippet.title,
                      scholar: "Shirdi Sai Baba Temple",
                      type: "aarti",
                      youtubeId: videoId,
                      isLive: true,
                      timing: "Live Aarti"
                    });
                  }
                }
              });
            }
          } catch (e) {
            console.log('Error searching for live streams:', e);
          }

          // Also check for recent videos (not just live)
          try {
            const recentResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&key=${YOUTUBE_API_KEY}&maxResults=3&order=date`
            );
            const recentData = await recentResponse.json();

            if (recentData.items) {
              recentData.items.forEach((item: any) => {
                const videoId = item.id.videoId;
                if (!videoIdSet.has(videoId)) {
                  videoIdSet.add(videoId);
                  const title = item.snippet.title.toLowerCase();
                  const isAarti = title.includes('aarti') || title.includes('sai');
                  
                  if (isAarti) {
                    allVideos.push({
                      id: 2000 + allVideos.length,
                      aartiId: `sai-baba-recent-${allVideos.length}`,
                      title: item.snippet.title,
                      scholar: "Shirdi Sai Baba Temple",
                      type: "aarti",
                      youtubeId: videoId,
                      isLive: false,
                      timing: "Recent Aarti"
                    });
                  }
                }
              });
            }
          } catch (e) {
            console.log('Error searching for recent videos:', e);
          }
        }

        // Remove duplicates and limit to most relevant ones
        const uniqueVideos = Array.from(new Map(allVideos.map(v => [v.youtubeId, v])).values());
        const sortedVideos = uniqueVideos.sort((a, b) => {
          // Prioritize live streams and specific aarti types
          const aPriority = a.isLive ? 2 : (a.title.toLowerCase().includes('kakad') || a.title.toLowerCase().includes('dhoop') ? 1 : 0);
          const bPriority = b.isLive ? 2 : (b.title.toLowerCase().includes('kakad') || b.title.toLowerCase().includes('dhoop') ? 1 : 0);
          return bPriority - aPriority;
        });

        // Take top 3-4 most relevant videos
        setSaiBabaAartis(sortedVideos.slice(0, 4));
      } catch (error) {
        console.error('Error fetching streams from channel:', error);
      }
    };

    fetchSaiBabaAartis();
    
    // Refresh daily - check if it's a new day
    const checkDailyRefresh = () => {
      const lastFetchDate = localStorage.getItem('saiBabaAartiLastFetch');
      const today = new Date().toDateString();
      
      if (lastFetchDate !== today) {
        fetchSaiBabaAartis();
        localStorage.setItem('saiBabaAartiLastFetch', today);
      }
    };

    // Check on mount and set up daily check
    checkDailyRefresh();
    const dailyCheckInterval = setInterval(checkDailyRefresh, 3600000); // Check every hour

    return () => clearInterval(dailyCheckInterval);
  }, []);

  // Fetch YouTube thumbnails
  useEffect(() => {
    const fetchThumbnails = async () => {
      const allContent = [...mahakalAartis, ...saiBabaAartis, ...baseLiveContent];
      const videoIds = allContent.map(content => content.youtubeId).join(',');
      
      if (!videoIds) return;
      
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
          setVideoThumbnails(prev => ({ ...prev, ...thumbnails }));
        }
      } catch (error) {
        console.error('Error fetching thumbnails:', error);
      }
    };

    if (mahakalAartis.length > 0 || saiBabaAartis.length > 0 || baseLiveContent.length > 0) {
      fetchThumbnails();
    }
  }, [mahakalAartis, saiBabaAartis]);

  const filteredContent = selectedCategory === 'all' 
    ? liveContent 
    : liveContent.filter(item => item.type === selectedCategory);

  const [selectedVideo, setSelectedVideo] = useState<typeof liveContent[0] | null>(null);

  const scheduleWithNext = getScheduleWithNextAarti();

  // Map temple names to video IDs
  const getVideoForTemple = (templeName: string, aartiName?: string) => {
    if (templeName === "Mahakaleshwar Temple") {
      // Find Mahakal aarti video (prefer bhasma aarti)
      const bhasmaAarti = mahakalAartis.find(a => a.title.toLowerCase().includes('bhasma'));
      if (bhasmaAarti) return bhasmaAarti.youtubeId;
      if (mahakalAartis.length > 0) return mahakalAartis[0].youtubeId;
    }
    
    if (templeName === "Shirdi Sai Baba") {
      // Find Sai Baba aarti video based on aarti name
      if (aartiName) {
        const aartiNameLower = aartiName.toLowerCase();
        if (aartiNameLower.includes('kakad')) {
          const kakadAarti = saiBabaAartis.find(a => a.title.toLowerCase().includes('kakad'));
          if (kakadAarti) return kakadAarti.youtubeId;
        } else if (aartiNameLower.includes('madhyan')) {
          const madhyanAarti = saiBabaAartis.find(a => a.title.toLowerCase().includes('madhyan'));
          if (madhyanAarti) return madhyanAarti.youtubeId;
        } else if (aartiNameLower.includes('dhoop')) {
          const dhoopAarti = saiBabaAartis.find(a => a.title.toLowerCase().includes('dhoop'));
          if (dhoopAarti) return dhoopAarti.youtubeId;
        } else if (aartiNameLower.includes('shej')) {
          const shejAarti = saiBabaAartis.find(a => a.title.toLowerCase().includes('shej'));
          if (shejAarti) return shejAarti.youtubeId;
        }
      }
      // Fallback to any live Sai Baba aarti
      const liveAarti = saiBabaAartis.find(a => a.isLive);
      if (liveAarti) return liveAarti.youtubeId;
      if (saiBabaAartis.length > 0) return saiBabaAartis[0].youtubeId;
    }
    
    const templeVideoMap: Record<string, string> = {
      "ISKCON Vrindavan": "IKNfQl0-4wk"
    };
    return templeVideoMap[templeName] || (liveContent.length > 0 ? liveContent[0].youtubeId : "");
  };

  const handleAartiClick = (templeName: string, aartiName: string) => {
    const videoId = getVideoForTemple(templeName, aartiName);
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
            <p className="text-white font-bold text-lg">
              {(isLoadingMahakal || isLoadingSaiBaba) ? '...' : liveContent.filter(c => c.isLive).length}
            </p>
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
            {(isLoadingMahakal || isLoadingSaiBaba) && (
              <span className="text-xs text-white/60 ml-2">
                {isLoadingMahakal && isLoadingSaiBaba ? 'Loading aartis...' : 
                 isLoadingMahakal ? 'Loading Mahakal aartis...' : 'Loading Sai Baba aartis...'}
              </span>
            )}
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

