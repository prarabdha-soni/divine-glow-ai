import { useNavigate } from 'react-router-dom';
import { Play, Clock, Star, Headphones, Volume2, Music } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { KrishnaMusicPlayer } from '@/components/KrishnaMusicPlayer';
import { useState } from 'react';

const Sleep = () => {
  const navigate = useNavigate();
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);

  const sleepStories = [
    {
      id: 1,
      title: "Krishna's Flute in Vrindavan",
      author: "Divine Narrator",
      duration: "45 min",
      description: "Drift to sleep with Krishna's divine flute melodies in the sacred groves of Vrindavan",
      image: "🪈",
      featured: true
    },
    {
      id: 2,
      title: "Radha's Love Story",
      author: "Spiritual Guide",
      duration: "30 min",
      description: "The eternal love story of Radha and Krishna for peaceful sleep",
      image: "💕",
      featured: false
    },
    {
      id: 3,
      title: "Yamuna River at Moonlight",
      author: "Vedic Storyteller",
      duration: "25 min",
      description: "A gentle journey along the sacred Yamuna river under the moonlight",
      image: "🌙",
      featured: false
    },
    {
      id: 4,
      title: "Govardhan Hill Tales",
      author: "Divine Sage",
      duration: "40 min",
      description: "Ancient stories of Krishna lifting Govardhan Hill for protection",
      image: "🏔️",
      featured: false
    }
  ];

  const sleepMusic = [
    {
      id: 1,
      title: "Krishna's Flute",
      duration: "60 min",
      description: "Divine flute melodies for deep sleep",
      image: "🪈"
    },
    {
      id: 2,
      title: "Hare Krishna Mantra",
      duration: "45 min",
      description: "Sacred mantras for peaceful sleep",
      image: "🕉️"
    },
    {
      id: 3,
      title: "Vrindavan Forest",
      duration: "30 min",
      description: "Sacred forest sounds of Vrindavan",
      image: "🌲"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <div className="px-6 pt-16 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 calm-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🕉️</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Krishna Sleep</h1>
          </div>
          <Headphones size={24} className="text-gray-600" />
        </div>

        {/* Sleep Stories Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sleep Stories</h2>
          <div className="space-y-4">
            {sleepStories.map((story) => (
              <div key={story.id} className="calm-card rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-2xl">
                    {story.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-800">{story.title}</h3>
                      {story.featured && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">by {story.author}</p>
                    <p className="text-xs text-gray-500">{story.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-800 mb-1">{story.duration}</div>
                    <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                      <Play size={16} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sleep Music Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sleep Music</h2>
          <div className="grid grid-cols-2 gap-4">
            {sleepMusic.map((music) => (
              <div key={music.id} className="calm-card rounded-2xl p-4 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                  {music.image}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{music.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{music.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-gray-500" />
                    <span className="text-xs text-gray-500">{music.duration}</span>
                  </div>
                  <button className="p-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                    <Play size={12} fill="currentColor" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sleep Sounds Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Divine Sounds</h2>
          <div className="grid grid-cols-3 gap-3">
            {['Temple Bells', 'Yamuna River', 'Vrindavan Forest', 'Peacock Calls', 'Sacred Chants', 'Flute Melodies'].map((sound, index) => (
              <div key={sound} className="calm-card rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Volume2 size={16} className="text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-800">{sound}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Sleep Actions */}
        <div className="grid grid-cols-2 gap-4">
          <div 
            className="calm-card rounded-2xl p-6 text-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowMusicPlayer(true)}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Music size={24} className="calm-purple-text" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Random Music</h3>
            <p className="text-xs text-gray-600">Krishna sleep music</p>
          </div>
          <div className="calm-card rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock size={24} className="calm-blue-text" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Mantra Timer</h3>
            <p className="text-xs text-gray-600">Sacred chanting timer</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Music Player */}
      <KrishnaMusicPlayer 
        isVisible={showMusicPlayer} 
        onClose={() => setShowMusicPlayer(false)} 
      />
    </div>
  );
};

export default Sleep;
