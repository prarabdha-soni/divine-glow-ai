import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type AgeGroup = 'kids' | 'youth' | 'adult' | null;

interface AgeContextType {
  age: number | null;
  ageGroup: AgeGroup;
  setAge: (age: number) => void;
  clearAge: () => void;
  hasSelectedAge: boolean;
}

const AgeContext = createContext<AgeContextType | undefined>(undefined);

const getAgeGroup = (age: number | null): AgeGroup => {
  if (age === null) return null;
  if (age < 10) return 'kids';
  if (age >= 10 && age <= 40) return 'youth';
  return 'adult';
};

export const AgeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [age, setAgeState] = useState<number | null>(() => {
    const stored = localStorage.getItem('userAge');
    return stored ? parseInt(stored, 10) : null;
  });

  const [hasSelectedAge, setHasSelectedAge] = useState(() => {
    return localStorage.getItem('hasSelectedAge') === 'true';
  });

  const ageGroup = getAgeGroup(age);

  const setAge = (newAge: number) => {
    setAgeState(newAge);
    localStorage.setItem('userAge', newAge.toString());
    localStorage.setItem('hasSelectedAge', 'true');
    setHasSelectedAge(true);
  };

  const clearAge = () => {
    setAgeState(null);
    localStorage.removeItem('userAge');
    localStorage.removeItem('hasSelectedAge');
    setHasSelectedAge(false);
  };

  return (
    <AgeContext.Provider value={{ age, ageGroup, setAge, clearAge, hasSelectedAge }}>
      {children}
    </AgeContext.Provider>
  );
};

export const useAge = () => {
  const context = useContext(AgeContext);
  if (context === undefined) {
    throw new Error('useAge must be used within an AgeProvider');
  }
  return context;
};

