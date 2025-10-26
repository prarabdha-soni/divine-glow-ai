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

export const kidsSections: KidsSection[] = [
  {
    id: 'birth-early-life',
    title: "Krishna's Birth & Early Life",
    emoji: '🌟',
    videos: [
      {
        id: 'birth-1',
        title: "The Story Of Lord Krishna's Birth (English)",
        youtubeId: 'E2YHHyyNjUE',
      },
      {
        id: 'birth-2',
        title: "Birth & Childhood Days of Lord Krishna",
        youtubeId: '4c0LGHV_Gt8',
      },
      {
        id: 'birth-3',
        title: "Birth of Lord Krishna | Rescue from Mathura To Gokul",
        youtubeId: '8OQkFbj1E0Y',
      },
      {
        id: 'birth-4',
        title: "The Birth of Krishna – A Story of Miracles",
        youtubeId: 'QwIz-0cGIwI',
      },
      {
        id: 'birth-5',
        title: "Krishna Birth - Episode 1 | Mythological Stories",
        youtubeId: 'Lw4DEG-domc',
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
        title: 'Little Krishna | All Episodes (English)',
        youtubeId: '_YQY0RftEWE',
      },
      {
        id: 'episode-2',
        title: 'Little Krishna - The Legendary Warrior (English)',
        youtubeId: 'MzUEg7jExj0',
      },
      {
        id: 'episode-3',
        title: 'Little Krishna - Episode 1 Attack Of Serpent King',
        youtubeId: 'z1p7Lo8nwNI',
      },
      {
        id: 'episode-4',
        title: 'Little Krishna - Episode 10 The Charge Of The War Elephants',
        youtubeId: '3ion7RrSffU',
      },
      {
        id: 'episode-6',
        title: 'Little Krishna | Maakhan Ka Hungama',
        youtubeId: 'H46vC6Qp67U',
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
        title: 'Krishna Aur Kans | First Stereoscopic Animated Film',
        youtubeId: 'erMieJ30XAc',
      },
      {
        id: 'miracle-2',
        title: 'Krishna Full Animated Movie 2020',
        youtubeId: 'CaTV1GaarHI',
      },
      {
        id: 'miracle-6',
        title: 'Lord Krishna Stories - Krishna and Sudama',
        youtubeId: 'BjLwcmIkBSQ',
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
        title: 'Krishna Full Animated Movie 2019 | Pen Bhakti',
        youtubeId: 'pZLoapT--zE',
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
        title: 'A Divine Tale of Prophecy and Miracles',
        youtubeId: 'uV7v29xZ3a8',
      },
    ],
  },
];

