import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Programs from './components/Programs';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Subtle pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(30deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af),
        linear-gradient(150deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af),
        linear-gradient(30deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af),
        linear-gradient(150deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af),
        linear-gradient(60deg, #dc2626 25%, transparent 25.5%, transparent 75%, #dc2626 75%, #dc2626),
        linear-gradient(60deg, #dc2626 25%, transparent 25.5%, transparent 75%, #dc2626 75%, #dc2626)`,
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
      }}></div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <ImageCarousel />
        <Programs />
        <Results />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;