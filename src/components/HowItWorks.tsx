import React from 'react';
import { UserPlus, Settings, Users, Sparkles, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: 'Create Your Profile',
      description: 'Set up your cosmic travel profile with your interests, travel style, and destinations you want to explore.',
      color: 'neon-blue',
      gradient: 'from-neon-blue to-cosmic-cyan'
    },
    {
      id: 2,
      icon: Settings,
      title: 'Set Your Preferences',
      description: 'Add your trip details, budget, dates, and the type of travel companion you\'re looking for.',
      color: 'neon-purple',
      gradient: 'from-neon-purple to-cosmic-violet'
    },
    {
      id: 3,
      icon: Users,
      title: 'Connect & Explore',
      description: 'Match with compatible travelers, chat, plan your adventure, and embark on unforgettable journeys together.',
      color: 'neon-cyan',
      gradient: 'from-neon-cyan to-cosmic-emerald'
    }
  ];

  return (
    <section className="py-20 cosmic-bg relative">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-purple rounded-full star-twinkle"
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
          <div className="inline-flex items-center px-6 py-3 bg-cosmic-purple/50 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-neon-purple/30 neon-pulse">
            <Sparkles className="w-4 h-4 mr-2 text-neon-purple" />
            Simple & Secure Process
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="cosmic-text">How It Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Join the cosmic community in three simple steps and start your intergalactic adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-neon-blue/50 to-neon-purple/50 transform translate-x-4 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-neon-blue" />
                    </div>
                  </div>
                )}

                <div className="cosmic-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 card-glow relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Action Button */}
                  <button className={`w-full py-3 border border-${step.color}/30 text-${step.color} rounded-lg hover:bg-${step.color} hover:text-white transition-all duration-300 font-medium`}>
                    Get Started
                  </button>

                  {/* Floating Decorative Elements */}
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full bg-${step.color}/20 opacity-50 floating`}></div>
                  <div className={`absolute bottom-4 left-4 w-4 h-4 rounded-full bg-${step.color}/20 opacity-30 floating`} style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="cosmic-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your <span className="cosmic-text">Cosmic Journey?</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of travelers who have found their perfect travel companions through our platform.
            </p>
            <button className="neon-button text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 mx-auto">
              <UserPlus className="w-5 h-5" />
              Create Your Profile Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;