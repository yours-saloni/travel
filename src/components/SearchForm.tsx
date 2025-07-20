import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Filter, Sparkles } from 'lucide-react';

const SearchForm = () => {
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [travelStyle, setTravelStyle] = useState('');

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto -mt-16 relative z-20 border border-pink-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">
          <span className="gradient-text">Find Your Travel Mate</span>
        </h2>
        <p className="text-gray-600">Connect with like-minded travelers for your next adventure</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Destination */}
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Where to?</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pink-hot group-focus-within:text-pink-deep transition-colors duration-300" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-hot focus:border-transparent transition-all duration-300 hover:border-pink-medium"
            />
          </div>
        </div>

        {/* Travel Date */}
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">When?</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pink-hot group-focus-within:text-pink-deep transition-colors duration-300" />
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-hot focus:border-transparent transition-all duration-300 hover:border-pink-medium"
            />
          </div>
        </div>

        {/* Group Size */}
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pink-hot group-focus-within:text-pink-deep transition-colors duration-300" />
            <select
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-hot focus:border-transparent transition-all duration-300 appearance-none hover:border-pink-medium"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Travel Style */}
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Travel Style</label>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pink-hot group-focus-within:text-pink-deep transition-colors duration-300" />
            <select
              value={travelStyle}
              onChange={(e) => setTravelStyle(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-hot focus:border-transparent transition-all duration-300 appearance-none hover:border-pink-medium"
            >
              <option value="">Any Style</option>
              <option value="adventure">Adventure</option>
              <option value="relaxation">Relaxation</option>
              <option value="cultural">Cultural</option>
              <option value="nightlife">Nightlife</option>
              <option value="budget">Budget</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="relative gradient-wave text-white px-12 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-pink-hot opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <Search className="h-5 w-5 relative z-10" />
          <span className="relative z-10">Find Travel Mates</span>
          <Sparkles className="h-4 w-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>

      {/* Quick Filters with Gradient Backgrounds */}
      <div className="mt-8 pt-6 border-t border-pink-100">
        <p className="text-sm text-gray-600 mb-4">Popular searches:</p>
        <div className="flex flex-wrap gap-3">
          {['Backpacking Europe', 'Beach Vacation', 'City Break', 'Adventure Sports', 'Food Tours'].map((tag, index) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                index % 3 === 0 ? 'bg-gradient-pink-light text-white hover:shadow-lg' :
                index % 3 === 1 ? 'bg-gradient-pink-hot text-white hover:shadow-lg' :
                'bg-gradient-pink-violet text-white hover:shadow-lg'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;