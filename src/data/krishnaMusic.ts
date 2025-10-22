export interface KrishnaMusic {
  id: string;
  title: string;
  artist: string;
  duration: string; // in minutes format "X min"
  category: 'sleep' | 'devotional' | 'flute';
  audioUrl: string; // Actual audio file path
}

export const krishnaMusicLibrary: KrishnaMusic[] = [
  {
    id: 'hare-krishna-relaxing',
    title: 'Hare Krishna Relaxing Theme',
    artist: 'Divine Essence',
    duration: '7 min',
    category: 'devotional',
    audioUrl: '/assets/music/hare-krishna-relaxing-theme-4-114482.mp3'
  },
  {
    id: 'ram-siya-ram',
    title: 'Ram Siya Ram',
    artist: 'Sachet-Parampara',
    duration: '5 min',
    category: 'devotional',
    audioUrl: '/assets/music/Ram Siya Ram (Lyrical) Adipurush _ Prabhas _ Sachet-Parampara,Manoj Muntashir S _Om Raut _ Bhushan K.mp3'
  },
  {
    id: 'krishna-flute-sleep',
    title: 'Relaxing Krishna Flute',
    artist: 'Divine Flute Master',
    duration: '8 min',
    category: 'flute',
    audioUrl: '/assets/music/relaxing-krishna-flute-music-deep-sleep-relaxing-music-292793.mp3'
  },
  {
    id: 'shyama',
    title: 'Shyama',
    artist: 'Traditional Chant',
    duration: '6 min',
    category: 'devotional',
    audioUrl: '/assets/music/shyama.mp3'
  },
  {
    id: 'shyama-aan-baso',
    title: 'Shyama Aan Baso',
    artist: 'Khushalii Kumar',
    duration: '3 min',
    category: 'sleep',
    audioUrl: '/assets/music/YTDown.com_YouTube_Shyama-Aan-Baso-Song-Khushalii-Kumar-Sac_Media_lm6CLMLSZBc_008_128k.m4a'
  }
];

// Helper functions
export const getTotalDuration = (): string => {
  const totalMinutes = krishnaMusicLibrary.reduce((acc, music) => {
    const minutes = parseInt(music.duration);
    return acc + minutes;
  }, 0);
  
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  return `${hours} hr ${mins} min`;
};

export const getTrackCount = (): number => {
  return krishnaMusicLibrary.length;
};
