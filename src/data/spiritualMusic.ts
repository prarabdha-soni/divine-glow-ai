export interface SpiritualMusic {
  id: string;
  title: string;
  artist: string;
  duration: number; // in minutes
  category: 'sleep' | 'meditation' | 'stress-relief' | 'bhajan' | 'mantra';
  description: string;
  icon: string;
  featured: boolean;
  rating: number;
  plays: number;
}

export const spiritualMusicLibrary: SpiritualMusic[] = [
  // Sleep Music
  {
    id: 'nidra-vandana',
    title: 'Nidra Vandana - Krishna Flute Sleep Meditation',
    artist: 'Divine Flute Master',
    duration: 45,
    category: 'sleep',
    description: 'Drift into peaceful sleep with Krishna\'s divine flute melodies',
    icon: '🪈',
    featured: true,
    rating: 4.9,
    plays: 2340
  },
  {
    id: 'yamuna-lullaby',
    title: 'Yamuna Lullaby - Sacred River Sounds',
    artist: 'Vrindavan Sounds',
    duration: 60,
    category: 'sleep',
    description: 'Gentle sounds of the sacred Yamuna river for deep sleep',
    icon: '🌊',
    featured: false,
    rating: 4.8,
    plays: 1890
  },
  {
    id: 'radha-sleep-mantra',
    title: 'Radha Sleep Mantra - Divine Love',
    artist: 'Spiritual Chants',
    duration: 30,
    category: 'sleep',
    description: 'Soft mantras invoking Radha\'s divine love for peaceful sleep',
    icon: '🪷',
    featured: false,
    rating: 4.7,
    plays: 1560
  },

  // Stress Relief
  {
    id: 'om-namah-shivaya',
    title: 'Om Namah Shivaya - Stress Relief',
    artist: 'Himalayan Chants',
    duration: 25,
    category: 'stress-relief',
    description: 'Powerful mantra to release stress and find inner peace',
    icon: '🕉️',
    featured: true,
    rating: 4.9,
    plays: 3200
  },
  {
    id: 'krishna-healing',
    title: 'Krishna Healing - Anxiety Relief',
    artist: 'Divine Healers',
    duration: 35,
    category: 'stress-relief',
    description: 'Krishna\'s divine energy for healing anxiety and worry',
    icon: '💙',
    featured: false,
    rating: 4.8,
    plays: 2100
  },
  {
    id: 'lotus-breathing',
    title: 'Lotus Breathing Meditation',
    artist: 'Yoga Masters',
    duration: 20,
    category: 'stress-relief',
    description: 'Guided breathing with lotus imagery for instant calm',
    icon: '🪷',
    featured: false,
    rating: 4.6,
    plays: 1780
  },

  // Bhajans
  {
    id: 'hare-krishna-mahamantra',
    title: 'Hare Krishna Mahamantra',
    artist: 'ISKCON Devotees',
    duration: 40,
    category: 'bhajan',
    description: 'The most powerful mantra for spiritual awakening',
    icon: '🕉️',
    featured: true,
    rating: 4.9,
    plays: 4500
  },
  {
    id: 'radha-krishna-love',
    title: 'Radha Krishna Love Bhajan',
    artist: 'Vrindavan Singers',
    duration: 35,
    category: 'bhajan',
    description: 'Beautiful bhajan celebrating divine love',
    icon: '💕',
    featured: false,
    rating: 4.8,
    plays: 2800
  },
  {
    id: 'govinda-damodara',
    title: 'Govinda Damodara - Morning Glory',
    artist: 'Temple Choir',
    duration: 30,
    category: 'bhajan',
    description: 'Morning bhajan to start your day with divine energy',
    icon: '🌅',
    featured: false,
    rating: 4.7,
    plays: 1950
  },

  // Meditation
  {
    id: 'third-eye-meditation',
    title: 'Third Eye Meditation - Krishna Consciousness',
    artist: 'Meditation Masters',
    duration: 25,
    category: 'meditation',
    description: 'Guided meditation to awaken Krishna consciousness',
    icon: '👁️',
    featured: true,
    rating: 4.8,
    plays: 2200
  },
  {
    id: 'chakra-balancing',
    title: 'Chakra Balancing - Divine Energy',
    artist: 'Energy Healers',
    duration: 30,
    category: 'meditation',
    description: 'Balance your chakras with divine energy',
    icon: '⚡',
    featured: false,
    rating: 4.6,
    plays: 1650
  },
  {
    id: 'loving-kindness',
    title: 'Loving Kindness - Radha\'s Compassion',
    artist: 'Compassion Teachers',
    duration: 20,
    category: 'meditation',
    description: 'Cultivate compassion like Radha\'s divine love',
    icon: '💖',
    featured: false,
    rating: 4.7,
    plays: 1420
  },

  // Mantras
  {
    id: 'gayatri-mantra',
    title: 'Gayatri Mantra - Divine Light',
    artist: 'Vedic Chants',
    duration: 15,
    category: 'mantra',
    description: 'Ancient Vedic mantra for divine illumination',
    icon: '☀️',
    featured: true,
    rating: 4.9,
    plays: 3800
  },
  {
    id: 'om-shanti',
    title: 'Om Shanti - Peace Mantra',
    artist: 'Peace Chanters',
    duration: 10,
    category: 'mantra',
    description: 'Simple mantra for instant peace and tranquility',
    icon: '🕊️',
    featured: false,
    rating: 4.5,
    plays: 2100
  },
  {
    id: 'krishna-mantra',
    title: 'Krishna Mantra - Divine Name',
    artist: 'Name Chanters',
    duration: 20,
    category: 'mantra',
    description: 'Chanting Krishna\'s divine names for spiritual growth',
    icon: '🕉️',
    featured: false,
    rating: 4.8,
    plays: 2600
  }
];

export const getMusicByCategory = (category: SpiritualMusic['category']) => {
  return spiritualMusicLibrary.filter(music => music.category === category);
};

export const getFeaturedMusic = () => {
  return spiritualMusicLibrary.filter(music => music.featured);
};

export const getSleepMusic = () => {
  return getMusicByCategory('sleep');
};

export const getStressReliefMusic = () => {
  return getMusicByCategory('stress-relief');
};

export const getBhajans = () => {
  return getMusicByCategory('bhajan');
};
