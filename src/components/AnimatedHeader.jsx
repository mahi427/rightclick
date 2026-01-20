import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calculator, Brain, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'Programs', href: '#programs', icon: '📚' },
    { name: 'Results', href: '#results', icon: '🏆' },
    { name: 'Testimonials', href: '#testimonials', icon: '⭐' },
    { name: 'Contact', href: '#contact', icon: '📞' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-xl' : 'bg-white shadow-lg'}`}
    >
      <div className="container mx-auto px-4 py-3">
        <motion.div 
          className="flex justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo with Animation */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg blur opacity-30"></div>
              <div className="relative text-left p-2 bg-white rounded-lg">
                <div className="flex flex-col">
                  <motion.div 
                    className="flex items-baseline"
                    animate={{ rotate: [0, 1, -1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl font-bold text-blue-800">RIGHT</span>
                    <span className="text-2xl font-bold text-red-600 ml-1">CLICK</span>
                  </motion.div>
                  <div className="text-xs text-gray-600 mt-[-2px]">INSTITUTE FOR MATHEMATICS</div>
                </div>
              </div>
            </div>
            
            {/* Animated Icons */}
            <motion.div 
              className="hidden md:flex space-x-2 ml-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Calculator className="w-6 h-6 text-blue-600" />
              <Brain className="w-6 h-6 text-red-600" />
              <Award className="w-6 h-6 text-yellow-600" />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation with Hover Effects */}
          <nav className="hidden md:flex space-x-4 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative group"
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-red-50 hover:from-blue-100 hover:to-red-100 transition-all duration-300">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.name}</span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 group-hover:w-3/4 transition-all duration-300"></div>
              </motion.a>
            ))}
            
            {/* Animated Phone Button */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg blur opacity-30"></div>
              <a href="tel:9888144156" className="relative flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow duration-300">
                <Phone className="w-5 h-5" />
                <span>98881 44156</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-white rounded-full ml-1"
                ></motion.div>
              </a>
            </motion.div>
          </nav>

          {/* Mobile Menu Button with Animation */}
          <motion.button
            className="md:hidden relative w-12 h-12 rounded-lg bg-gradient-to-r from-blue-50 to-red-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700 mx-auto" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-700 mx-auto" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-red-50 hover:from-blue-100 hover:to-red-100 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </motion.a>
                ))}
                <motion.a
                  href="tel:9888144156"
                  className="flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg font-bold mt-4"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>98881 44156</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Animated Progress Bar */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </motion.header>
  );
};

export default AnimatedHeader;