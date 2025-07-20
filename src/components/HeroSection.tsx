import React from 'react';
import { ArrowRight, Play, Sparkles, Users, MapPin, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen cosmic-bg overflow-hidden">
      {/* Animated Cosmic Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Travel Icons */}
        <div className="floating-element top-20 left-20 w-16 h-16 cosmic-drift">
          <MapPin className="w-full h-full text-neon-blue" />
        </div>
        <div className="floating-element top-40 right-32 w-12 h-12 cosmic-drift" style={{animationDelay: '2s'}}>
          <Calendar className="w-full h-full text-neon-purple" />
        </div>
        <div className="floating-element bottom-40 left-40 w-20 h-20 cosmic-drift" style={{animationDelay: '4s'}}>
          <Users className="w-full h-full text-neon-cyan" />
        </div>
        
        {/* Galaxy Spinning Elements */}
        <div className="absolute top-32 right-20 w-32 h-32 border-2 border-neon-blue/30 rounded-full galaxy-spin"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-neon-purple/30 rounded-full galaxy-spin" style={{animationDelay: '10s'}}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-6 py-3 bg-cosmic-purple/50 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-neon-blue/30 neon-pulse">
              <Sparkles className="w-4 h-4 mr-2 text-neon-blue" />
              Find Your Perfect Travel Companion
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="cosmic-text block">Explore the</span>
              <span className="text-white block">Universe</span>
              <span className="neon-text block">Together</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Connect with cosmic travelers across the galaxy. Share adventures, 
              split costs, and create unforgettable memories among the stars.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="neon-button text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                Find a Mate
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                <Play className="h-5 w-5" />
                Join Now
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-3xl font-bold cosmic-text mb-1 group-hover:scale-110 transition-transform duration-300">50K+</div>
                <div className="text-gray-400 text-sm">Active Travelers</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold cosmic-text mb-1 group-hover:scale-110 transition-transform duration-300">1.2K+</div>
                <div className="text-gray-400 text-sm">Trips Planned</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold cosmic-text mb-1 group-hover:scale-110 transition-transform duration-300">180+</div>
                <div className="text-gray-400 text-sm">Countries Explored</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 cosmic-drift">
              <img 
                src="/a16.jpg" 
                alt="Cosmic travelers exploring the universe" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-neon-blue/30"
              />
              
              {/* Floating Profile Cards with Neon Effects */}
              <div className="absolute -top-6 -left-6 cosmic-card p-4 rounded-xl shadow-xl cosmic-drift border border-neon-blue/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 neon-button rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Alex</div>
                    <div className="text-sm text-neon-blue">Mars Colony</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 cosmic-card p-4 rounded-xl shadow-xl cosmic-drift border border-neon-purple/50" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neon-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah</div>
                    <div className="text-sm text-neon-purple">Jupiter Station</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Background Decoration */}
            <div className="absolute inset-0 bg-neon-blue/20 rounded-2xl transform rotate-6 -z-10 opacity-30 cosmic-drift" style={{animationDelay: '1s'}}></div>
            <div className="absolute inset-0 bg-neon-purple/20 rounded-2xl transform -rotate-3 -z-20 opacity-20 cosmic-drift" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#cosmic-gradient)"/>
          <defs>
            <linearGradient id="cosmic-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;