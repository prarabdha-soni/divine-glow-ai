export interface Guru {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string; // AI-generated guru image URL
  category: 'Bhakti' | 'Vedanta' | 'Yoga' | 'Kirtan' | 'Philosophy' | 'Music' | 'Storytelling';
  followers: string;
  location: string;
  featured: boolean;
  rating: number;
  speciality: string; // What makes this guru unique
}

export const gurus: Guru[] = [
  {
    id: 'premanand-maharaj',
    name: 'Premanand Maharaj',
    title: 'Spiritual Guide & Bhakti Teacher',
    description: 'Renowned spiritual teacher known for his deep understanding of Krishna consciousness and devotional practices.',
    imageUrl: 'https://i.pravatar.cc/300?img=60',
    category: 'Bhakti',
    followers: '2.5M',
    location: 'Vrindavan, India',
    featured: true,
    rating: 4.9,
    speciality: 'Krishna Consciousness & Divine Love'
  },
  {
    id: 'guru-gopal',
    name: 'Guru Gopal',
    title: 'Krishna Consciousness Teacher',
    description: 'Devoted teacher of Krishna consciousness, sharing ancient wisdom through modern teachings.',
    imageUrl: 'https://i.pravatar.cc/300?img=33',
    category: 'Bhakti',
    followers: '1.8M',
    location: 'Mayapur, India',
    featured: true,
    rating: 4.8,
    speciality: 'Ancient Wisdom & Modern Life'
  },
  {
    id: 'jaya-kishori',
    name: 'Jaya Kishori',
    title: 'Spiritual Storyteller & Bhakti Speaker',
    description: 'Inspiring spiritual storyteller who brings ancient wisdom to life through engaging narratives.',
    imageUrl: 'https://i.pravatar.cc/300?img=47',
    category: 'Storytelling',
    followers: '3.2M',
    location: 'Mumbai, India',
    featured: true,
    rating: 4.9,
    speciality: 'Sacred Stories & Divine Narratives'
  },
  {
    id: 'sadhguru',
    name: 'Sadhguru',
    title: 'Yogi, Mystic & Visionary',
    description: 'Renowned spiritual leader and founder of Isha Foundation, teaching inner engineering and self-transformation.',
    imageUrl: 'https://i.pravatar.cc/300?img=12',
    category: 'Yoga',
    followers: '15M',
    location: 'Coimbatore, India',
    featured: true,
    rating: 4.9,
    speciality: 'Inner Engineering & Transformation'
  },
  {
    id: 'swami-mukundananda',
    name: 'Swami Mukundananda',
    title: 'Spiritual Leader & Author',
    description: 'Disciple of Jagadguru Kripaluji Maharaj, teaching the science of self-realization and divine love.',
    imageUrl: 'https://i.pravatar.cc/300?img=68',
    category: 'Philosophy',
    followers: '1.2M',
    location: 'New York, USA',
    featured: false,
    rating: 4.8,
    speciality: 'Self-Realization Science'
  },
  {
    id: 'radhanath-swami',
    name: 'Radhanath Swami',
    title: 'Spiritual Teacher & Author',
    description: 'Renowned spiritual teacher and author, sharing the path of bhakti yoga and Krishna consciousness.',
    imageUrl: 'https://i.pravatar.cc/300?img=13',
    category: 'Bhakti',
    followers: '800K',
    location: 'Mumbai, India',
    featured: false,
    rating: 4.9,
    speciality: 'Bhakti Yoga & Divine Devotion'
  },
  {
    id: 'amitabh-bachchan',
    name: 'Amitabh Bachchan',
    title: 'Actor & Spiritual Seeker',
    description: 'Legendary actor who shares his spiritual journey and devotion to Krishna through his platform.',
    imageUrl: 'https://i.pravatar.cc/300?img=52',
    category: 'Bhakti',
    followers: '5.2M',
    location: 'Mumbai, India',
    featured: false,
    rating: 4.7,
    speciality: 'Spiritual Journey & Devotion'
  },
  {
    id: 'anup-jalota',
    name: 'Anup Jalota',
    title: 'Bhakti Singer & Spiritual Artist',
    description: 'Renowned bhajan singer who has dedicated his life to spreading Krishna consciousness through music.',
    imageUrl: 'https://i.pravatar.cc/300?img=59',
    category: 'Kirtan',
    followers: '2.1M',
    location: 'Mumbai, India',
    featured: false,
    rating: 4.8,
    speciality: 'Devotional Music & Bhajans'
  },
  {
    id: 'kailash-kher',
    name: 'Kailash Kher',
    title: 'Sufi & Devotional Singer',
    description: 'Acclaimed singer who blends Sufi traditions with devotional music, spreading spiritual messages.',
    imageUrl: 'https://i.pravatar.cc/300?img=15',
    category: 'Music',
    followers: '1.5M',
    location: 'Mumbai, India',
    featured: false,
    rating: 4.6,
    speciality: 'Sufi & Devotional Fusion'
  },
  {
    id: 'swami-chinmayananda',
    name: 'Swami Chinmayananda',
    title: 'Vedanta Teacher & Philosopher',
    description: 'Renowned Vedanta teacher who simplified complex spiritual concepts for modern seekers.',
    imageUrl: 'https://i.pravatar.cc/300?img=51',
    category: 'Vedanta',
    followers: '1.8M',
    location: 'Mumbai, India',
    featured: false,
    rating: 4.9,
    speciality: 'Vedanta Philosophy'
  },
  {
    id: 'swami-ramdev',
    name: 'Swami Ramdev',
    title: 'Yoga Guru & Spiritual Leader',
    description: 'Renowned yoga teacher and spiritual leader, promoting traditional Indian practices and Ayurveda.',
    imageUrl: 'https://i.pravatar.cc/300?img=56',
    category: 'Yoga',
    followers: '8.5M',
    location: 'Haridwar, India',
    featured: false,
    rating: 4.5,
    speciality: 'Yoga & Ayurveda'
  },
  {
    id: 'mata-amritanandamayi',
    name: 'Mata Amritanandamayi',
    title: 'Spiritual Mother & Humanitarian',
    description: 'Beloved spiritual mother known for her unconditional love and humanitarian work worldwide.',
    imageUrl: 'https://i.pravatar.cc/300?img=49',
    category: 'Bhakti',
    followers: '12M',
    location: 'Kerala, India',
    featured: false,
    rating: 4.9,
    speciality: 'Unconditional Love & Service'
  },
  {
    id: 'swami-vivekananda',
    name: 'Swami Vivekananda',
    title: 'Spiritual Leader & Philosopher',
    description: 'Renowned spiritual leader who introduced Vedanta to the West and inspired millions worldwide.',
    imageUrl: 'https://i.pravatar.cc/300?img=69',
    category: 'Vedanta',
    followers: '3.5M',
    location: 'Kolkata, India',
    featured: false,
    rating: 4.9,
    speciality: 'Vedanta & World Philosophy'
  },
  {
    id: 'ramana-maharshi',
    name: 'Ramana Maharshi',
    title: 'Sage & Self-Realized Master',
    description: 'Renowned sage who taught the path of self-inquiry and self-realization through silence.',
    imageUrl: 'https://i.pravatar.cc/300?img=32',
    category: 'Philosophy',
    followers: '2.8M',
    location: 'Tiruvannamalai, India',
    featured: false,
    rating: 4.9,
    speciality: 'Self-Inquiry & Silence'
  },
  {
    id: 'krishna-das',
    name: 'Krishna Das',
    title: 'Kirtan Artist & Spiritual Musician',
    description: 'Renowned kirtan artist who has brought devotional music to the West, inspiring millions.',
    imageUrl: 'https://i.pravatar.cc/300?img=17',
    category: 'Kirtan',
    followers: '1.2M',
    location: 'New York, USA',
    featured: false,
    rating: 4.8,
    speciality: 'Kirtan & Devotional Music'
  },
  {
    id: 'jagadguru-kripaluji',
    name: 'Jagadguru Kripaluji Maharaj',
    title: 'Spiritual Master & Bhakti Teacher',
    description: 'Renowned spiritual master who taught the path of divine love and Krishna consciousness.',
    imageUrl: 'https://i.pravatar.cc/300?img=57',
    category: 'Bhakti',
    followers: '2.1M',
    location: 'Vrindavan, India',
    featured: false,
    rating: 4.9,
    speciality: 'Divine Love & Grace'
  },
  {
    id: 'swami-paramahansa-yogananda',
    name: 'Swami Paramahansa Yogananda',
    title: 'Yogi & Author of Autobiography of a Yogi',
    description: 'Renowned yogi who introduced Kriya Yoga to the West and authored the spiritual classic.',
    imageUrl: 'https://i.pravatar.cc/300?img=14',
    category: 'Yoga',
    followers: '4.2M',
    location: 'Los Angeles, USA',
    featured: false,
    rating: 4.9,
    speciality: 'Kriya Yoga & Meditation'
  },
  {
    id: 'swami-sivananda',
    name: 'Swami Sivananda',
    title: 'Yoga Master & Spiritual Teacher',
    description: 'Renowned yoga master who founded the Divine Life Society and taught integral yoga.',
    imageUrl: 'https://i.pravatar.cc/300?img=67',
    category: 'Yoga',
    followers: '1.8M',
    location: 'Rishikesh, India',
    featured: false,
    rating: 4.8,
    speciality: 'Integral Yoga & Divine Life'
  },
  {
    id: 'swami-ramakrishna',
    name: 'Swami Ramakrishna',
    title: 'Mystic & Spiritual Master',
    description: 'Renowned mystic who experienced the divine through various spiritual paths and traditions.',
    imageUrl: 'https://i.pravatar.cc/300?img=66',
    category: 'Philosophy',
    followers: '3.1M',
    location: 'Kolkata, India',
    featured: false,
    rating: 4.9,
    speciality: 'Divine Experience & Mysticism'
  },
  {
    id: 'swami-agnivesh',
    name: 'Swami Agnivesh',
    title: 'Social Activist & Spiritual Leader',
    description: 'Renowned social activist and spiritual leader who worked for social justice and human rights.',
    imageUrl: 'https://i.pravatar.cc/300?img=11',
    category: 'Philosophy',
    followers: '800K',
    location: 'Delhi, India',
    featured: false,
    rating: 4.6,
    speciality: 'Social Justice & Spirituality'
  },
  {
    id: 'swami-chinmayananda-2',
    name: 'Swami Chinmayananda',
    title: 'Vedanta Teacher & Spiritual Leader',
    description: 'Renowned Vedanta teacher who simplified complex spiritual concepts for modern seekers.',
    imageUrl: 'https://i.pravatar.cc/300?img=70',
    category: 'Vedanta',
    followers: '2.3M',
    location: 'Mumbai, India',
    featured: false,
    rating: 4.8,
    speciality: 'Simplified Vedanta Wisdom'
  },
  {
    id: 'swami-dayananda',
    name: 'Swami Dayananda',
    title: 'Vedanta Teacher & Spiritual Guide',
    description: 'Renowned Vedanta teacher who taught the essence of Hindu philosophy and spirituality.',
    imageUrl: 'https://i.pravatar.cc/300?img=64',
    category: 'Vedanta',
    followers: '1.5M',
    location: 'Chennai, India',
    featured: false,
    rating: 4.7,
    speciality: 'Hindu Philosophy & Essence'
  },
  {
    id: 'swami-omkarananda',
    name: 'Swami Omkarananda',
    title: 'Spiritual Teacher & Philosopher',
    description: 'Renowned spiritual teacher who taught the path of self-realization and divine love.',
    imageUrl: 'https://i.pravatar.cc/300?img=58',
    category: 'Philosophy',
    followers: '900K',
    location: 'Rishikesh, India',
    featured: false,
    rating: 4.6,
    speciality: 'Self-Realization Path'
  }
];