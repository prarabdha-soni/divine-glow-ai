import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Moon, Music, Radio, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 z-50">
      <div className="max-w-md mx-auto flex justify-around items-center px-4 py-2">
        <NavItem 
          icon={<Home size={24} />} 
          label="Home" 
          active={location.pathname === '/'} 
          onClick={() => navigate('/')}
        />
        <NavItem 
          icon={<Moon size={24} />} 
          label="Sleep" 
          active={location.pathname === '/sleep'}
          onClick={() => navigate('/sleep')}
        />
        <NavItem 
          icon={<Music size={24} />} 
          label="Music" 
          active={location.pathname === '/discover'}
          onClick={() => navigate('/discover')}
        />
        <NavItem
          icon={<BookOpen size={24} />}
          label="Guru"
          active={location.pathname === '/guru'}
          onClick={() => navigate('/guru')}
        />
        <NavItem
          icon={<Radio size={24} />}
          label="Live"
          active={location.pathname === '/live-aarti'}
          onClick={() => navigate('/live-aarti')}
        />
      </div>
    </nav>
  );
};