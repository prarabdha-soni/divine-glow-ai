export interface KidsVideo {
  id: string;
  title: string;
  youtubeId: string;
}

export interface KidsSection {
  id: string;
  title: string;
  emoji: string;
  videos: KidsVideo[];
}

// Helper function to extract YouTube video ID from URL
const getYouTubeId = (url: string): string => {
  const match = url.match(/[?&]v=([^&]+)|youtu\.be\/([^?&]+)|\/embed\/([^?&]+)/);
  return match ? (match[1] || match[2] || match[3]) : '';
};

export const kidsSections: KidsSection[] = [
  {
    id: 'birth-early-life',
    title: "Krishna's Birth & Early Life",
    emoji: '🌟',
    videos: [
      {
        id: 'birth-1',
        title: "The Story Of Lord Krishna's Birth",
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=E2YHHyyNjUE'),
      },
      {
        id: 'birth-2',
        title: "Bal Krishna - The Birth of Lord Krishna Story",
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=by3gk158Uwc'),
      },
      {
        id: 'birth-3',
        title: "Birth of Krishna - Animated/Cartoon Story",
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=n5cfEU_DtTA'),
      },
    ],
  },
  {
    id: 'little-krishna-episodes',
    title: 'Little Krishna – Full Episodes & Major Adventures',
    emoji: '⚔️',
    videos: [
      {
        id: 'episode-1',
        title: 'Little Krishna - The Legendary Warrior',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=MzUEg7jExj0'),
      },
      {
        id: 'episode-2',
        title: 'Little Krishna | All Episodes (Full Mythology)',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=_YQY0RftEWE'),
      },
      {
        id: 'episode-3',
        title: 'Little Krishna | Maakhan Ka Hungama',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=H46vC6Qp67U'),
      },
      {
        id: 'episode-4',
        title: 'Little Krishna - Attack Of Serpent King',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=z1p7Lo8nwNI'),
      },
      {
        id: 'episode-5',
        title: 'Little Krishna - End of Kalia',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=2m0VxAMdx9M'),
      },
      {
        id: 'episode-6',
        title: 'The Magical Adventures of Young Krishna',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=zXt61RiM978'),
      },
      {
        id: 'episode-7',
        title: "Little Krishna - Krishna's Birthday",
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=28BABrXObHY'),
      },
      {
        id: 'episode-8',
        title: 'Little Krishna Saves the Village',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=Thcfb4eqPUc'),
      },
    ],
  },
  {
    id: 'miracles-friends',
    title: "Krishna's Miracles & Stories with Friends",
    emoji: '✨',
    videos: [
      {
        id: 'miracle-1',
        title: 'Krishna and the Butter Thieves Story',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=IafVRCvTOgg'),
      },
      {
        id: 'miracle-2',
        title: 'Balarama and Krishna Childhood Stories',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=LgS6IKlcWnQ'),
      },
      {
        id: 'miracle-3',
        title: 'Krishna and Gopis Story for Children',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=QCpq7A3P2nA'),
      },
      {
        id: 'miracle-4',
        title: 'Lord Krishna Stories - Krishna and Sudama',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=BjLwcmIkBSQ'),
      },
    ],
  },
  {
    id: 'animated-movies',
    title: 'Major Animated Movies',
    emoji: '🎬',
    videos: [
      {
        id: 'movie-1',
        title: 'Krishna Aur Kans | Animated',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=erMieJ30XAc'),
      },
      {
        id: 'movie-2',
        title: 'Krishna Animated Movie With English Subtitles',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=yMNgy0cQFiA'),
      },
      {
        id: 'movie-3',
        title: 'Shree Krishna Bal Leela',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=kIMHu2O7v5c'),
      },
    ],
  },
  {
    id: 'moral-audio',
    title: 'Moral & Audio Stories',
    emoji: '📖',
    videos: [
      {
        id: 'audio-1',
        title: 'Lord Krishna Stories for Kids - Shemaroo Kids',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=_jUjEKwWgtc'),
      },
      {
        id: 'audio-2',
        title: 'Little Krishna | The Terrible Storm (Audio Book)',
        youtubeId: getYouTubeId('https://www.youtube.com/watch?v=G5BR5V2aOYY'),
      },
    ],
  },
];

