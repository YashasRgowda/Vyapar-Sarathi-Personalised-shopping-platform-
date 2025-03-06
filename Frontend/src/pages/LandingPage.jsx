import React from 'react';
import NavBar from '../components/layout/NavBar';
import Hero from '../components/sections/Hero';
import Featured from '../components/sections/Featured';
import BlackSection from '../components/sections/BlackSection';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';
import Footer from '../components/sections/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Featured />
      <BlackSection />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;