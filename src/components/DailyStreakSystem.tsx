import React, { useState, useEffect } from 'react';
import { Crown, Flame, Star, Heart, Sparkles, Trophy } from 'lucide-react';

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  totalSessions: number;
  thisWeekSessions: number;
  lastSessionDate: string | null;
}

interface SpiritualReward {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  requiredStreak: number;
  unlocked: boolean;
  color: string;
}

const spiritualRewards: SpiritualReward[] = [
  {
    id: 'first-step',
    name: 'First Steps',
    description: 'Begin your spiritual journey',
    icon: <Star size={20} />,
    requiredStreak: 1,
    unlocked: false,
    color: 'temple-gold-text'
  },
  {
    id: 'devotion',
    name: 'Devotion',
    description: '3 days of consistent practice',
    icon: <Heart size={20} />,
    requiredStreak: 3,
    unlocked: false,
    color: 'radha-pink-text'
  },
  {
    id: 'dedication',
    name: 'Dedication',
    description: '7 days of spiritual discipline',
    icon: <Flame size={20} />,
    requiredStreak: 7,
    unlocked: false,
    color: 'krishna-blue-text'
  },
  {
    id: 'enlightenment',
    name: 'Enlightenment',
    description: '21 days of divine connection',
    icon: <Crown size={20} />,
    requiredStreak: 21,
    unlocked: false,
    color: 'lotus-gold-text'
  },
  {
    id: 'mastery',
    name: 'Spiritual Mastery',
    description: '100 days of unwavering devotion',
    icon: <Trophy size={20} />,
    requiredStreak: 100,
    unlocked: false,
    color: 'peacock-teal-text'
  }
];

export const DailyStreakSystem = () => {
  const [streakData, setStreakData] = useState<StreakData>({
    currentStreak: 5,
    longestStreak: 12,
    totalSessions: 45,
    thisWeekSessions: 5,
    lastSessionDate: new Date().toISOString()
  });

  const [rewards, setRewards] = useState<SpiritualReward[]>(spiritualRewards);

  useEffect(() => {
    // Update unlocked rewards based on current streak
    const updatedRewards = rewards.map(reward => ({
      ...reward,
      unlocked: streakData.currentStreak >= reward.requiredStreak
    }));
    setRewards(updatedRewards);
  }, [streakData.currentStreak]);

  const nextReward = rewards.find(reward => !reward.unlocked);
  const progressToNext = nextReward 
    ? (streakData.currentStreak / nextReward.requiredStreak) * 100 
    : 100;

  return (
    <div className="divine-card rounded-3xl p-6 mb-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold temple-gold-text mb-2">Spiritual Journey</h2>
        <p className="text-sm text-muted-foreground">Your path to divine consciousness</p>
      </div>

      {/* Current Streak Display */}
      <div className="text-center mb-6">
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Streak Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-muted/30">
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent temple-gradient"
              style={{
                background: `conic-gradient(from 0deg, hsl(var(--temple-gold)) 0%, hsl(var(--krishna-blue)) 25%, hsl(var(--radha-pink)) 50%, hsl(var(--lotus-gold)) 75%, hsl(var(--temple-gold)) 100%)`,
                mask: `conic-gradient(from 0deg, transparent 0%, transparent ${100 - progressToNext}%, black ${100 - progressToNext}%, black 100%)`,
                WebkitMask: `conic-gradient(from 0deg, transparent 0%, transparent ${100 - progressToNext}%, black ${100 - progressToNext}%, black 100%)`,
              }}
            />
          </div>

          {/* Inner Circle */}
          <div className="absolute inset-4 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold temple-gold-text mb-1">
                {streakData.currentStreak}
              </div>
              <div className="text-xs text-muted-foreground">
                Day Streak
              </div>
            </div>
          </div>

          {/* Crown for achievements */}
          {streakData.currentStreak >= 7 && (
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <Crown size={24} className="temple-gold-text animate-pulse" />
            </div>
          )}
        </div>

        {/* Streak Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold krishna-blue-text">{streakData.longestStreak}</div>
            <div className="text-xs text-muted-foreground">Best Streak</div>
          </div>
          <div>
            <div className="text-lg font-bold radha-pink-text">{streakData.thisWeekSessions}</div>
            <div className="text-xs text-muted-foreground">This Week</div>
          </div>
          <div>
            <div className="text-lg font-bold lotus-gold-text">{streakData.totalSessions}</div>
            <div className="text-xs text-muted-foreground">Total Sessions</div>
          </div>
        </div>
      </div>

      {/* Next Reward */}
      {nextReward && (
        <div className="divine-card rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center ${nextReward.color}`}>
              {nextReward.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold temple-gold-text">{nextReward.name}</h3>
              <p className="text-xs text-muted-foreground">{nextReward.description}</p>
              <div className="mt-2">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Progress</span>
                  <span>{streakData.currentStreak}/{nextReward.requiredStreak} days</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full temple-gradient transition-all duration-500"
                    style={{ width: `${progressToNext}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Unlocked Rewards */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold temple-gold-text mb-3">Achievements</h3>
        <div className="grid grid-cols-2 gap-2">
          {rewards.filter(reward => reward.unlocked).map((reward) => (
            <div key={reward.id} className="flex items-center gap-2 p-2 rounded-xl bg-muted/20">
              <div className={`w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center ${reward.color}`}>
                {reward.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium temple-gold-text truncate">{reward.name}</div>
                <div className="text-xs text-muted-foreground truncate">{reward.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Motivational Message */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground mb-2">
          {streakData.currentStreak === 0 
            ? "Start your spiritual journey today with just 5 minutes of meditation"
            : streakData.currentStreak < 7
            ? "You're building beautiful spiritual momentum. Keep going!"
            : streakData.currentStreak < 21
            ? "Your dedication is inspiring! You're becoming a true devotee."
            : "You've achieved spiritual mastery! Your devotion is divine."
          }
        </p>
        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Sparkles 
              key={i} 
              size={12} 
              className="temple-gold-text animate-pulse" 
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
