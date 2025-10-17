import { useState } from 'react';
import { ShoppingBag, Heart, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BottomNav } from '@/components/BottomNav';

const products = {
  glow: [
    {
      name: "Gopi Glow Serum",
      description: "Rose & saffron radiance elixir",
      price: "₹3,984",
      mantra: "Radha's Radiance - 10min meditation",
      image: "🌹"
    },
    {
      name: "Sandalwood Face Mist",
      description: "Cooling & calming spray",
      price: "₹2,656",
      mantra: "Divine Calm - 5min chant",
      image: "🪷"
    }
  ],
  balance: [
    {
      name: "Ashwagandha Calm Tonic",
      description: "Stress-relief & hormone balance",
      price: "₹3,154",
      mantra: "Inner Peace Mantra - 15min",
      image: "🍃"
    },
    {
      name: "Triphala Detox Blend",
      description: "Natural cleansing formula",
      price: "₹2,324",
      mantra: "Purification Chant - 8min",
      image: "🌿"
    }
  ],
  nutrition: [
    {
      name: "Beauty Collagen Tea",
      description: "Herbal skin support blend",
      price: "₹1,992",
      mantra: "Morning Radiance Bhajan",
      image: "🫖"
    },
    {
      name: "Goddess Protein Blend",
      description: "Plant-based sattvic nutrition",
      price: "₹3,486",
      mantra: "Strength Mantra - 12min",
      image: "🌾"
    }
  ],
  devotional: [
    {
      name: "Lotus Incense Set",
      description: "Sacred aroma collection",
      price: "₹1,494",
      mantra: "Evening Devotion - 20min",
      image: "🪔"
    },
    {
      name: "Krishna's Flute Diffuser",
      description: "Meditative ambiance",
      price: "₹4,648",
      mantra: "Divine Music Meditation",
      image: "🎵"
    }
  ]
};

const DivineStore = () => {
  const [activeTab, setActiveTab] = useState("glow");

  return (
    <div className="min-h-screen divine-gradient pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card/80 backdrop-blur-lg border-b border-border z-20 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Divine Store</h1>
              <p className="text-sm text-muted-foreground">Beauty & Wellness</p>
            </div>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="px-6 pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-4 mb-6">
              <TabsTrigger value="glow">🌼 Glow</TabsTrigger>
              <TabsTrigger value="balance">🍃 Balance</TabsTrigger>
              <TabsTrigger value="nutrition">💫 Nutrition</TabsTrigger>
              <TabsTrigger value="devotional">💖 Sacred</TabsTrigger>
            </TabsList>

            {Object.entries(products).map(([category, items]) => (
              <TabsContent key={category} value={category} className="space-y-4">
                {items.map((product, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-divine-saffron/20 to-divine-lotus/20 flex items-center justify-center text-4xl">
                        {product.image}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-divine-saffron">
                          <Play className="w-3 h-3" />
                          <span>{product.mantra}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col items-end justify-between">
                        <p className="text-lg font-bold">{product.price}</p>
                        <div className="flex gap-1">
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button size="sm" className="h-8">
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default DivineStore;
