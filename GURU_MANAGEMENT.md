# Guru Collections Management Guide

This guide explains how to manually add new gurus, katha videos, and organize spiritual content in the app.

## File Location

All guru collections are managed in: `src/data/guruCollections.ts`

## How to Add a New Video

1. Open `src/data/guruCollections.ts`
2. Find the guru collection you want to add to
3. Add a new video object to the `videos` array:

```typescript
{
  id: 'day-3',  // Unique ID for this video
  title: 'Day - 3 | Shrimad Bhagwat Katha Live - Pujya Shri Indresh Ji Maharaj - Kota R.J 2025',
  youtubeId: 'F68PTf8Ii8w',  // YouTube video ID (from URL)
  day: 3  // Day number for sequential content
}
```

### Getting YouTube Video ID

From YouTube URL: `https://www.youtube.com/watch?v=F68PTf8Ii8w`
- Video ID is: `F68PTf8Ii8w` (everything after `watch?v=`)

From YouTube Shorts: `https://www.youtube.com/shorts/UQzwKqDpr00`
- Video ID is: `UQzwKqDpr00` (everything after `shorts/`)

## How to Add a New Guru Collection

1. Open `src/data/guruCollections.ts`
2. Add a new object to the `guruCollections` array:

```typescript
{
  id: 'new-guru-name',  // Unique ID in kebab-case
  name: 'Shri Guru Name',  // Display name
  description: 'Katha Series Name - Location Year',  // Brief description
  icon: '🙏',  // Emoji icon
  videos: [
    {
      id: 'day-1',
      title: 'Day - 1 | Katha Title...',
      youtubeId: 'VIDEO_ID',
      day: 1
    }
  ]
}
```

## URL Structure

The app automatically creates organized URLs:
- Main Guru page: `/guru`
- Each guru has their own section on the page
- Videos are grouped by guru name

## Current Collections

### Shri Indresh Ji Maharaj
- **ID**: `indresh-ji-maharaj`
- **Series**: Shrimad Bhagwat Katha - Kota 2025
- **Videos**: 
  - Day 1: `BwdtwY2yRlM`
  - Day 2: `F68PTf8Ii8w`

## Adding More Collections

You can create separate collections for:
- Different gurus
- Different katha series
- Different locations/years
- Special events

Each collection will appear as its own section with profile and video grid.

## Tips

- Keep video IDs accurate - they fetch thumbnails automatically
- Use consistent day numbering for sequential content
- Choose meaningful emojis for guru icons (🙏, 🕉️, 📿, etc.)
- Keep titles descriptive but concise
- Test the app after adding new content to ensure thumbnails load

## Example: Adding Day 3

```typescript
// In src/data/guruCollections.ts
export const guruCollections: GuruCollection[] = [
  {
    id: 'indresh-ji-maharaj',
    name: 'Shri Indresh Ji Maharaj',
    description: 'Shrimad Bhagwat Katha - Kota 2025',
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
      },
      // ADD NEW VIDEO HERE:
      {
        id: 'day-3',
        title: 'Day - 3 | Shrimad Bhagwat Katha Live - Pujya Shri Indresh Ji Maharaj - Kota R.J 2025',
        youtubeId: 'YOUR_NEW_VIDEO_ID',
        day: 3
      }
    ]
  }
];
```

Save the file and the app will automatically:
- Fetch the thumbnail from YouTube
- Display the video card
- Enable video playback when clicked

