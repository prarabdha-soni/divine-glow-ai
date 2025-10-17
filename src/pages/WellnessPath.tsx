import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MusicPlayer } from '@/components/MusicPlayer';

const wellnessContent = {
  "Lose weight": {
    videoId: "ByD_y86a_J4",
    spiritualWisdom: "In bhakti, we dance to release attachment—not just to weight, but to all that burdens the soul. Movement becomes worship.",
    solutions: [
      { type: "Bhakti Practice", title: "Shyama Bhajan by Sachet-Parampara", url: "https://www.youtube.com/watch?v=ByD_y86a_J4&list=RDByD_y86a_J4", description: "Sacred movement to release physical & emotional weight" },
      { type: "Ayurvedic", title: "Triphala Weight Balance", description: "Balances Kapha, cleanses ama (toxins), supports agni (digestive fire)" },
      { type: "Sattvic Recipe", title: "Quinoa & Mung Dal Khichdi", description: "Light tridoshic meal blessed with tulsi" },
      { type: "Sacred Oil", title: "Warming Herbal Body Oil", description: "Ginger & black pepper to stimulate metabolism & prana flow" }
    ]
  },
  "Reduce anxiety": {
    videoId: "3YLog5mrAYM",
    spiritualWisdom: "Anxiety dissolves when the mind surrenders to Krishna's flute. Each mantra is a divine embrace that calms the storm within.",
    solutions: [
      { type: "Maha Mantra", title: "Shyama Bhajan by Sachet-Parampara", url: "https://www.youtube.com/watch?v=lm6CLMLSZBc&list=RDlm6CLMLSZBc&start_radio=1", description: "108 beads of divine protection, calms nervous system" },
      { type: "Ayurvedic Rasayana", title: "Ashwagandha Calm Elixir", description: "Adaptogen for Vata, strengthens ojas (vital essence)" },
      { type: "Evening Sadhana", title: "Kirtan Bhakti Ritual", description: "Community chanting releases oxytocin & divine grace" },
      { type: "Aromatherapy", title: "Sandalwood Cooling Mist", description: "Pacifies Pitta & Vata, sacred temple fragrance" }
    ]
  },
  "Get glowing skin": {
    videoId: "QQ5Oe-eyt7g",
    spiritualWisdom: "Radha's radiance comes from inner devotion. True beauty is the glow of a heart immersed in divine love—skincare is a sacred ritual.",
    solutions: [
      { type: "Radha Bhakti", title: "Shyama Bhajan by Sachet-Parampara", url: "https://www.youtube.com/watch?v=lm6CLMLSZBc&list=RDlm6CLMLSZBc&start_radio=1", description: "Visualize Radha's golden aura surrounding your skin" },
      { type: "Divine Elixir", title: "Gopi Glow Face Serum", description: "Kesar (saffron) & gulab (rose) blessed with Radha mantra" },
      { type: "Ayurvedic Cleanser", title: "Turmeric Neem Ubtan", description: "Ancient purifying paste for pitta & kapha skin" },
      { type: "Inner Beauty Tea", title: "Radiance Rasayana Blend", description: "Amalaki, rose petals, shatavari for luminous ojas" }
    ]
  },
  "Sleep better": {
    videoId: "lm6CLMLSZBc",
    spiritualWisdom: "Sleep is surrender to Krishna's embrace. As the gopis rest in Vrindavan, we too dissolve into divine peace at night.",
    sleepTracks: [
      { title: "Shyama Bhajan by Sachet-Parampara", artist: "Divine Sleep Series", duration: "8:30", audioUrl: "https://www.youtube.com/watch?v=lm6CLMLSZBc&list=RDlm6CLMLSZBc&start_radio=1" },
      { title: "Shyama Bhajan by Sachet-Parampara", artist: "Rajshri Soul", duration: "10:15", audioUrl: "https://www.youtube.com/watch?v=lm6CLMLSZBc&list=RDlm6CLMLSZBc&start_radio=1" },
      { title: "Shyama Bhajan by Sachet-Parampara", artist: "Sacred Slumber", duration: "7:45", audioUrl: "https://www.youtube.com/watch?v=lm6CLMLSZBc&list=RDlm6CLMLSZBc&start_radio=1" }
    ],
    solutions: [
      { type: "Sacred Lullaby", title: "Shyama Bhajan by Sachet-Parampara", url: "https://www.youtube.com/watch?v=lm6CLMLSZBc&list=RDlm6CLMLSZBc&start_radio=1", description: "Divine music that lulled baby Krishna to sleep" },
      { type: "Ayurvedic Tonic", title: "Moon Milk (Chandra Ksheer)", description: "Warm spiced milk with ashwagandha & nutmeg to calm Vata" },
      { type: "Evening Sadhana", title: "Sandhya Bhajan Ritual", description: "Soft kirtan & gratitude prayers before sleep" },
      { type: "Temple Incense", title: "Lotus Night Dhoop", description: "Sacred smoke to purify sleep space & invite peace" }
    ]
  },
  "Heal reproductive health": {
    videoId: "Tl4bQBfOtbg",
    spiritualWisdom: "Honor the sacred feminine through Radha's grace. Your womb is a temple—treat it with reverence, devotion, and divine love.",
    solutions: [
      { type: "Radha Shakti", title: "Shyama Bhajan by Sachet-Parampara", url: "https://www.youtube.com/watch?v=lm6CLMLSZBc&list=RDlm6CLMLSZBc&start_radio=1", description: "Connect with Radha's nurturing energy for hormonal harmony" },
      { type: "Rasayana Herb", title: "Shatavari Goddess Tonic", description: "Queen of herbs for women—balances hormones, nourishes shukra dhatu" },
      { type: "Moon Cycle Tea", title: "Sacred Feminine Blend", description: "Rose, hibiscus & shatavari synced with lunar rhythms" },
      { type: "Temple Oil", title: "Yoni Abhyanga Oil", description: "Jasmine & coconut for sacred self-massage ritual" }
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
          {/* Spiritual Wisdom */}
          {'spiritualWisdom' in content && (
            <Card className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex gap-3">
                <div className="text-2xl">🪷</div>
                <div>
                  <h3 className="font-semibold text-sm mb-2 text-primary">Krishna's Wisdom</h3>
                  <p className="text-sm leading-relaxed italic">{content.spiritualWisdom}</p>
                </div>
              </div>
            </Card>
          )}


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

          {/* Divine Solutions */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Sacred Healing Path</h2>
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
