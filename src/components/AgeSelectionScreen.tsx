import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAge } from '@/contexts/AgeContext';

export const AgeSelectionScreen = () => {
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const { setAge } = useAge();

  const handleAgeSelect = () => {
    if (selectedAge !== null) {
      setAge(selectedAge);
    }
  };

  const ageRanges = [
    { label: 'Below 10', value: 8, emoji: '👶', description: 'Divine stories & videos' },
    { label: '10 - 40', value: 25, emoji: '👨', description: 'Music, Sleep & Dance' },
    { label: '40+', value: 45, emoji: '👴', description: 'All content available' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0f0f2e] flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-pink-500/8 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative w-full max-w-md px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in duration-1000">
          <h1 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 mb-4">
            Welcome to Divine Glow
          </h1>
          <p className="text-white/70 text-lg mb-2">
            Select your age group
          </p>
          <p className="text-white/50 text-sm">
            We'll customize your experience accordingly
          </p>
        </div>

        {/* Age Selection Grid */}
        <div className="space-y-3 mb-8 animate-in slide-in-from-bottom duration-1000">
          {ageRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedAge(range.value)}
              className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 ${
                selectedAge === range.value
                  ? 'border-orange-400 bg-gradient-to-r from-orange-500/20 to-pink-500/20 shadow-lg shadow-orange-500/20 scale-[1.02]'
                  : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{range.emoji}</span>
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-lg">
                      {range.label}
                    </h3>
                    <p className="text-white/60 text-sm">{range.description}</p>
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

        {/* Continue Button */}
        <Button
          onClick={handleAgeSelect}
          disabled={selectedAge === null}
          className={`w-full py-6 rounded-2xl text-lg font-semibold transition-all duration-300 ${
            selectedAge !== null
              ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg shadow-orange-500/30'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            Continue
            <ChevronRight size={20} />
          </span>
        </Button>

        {/* Privacy Notice */}
        <p className="text-center text-white/40 text-xs mt-6">
          Your age preference is stored locally on your device
        </p>
      </div>
    </div>
  );
};

