import React from 'react';

// Import all your section components
import AnimatedHero from '../components/AnimatedHero';
import AnimatedCarousel from '../components/AnimatedCarousel';
import About from '../components/About';
import AnimatedPrograms from '../components/AnimatedPrograms';
import Results from '../components/Results';

import VideoIntro from '../components/VideoIntro';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

// NEW IMPORTS - Add these
import QuickClassAccess from '../components/QuickClassAccess';
import TopperHighlights from '../components/TopperHighlights';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Your existing hero sections */}
      <AnimatedHero />
      <AnimatedCarousel />
      
      {/* NEW SECTIONS - Place them where you want */}
      <QuickClassAccess />
      <TopperHighlights />
      
      {/* Rest of your existing sections */}
      <About />
      <AnimatedPrograms />
      <Results />
      <VideoIntro />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;