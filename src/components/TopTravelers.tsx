import React from 'react';
import { Star, MapPin, Award, Shield } from 'lucide-react';

const TopTravelers = () => {
  const topTravelers = [
    {
      id: 1,
      name: 'Elena Vasquez',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      countriesVisited: 47,
      rating: 5.0,
      reviews: 156,
      badges: ['Verified', 'Super Host', 'Explorer'],
      specialty: 'Cultural Immersion',
      totalTrips: 89
    },
    {
      id: 2,
      name: 'James Wilson',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      countriesVisited: 52,
      rating: 4.9,
      reviews: 203,
      badges: ['Verified', 'Adventure Pro', 'Guide'],
      specialty: 'Extreme Sports',
      totalTrips: 112
    },
    {
      id: 3,
      name: 'Sophia Kim',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      countriesVisited: 38,
      rating: 4.8,
      reviews: 134,
      badges: ['Verified', 'Foodie', 'Local Expert'],
      specialty: 'Culinary Tours',
      totalTrips: 67
    },
    {
      id: 4,
      name: 'Alex Rivera',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      countriesVisited: 41,
      rating: 4.9,
      reviews: 178,
      badges: ['Verified', 'Photographer', 'Nature Lover'],
      specialty: 'Wildlife Photography',
      totalTrips: 95
    },
    {
      id: 5,
      name: 'Maya Patel',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      countriesVisited: 33,
      rating: 5.0,
      reviews: 142,
      badges: ['Verified', 'Wellness Guru', 'Yoga Master'],
      specialty: 'Spiritual Journeys',
      totalTrips: 78
    },
    {
      id: 6,
      name: 'David Chen',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      countriesVisited: 45,
      rating: 4.8,
      reviews: 167,
      badges: ['Verified', 'Tech Nomad', 'City Explorer'],
      specialty: 'Urban Adventures',
      totalTrips: 103
    }
  ];

  return (
    <section className="py-20 cosmic-bg relative">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple rounded-full star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="cosmic-text">Top Cosmic Travelers</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Meet our most experienced and trusted travel companions across the galaxy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topTravelers.map((traveler, index) => (
            <div
              key={traveler.id}
              className="cosmic-card p-6 rounded-2xl group hover:scale-105 transition-all duration-500 card-glow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Header with Rank */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cosmic-amber rounded-full flex items-center justify-center">
                    <span className="text-cosmic-purple font-bold text-sm">#{index + 1}</span>
                  </div>
                  <Award className="w-5 h-5 text-cosmic-amber" />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-cosmic-amber fill-current" />
                  <span className="text-white font-semibold">{traveler.rating}</span>
                </div>
              </div>

              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={traveler.image} 
                    alt={traveler.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-neon-blue group-hover:border-neon-purple transition-colors duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-neon-blue rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{traveler.name}</h3>
                  <p className="text-neon-blue text-sm">{traveler.specialty}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold cosmic-text">{traveler.countriesVisited}</div>
                  <div className="text-gray-400 text-xs">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold cosmic-text">{traveler.totalTrips}</div>
                  <div className="text-gray-400 text-xs">Total Trips</div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {traveler.badges.map((badge, i) => (
                  <span 
                    key={i}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      badge === 'Verified' ? 'bg-neon-blue/20 text-neon-blue' :
                      badge === 'Super Host' ? 'bg-cosmic-emerald/20 text-cosmic-emerald' :
                      'bg-neon-purple/20 text-neon-purple'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(traveler.rating) ? 'text-cosmic-amber fill-current' : 'text-gray-600'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">({traveler.reviews} reviews)</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 neon-button text-white py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm">
                  View Profile
                </button>
                <button className="flex-1 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
            View All Top Travelers
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopTravelers;