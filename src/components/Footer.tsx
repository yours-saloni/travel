import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-prussian-blue via-prussian-blue/90 to-prussian-blue text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-pink rounded-full floating"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-gradient-pink-hot rounded-full floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-20 w-16 h-16 bg-gradient-pink-violet rounded-full floating" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating White Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Small Bubbles */}
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-white/20 rounded-full bubble-float"></div>
        <div className="absolute top-64 right-1/3 w-4 h-4 bg-white/15 rounded-full bubble-float-delayed"></div>
        <div className="absolute bottom-48 left-1/3 w-5 h-5 bg-white/25 rounded-full bubble-float-slow"></div>
        
        {/* Big Bubbles */}
        <div className="absolute top-20 right-1/4 w-10 h-10 bg-white/10 rounded-full bubble-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/5 w-12 h-12 bg-white/8 rounded-full bubble-float-delayed"></div>
        <div className="absolute top-1/2 right-1/5 w-14 h-14 bg-white/12 rounded-full bubble-float-slow"></div>
        <div className="absolute bottom-20 right-2/3 w-16 h-16 bg-white/15 rounded-full bubble-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-wave rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text">Travel Mates</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting travelers worldwide to create unforgettable shared experiences. 
              Find your perfect travel companion and explore the world together.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-pink-light hover:bg-gradient-pink-hot rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gradient-pink-hot hover:bg-gradient-pink-violet rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gradient-pink-violet hover:bg-gradient-pink rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">Find Travel Mates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">Travel Tips</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Support
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">Contact Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">Report Issues</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-hot transition-colors hover:underline hover:translate-x-1 transform duration-300 inline-block">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-pink-light rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-gray-300 group-hover:text-pink-hot transition-colors duration-300">Global Headquarters<br />San Francisco, CA</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-pink-hot rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-gray-300 group-hover:text-pink-hot transition-colors duration-300">+1 (555) 123-MATE</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gradient-pink-violet rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-gray-300 group-hover:text-pink-hot transition-colors duration-300">hello@travelmates.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2 gradient-text">Stay Updated</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-prussian-blue/70 border border-pink-500/30 rounded-l-lg focus:outline-none focus:border-pink-hot text-white placeholder-gray-400 transition-all duration-300"
                />
                <button className="gradient-wave px-4 py-2 rounded-r-lg transition-all duration-300 hover:scale-105">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-prussian-blue/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 flex items-center gap-2">
              © 2025 Travel Mates. All rights reserved. Made with 
              <Heart className="inline h-4 w-4 text-pink-hot mx-1 animate-pulse" /> 
              for travelers worldwide.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-hot transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-pink-hot transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-pink-hot transition-colors duration-300">Cookies</a>
              <a href="#" className="hover:text-pink-hot transition-colors duration-300">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;