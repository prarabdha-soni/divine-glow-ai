import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, MapPin, ArrowLeft, Search, Sparkles } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ModernKrishnaBackground } from '@/components/ModernKrishnaBackground';
import { gurus } from '@/data/gurus';

const Gurus = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Bhakti', 'Vedanta', 'Yoga', 'Kirtan', 'Philosophy', 'Music', 'Storytelling'];

  const filteredGurus = gurus.filter(guru => {
    const matchesSearch = guru.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guru.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guru.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || guru.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredGurus = gurus.filter(guru => guru.featured);

  return (
    <div className="min-h-screen krishna-bg">
      {/* Modern Krishna Background */}
      <ModernKrishnaBackground />
      
      {/* Header */}
      <div className="relative z-10 px-6 pt-16 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="w-10 h-10 krishna-gradient rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🕉️</span>
            </div>
            <h1 className="text-2xl calm-heading krishna-text">Spiritual Gurus</h1>
          </div>
          <Search size={24} className="krishna-text-subtle" />
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search gurus, teachings, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white placeholder-white/50 px-4 py-3 pl-12 calm-body krishna-text"
            />
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 krishna-text-subtle" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-light transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Gurus */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={20} className="text-amber-400" />
            <h2 className="text-xl calm-heading calm-text">Featured Spiritual Masters</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {featuredGurus.map((guru) => (
              <div key={guru.id} className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-amber-400/50 transition-all duration-300">
                {/* Guru Image Header */}
                <div className="relative h-48 bg-gradient-to-br from-amber-500/20 to-orange-600/20">
                  <img 
                    src={guru.imageUrl} 
                    alt={guru.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <span className="absolute top-4 right-4 px-3 py-1.5 bg-amber-400/90 backdrop-blur-sm text-white text-xs rounded-full font-medium shadow-lg">
                    ✨ Featured
                  </span>
                </div>
                
                {/* Guru Info */}
                <div className="p-6">
                  <h3 className="text-xl calm-heading calm-text mb-2">{guru.name}</h3>
                  <p className="text-sm calm-text-muted mb-2 calm-body font-medium">{guru.title}</p>
                  <p className="text-sm calm-text-subtle calm-caption mb-3 leading-relaxed">{guru.description}</p>
                  
                  {/* Speciality Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">
                      <Sparkles size={12} />
                      {guru.speciality}
                    </span>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-blue-400" />
                      <span className="text-sm calm-text calm-caption font-medium">{guru.followers}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-emerald-400" />
                      <span className="text-sm calm-text-subtle calm-caption">{guru.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 ml-auto">
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                      <span className="text-sm calm-text calm-caption font-medium">{guru.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Gurus */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl calm-heading calm-text">All Spiritual Masters</h2>
            <span className="text-sm calm-text-subtle calm-caption bg-white/10 px-3 py-1 rounded-full">{filteredGurus.length} masters</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {filteredGurus.map((guru) => (
              <div key={guru.id} className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                {/* Guru Image */}
                <div className="relative aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                  <img 
                    src={guru.imageUrl} 
                    alt={guru.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm text-white/90 text-xs rounded-full font-light border border-white/20">
                    {guru.category}
                  </span>
                  
                  {/* Rating */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs text-white font-medium">{guru.rating}</span>
                  </div>
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm calm-heading text-white mb-0.5 font-semibold leading-tight">{guru.name}</h3>
                    <p className="text-xs text-white/80 calm-caption truncate">{guru.title}</p>
                  </div>
                </div>
                
                {/* Footer Info */}
                <div className="p-3 bg-white/5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <Users size={12} className="text-blue-400" />
                      <span className="calm-text-subtle calm-caption">{guru.followers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={10} className="text-emerald-400" />
                      <span className="calm-text-subtle calm-caption text-[10px] truncate max-w-[80px]">{guru.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Gurus;
