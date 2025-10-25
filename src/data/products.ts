export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  spiritualStory: string;
  price: number;
  originalPrice?: number;
  category: 'bracelets' | 'malas' | 'ayurvedic' | 'sleep-kits' | 'oils';
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  badge?: 'bestseller' | 'new' | 'featured';
  benefits: string[];
  materials?: string[];
  ingredients?: string[];
  sizes?: string[];
  inStock: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  // Bracelets
  {
    id: 'bracelet-1',
    name: "Radha's Rest Bracelet",
    tagline: "Calms mind, promotes deep sleep",
    description: "Handcrafted with sacred Tulsi beads and moonstone, this bracelet carries the blessing of peaceful nights.",
    spiritualStory: "Blessed under the full moon in Vrindavan, each bead carries the energy of Radha's eternal rest by Krishna's side. Wear it as you sleep to invite divine tranquility.",
    price: 999,
    originalPrice: 1499,
    category: 'bracelets',
    image: '🌙',
    images: ['🌙', '💎', '🙏'],
    rating: 4.8,
    reviewCount: 234,
    badge: 'bestseller',
    benefits: [
      'Reduces nighttime anxiety',
      'Promotes deep REM sleep',
      'Enhances dream clarity',
      'Balances sleep cycles'
    ],
    materials: ['Tulsi beads', 'Moonstone', 'Silver thread', 'Rose quartz'],
    sizes: ['Small (6.5")', 'Medium (7")', 'Large (7.5")'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'bracelet-2',
    name: "Krishna's Peace Band",
    tagline: "Divine protection for restful nights",
    description: "Infused with the serene energy of Krishna's flute, this bracelet brings harmony to your sleep.",
    spiritualStory: "Each bead is chanted with the Maha Mantra 108 times, carrying the vibration of peace that flows from Krishna's divine music.",
    price: 1299,
    category: 'bracelets',
    image: '🎵',
    images: ['🎵', '💙', '🪶'],
    rating: 4.9,
    reviewCount: 189,
    badge: 'new',
    benefits: [
      'Calms racing thoughts',
      'Creates peaceful aura',
      'Protects from nightmares',
      'Enhances meditation'
    ],
    materials: ['Blue sandalwood', 'Lapis lazuli', 'Peacock feather essence'],
    sizes: ['Small (6.5")', 'Medium (7")', 'Large (7.5")'],
    inStock: true
  },
  {
    id: 'bracelet-3',
    name: "Vrindavan Serenity",
    tagline: "Channel the peace of sacred forests",
    description: "Crafted with authentic Vrindavan soil beads, bringing the divine energy of Krishna's playground.",
    spiritualStory: "Made from the sacred soil where Radha and Krishna danced, these beads carry the eternal love and peace of Vrindavan.",
    price: 899,
    category: 'bracelets',
    image: '🌿',
    images: ['🌿', '🌺', '💚'],
    rating: 4.7,
    reviewCount: 156,
    benefits: [
      'Grounds nervous energy',
      'Connects to nature',
      'Promotes emotional healing',
      'Enhances spiritual practice'
    ],
    materials: ['Vrindavan soil beads', 'Green aventurine', 'Sandalwood'],
    sizes: ['Small (6.5")', 'Medium (7")', 'Large (7.5")'],
    inStock: true
  },

  // Malas
  {
    id: 'mala-1',
    name: "Radha's Night Mala",
    tagline: "108 beads for peaceful surrender",
    description: "Sacred Tulsi mala for bedtime meditation and mantra chanting to invoke deep rest.",
    spiritualStory: "Each of the 108 beads represents a prayer to Radha, the goddess of devotion. Use this mala for your evening prayers to invite her blessing of peaceful sleep.",
    price: 1799,
    category: 'malas',
    image: '📿',
    images: ['📿', '🌸', '🙏'],
    rating: 5.0,
    reviewCount: 312,
    badge: 'bestseller',
    benefits: [
      'Deepens meditation practice',
      'Calms mind before sleep',
      'Sacred prayer companion',
      'Enhances mantra power'
    ],
    materials: ['Tulsi beads (108)', 'Silver tassel', 'Rose quartz guru bead'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'mala-2',
    name: "Moonlight Meditation Mala",
    tagline: "Channel lunar energy for rest",
    description: "White sandalwood mala infused with moonstone, perfect for evening devotions.",
    spiritualStory: "Charged under three consecutive full moons, this mala carries the cooling energy of Chandra (Moon God) for deep rest.",
    price: 2299,
    category: 'malas',
    image: '🌕',
    images: ['🌕', '⚪', '💫'],
    rating: 4.9,
    reviewCount: 178,
    badge: 'new',
    benefits: [
      'Balances emotions',
      'Enhances intuition',
      'Promotes lucid dreams',
      'Soothes overthinking'
    ],
    materials: ['White sandalwood', 'Moonstone', 'Pure silk thread'],
    inStock: true
  },

  // Ayurvedic Products
  {
    id: 'ayurvedic-1',
    name: "Nidra Devi Sleep Oil",
    tagline: "Ancient formula for divine sleep",
    description: "Pure Ayurvedic blend of brahmi, ashwagandha, and lavender to calm your nervous system.",
    spiritualStory: "This sacred oil recipe was revealed to ancient rishis in meditation. Nidra Devi, the goddess of sleep, blessed this formula.",
    price: 799,
    originalPrice: 999,
    category: 'ayurvedic',
    image: '🛢️',
    images: ['🛢️', '🌿', '💜'],
    rating: 4.8,
    reviewCount: 421,
    badge: 'bestseller',
    benefits: [
      'Reduces sleep latency',
      'Calms Vata dosha',
      'Soothes temples & feet',
      'Natural, non-habit forming'
    ],
    ingredients: ['Brahmi', 'Ashwagandha', 'Lavender', 'Sesame oil base', 'Sandalwood'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'ayurvedic-2',
    name: "Golden Milk Sleep Blend",
    tagline: "Warm ritual for peaceful nights",
    description: "Traditional haldi doodh mix with ashwagandha, nutmeg, and saffron for deep sleep.",
    spiritualStory: "Passed down through generations, this golden elixir was Krishna's favorite evening drink. The turmeric represents his golden aura of peace.",
    price: 599,
    category: 'ayurvedic',
    image: '🥛',
    images: ['🥛', '🌟', '🧡'],
    rating: 4.9,
    reviewCount: 567,
    benefits: [
      'Reduces inflammation',
      'Warms digestive fire',
      'Promotes sound sleep',
      'Boosts immunity'
    ],
    ingredients: ['Organic turmeric', 'Ashwagandha', 'Nutmeg', 'Saffron', 'Cardamom', 'Black pepper'],
    inStock: true
  },
  {
    id: 'ayurvedic-3',
    name: "Chandrika Sleep Incense",
    tagline: "Sacred smoke for peaceful dreams",
    description: "Hand-rolled incense with jasmine, sandalwood, and chamomile for bedtime rituals.",
    spiritualStory: "Chandrika means 'moonlight'. These incense sticks are rolled by hand during the new moon, capturing the energy of new beginnings and fresh dreams.",
    price: 399,
    category: 'ayurvedic',
    image: '🪔',
    images: ['🪔', '🌙', '💨'],
    rating: 4.7,
    reviewCount: 298,
    benefits: [
      'Purifies bedroom air',
      'Creates sacred space',
      'Calms racing mind',
      'Enhances dream recall'
    ],
    ingredients: ['Jasmine flowers', 'Sandalwood powder', 'Chamomile', 'Natural bamboo'],
    inStock: true
  },

  // Sleep Kits
  {
    id: 'kit-1',
    name: "Radha's Nidra Blessing Box",
    tagline: "Complete night ritual kit",
    description: "Everything you need for divine sleep: bracelet, oil, incense, and guided meditation.",
    spiritualStory: "Curated by Ayurvedic masters and blessed by temple priests, this complete kit brings Radha's loving energy into your bedtime routine.",
    price: 2999,
    originalPrice: 4500,
    category: 'sleep-kits',
    image: '🎁',
    images: ['🎁', '💝', '✨'],
    rating: 5.0,
    reviewCount: 189,
    badge: 'featured',
    benefits: [
      'Complete sleep solution',
      'Multi-sensory relaxation',
      'Guided by tradition',
      'Beautiful gift packaging'
    ],
    materials: [
      "Radha's Rest Bracelet",
      'Nidra Devi Sleep Oil (50ml)',
      'Chandrika Incense (20 sticks)',
      '7-day guided sleep meditation',
      'Silk sleep mask',
      'Prayer card'
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'kit-2',
    name: "Krishna's Peace Sleep Set",
    tagline: "Sacred tools for restful nights",
    description: "Mala, golden milk blend, and sleep pillow spray in an elegant box.",
    spiritualStory: "This kit honors Krishna's evening rituals. Each item represents an aspect of his peaceful nature - devotion, nourishment, and divine rest.",
    price: 2499,
    originalPrice: 3200,
    category: 'sleep-kits',
    image: '💙',
    images: ['💙', '🎁', '🙏'],
    rating: 4.9,
    reviewCount: 143,
    badge: 'new',
    benefits: [
      'Full evening ritual',
      'Traditional practices',
      'Premium quality items',
      'Perfect for beginners'
    ],
    materials: [
      'Moonlight Meditation Mala',
      'Golden Milk Sleep Blend (100g)',
      'Lavender pillow spray',
      'Sleep affirmation cards',
      'Meditation guide'
    ],
    inStock: true,
    isFeatured: true
  },

  // Essential Oils
  {
    id: 'oil-1',
    name: "Vrindavan Lavender Oil",
    tagline: "Pure essence of peaceful gardens",
    description: "Organic lavender oil from sacred Vrindavan gardens, steam-distilled for purity.",
    spiritualStory: "Grown in the gardens where Radha walked, this lavender carries the essence of her peaceful presence.",
    price: 699,
    category: 'oils',
    image: '💜',
    images: ['💜', '🌿', '💧'],
    rating: 4.8,
    reviewCount: 234,
    benefits: [
      'Reduces anxiety',
      'Promotes deep sleep',
      'Soothes headaches',
      'Calms nervous system'
    ],
    ingredients: ['100% pure lavender essential oil'],
    inStock: true
  },
  {
    id: 'oil-2',
    name: "Sacred Sandalwood Blend",
    tagline: "Grounding oil for meditation",
    description: "Precious sandalwood with frankincense for spiritual connection and sleep.",
    spiritualStory: "Sandalwood is Krishna's favorite scent. This blend was used in ancient temples to prepare devotees for divine dreams.",
    price: 1299,
    category: 'oils',
    image: '🤎',
    images: ['🤎', '🪵', '✨'],
    rating: 4.9,
    reviewCount: 167,
    badge: 'bestseller',
    benefits: [
      'Deepens meditation',
      'Grounds energy',
      'Opens third eye',
      'Promotes lucid dreams'
    ],
    ingredients: ['Sandalwood essential oil', 'Frankincense', 'Jojoba carrier oil'],
    inStock: true
  },
  {
    id: 'oil-3',
    name: "Rose Garden Diffuser Oil",
    tagline: "Radha's signature fragrance",
    description: "Pure rose otto oil blended with jasmine for romantic, peaceful dreams.",
    spiritualStory: "The rose gardens of Vrindavan bloom with Radha's love. This oil captures that divine fragrance to surround you with comfort.",
    price: 999,
    category: 'oils',
    image: '🌹',
    images: ['🌹', '💗', '🌸'],
    rating: 5.0,
    reviewCount: 289,
    benefits: [
      'Opens heart chakra',
      'Promotes self-love',
      'Beautiful dream quality',
      'Soothes emotional stress'
    ],
    ingredients: ['Rose otto', 'Jasmine absolute', 'Sweet almond oil'],
    inStock: true
  }
];

export const featuredProducts = products.filter(p => p.isFeatured);
export const bestsellerProducts = products.filter(p => p.badge === 'bestseller');
export const newProducts = products.filter(p => p.badge === 'new');

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

