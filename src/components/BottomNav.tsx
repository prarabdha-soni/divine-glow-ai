import { Home, Search, TrendingUp, User } from 'lucide-react';
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
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border">
      <div className="max-w-md mx-auto flex justify-around items-center px-4 py-2">
        <NavItem icon={<Home size={22} />} label="Home" active />
        <NavItem icon={<Search size={22} />} label="Discover" />
        <NavItem icon={<TrendingUp size={22} />} label="Progress" />
        <NavItem icon={<User size={22} />} label="Profile" />
      </div>
    </nav>
  );
};