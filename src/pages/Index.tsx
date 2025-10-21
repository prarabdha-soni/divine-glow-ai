import { useNavigate } from 'react-router-dom';
import { Play, Clock, Star, Gift, Check, Music } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { KrishnaMusicPlayer } from '@/components/KrishnaMusicPlayer';
import { useState } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  
  // Sample data for Calm app
  const currentStreak = 1;
  const weeklyData = [
    { day: 'M', completed: false },
    { day: 'T', completed: false },
    { day: 'W', completed: true },
    { day: 'T', completed: false },
    { day: 'F', completed: false },
    { day: 'S', completed: false },
    { day: 'S', completed: false }
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
            <h1 className="text-2xl font-bold text-gray-800">Krishna Calm</h1>
          </div>
          <Gift size={24} className="text-gray-600" />
        </div>

        {/* Daily Streak Counter */}
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-4">
            {/* Progress Ring */}
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgb(229 231 235)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgb(59 130 246)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(currentStreak / 7) * 251.2} 251.2`}
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{currentStreak}</div>
                <div className="text-sm text-gray-600">Day</div>
              </div>
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="flex justify-center gap-2 mb-4">
            {weeklyData.map((day, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  day.completed 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {day.completed ? <Check size={16} /> : day.day}
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-sm">
            You're off to a great start with Krishna's divine guidance {currentStreak} day this week. Keep it up!
          </p>
        </div>

        {/* Daily Krishna Card */}
        <div className="calm-card rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
              <Play size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Daily Krishna</h3>
              <p className="text-sm text-gray-600 mb-1">Mantra • Hare Krishna Mahamantra</p>
              <p className="text-xs text-gray-500">Jan 24 • Divine Love Meditation</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-800">10 min</div>
            </div>
          </div>
        </div>

        {/* Daily Gita Card */}
        <div className="calm-card rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center">
              <Play size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Daily Gita</h3>
              <p className="text-sm text-gray-600 mb-1">Teaching • Bhagavad Gita Wisdom</p>
              <p className="text-xs text-gray-500">Jan 24 • Chapter 2: The Eternal Soul</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-800">8 min</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="calm-card rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock size={24} className="calm-blue-text" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Krishna Stories</h3>
            <p className="text-xs text-gray-600">Divine bedtime tales</p>
          </div>
          <div 
            className="calm-card rounded-2xl p-6 text-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowMusicPlayer(true)}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Music size={24} className="calm-purple-text" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Random Music</h3>
            <p className="text-xs text-gray-600">Krishna bhajans & mantras</p>
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

export default Index;