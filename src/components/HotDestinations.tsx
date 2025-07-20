import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Users, Star, Sparkles } from 'lucide-react';

const HotDestinations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 2847,
      rating: 4.9,
      price: '$45/day',
      tags: ['Beaches', 'Culture', 'Wellness']
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 3521,
      rating: 4.8,
      price: '$85/day',
      tags: ['Tech', 'Food', 'Culture']
    },
    {
      id: 3,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 1923,
      rating: 4.9,
      price: '$65/day',
      tags: ['Romance', 'Views', 'History']
    },
    {
      id: 4,
      name: 'Iceland',
      image: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 1456,
      rating: 5.0,
      price: '$95/day',
      tags: ['Adventure', 'Nature', 'Northern Lights']
    },
    {
      id: 5,
      name: 'Dubai, UAE',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 2134,
      rating: 4.7,
      price: '$120/day',
      tags: ['Luxury', 'Shopping', 'Modern']
    },
    {
      id: 6,
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 4567,
      rating: 4.8,
      price: '$75/day',
      tags: ['Romance', 'Art', 'Fashion']
    },
    {
      id: 7,
      name: 'New York, USA',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 5234,
      rating: 4.6,
      price: '$110/day',
      tags: ['City Life', 'Culture', 'Business']
    },
    {
      id: 8,
      name: 'Maldives',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 987,
      rating: 5.0,
      price: '$200/day',
      tags: ['Luxury', 'Beaches', 'Relaxation']
    },
    {
      id: 9,
      name: 'Thailand',
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 3456,
      rating: 4.8,
      price: '$35/day',
      tags: ['Beaches', 'Food', 'Adventure']
    },
    {
      id: 10,
      name: 'Switzerland',
      image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 1678,
      rating: 4.9,
      price: '$150/day',
      tags: ['Mountains', 'Nature', 'Adventure']
    },
    {
      id: 11,
      name: 'Morocco',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 1234,
      rating: 4.7,
      price: '$40/day',
      tags: ['Culture', 'Desert', 'History']
    },
    {
      id: 12,
      name: 'Australia',
      image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 2345,
      rating: 4.8,
      price: '$90/day',
      tags: ['Wildlife', 'Beaches', 'Adventure']
    },
    {
      id: 13,
      name: 'Peru',
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 1567,
      rating: 4.9,
      price: '$50/day',
      tags: ['History', 'Adventure', 'Culture']
    },
    {
      id: 14,
      name: 'Norway',
      image: 'https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 1123,
      rating: 5.0,
      price: '$130/day',
      tags: ['Fjords', 'Nature', 'Northern Lights']
    },
    {
      id: 15,
      name: 'South Korea',
      image: 'https://images.pexels.com/photos/2376997/pexels-photo-2376997.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      travelers: 2789,
      rating: 4.8,
      price: '$60/day',
      tags: ['K-Pop', 'Food', 'Technology']
    }
  ];

  const itemsPerSlide = 5;
  const totalSlides = Math.ceil(destinations.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentDestinations = () => {
    const start = currentSlide * itemsPerSlide;
    return destinations.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="py-20 cosmic-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full star-twinkle"
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
          <div className="inline-flex items-center px-6 py-3 bg-cosmic-purple/50 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-neon-cyan/30 neon-pulse">
            <Sparkles className="w-4 h-4 mr-2 text-neon-cyan" />
            Trending Destinations
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="cosmic-text">Hot Destinations</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover the most popular cosmic destinations where travelers are connecting
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {destinations
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((destination, index) => (
                        <div
                          key={destination.id}
                          className="cosmic-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 card-glow cursor-pointer"
                          style={{animationDelay: `${index * 0.1}s`}}
                        >
                          {/* Destination Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={destination.image} 
                              alt={destination.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-purple/80 to-transparent"></div>
                            
                            {/* Price Badge */}
                            <div className="absolute top-3 right-3 bg-neon-cyan/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold">
                              {destination.price}
                            </div>
                            
                            {/* Rating */}
                            <div className="absolute top-3 left-3 flex items-center gap-1 bg-cosmic-purple/80 backdrop-blur-sm px-2 py-1 rounded-full">
                              <Star className="w-3 h-3 text-cosmic-amber fill-current" />
                              <span className="text-white text-xs font-semibold">{destination.rating}</span>
                            </div>
                          </div>

                          {/* Destination Info */}
                          <div className="p-4">
                            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                              {destination.name}
                            </h3>
                            
                            <div className="flex items-center gap-2 mb-3">
                              <Users className="w-4 h-4 text-neon-blue" />
                              <span className="text-gray-300 text-sm">{destination.travelers.toLocaleString()} travelers</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mb-4">
                              {destination.tags.map((tag, i) => (
                                <span 
                                  key={i}
                                  className="px-2 py-1 bg-neon-blue/20 text-neon-blue rounded text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Explore Button */}
                            <button className="w-full py-2 border border-neon-cyan/30 text-neon-cyan rounded-lg hover:bg-neon-cyan hover:text-white transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2">
                              <MapPin className="w-4 h-4" />
                              Explore
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-cosmic-purple/80 backdrop-blur-sm border border-neon-blue/30 rounded-full flex items-center justify-center text-white hover:bg-neon-blue transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-cosmic-purple/80 backdrop-blur-sm border border-neon-blue/30 rounded-full flex items-center justify-center text-white hover:bg-neon-blue transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-neon-cyan shadow-lg' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            <MapPin className="w-5 h-5" />
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotDestinations;