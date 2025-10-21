import React from 'react';

interface WeeklySleepTrackerProps {
  sleepData: {
    day: string;
    hours: number;
    completed: boolean;
  }[];
}

export const WeeklySleepTracker = ({ sleepData }: WeeklySleepTrackerProps) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="divine-card rounded-3xl p-6 mb-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold temple-gold-text mb-2">Weekly Sleep Journey</h3>
        <p className="text-sm text-muted-foreground">Complete your daily meditation for a glowing lotus</p>
      </div>
      
      <div className="flex justify-between items-end">
        {days.map((day, index) => {
          const dayData = sleepData[index] || { day, hours: 0, completed: false };
          const isCompleted = dayData.completed;
          const hours = dayData.hours;
          
          return (
            <div key={day} className="flex flex-col items-center">
              {/* Lotus Icon */}
              <div className={`w-12 h-12 mb-2 flex items-center justify-center transition-all duration-300 ${
                isCompleted 
                  ? 'lotus-glow animate-lotus-pulse' 
                  : 'opacity-30'
              }`}>
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className={`w-8 h-8 ${
                    isCompleted ? 'temple-gold-text' : 'text-muted-foreground'
                  }`}
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z" />
                </svg>
              </div>
              
              {/* Day Label */}
              <div className="text-xs text-muted-foreground mb-1">
                {day}
              </div>
              
              {/* Hours Display */}
              <div className={`text-xs font-medium ${
                isCompleted ? 'temple-gold-text' : 'text-muted-foreground'
              }`}>
                {hours > 0 ? `${hours}h` : '--'}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Progress</span>
          <span>{sleepData.filter(d => d.completed).length}/7 days</span>
        </div>
        <div className="w-full bg-muted/30 rounded-full h-2">
          <div 
            className="h-2 rounded-full temple-gradient transition-all duration-500"
            style={{ 
              width: `${(sleepData.filter(d => d.completed).length / 7) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};
