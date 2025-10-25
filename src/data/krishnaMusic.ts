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
    id: 'ram-siya-ram',
    title: 'Ram Siya Ram',
    artist: 'Sachet-Parampara',
    duration: '5 min',
    category: 'devotional',
    audioUrl: '/assets/music/Ram Siya Ram (Lyrical) Adipurush _ Prabhas _ Sachet-Parampara,Manoj Muntashir S _Om Raut _ Bhushan K.mp3'
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
