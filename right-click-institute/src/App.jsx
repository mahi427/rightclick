import React from 'react';
import AnimatedHeader from './components/AnimatedHeader';
import AnimatedHero from './components/AnimatedHero';
import AnimatedCarousel from './components/AnimatedCarousel';
import InteractiveElements from './components/InteractiveElements';
import AnimatedPrograms from './components/AnimatedPrograms';
import Results from './components/Results';
import AnimatedTestimonials from './components/AnimatedTestimonials';
import VideoIntro from './components/VideoIntro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Loading Animation */}
      <LoadingAnimation />
      
      {/* Animated Header */}
      <AnimatedHeader />
      
      {/* Animated Hero Section with Numbers */}
      <AnimatedHero />
      
      {/* Animated Carousel */}
      <AnimatedCarousel />
      
      {/* Interactive Elements with Hover Effects */}
      <InteractiveElements />
      
      {/* Animated Programs with Scroll Animations */}
      <AnimatedPrograms />
      
      {/* Results with Animated Numbers */}
      <Results />
      
      {/* Animated Testimonials with Slider */}
      <AnimatedTestimonials />
      
      {/* Video Intro */}
      <VideoIntro />
      
      {/* Contact with Animated CTAs */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;