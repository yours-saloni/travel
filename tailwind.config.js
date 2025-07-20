/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cosmic-purple': '#1e1b4b',
        'cosmic-blue': '#3b82f6',
        'cosmic-violet': '#8b5cf6',
        'cosmic-cyan': '#06b6d4',
        'cosmic-emerald': '#10b981',
        'cosmic-amber': '#f59e0b',
        'space-dark': '#0f0f23',
        'space-darker': '#000000',
        'neon-blue': '#3b82f6',
        'neon-purple': '#8b5cf6',
        'neon-cyan': '#06b6d4',
        'prussian-blue': '#002147',
        'pink-light': '#f8bbd9',
        'pink-hot': '#ff1493',
        'pink-medium': '#ff69b4',
        'pink-deep': '#e91e63',
        'pink-violet': '#da70d6',
      },
      animation: {
        'cosmic-drift': 'cosmic-drift 8s ease-in-out infinite',
        'galaxy-spin': 'galaxy-spin 20s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 8s ease infinite',
        'star-twinkle': 'star-twinkle 3s ease-in-out infinite',
        'float-up': 'float-up 15s linear infinite',
        'card-glow': 'card-glow 3s ease-in-out infinite',
        'floating': 'floating 6s ease-in-out infinite',
        'bubble-float': 'bubble-float 8s ease-in-out infinite',
        'bubble-float-delayed': 'bubble-float-delayed 10s ease-in-out infinite',
        'bubble-float-slow': 'bubble-float-slow 12s ease-in-out infinite',
        'ripple-effect': 'ripple-effect 0.6s linear',
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at center, #1e1b4b 0%, #0f0f23 70%, #000000 100%)',
        'neon-gradient': 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
        'card-gradient': 'linear-gradient(135deg, rgba(30, 27, 75, 0.8), rgba(59, 130, 246, 0.1))',
        'wave-gradient': 'linear-gradient(135deg, #f8bbd9 0%, #ff69b4 25%, #da70d6 50%, #ff1493 75%, #e91e63 100%)',
      }
    },
  },
  plugins: [],
};