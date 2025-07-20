import React from 'react';
import { ArrowRight, Users, Clock, MapPin, Sparkles, Star } from 'lucide-react';

const VacationPackages = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Found my perfect travel buddy for a 2-week Europe trip. We had so much in common and the experience was incredible!",
      trip: "Europe Backpacking",
      gradient: "bg-gradient-pink-light"
    },
    {
      name: "Mike Chen",
      location: "Toronto, Canada", 
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "The safety verification gave me confidence to travel with someone new. Made lifelong friends through this platform!",
      trip: "Southeast Asia Adventure",
      gradient: "bg-gradient-pink-hot"
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", 
      text: "Traveling solo was scary, but finding travel mates made it the best experience of my life. Highly recommend!",
      trip: "Solo to Group Travel",
      gradient: "bg-gradient-pink-violet"
    }
  ];

  return (
    <section className="py-20 wave-bg relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full floating"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 border-2 border-white rounded-full floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-20 w-16 h-16 border-2 border-white rounded-full floating" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 left-40 w-20 h-20 border-2 border-white rounded-full floating" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-32 left-1/4 w-6 h-6 text-white/60 floating" />
        <Sparkles className="absolute top-64 right-1/3 w-4 h-4 text-white/40 floating" style={{animationDelay: '3s'}} />
        <Sparkles className="absolute bottom-48 left-1/3 w-5 h-5 text-white/50 floating" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6 border border-white/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Join 50,000+ Travel Enthusiasts
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Find Your
            <span className="block text-white drop-shadow-lg">Perfect Travel Mate?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Stop traveling alone! Connect with verified travelers, share costs, create memories, 
            and explore the world safely with like-minded companions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="relative bg-white hover:bg-gray-50 text-pink-hot px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-pink opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative z-10">Start Matching Now</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="relative border-2 border-white text-white hover:bg-white hover:text-pink-hot px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group overflow-hidden">
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <Users className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Browse Travelers</span>
            </button>
          </div>

          {/* Animated Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">2 min</div>
              <div className="text-white/80">Average Match Time</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">180+</div>
              <div className="text-white/80">Countries Covered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-white/80">Successful Matches</div>
            </div>
          </div>
        </div>

        {/* Animated Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
            <Star className="w-6 h-6" />
            What Our Travelers Say
            <Star className="w-6 h-6" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 group floating"
                style={{animationDelay: `${index * 0.5}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/80 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                <p className="text-white/90 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className={`inline-flex items-center px-3 py-1 ${testimonial.gradient} text-white rounded-full text-xs font-medium shadow-lg`}>
                  <Clock className="w-3 h-3 mr-1" />
                  {testimonial.trip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Animated CTA */}
        <div className="text-center">
          <p className="text-xl text-white mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            <strong>Join today and get your first match within 24 hours!</strong>
            <Sparkles className="w-5 h-5" />
          </p>
          <button className="relative bg-white hover:bg-gray-50 text-pink-hot px-12 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-pink opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <span className="relative z-10">Get Started - It's Free!</span>
          </button>
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-20 right-10 w-8 h-8 bg-white/30 rounded-full floating"></div>
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-white/30 rounded-full floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-60 left-1/3 w-4 h-4 bg-white/30 rounded-full floating" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default VacationPackages;