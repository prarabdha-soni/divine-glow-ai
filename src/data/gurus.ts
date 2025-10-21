export interface Guru {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  category: 'Bhakti' | 'Vedanta' | 'Yoga' | 'Kirtan' | 'Philosophy' | 'Music' | 'Storytelling';
  followers: string;
  location: string;
  videoUrl: string;
  featured: boolean;
  rating: number;
}

export const gurus: Guru[] = [
  {
    id: 'premanand-maharaj',
    name: 'Premanand Maharaj',
    title: 'Spiritual Guide & Bhakti Teacher',
    description: 'Renowned spiritual teacher known for his deep understanding of Krishna consciousness and devotional practices.',
    image: '🕉️',
    category: 'Bhakti',
    followers: '2.5M',
    location: 'Vrindavan, India',
    videoUrl: 'https://www.youtube.com/embed/7kKJO8LtL-M',
    featured: true,
    rating: 4.9
  },
  {
    id: 'guru-gopal',
    name: 'Guru Gopal',
    title: 'Krishna Consciousness Teacher',
    description: 'Devoted teacher of Krishna consciousness, sharing ancient wisdom through modern teachings.',
    image: '🙏',
    category: 'Bhakti',
    followers: '1.8M',
    location: 'Mayapur, India',
    videoUrl: 'https://www.youtube.com/embed/8V4X0CE7fvc',
    featured: true,
    rating: 4.8
  },
  {
    id: 'jaya-kishori',
    name: 'Jaya Kishori',
    title: 'Spiritual Storyteller & Bhakti Speaker',
    description: 'Inspiring spiritual storyteller who brings ancient wisdom to life through engaging narratives.',
    image: '📚',
    category: 'Storytelling',
    followers: '3.2M',
    location: 'Mumbai, India',
    videoUrl: 'https://www.youtube.com/embed/5qap5aO4i9A',
    featured: true,
    rating: 4.9
  },
  {
    id: 'sadhguru',
    name: 'Sadhguru',
    title: 'Yogi, Mystic & Visionary',
    description: 'Renowned spiritual leader and founder of Isha Foundation, teaching inner engineering and self-transformation.',
    image: '🧘‍♂️',
    category: 'Yoga',
    followers: '15M',
    location: 'Coimbatore, India',
    videoUrl: 'https://www.youtube.com/embed/8VVbqI2OjFA',
    featured: true,
    rating: 4.9
  },
  {
    id: 'swami-mukundananda',
    name: 'Swami Mukundananda',
    title: 'Spiritual Leader & Author',
    description: 'Disciple of Jagadguru Kripaluji Maharaj, teaching the science of self-realization and divine love.',
    image: '🕉️',
    category: 'Philosophy',
    followers: '1.2M',
    location: 'New York, USA',
    videoUrl: 'https://www.youtube.com/embed/4Y0lBuQOCIw',
    featured: false,
    rating: 4.8
  },
  {
    id: 'radhanath-swami',
    name: 'Radhanath Swami',
    title: 'Spiritual Teacher & Author',
    description: 'Renowned spiritual teacher and author, sharing the path of bhakti yoga and Krishna consciousness.',
    image: '📖',
    category: 'Bhakti',
    followers: '800K',
    location: 'Mumbai, India',
    videoUrl: 'https://www.youtube.com/embed/7kKJO8LtL-M',
    featured: false,
    rating: 4.9
  },
  {
    id: 'amitabh-bachchan',
    name: 'Amitabh Bachchan',
    title: 'Actor & Spiritual Seeker',
    description: 'Legendary actor who shares his spiritual journey and devotion to Krishna through his platform.',
    image: '🎭',
    category: 'Bhakti',
    followers: '5.2M',
    location: 'Mumbai, India',
    videoUrl: 'https://www.youtube.com/embed/8V4X0CE7fvc',
    featured: false,
    rating: 4.7
  },
  {
    id: 'anup-jalota',
    name: 'Anup Jalota',
    title: 'Bhakti Singer & Spiritual Artist',
    description: 'Renowned bhajan singer who has dedicated his life to spreading Krishna consciousness through music.',
    image: '🎵',
    category: 'Kirtan',
    followers: '2.1M',
    location: 'Mumbai, India',
    videoUrl: 'https://www.youtube.com/embed/5qap5aO4i9A',
    featured: false,
    rating: 4.8
  },
  {
    id: 'kailash-kher',
    name: 'Kailash Kher',
    title: 'Sufi & Devotional Singer',
    description: 'Acclaimed singer who blends Sufi traditions with devotional music, spreading spiritual messages.',
    image: '🎤',
    category: 'Music',
    followers: '1.5M',
    location: 'Mumbai, India',
    videoUrl: 'https://www.youtube.com/embed/8VVbqI2OjFA',
    featured: false,
    rating: 4.6
  },
  {
    id: 'swami-chinmayananda',
    name: 'Swami Chinmayananda',
    title: 'Vedanta Teacher & Philosopher',
    description: 'Renowned Vedanta teacher who simplified complex spiritual concepts for modern seekers.',
    image: '📚',
    category: 'Vedanta',
    followers: '1.8M',
    location: 'Mumbai, India',
    videoUrl: 'https://www.youtube.com/embed/4Y0lBuQOCIw',
    featured: false,
    rating: 4.9
  },
  {
    id: 'swami-ramdev',
    name: 'Swami Ramdev',
    title: 'Yoga Guru & Spiritual Leader',
    description: 'Renowned yoga teacher and spiritual leader, promoting traditional Indian practices and Ayurveda.',
    image: '🧘‍♂️',
    category: 'Yoga',
    followers: '8.5M',
    location: 'Haridwar, India',
    videoUrl: 'https://www.youtube.com/embed/7kKJO8LtL-M',
    featured: false,
    rating: 4.5
  },
  {
    id: 'mata-amritanandamayi',
    name: 'Mata Amritanandamayi',
    title: 'Spiritual Mother & Humanitarian',
    description: 'Beloved spiritual mother known for her unconditional love and humanitarian work worldwide.',
    image: '🤗',
    category: 'Bhakti',
    followers: '12M',
    location: 'Kerala, India',
    videoUrl: 'https://www.youtube.com/embed/8V4X0CE7fvc',
    featured: false,
    rating: 4.9
  },
  {
    id: 'swami-vivekananda',
    name: 'Swami Vivekananda',
    title: 'Spiritual Leader & Philosopher',
    description: 'Renowned spiritual leader who introduced Vedanta to the West and inspired millions worldwide.',
    image: '🕉️',
    category: 'Vedanta',
    followers: '3.5M',
    location: 'Kolkata, India',
    videoUrl: 'https://www.youtube.com/embed/5qap5aO4i9A',
    featured: false,
    rating: 4.9
  },
  {
    id: 'ramana-maharshi',
    name: 'Ramana Maharshi',
    title: 'Sage & Self-Realized Master',
    description: 'Renowned sage who taught the path of self-inquiry and self-realization through silence.',
    image: '🧘‍♂️',
    category: 'Philosophy',
    followers: '2.8M',
    location: 'Tiruvannamalai, India',
    videoUrl: 'https://www.youtube.com/embed/8VVbqI2OjFA',
    featured: false,
    rating: 4.9
  },
  {
    id: 'krishna-das',
    name: 'Krishna Das',
    title: 'Kirtan Artist & Spiritual Musician',
    description: 'Renowned kirtan artist who has brought devotional music to the West, inspiring millions.',
    image: '🎵',
    category: 'Kirtan',
    followers: '1.2M',
    location: 'New York, USA',
    videoUrl: 'https://www.youtube.com/embed/4Y0lBuQOCIw',
    featured: false,
    rating: 4.8
  },
  {
    id: 'jagadguru-kripaluji',
    name: 'Jagadguru Kripaluji Maharaj',
    title: 'Spiritual Master & Bhakti Teacher',
    description: 'Renowned spiritual master who taught the path of divine love and Krishna consciousness.',
    image: '🕉️',
    category: 'Bhakti',
    followers: '2.1M',
    location: 'Vrindavan, India',
    videoUrl: 'https://www.youtube.com/embed/7kKJO8LtL-M',
    featured: false,
    rating: 4.9
  },
  {
    id: 'swami-paramahansa-yogananda',
    name: 'Swami Paramahansa Yogananda',
    title: 'Yogi & Author of Autobiography of a Yogi',
    description: 'Renowned yogi who introduced Kriya Yoga to the West and authored the spiritual classic.',
    image: '📖',
    category: 'Yoga',
    followers: '4.2M',
    location: 'Los Angeles, USA',
    videoUrl: 'https://www.youtube.com/embed/8V4X0CE7fvc',
    featured: false,
    rating: 4.9
  },
  {
    id: 'swami-sivananda',
    name: 'Swami Sivananda',
    title: 'Yoga Master & Spiritual Teacher',
    description: 'Renowned yoga master who founded the Divine Life Society and taught integral yoga.',
    image: '🧘‍♂️',
    category: 'Yoga',
    followers: '1.8M',
    location: 'Rishikesh, India',
    videoUrl: 'https://www.youtube.com/embed/5qap5aO4i9A',
    featured: false,
    rating: 4.8
  },
  {
    id: 'swami-ramakrishna',
    name: 'Swami Ramakrishna',
    title: 'Mystic & Spiritual Master',
    description: 'Renowned mystic who experienced the divine through various spiritual paths and traditions.',
    image: '🕉️',
    category: 'Philosophy',
    followers: '3.1M',
    location: 'Kolkata, India',
    videoUrl: 'https://www.youtube.com/embed/8VVbqI2OjFA',
    featured: false,
    rating: 4.9
  },
  {
    id: 'swami-agnivesh',
    name: 'Swami Agnivesh',
    title: 'Social Activist & Spiritual Leader',
    description: 'Renowned social activist and spiritual leader who worked for social justice and human rights.',
    image: '🤝',
    category: 'Philosophy',
    followers: '800K',
    location: 'Delhi, India',
    videoUrl: 'https://www.youtube.com/embed/4Y0lBuQOCIw',
    featured: false,
    rating: 4.6
  },
  {
    id: 'swami-chinmayananda',
    name: 'Swami Chinmayananda',
    title: 'Vedanta Teacher & Spiritual Leader',
    description: 'Renowned Vedanta teacher who simplified complex spiritual concepts for modern seekers.',
    image: '📚',
    category: 'Vedanta',
    followers: '2.3M',
    location: 'Mumbai, India',
    videoUrl: 'https://www.youtube.com/embed/7kKJO8LtL-M',
    featured: false,
    rating: 4.8
  },
  {
    id: 'swami-dayananda',
    name: 'Swami Dayananda',
    title: 'Vedanta Teacher & Spiritual Guide',
    description: 'Renowned Vedanta teacher who taught the essence of Hindu philosophy and spirituality.',
    image: '🕉️',
    category: 'Vedanta',
    followers: '1.5M',
    location: 'Chennai, India',
    videoUrl: 'https://www.youtube.com/embed/8V4X0CE7fvc',
    featured: false,
    rating: 4.7
  },
  {
    id: 'swami-omkarananda',
    name: 'Swami Omkarananda',
    title: 'Spiritual Teacher & Philosopher',
    description: 'Renowned spiritual teacher who taught the path of self-realization and divine love.',
    image: '🙏',
    category: 'Philosophy',
    followers: '900K',
    location: 'Rishikesh, India',
    videoUrl: 'https://www.youtube.com/embed/5qap5aO4i9A',
    featured: false,
    rating: 4.6
  }
];
