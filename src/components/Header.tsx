import React from 'react';
import { Menu, User, Bell, Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-50 bg-cosmic-purple/90 backdrop-blur-md border-b border-neon-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 neon-button rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden">
                  <Rocket className="text-white w-5 h-5 relative z-10" />
                </div>
                <span className="cosmic-text font-extrabold text-xl">
                  Travel Mates
                </span>
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-neon-blue hover:text-neon-purple px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cosmic-purple/50 neon-text">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cosmic-purple/50">
                Find Mates
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cosmic-purple/50">
                Destinations
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cosmic-purple/50">
                Community
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cosmic-purple/50">
                About
              </a>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-300 hover:text-neon-blue cursor-pointer transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-purple rounded-full neon-pulse"></div>
            </div>
            <User className="h-6 w-6 text-gray-300 hover:text-neon-blue cursor-pointer transition-colors duration-300" />
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;