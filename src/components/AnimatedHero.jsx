import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Brain, Trophy, Users, Target, Sparkles, Zap } from 'lucide-react';


const AnimatedHero = () => {
  const [counters, setCounters] = useState({
    students: 0,
    success: 0,
    perfect: 0,
    years: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        students: 5000,
        success: 98,
        perfect: 12,
        years: 17
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Users, value: counters.students, label: 'Students Trained', suffix: '+', color: 'blue' },
    { icon: Trophy, value: counters.success, label: 'Success Rate', suffix: '%', color: 'green' },
    { icon: Target, value: counters.perfect, label: '100/100 Scores', suffix: '', color: 'yellow' },
    { icon: Calculator, value: counters.years, label: 'Years Experience', suffix: '+', color: 'red' },
  ];

  const floatingIcons = [
    { icon: 'π', top: '10%', left: '5%', delay: 0 },
    { icon: '∑', top: '20%', right: '10%', delay: 2 },
    { icon: '∞', bottom: '30%', left: '15%', delay: 4 },
    { icon: 'θ', top: '40%', right: '20%', delay: 6 },
    { icon: 'Δ', bottom: '20%', left: '85%', delay: 8 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden math-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Mathematical Symbols */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl md:text-6xl font-bold text-blue-400/20"
            style={{ top: item.top, left: item.left, right: item.right }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Animated Graphs in Background */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10" viewBox="0 0 800 200">
          <motion.path
            d="M0,150 Q200,50 400,150 T800,50"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            className="graph-line"
          />
          <motion.path
            d="M0,100 Q200,200 400,100 T800,200"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            className="graph-line"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
              <Zap className="w-8 h-8 text-blue-500 animate-pulse" />
              <Sparkles className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500">
  RIGHT CLICK
              </span>
              
              <br />
              <span className="text-3xl md:text-5xl lg:text-5xl text-gray-700 mt-4 block">
                INSTITUTE FOR MATHEMATICS
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Where <span className="font-bold text-blue-600">Numbers</span> Become{' '}
              <span className="font-bold text-red-600">Solutions</span>, and{' '}
              <span className="font-bold text-green-600">Problems</span> Turn into{' '}
              <span className="font-bold text-purple-600">Opportunities</span>
            </motion.p>
          </motion.div>

          {/* Animated Stats Counter */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 text-center backdrop-blur-lg shadow-xl"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-16 h-16 rounded-full bg-${stat.color}-100 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <span className="counter" data-target={stat.value}>
                    {stat.value}
                  </span>
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Call to Action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="inline-flex flex-col sm:flex-row gap-6">
              <motion.a
                href="#contact"
                className="cta-pulse relative px-10 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full font-bold text-lg shadow-2xl group overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Brain className="w-6 h-6 mr-3" />
                  Book Free Demo Class
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="#programs"
                className="px-10 py-4 bg-white text-gray-800 rounded-full font-bold text-lg shadow-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 mr-3" />
                  View Our Programs
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
            
            {/* Animated Quote */}
            <motion.div 
              className="mt-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
                <motion.div
                  className="text-lg text-gray-700 italic text-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  "Mathematics is not about numbers, equations, computations, or algorithms: 
                  it is about understanding." – William Paul Thurston
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-blue-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;