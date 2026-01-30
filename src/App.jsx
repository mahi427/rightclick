import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import AnimatedHeader from './components/AnimatedHeader';
import AnimatedHero from './components/AnimatedHero';
import AnimatedPrograms from './components/AnimatedPrograms';
import AnimatedResults from './components/AnimatedResults';
import Testimonials from './components/Testimonials';
import VideoIntro from './components/VideoIntro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCarousel from './components/AnimatedCarousel';
import About from './components/About';
import Results from './components/Results';


// Loading Component
const LoadingScreen = () => {
  const equations = [
    "x² + y² = r²",
    "πr²",
    "a² + b² = c²",
    "e=mc²",
    "∫f(x)dx",
    "∑x/n"
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-red-50 flex flex-col items-center justify-center z-50">
      <div className="relative">
        {/* Rotating Geometric Shapes */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-24 h-24 border-4 border-blue-400 rounded-full"></div>
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 border-4 border-red-400 rounded-lg"></div>
        </motion.div>
        
        {/* Center Loader */}
        <div className="relative z-10">
          <div className="math-loader mb-8"></div>
          <h2 className="text-2xl font-bold math-text">RIGHT CLICK INSTITUTE</h2>
          <p className="text-gray-600 mt-2">Loading Mathematical Excellence...</p>
        </div>

        {/* Floating Equations */}
        <AnimatePresence>
          {equations.map((eq, index) => (
            <motion.div
              key={index}
              className="absolute mono-font text-lg text-gray-400"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              {eq}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      delay: 100
    });

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Parallax Background Layers */}
      <div className="parallax-layer" style={{ zIndex: -3 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-red-50/20"></div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedHeader />
          <AnimatedHero />
            <AnimatedCarousel />
               <About/>
          <AnimatedPrograms />
          <AnimatedResults />
           <Results />
          <Testimonials />
          <VideoIntro />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>

      {/* <LoadingAnimation /> */}
    

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-lg z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        ↑
      </motion.button>
    </div>
  );
}

export default App;