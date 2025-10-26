import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar, RefreshCw } from 'lucide-react';
import { useAge } from '@/contexts/AgeContext';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/BottomNav';

export const Profile = () => {
  const navigate = useNavigate();
  const { age, ageGroup, setAge, clearAge } = useAge();
  const [isChangingAge, setIsChangingAge] = useState(false);
  const [selectedAge, setSelectedAge] = useState<number | null>(age);

  const getAgeGroupLabel = () => {
    if (ageGroup === 'kids') return 'Kids (Below 10)';
    if (ageGroup === 'youth') return 'Youth (10-40)';
    if (ageGroup === 'adult') return 'Adult (40+)';
    return 'Not set';
  };

  const handleAgeUpdate = () => {
    if (selectedAge !== null) {
      setAge(selectedAge);
      setIsChangingAge(false);
    }
  };

  const ageRanges = [
    { label: 'Below 10', value: 8, emoji: '👶', description: 'Divine stories & videos' },
    { label: '10 - 40', value: 25, emoji: '👨', description: 'Music, Sleep & Dance' },
    { label: '40+', value: 45, emoji: '👴', description: 'All content available' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/95 backdrop-blur-xl border-b border-white/10">
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="p-2 -ml-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-serif text-white absolute left-1/2 transform -translate-x-1/2">
              Profile
            </h1>
            <div className="w-8"></div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="pt-24 px-6 pb-24">
        {/* Profile Header */}
        <div className="mb-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-orange-500/30">
            <User size={48} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Your Profile</h2>
          <p className="text-white/60">Manage your preferences</p>
        </div>

        {/* Current Age Section */}
        {!isChangingAge ? (
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Age Group</h3>
              </div>
              <div className="mb-4">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-pink-200 mb-2">
                  {getAgeGroupLabel()}
                </p>
                <p className="text-white/60">Current age: {age} years</p>
              </div>
              <Button
                onClick={() => setIsChangingAge(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} />
                Change Age
              </Button>
            </div>

            {/* Content Availability Info */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Available Content
              </h3>
              <div className="space-y-3">
                {ageGroup === 'kids' && (
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📺</span>
                    <div>
                      <p className="text-white font-medium">Lil' Leela Stories</p>
                      <p className="text-white/60 text-sm">
                        Netflix-style divine stories and adventures for kids
                      </p>
                    </div>
                  </div>
                )}
                {ageGroup === 'youth' && (
                  <>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎵</span>
                      <div>
                        <p className="text-white font-medium">Music & Dance</p>
                        <p className="text-white/60 text-sm">
                          Spiritual music and devotional content
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">😴</span>
                      <div>
                        <p className="text-white font-medium">Sleep Stories</p>
                        <p className="text-white/60 text-sm">
                          Relaxing stories and meditation
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {ageGroup === 'adult' && (
                  <>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🪔</span>
                      <div>
                        <p className="text-white font-medium">Live Aarti</p>
                        <p className="text-white/60 text-sm">
                          Live streaming from sacred temples
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📿</span>
                      <div>
                        <p className="text-white font-medium">Live Katha</p>
                        <p className="text-white/60 text-sm">
                          Spiritual wisdom and teachings
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎵</span>
                      <div>
                        <p className="text-white font-medium">All Content</p>
                        <p className="text-white/60 text-sm">
                          Access to complete spiritual library
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Age Selection Interface */
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Select New Age Group
              </h3>
              <div className="space-y-3 mb-6">
                {ageRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedAge(range.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedAge === range.value
                        ? 'border-orange-400 bg-gradient-to-r from-orange-500/20 to-pink-500/20'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{range.emoji}</span>
                        <div className="text-left">
                          <h4 className="text-white font-semibold">
                            {range.label}
                          </h4>
                          <p className="text-white/60 text-sm">
                            {range.description}
                          </p>
                        </div>
                      </div>
                      {selectedAge === range.value && (
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => {
                    setIsChangingAge(false);
                    setSelectedAge(age);
                  }}
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleAgeUpdate}
                  disabled={selectedAge === null || selectedAge === age}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Profile;

