import { useNavigate } from 'react-router-dom';
import { Leaf, Sparkles, Sun, Moon, Heart } from 'lucide-react';
import { WellnessCard } from '@/components/WellnessCard';
import { BottomNav } from '@/components/BottomNav';

const Index = () => {
  const navigate = useNavigate();
  
  const wellnessPaths = [
    {
      icon: Leaf,
      title: "Lose weight",
      color: "text-emerald-700"
    },
    {
      icon: Sparkles,
      title: "Reduce anxiety",
      color: "text-purple-700"
    },
    {
      icon: Sun,
      title: "Get glowing skin",
      color: "text-amber-800"
    },
    {
      icon: Moon,
      title: "Sleep better",
      color: "text-indigo-700"
    },
    {
      icon: Heart,
      title: "Heal reproductive health",
      color: "text-rose-700"
    }
  ];

  return (
    <div className="min-h-screen divine-gradient relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-md mx-auto px-6 pt-16 pb-32">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-2 tracking-tight">
            Gloww
          </h1>
        </div>

        {/* Wellness Path Cards */}
        <div className="space-y-4">
          {wellnessPaths.map((path, index) => (
            <WellnessCard
              key={index}
              icon={path.icon}
              title={path.title}
              iconColor={path.color}
              onClick={() => navigate(`/wellness?path=${encodeURIComponent(path.title)}`)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Decorative Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-divine-saffron/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-divine-cyan/20 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};

export default Index;