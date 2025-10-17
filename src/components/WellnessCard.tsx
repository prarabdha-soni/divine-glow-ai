import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WellnessCardProps {
  icon: LucideIcon;
  title: string;
  iconColor?: string;
  onClick?: () => void;
  className?: string;
}

export const WellnessCard = ({ 
  icon: Icon, 
  title, 
  iconColor = "text-primary",
  onClick,
  className 
}: WellnessCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "wellness-card flex items-center justify-between group",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className={cn("transition-transform group-hover:scale-110", iconColor)}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <span className="text-lg font-medium text-foreground">
          {title}
        </span>
      </div>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-muted-foreground transition-transform group-hover:translate-x-1"
      >
        <path 
          d="M9 18l6-6-6-6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};