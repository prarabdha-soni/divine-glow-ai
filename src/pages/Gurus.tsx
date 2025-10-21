import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Star, Users, MapPin, ArrowLeft, Search, Filter } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { ModernKrishnaBackground } from '@/components/ModernKrishnaBackground';
import { FullScreenVideoPlayer } from '@/components/FullScreenVideoPlayer';
import { gurus } from '@/data/gurus';

const Gurus = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);
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
          <h2 className="text-xl calm-heading calm-text mb-4">Featured Gurus</h2>
          <div className="grid grid-cols-1 gap-4">
            {featuredGurus.map((guru) => (
              <div key={guru.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {guru.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg calm-heading calm-text">{guru.name}</h3>
                      <span className="px-2 py-1 bg-amber-400/20 text-amber-300 text-xs rounded-full font-light">
                        Featured
                      </span>
                    </div>
                    <p className="text-sm calm-text-muted mb-1 calm-body">{guru.title}</p>
                    <p className="text-xs calm-text-subtle calm-caption mb-2">{guru.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users size={12} className="calm-text-subtle" />
                        <span className="text-xs calm-text-subtle calm-caption">{guru.followers}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} className="calm-text-subtle" />
                        <span className="text-xs calm-text-subtle calm-caption">{guru.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs calm-text-subtle calm-caption">{guru.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo({
                    url: guru.videoUrl,
                    title: guru.name,
                    description: guru.description
                  })}
                  className="w-full h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white font-light hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
                >
                  <Play size={20} className="mr-2" />
                  Watch Teaching
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* All Gurus */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl calm-heading calm-text">All Gurus</h2>
            <span className="text-sm calm-text-subtle calm-caption">{filteredGurus.length} gurus</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {filteredGurus.map((guru) => (
              <div key={guru.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    {guru.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg calm-heading calm-text mb-1">{guru.name}</h3>
                    <p className="text-sm calm-text-muted mb-1 calm-body">{guru.title}</p>
                    <p className="text-xs calm-text-subtle calm-caption mb-2">{guru.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full font-light">
                        {guru.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Users size={12} className="calm-text-subtle" />
                        <span className="text-xs calm-text-subtle calm-caption">{guru.followers}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs calm-text-subtle calm-caption">{guru.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo({
                    url: guru.videoUrl,
                    title: guru.name,
                    description: guru.description
                  })}
                  className="w-full h-10 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white font-light hover:bg-white/20 transition-all duration-300"
                >
                  <Play size={16} className="mr-2" />
                  Watch Video
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Full Screen Video Player */}
      {selectedVideo && (
        <FullScreenVideoPlayer
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </div>
  );
};

export default Gurus;
