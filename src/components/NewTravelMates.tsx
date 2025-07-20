import React from 'react';
import { MapPin, Calendar, Heart, MessageCircle, Star } from 'lucide-react';

const NewTravelMates = () => {
  const travelMates = [
    {
      id: 1,
      name: 'Luna Rodriguez',
      age: 28,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      destination: 'Bali, Indonesia',
      dates: 'Mar 15-30, 2025',
      interests: ['Yoga', 'Photography', 'Local Culture'],
      tripType: 'Wellness Retreat',
      rating: 4.9,
      verified: true
    },
    {
      id: 2,
      name: 'Marcus Chen',
      age: 32,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      destination: 'Tokyo, Japan',
      dates: 'Apr 5-20, 2025',
      interests: ['Tech', 'Food', 'Gaming'],
      tripType: 'City Explorer',
      rating: 4.8,
      verified: true
    },
    {
      id: 3,
      name: 'Aria Thompson',
      age: 25,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      destination: 'Iceland',
      dates: 'May 10-25, 2025',
      interests: ['Hiking', 'Northern Lights', 'Adventure'],
      tripType: 'Adventure Quest',
      rating: 5.0,
      verified: true
    },
    {
      id: 4,
      name: 'Diego Santos',
      age: 29,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      destination: 'Santorini, Greece',
      dates: 'Jun 1-15, 2025',
      interests: ['History', 'Wine', 'Sunset Views'],
      tripType: 'Luxury Escape',
      rating: 4.7,
      verified: true
    }
  ];

  return (
    <section className="py-20 cosmic-bg relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-neon-purple/20 rounded-full cosmic-drift"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 border border-neon-blue/20 rounded-full cosmic-drift" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="cosmic-text">New Travel Mates</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Fresh faces looking for cosmic companions to explore the universe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelMates.map((mate, index) => (
            <div
              key={mate.id}
              className="cosmic-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 card-glow"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Profile Image */}
              <div className="relative">
                <img 
                  src={mate.image} 
                  alt={mate.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-purple/80 to-transparent"></div>
                
                {/* Verified Badge */}
                {mate.verified && (
                  <div className="absolute top-3 right-3 bg-neon-blue/90 backdrop-blur-sm rounded-full p-1">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                )}
                
                {/* Like Button */}
                <button className="absolute top-3 left-3 w-8 h-8 bg-cosmic-purple/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-neon-purple transition-colors duration-300">
                  <Heart className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-lg">{mate.name}</h3>
                  <span className="text-gray-400 text-sm">{mate.age}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-neon-blue" />
                  <span className="text-gray-300 text-sm">{mate.destination}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-neon-purple" />
                  <span className="text-gray-300 text-sm">{mate.dates}</span>
                </div>

                {/* Trip Type */}
                <div className="inline-flex items-center px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-xs font-medium mb-4">
                  {mate.tripType}
                </div>

                {/* Interests */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {mate.interests.map((interest, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-cosmic-purple/50 text-gray-300 rounded text-xs"
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(mate.rating) ? 'text-cosmic-amber fill-current' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">{mate.rating}</span>
                </div>

                {/* Connect Button */}
                <button className="w-full neon-button text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
            View All Travel Mates
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewTravelMates;