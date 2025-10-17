import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MusicPlayer } from '@/components/MusicPlayer';

const wellnessContent = {
  "Lose weight": {
    videoId: "Tx3VbD4PzjI",
    solutions: [
      { type: "Video", title: "Krishna Dance Meditation", url: "https://www.youtube.com/watch?v=Tx3VbD4PzjI" },
      { type: "Ayurvedic", title: "Triphala Weight Balance", description: "Natural detox blend" },
      { type: "Sattvic Recipe", title: "Quinoa & Mung Dal Bowl", description: "Light, protein-rich meal" },
      { type: "Cosmetic", title: "Herbal Body Oil", description: "Stimulates metabolism" }
    ]
  },
  "Reduce anxiety": {
    videoId: "t8eYkDyVq2c",
    solutions: [
      { type: "Mantra", title: "Hare Krishna Meditation", url: "https://www.youtube.com/watch?v=t8eYkDyVq2c" },
      { type: "Ayurvedic", title: "Ashwagandha Calm", description: "Stress relief tonic" },
      { type: "Practice", title: "Kirtan Evening Ritual", description: "15-min chanting" },
      { type: "Cosmetic", title: "Sandalwood Face Mist", description: "Cooling & calming" }
    ]
  },
  "Get glowing skin": {
    videoId: "hfzI-yPjKzA",
    solutions: [
      { type: "Devotional", title: "Radha Glow Meditation", url: "https://www.youtube.com/watch?v=hfzI-yPjKzA" },
      { type: "Cosmetic", title: "Gopi Glow Serum", description: "Rose & saffron extract" },
      { type: "Ayurvedic", title: "Turmeric Neem Cleanser", description: "Purifying formula" },
      { type: "Nutrition", title: "Beauty Collagen Tea", description: "Herbal skin support" }
    ]
  },
  "Sleep better": {
    videoId: "2qA0UJ8YbTo",
    sleepTracks: [
      { title: "Krishna's Flute Lullaby", artist: "Divine Sleep Series", duration: "8:30", audioUrl: "https://www.youtube.com/watch?v=2qA0UJ8YbTo" },
      { title: "Hare Krishna Night Chant", artist: "Peaceful Mantras", duration: "10:15", audioUrl: "https://www.youtube.com/watch?v=t8eYkDyVq2c" },
      { title: "Radha's Evening Song", artist: "Sacred Slumber", duration: "7:45", audioUrl: "https://www.youtube.com/watch?v=hfzI-yPjKzA" }
    ],
    solutions: [
      { type: "Lullaby", title: "Krishna's Flute at Night", url: "https://www.youtube.com/watch?v=2qA0UJ8YbTo" },
      { type: "Ayurvedic", title: "Moon Milk Blend", description: "Sleep-inducing tonic" },
      { type: "Practice", title: "Evening Bhajan Ritual", description: "Calming mantras" },
      { type: "Accessory", title: "Lotus Incense", description: "Relaxing aroma" }
    ]
  },
  "Heal reproductive health": {
    videoId: "hfzI-yPjKzA",
    solutions: [
      { type: "Devotional", title: "Divine Feminine Energy", url: "https://www.youtube.com/watch?v=hfzI-yPjKzA" },
      { type: "Ayurvedic", title: "Shatavari Balance", description: "Hormonal support" },
      { type: "Nutrition", title: "Goddess Blend Tea", description: "Rose & hibiscus" },
      { type: "Cosmetic", title: "Sacred Yoni Oil", description: "Natural feminine care" }
    ]
  }
};

const WellnessPath = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const path = searchParams.get('path') || 'Lose weight';
  const content = wellnessContent[path as keyof typeof wellnessContent];

  return (
    <div className="min-h-screen divine-gradient pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card/80 backdrop-blur-lg border-b border-border z-20 px-6 py-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold">{path}</h1>
          </div>
        </div>

        <div className="px-6 pt-6 space-y-6">
          {/* Music Player for Sleep Better */}
          {path === "Sleep better" && 'sleepTracks' in content && (
            <MusicPlayer tracks={content.sleepTracks} />
          )}

          {/* Featured Video */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted relative">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${content.videoId}`}
                title={path}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>

          {/* Natural Solutions */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Natural Solutions</h2>
            <div className="space-y-3">
              {content.solutions.map((solution, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-1">{solution.type}</div>
                      <h3 className="font-medium mb-1">{solution.title}</h3>
                      {solution.description && (
                        <p className="text-sm text-muted-foreground">{solution.description}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {solution.url && (
                        <Button size="icon" variant="ghost">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      <Button size="icon" variant="ghost">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <ShoppingBag className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessPath;
