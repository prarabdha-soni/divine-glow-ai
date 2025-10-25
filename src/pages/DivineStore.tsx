import { useState } from 'react';
import { ArrowLeft, Heart, Star, Plus, Minus, Sparkles } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { useNavigate } from 'react-router-dom';

const DivineStore = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState('50ml');

  const product = {
    name: "Nidra Devi Sleep Oil",
    tagline: "Ancient Ayurvedic formula for divine sleep",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviewCount: 421,
    image: "/assets/images/oil.png",
    description: "Pure Ayurvedic blend of brahmi, ashwagandha, and lavender to calm your nervous system and invite deep, restorative sleep.",
    spiritualStory: "This sacred oil recipe was revealed to ancient rishis in deep meditation. Nidra Devi, the goddess of sleep, blessed this formula. Each ingredient is hand-selected and infused with Vedic mantras during the new moon.",
    benefits: [
      "Reduces sleep onset time by 40%",
      "Calms overactive Vata dosha",
      "Soothes temples & feet pressure points",
      "100% natural, non-habit forming",
      "Deepens REM sleep cycles",
      "Reduces nighttime anxiety"
    ],
    ingredients: [
      "Brahmi (Bacopa Monnieri)",
      "Ashwagandha Root Extract", 
      "Lavender Essential Oil",
      "Cold-pressed Sesame Oil",
      "Sandalwood",
      "Chamomile"
    ],
    sizes: ['30ml', '50ml', '100ml'],
    sizePrice: {
      '30ml': 499,
      '50ml': 799,
      '100ml': 1299
    }
  };

  const currentPrice = product.sizePrice[selectedSize as keyof typeof product.sizePrice];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#1a1a2e]/80 backdrop-blur-xl border-b border-white/10">
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-serif text-white">Sleep Oil</h1>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Heart
              size={20}
              className={isLiked ? 'fill-pink-500 text-pink-500' : 'text-white'}
            />
          </button>
        </div>
      </div>

      <div className="pb-32">
        {/* Hero Product Image */}
        <div className="relative px-6 pt-8 pb-6">
          <div className="relative bg-gradient-to-br from-amber-900/20 via-purple-900/20 to-pink-900/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.2),transparent)]"></div>
            <div className="relative aspect-square flex items-center justify-center p-8">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-1">
              <Sparkles size={14} />
              Save ₹200
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-6">
          {/* Name and Rating */}
          <div className="mb-6">
            <h2 className="text-3xl font-serif text-white mb-2">{product.name}</h2>
            <p className="text-white/70 text-lg mb-3 leading-relaxed">{product.tagline}</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={star <= Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-white/30'}
                  />
                ))}
              </div>
              <span className="text-white font-semibold">{product.rating}</span>
              <span className="text-white/60">({product.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span>Select Size</span>
              <span className="text-white/60 text-sm font-normal">• Best value: 100ml</span>
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-4 rounded-xl font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <div className="text-sm font-bold">{size}</div>
                  <div className="text-xs mt-0.5">₹{product.sizePrice[size as keyof typeof product.sizePrice]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">About This Oil</h3>
            <p className="text-white/80 leading-relaxed">{product.description}</p>
          </div>

          {/* Sacred Story */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-5 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span>✨</span> Sacred Story
            </h3>
            <p className="text-white/80 leading-relaxed italic">{product.spiritualStory}</p>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Benefits</h3>
            <div className="grid grid-cols-1 gap-2">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span className="text-white/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Pure Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
            <h3 className="text-white font-semibold mb-3">How to Use</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</span>
                <p className="text-white/80 text-sm">Apply 3-4 drops on temples before bedtime</p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</span>
                <p className="text-white/80 text-sm">Massage gently on soles of feet</p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</span>
                <p className="text-white/80 text-sm">Breathe deeply and relax into sleep</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom - Price and Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a2e]/98 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl">
        <div className="flex items-center gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 bg-white/10 rounded-xl p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="text-white font-semibold w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Price and Add Button */}
          <div className="flex-1 flex items-center justify-between gap-3">
            <div>
              <p className="text-white/60 text-xs">Total Price</p>
              <div className="flex items-center gap-2">
                <span className="text-white text-2xl font-bold">₹{currentPrice * quantity}</span>
                {product.originalPrice && (
                  <span className="text-white/40 text-sm line-through">₹{product.originalPrice * quantity}</span>
                )}
              </div>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default DivineStore;
