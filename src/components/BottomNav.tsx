import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Moon, Search, User } from 'lucide-react';
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
        "flex flex-col items-center gap-1 px-4 py-2 transition-colors",
        active ? "text-primary" : "text-muted-foreground"
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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
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
          icon={<Search size={24} />} 
          label="Discover" 
          active={location.pathname === '/discover'}
          onClick={() => navigate('/discover')}
        />
        <NavItem 
          icon={<User size={24} />} 
          label="Profile" 
          active={location.pathname === '/profile'}
          onClick={() => navigate('/profile')}
        />
      </div>
    </nav>
  );
};