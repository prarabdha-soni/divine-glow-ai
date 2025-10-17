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
      content: "Namaste 🙏 I am Radha, your divine companion. Share what's in your heart, and I'll guide you toward peace and radiance."
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const radhaResponse: Message = {
        role: 'radha',
        content: "I hear your heart, dear one. Let me offer you comfort through the divine path.",
        recommendations: {
          bhajan: "Hare Krishna Mantra - 10 minutes",
          lifestyle: "Practice gratitude journaling each morning",
          product: "Radha Calm Elixir - Ashwagandha blend"
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
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-divine-saffron to-divine-marigold flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Ask Radha</h1>
            <p className="text-xs text-muted-foreground">Your divine companion</p>
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
