/**
 * Guru Collections Data
 * 
 * To add a new guru:
 * 1. Add a new object to the array
 * 2. Set a unique id (use kebab-case, e.g., 'guru-name')
 * 3. Add guru name, description, and icon
 * 4. Add videos array with YouTube IDs
 * 
 * To add a new video:
 * 1. Find the guru collection
 * 2. Add a new video object with:
 *    - id: unique identifier (e.g., 'day-3')
 *    - title: video title
 *    - youtubeId: YouTube video ID from URL (e.g., 'BwdtwY2yRlM')
 *    - day: day number (for sequential content)
 */

export interface GuruVideo {
  id: string;
  title: string;
  youtubeId: string;
  day: number;
}

export interface GuruCollection {
  id: string;
  name: string;
  description: string;
  icon: string;
  videos: GuruVideo[];
}

export const guruCollections: GuruCollection[] = [
  {
    id: 'indresh-ji',
    name: 'Indresh Ji',
    description: 'Shrimad Bhagwat Katha',
    icon: '🙏',
    videos: [
      {
        id: 'day-1',
        title: 'Day - 1 | Shrimad Bhagwat Katha Live - Pujya Shri Indresh Ji Maharaj - Kota R.J 2025',
        youtubeId: 'BwdtwY2yRlM',
        day: 1
      },
      {
        id: 'day-2',
        title: 'Day - 2 | Shrimad Bhagwat Katha Live - Pujya Shri Indresh Ji Maharaj - Kota R.J 2025',
        youtubeId: 'F68PTf8Ii8w',
        day: 2
      }
    ]
  },
  {
    id: 'pradeep-mishra-ji',
    name: 'Pradeep Mishra Ji',
    description: 'Spiritual Discourse',
    icon: '🕉️',
    videos: [
      {
        id: 'katha-1',
        title: 'Pradeep Mishra Ji Katha',
        youtubeId: 'uVoHIY-nIEY',
        day: 1
      }
    ]
  },
  {
    id: 'devkinandan-thakur-ji',
    name: 'Devkinandan Thakur Ji',
    description: 'Live Katha',
    icon: '📿',
    videos: [
      {
        id: 'live-1',
        title: 'Devkinandan Thakur Ji Live',
        youtubeId: 'wpnBDfUoqLQ',
        day: 1
      }
    ]
  },
  {
    id: 'aniruddhacharya-ji',
    name: 'Aniruddhacharya Ji',
    description: 'Spiritual Discourse',
    icon: '🛕',
    videos: [
      {
        id: 'katha-1',
        title: 'Aniruddhacharya Ji Maharaj',
        youtubeId: 'K1nDoC1XRfc',
        day: 1
      }
    ]
  },
  {
    id: 'pulak-sagar-ji',
    name: 'Pulak Sagar Ji Maharaj',
    description: 'Divine Katha',
    icon: '🙏',
    videos: [
      {
        id: 'katha-1',
        title: 'Pulak Sagar Ji Maharaj',
        youtubeId: 'i1COY1OqPfc',
        day: 1
      }
    ]
  },
  {
    id: 'tulak-sagar-ji',
    name: 'Tulak Sagar Ji Maharaj',
    description: 'Spiritual Katha',
    icon: '🕉️',
    videos: [
      {
        id: 'katha-1',
        title: 'Tulak Sagar Ji Maharaj',
        youtubeId: 'k6Ig0Egh8hc',
        day: 1
      }
    ]
  }
];

