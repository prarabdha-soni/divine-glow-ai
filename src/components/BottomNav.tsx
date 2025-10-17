import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Play, MessageCircle, ShoppingBag, Music } from 'lucide-react';
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
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border z-50">
      <div className="max-w-md mx-auto flex justify-around items-center px-4 py-2">
        <NavItem 
          icon={<Home size={22} />} 
          label="Home" 
          active={location.pathname === '/'} 
          onClick={() => navigate('/')}
        />
        <NavItem 
          icon={<Play size={22} />} 
          label="Moments" 
          active={location.pathname === '/moments'}
          onClick={() => navigate('/moments')}
        />
        <NavItem 
          icon={<Music size={22} />} 
          label="Music" 
          active={location.pathname === '/music'}
          onClick={() => navigate('/music')}
        />
        <NavItem 
          icon={<MessageCircle size={22} />} 
          label="Ask Radha" 
          active={location.pathname === '/ask-radha'}
          onClick={() => navigate('/ask-radha')}
        />
        <NavItem 
          icon={<ShoppingBag size={22} />} 
          label="Store" 
          active={location.pathname === '/store'}
          onClick={() => navigate('/store')}
        />
      </div>
    </nav>
  );
};