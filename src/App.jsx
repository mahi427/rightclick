import AnimatedHeader from "./components/AnimatedHeader";
import AnimatedHero from "./components/AnimatedHero";
import AnimatedCarousel from "./components/AnimatedCarousel";
import AnimatedPrograms from "./components/AnimatedPrograms";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import VideoIntro from "./components/VideoIntro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import LoadingAnimation from "./components/LoadingAnimation";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      <LoadingAnimation />
      <AnimatedHeader />

      {/* HOME */}
      <section id="home">
        <AnimatedHero />
        <AnimatedCarousel />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* PROGRAMS */}
      <section id="programs">
        <AnimatedPrograms />
      </section>

      {/* RESULTS */}
      <section id="results">
        <Results />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* VIDEO */}
      <VideoIntro />

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
