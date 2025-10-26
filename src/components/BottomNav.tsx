import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Moon, Music, Radio, BookOpen, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAge } from '@/contexts/AgeContext';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active = false, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 px-4 py-2 transition-all duration-300",
        active ? "text-indigo-400" : "text-slate-400 hover:text-slate-300"
      )}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
};

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ageGroup } = useAge();

  // Filter navigation items based on age group
  const getNavItems = () => {
    const items = [];

    // Home is always visible
    items.push(
      <NavItem 
        key="home"
        icon={<Home size={24} />} 
        label="Home" 
        active={location.pathname === '/'} 
        onClick={() => navigate('/')}
      />
    );

    // Kids section (< 10) - No music, just stories
    // Kids only have Home and Profile

    // Youth section (10-40)
    if (ageGroup === 'youth') {
      items.push(
        <NavItem 
          key="sleep"
          icon={<Moon size={24} />} 
          label="Sleep" 
          active={location.pathname === '/sleep'}
          onClick={() => navigate('/sleep')}
        />,
        <NavItem 
          key="music"
          icon={<Music size={24} />} 
          label="Music" 
          active={location.pathname === '/discover'}
          onClick={() => navigate('/discover')}
        />
      );
    }

    // Adult section (40+)
    if (ageGroup === 'adult') {
      items.push(
        <NavItem 
          key="sleep"
          icon={<Moon size={24} />} 
          label="Sleep" 
          active={location.pathname === '/sleep'}
          onClick={() => navigate('/sleep')}
        />,
        <NavItem 
          key="music"
          icon={<Music size={24} />} 
          label="Music" 
          active={location.pathname === '/discover'}
          onClick={() => navigate('/discover')}
        />,
        <NavItem
          key="guru"
          icon={<BookOpen size={24} />}
          label="Guru"
          active={location.pathname === '/guru'}
          onClick={() => navigate('/guru')}
        />,
        <NavItem
          key="live"
          icon={<Radio size={24} />}
          label="Live"
          active={location.pathname === '/live-aarti'}
          onClick={() => navigate('/live-aarti')}
        />
      );
    }

    // Profile is always visible
    items.push(
      <NavItem
        key="profile"
        icon={<User size={24} />}
        label="Profile"
        active={location.pathname === '/profile'}
        onClick={() => navigate('/profile')}
      />
    );

    return items;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 z-50">
      <div className="max-w-md mx-auto flex justify-around items-center px-4 py-2">
        {getNavItems()}
      </div>
    </nav>
  );
};