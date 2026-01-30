import React, { useEffect, useRef } from 'react';
import { Target, Users, Award, Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      const title = titleRef.current;
      
      if (hero && title) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        
        // Parallax effect on hero section
        hero.style.transform = `translateY(${rate * 0.2}px)`;
        
        // Parallax effect on title
        title.style.transform = `translateY(${rate * 0.1}px)`;
        
        // Parallax effect on stats
        statsRef.current.forEach((stat, index) => {
          if (stat) {
            const statRate = rate * (0.05 * (index + 1));
            stat.style.transform = `translateY(${statRate}px)`;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Target, value: '5.0', label: 'Rating (29 reviews)' },
    { icon: Users, value: '5000+', label: 'Students Trained' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Calendar, value: 'Since 2007', label: 'Years of Excellence' },
  ];

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 text-white"
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Mathematical Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {['π', '∑', '∫', '∞'].map((symbol, index) => (
          <div
            key={index}
            className="absolute text-6xl md:text-8xl font-bold opacity-10"
            style={{
              left: `${20 + index * 25}%`,
              top: `${30 + index * 15}%`,
              animation: `float ${6 + index * 2}s ease-in-out infinite`,
              animationDelay: `${index}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title with Parallax */}
          <motion.div 
            ref={titleRef}
            className="mb-12 parallax-element"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master <span className="text-yellow-300">Mathematics</span>
              <br />
              <span className="text-3xl md:text-5xl">9TH to 12TH Standard</span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Right Click Institute - Where Math Makes Sense! 
              Expert coaching, personalized attention, and proven results in Central Town, Jalandhar.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="px-10 py-4 bg-yellow-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Demo Class
              </motion.a>
              <motion.a
                href="#programs"
                className="px-10 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Programs
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats with Parallax */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                ref={el => statsRef.current[index] = el}
                className="parallax-element bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ transform: `translateZ(${index * 5}px)` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </motion.div>
    </section>
  );
};

export default Hero;