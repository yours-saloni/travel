import React from 'react';
import { Shield, Users, MapPin, MessageCircle, Star, Heart, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Smart Matching',
      description: 'Our AI algorithm matches you with compatible travel companions based on interests, budget, and travel style.',
      image: '/A12.jpg',
      gradient: 'bg-gradient-pink-light'
    },
    {
      icon: Shield,
      title: 'Verified & Safe',
      description: 'Every profile is ID-verified and background-checked for your safety and peace of mind.',
      image: '/a14 copy.jpg',
      gradient: 'bg-gradient-pink-hot'
    },
    {
      icon: MapPin,
      title: 'Plan Together',
      description: 'Collaborative trip planning tools, shared itineraries, and expense splitting made simple.',
      image: '/a13.jpg',
      gradient: 'bg-gradient-pink-violet'
    },
    {
      icon: MessageCircle,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and in-app messaging to keep you connected.',
      image: '/a15 copy.jpg',
      gradient: 'bg-gradient-pink'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-pink rounded-full floating"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-gradient-pink-hot rounded-full floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-20 w-16 h-16 bg-gradient-pink-violet rounded-full floating" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-pink-light text-white rounded-full text-sm font-medium mb-4 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose Travel Mates
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Better <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Join thousands of travelers who've discovered the joy of shared adventures. 
            Our platform makes it safe, easy, and fun to find your perfect travel companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={index}
                className="group hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className={`relative overflow-hidden rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${feature.gradient} text-white`}>
                  {/* Feature Image with Overlay */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-500 rounded-2xl"></div>
                  </div>
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:scale-105 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="leading-relaxed mb-6 text-white/90">
                    {feature.description}
                  </p>
                  
                  {/* Animated Rating */}
                  <div className="flex justify-center items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform duration-300" 
                        style={{transitionDelay: `${i * 100}ms`}}
                      />
                    ))}
                    <span className="text-sm ml-2 font-medium text-white/90">5.0</span>
                  </div>

                  {/* Floating Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 opacity-50 floating"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/10 opacity-30 floating" style={{animationDelay: '1s'}}></div>
                  
                  {/* Ripple Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ripple-effect"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <Heart className="w-5 h-5 text-pink-hot group-hover:animate-pulse" />
              <span className="font-medium">50,000+ Happy Travelers</span>
            </div>
            <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 text-pink-deep group-hover:animate-pulse" />
              <span className="font-medium">100% Verified Profiles</span>
            </div>
            <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <Star className="w-5 h-5 text-pink-violet group-hover:animate-pulse" />
              <span className="font-medium">4.9/5 Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;