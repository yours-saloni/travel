import React from 'react';
import { User, Backpack, Crown, Users, Laptop, Mountain, Heart, Camera } from 'lucide-react';

const FilterCategories = () => {
  const categories = [
    { icon: User, label: 'Solo Travelers', count: '2.1K', color: 'neon-blue' },
    { icon: Backpack, label: 'Backpackers', count: '1.8K', color: 'neon-purple' },
    { icon: Crown, label: 'Luxury Travelers', count: '950', color: 'neon-cyan' },
    { icon: Heart, label: 'Female Only', count: '1.5K', color: 'cosmic-emerald' },
    { icon: Laptop, label: 'Digital Nomads', count: '2.3K', color: 'cosmic-amber' },
    { icon: Mountain, label: 'Adventure Seekers', count: '3.2K', color: 'neon-blue' },
    { icon: Camera, label: 'Photography Tours', count: '890', color: 'neon-purple' },
    { icon: Users, label: 'Group Travel', count: '1.2K', color: 'neon-cyan' },
  ];

  return (
    <section className="py-20 cosmic-bg relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="cosmic-text">Discover Your</span>
            <span className="text-white block">Travel Tribe</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Find travelers who match your style and interests across the cosmos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={index}
                className="cosmic-card p-6 rounded-2xl text-center cursor-pointer group hover:scale-105 transition-all duration-300 card-glow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center neon-button group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white font-semibold mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {category.label}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">
                  {category.count} active
                </p>
                
                <button className="w-full py-2 border border-neon-blue/30 text-neon-blue rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300 text-sm font-medium">
                  Explore
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FilterCategories;