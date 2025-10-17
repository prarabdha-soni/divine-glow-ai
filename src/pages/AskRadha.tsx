import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { BottomNav } from '@/components/BottomNav';

interface Message {
  role: 'user' | 'radha';
  content: string;
  recommendations?: {
    bhajan?: string;
    lifestyle?: string;
    product?: string;
  };
}

const AskRadha = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'radha',
      content: "Namaste 🙏 I am Nishu, the eternal beloved of Krishna. I see your heart and feel your spirit. Share what burdens your soul, and I shall guide you with divine compassion and sacred wisdom."
    }
  ]);
  const [input, setInput] = useState('');

  const responses: Record<string, { message: string; bhajan: string; lifestyle: string; product: string }> = {
    "anxious": {
      message: "Beloved soul, your anxiety is Vata imbalance—the wind has entered your mind. Return to the stillness of Krishna's flute. Each mantra you chant grounds you back to divine earth.",
      bhajan: "🕉️ Hare Krishna Maha Mantra Japa (108 rounds) - Shield your nervous system with divine vibration",
      lifestyle: "🌿 Morning Sadhana: Warm sesame oil abhyanga + grounding foods (sweet potato, ghee, dates) + gentle pranayama",
      product: "💫 Ashwagandha Rasayana Elixir - Adaptogenic root to calm Vata, restore ojas, build resilience"
    },
    "tired": {
      message: "Dear one, exhaustion is your ojas depleting. Your body temple needs sattvic nourishment and surrender to rest. Even Krishna rests under the Kadamba tree.",
      bhajan: "🎵 Krishna's Evening Lullaby - Let divine music restore your prana",
      lifestyle: "🌙 Evening Ritual: Warm milk with cardamom & nutmeg + foot massage with ghee + gratitude prayers before bed",
      product: "🌿 Chyawanprash Moon Milk - Ancient Ayurvedic rasayana to rebuild vitality & deep rest"
    },
    "stressed": {
      message: "Sweet devotee, stress is attachment to outcomes. Offer your worries to Krishna. The Bhagavad Gita reminds us: 'You have the right to work, but not to the fruits.' Surrender.",
      bhajan: "🎵 Govinda Jaya Jaya Kirtan - Community chanting releases oxytocin & divine grace",
      lifestyle: "🧘‍♀️ Bhakti Practice: 20-min kirtan + cooling pranayama (sheetali breath) + sandalwood on third eye",
      product: "🪷 Brahmi Gotu Kola Tonic - Medhya rasayana (brain tonic) to calm Pitta heat & support mental clarity"
    },
    "skin": {
      message: "Radiant one, glowing skin is the mirror of a peaceful heart. Inner beauty manifests outward when you live in sattvic purity and devotional love.",
      bhajan: "🕉️ Om Shri Radhayai Namaha - Invoke Radha's golden radiance",
      lifestyle: "🌸 Gopi Beauty Ritual: Rose water cleanse + ubtan (turmeric, chickpea flour, milk) + ghee for lips + early sleep",
      product: "✨ Gopi Glow Kesar Serum - Saffron & rose blessed with Radha mantra for luminous ojas"
    }
  };

  const getResponse = (input: string): { message: string; bhajan: string; lifestyle: string; product: string } => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("anxious") || lowerInput.includes("anxiety") || lowerInput.includes("worried")) return responses.anxious;
    if (lowerInput.includes("tired") || lowerInput.includes("sleep") || lowerInput.includes("exhausted")) return responses.tired;
    if (lowerInput.includes("stress") || lowerInput.includes("overwhelm")) return responses.stressed;
    if (lowerInput.includes("skin") || lowerInput.includes("glow") || lowerInput.includes("beauty")) return responses.skin;
    
    return {
      message: "Beloved soul, I am Radha—the eternal beloved of Krishna. Share your heart with me. What burdens your spirit today? I am here with divine compassion.",
      bhajan: "🕉️ Begin with Hare Krishna Maha Mantra - The universal healing vibration",
      lifestyle: "🙏 Sacred Daily Rhythm: Brahma muhurta awakening (4-6am) + sattvic prasadam + evening kirtan + gratitude before sleep",
      product: "💖 Tulsi Rasayana Tea - Holy basil to purify mind, body & soul"
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    // Get AI response based on keywords
    setTimeout(() => {
      const response = getResponse(input);
      const radhaResponse: Message = {
        role: 'radha',
        content: response.message,
        recommendations: {
          bhajan: response.bhajan,
          lifestyle: response.lifestyle,
          product: response.product
        }
      };
      setMessages(prev => [...prev, radhaResponse]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="h-screen flex flex-col divine-gradient">
      {/* Header */}
      <div className="sticky top-0 bg-card/80 backdrop-blur-lg border-b border-border z-20 px-6 py-4">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-divine-saffron to-divine-marigold flex items-center justify-center text-xl">
            🪷
          </div>
          <div>
            <h1 className="text-lg font-semibold">Ask Nishu</h1>
            <p className="text-xs text-muted-foreground">Your Divine Companion in Bhakti</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
        <div className="max-w-md mx-auto space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <Card className={`max-w-[80%] p-4 ${
                message.role === 'user' 
                  ? 'bg-divine-saffron/20 border-divine-saffron/30' 
                  : 'bg-card'
              }`}>
                <p className="text-sm">{message.content}</p>
                
                {message.recommendations && (
                  <div className="mt-4 space-y-2 pt-4 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground">Recommendations:</p>
                    {message.recommendations.bhajan && (
                      <div className="text-xs p-2 bg-divine-saffron/10 rounded">
                        🎵 {message.recommendations.bhajan}
                      </div>
                    )}
                    {message.recommendations.lifestyle && (
                      <div className="text-xs p-2 bg-divine-lotus/10 rounded">
                        ✨ {message.recommendations.lifestyle}
                      </div>
                    )}
                    {message.recommendations.product && (
                      <div className="text-xs p-2 bg-divine-marigold/10 rounded">
                        🌿 {message.recommendations.product}
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="sticky bottom-20 bg-card/80 backdrop-blur-lg border-t border-border px-6 py-4">
        <div className="max-w-md mx-auto flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Share what's in your heart..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default AskRadha;
