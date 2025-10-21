export interface KrishnaMusic {
  id: string;
  title: string;
  artist: string;
  duration: number; // in seconds
  category: 'bhajan' | 'mantra' | 'kirtan' | 'flute' | 'classical' | 'devotional';
  description: string;
  lyrics?: string;
  featured: boolean;
  rating: number;
  plays: number;
  audioUrl?: string; // For actual audio files
}

export const krishnaMusicLibrary: KrishnaMusic[] = [
  // Peaceful Sleep Bhajans - YouTube Content
  {
    id: 'radhe-tere-charno-ki-dhul',
    title: 'Radhe Tere Charno Ki Dhul Jo Mil Jaye',
    artist: 'Bhumika Sharma',
    duration: 300, // 5 minutes
    category: 'bhajan',
    description: 'Peaceful devotional song for deep sleep',
    lyrics: 'Radhe Tere Charno Ki Dhul Jo Mil Jaye',
    featured: true,
    rating: 4.9,
    plays: 12000,
    audioUrl: 'https://www.youtube.com/watch?v=k-mHGA2lvnU'
  },
  {
    id: 'raat-mein-sone-se-pahle',
    title: 'रात में सोने से पहले जरूर सुनें ये मन को शांति देने वाले भजन',
    artist: 'Divine Chants',
    duration: 600, // 10 minutes
    category: 'bhajan',
    description: 'Peaceful bhajans for peaceful sleep',
    lyrics: 'Sacred chants for deep sleep and spiritual peace',
    featured: true,
    rating: 4.8,
    plays: 8500,
    audioUrl: 'https://www.youtube.com/watch?v=bqRTmMl6VbU'
  },
  {
    id: 'krishna-bhajan-before-sleep',
    title: 'Krishna Bhajan Before Sleep - सांवला सलोना',
    artist: 'Devotional Music',
    duration: 480, // 8 minutes
    category: 'bhajan',
    description: 'Beautiful Krishna bhajan for peaceful sleep',
    lyrics: 'सांवला सलोना - Krishna sleep bhajan',
    featured: true,
    rating: 4.9,
    plays: 9500,
    audioUrl: 'https://www.youtube.com/watch?v=fZWbEI4s_00'
  },
  {
    id: 'radha-krishna-sleeping-peace',
    title: 'Radha Krishna Sleeping Peace Song',
    artist: 'Slow + Reverb',
    duration: 900, // 15 minutes
    category: 'bhajan',
    description: 'Slow and peaceful Radha Krishna devotional song',
    lyrics: 'Radha Krishna divine love for peaceful sleep',
    featured: true,
    rating: 4.9,
    plays: 15000,
    audioUrl: 'https://www.youtube.com/watch?v=8V4X0CE7fvc'
  },
  // Traditional Mantras
  {
    id: 'hare-krishna-mahamantra',
    title: 'Hare Krishna Mahamantra',
    artist: 'ISKCON Devotees',
    duration: 600, // 10 minutes
    category: 'mantra',
    description: 'The most powerful mantra for spiritual awakening',
    lyrics: 'Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare',
    featured: false,
    rating: 4.9,
    plays: 4500
  },
  {
    id: 'radha-krishna-love',
    title: 'Radha Krishna Love Bhajan',
    artist: 'Vrindavan Singers',
    duration: 420, // 7 minutes
    category: 'bhajan',
    description: 'Beautiful bhajan celebrating divine love',
    lyrics: 'Radhe Radhe Krishna, Krishna Krishna Radhe Radhe',
    featured: true,
    rating: 4.8,
    plays: 2800
  },
  {
    id: 'govinda-damodara',
    title: 'Govinda Damodara',
    artist: 'Temple Choir',
    duration: 480, // 8 minutes
    category: 'bhajan',
    description: 'Morning bhajan to start your day with divine energy',
    lyrics: 'Govinda Damodara Madhaveti, Gopijana Vallabha Madhaveti',
    featured: false,
    rating: 4.7,
    plays: 1950
  },
  {
    id: 'jai-radha-madhav',
    title: 'Jai Radha Madhav',
    artist: 'Divine Singers',
    duration: 360, // 6 minutes
    category: 'bhajan',
    description: 'Celebrating the divine couple Radha and Krishna',
    lyrics: 'Jai Radha Madhav, Jai Kunj Bihari, Jai Gopi Jan Vallabh, Jai Giridhari',
    featured: false,
    rating: 4.6,
    plays: 1650
  },

  // Mantras
  {
    id: 'gayatri-mantra',
    title: 'Gayatri Mantra',
    artist: 'Vedic Chants',
    duration: 300, // 5 minutes
    category: 'mantra',
    description: 'Ancient Vedic mantra for divine illumination',
    lyrics: 'Om Bhur Bhuvaḥ Swaḥ, Tat-savitur Vareṇyaṃ, Bhargo Devasya Dhīmahi, Dhiyo Yonaḥ Prachodayāt',
    featured: true,
    rating: 4.9,
    plays: 3800
  },
  {
    id: 'om-namah-shivaya',
    title: 'Om Namah Shivaya',
    artist: 'Himalayan Chants',
    duration: 240, // 4 minutes
    category: 'mantra',
    description: 'Powerful mantra to Lord Shiva',
    lyrics: 'Om Namah Shivaya, Om Namah Shivaya',
    featured: false,
    rating: 4.8,
    plays: 2600
  },
  {
    id: 'om-shanti',
    title: 'Om Shanti',
    artist: 'Peace Chanters',
    duration: 180, // 3 minutes
    category: 'mantra',
    description: 'Simple mantra for instant peace and tranquility',
    lyrics: 'Om Shanti, Shanti, Shanti',
    featured: false,
    rating: 4.5,
    plays: 2100
  },

  // Flute Music
  {
    id: 'krishna-flute-meditation',
    title: 'Krishna Flute Meditation',
    artist: 'Divine Flute Master',
    duration: 900, // 15 minutes
    category: 'flute',
    description: 'Divine flute melodies for deep meditation',
    featured: true,
    rating: 4.9,
    plays: 3200
  },
  {
    id: 'vrindavan-flute',
    title: 'Vrindavan Flute Melodies',
    artist: 'Sacred Flute',
    duration: 720, // 12 minutes
    category: 'flute',
    description: 'Krishna\'s flute in the sacred groves of Vrindavan',
    featured: false,
    rating: 4.8,
    plays: 2400
  },
  {
    id: 'yamuna-river-flute',
    title: 'Yamuna River Flute',
    artist: 'River Sounds',
    duration: 600, // 10 minutes
    category: 'flute',
    description: 'Flute melodies by the sacred Yamuna river',
    featured: false,
    rating: 4.7,
    plays: 1800
  },

  // Kirtans
  {
    id: 'hare-rama-hare-krishna',
    title: 'Hare Rama Hare Krishna',
    artist: 'Kirtan Collective',
    duration: 480, // 8 minutes
    category: 'kirtan',
    description: 'Energetic kirtan for spiritual awakening',
    lyrics: 'Hare Rama Hare Rama, Rama Rama Hare Hare, Hare Krishna Hare Krishna, Krishna Krishna Hare Hare',
    featured: true,
    rating: 4.8,
    plays: 2900
  },
  {
    id: 'jai-sri-krishna',
    title: 'Jai Sri Krishna',
    artist: 'Devotional Singers',
    duration: 360, // 6 minutes
    category: 'kirtan',
    description: 'Celebrating Lord Krishna with joy and devotion',
    lyrics: 'Jai Sri Krishna, Jai Sri Krishna, Krishna Krishna Jai Jai',
    featured: false,
    rating: 4.7,
    plays: 2200
  },

  // Classical
  {
    id: 'krishna-raga',
    title: 'Krishna Raga',
    artist: 'Classical Master',
    duration: 1200, // 20 minutes
    category: 'classical',
    description: 'Traditional Indian classical music dedicated to Krishna',
    featured: false,
    rating: 4.6,
    plays: 1500
  },
  {
    id: 'bhakti-rasa',
    title: 'Bhakti Rasa',
    artist: 'Spiritual Musician',
    duration: 900, // 15 minutes
    category: 'classical',
    description: 'The essence of devotion through classical music',
    featured: false,
    rating: 4.8,
    plays: 1900
  },

  // Devotional
  {
    id: 'krishna-healing',
    title: 'Krishna Healing Mantra',
    artist: 'Divine Healers',
    duration: 600, // 10 minutes
    category: 'devotional',
    description: 'Krishna\'s divine energy for healing and peace',
    lyrics: 'Krishna Krishna, Hare Hare, Rama Rama, Hare Hare',
    featured: true,
    rating: 4.9,
    plays: 3100
  },
  {
    id: 'divine-love',
    title: 'Divine Love',
    artist: 'Love Singers',
    duration: 420, // 7 minutes
    category: 'devotional',
    description: 'Celebrating the divine love of Radha and Krishna',
    lyrics: 'Prema Bhakti, Krishna Bhakti, Radha Krishna Prema',
    featured: false,
    rating: 4.7,
    plays: 2300
  }
];

// Helper functions
export const getRandomKrishnaMusic = (): KrishnaMusic => {
  const randomIndex = Math.floor(Math.random() * krishnaMusicLibrary.length);
  return krishnaMusicLibrary[randomIndex];
};

export const getMusicByCategory = (category: KrishnaMusic['category']): KrishnaMusic[] => {
  return krishnaMusicLibrary.filter(music => music.category === category);
};

export const getFeaturedMusic = (): KrishnaMusic[] => {
  return krishnaMusicLibrary.filter(music => music.featured);
};

export const getBhajans = (): KrishnaMusic[] => {
  return getMusicByCategory('bhajan');
};

export const getMantras = (): KrishnaMusic[] => {
  return getMusicByCategory('mantra');
};

export const getFluteMusic = (): KrishnaMusic[] => {
  return getMusicByCategory('flute');
};

export const getKirtans = (): KrishnaMusic[] => {
  return getMusicByCategory('kirtan');
};

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
