import React from 'react';
import AnimatedHeader from './components/AnimatedHeader';
import AnimatedHero from './components/AnimatedHero';
import AnimatedCarousel from './components/AnimatedCarousel';
import AnimatedPrograms from './components/AnimatedPrograms';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import VideoIntro from './components/VideoIntro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <LoadingAnimation />
      <AnimatedHeader />
      <AnimatedHero />
      <AnimatedCarousel />
      <About/>
      <AnimatedPrograms />
      <Results />
      <Testimonials />
      <VideoIntro />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;