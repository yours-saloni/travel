import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterCategories from './components/FilterCategories';
import NewTravelMates from './components/NewTravelMates';
import TopTravelers from './components/TopTravelers';
import HotDestinations from './components/HotDestinations';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FilterCategories />
      <NewTravelMates />
      <TopTravelers />
      <HotDestinations />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;