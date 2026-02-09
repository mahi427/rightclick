import React from "react";

import LoadingAnimation from "./components/LoadingAnimation";
import AnimatedHeader from "./components/AnimatedHeader";
import AnimatedHero from "./components/AnimatedHero";
import AnimatedCarousel from "./components/AnimatedCarousel";
import About from "./components/About";
import AnimatedPrograms from "./components/AnimatedPrograms";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import VideoIntro from "./components/VideoIntro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* 1. Loading */}
      <LoadingAnimation />

      {/* 2. Header */}
      <AnimatedHeader />

      {/* 3. Hero */}
      <section id="home">
        <AnimatedHero />
      </section>

      {/* 4. Carousel */}
      <AnimatedCarousel />

      {/* 5. About */}
      <section id="about">
        <About />
      </section>

      {/* 6. Programs */}
      <section id="programs">
        <AnimatedPrograms />
      </section>

      {/* 7. Results */}
      <section id="results">
        <Results />
      </section>

      {/* 8. Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* 9. Video */}
      <VideoIntro />

      {/* 10. Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* 11. Footer */}
      <Footer />

    </div>
  );
}

export default App;
