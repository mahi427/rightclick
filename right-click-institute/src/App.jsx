import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Programs from './components/Programs';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import VideoIntro from './components/VideoIntro';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Carousel />
      {/* <Carousel /> */}
      <Programs />
      <Results />
      <Testimonials />
      <VideoIntro />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;