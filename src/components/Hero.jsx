import React, { useEffect, useState } from 'react';
import { Target, Users, Award, Calendar, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
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
    { icon: Target, value: '5.0', label: 'Rating (29 reviews)' },
    { icon: Users, value: '5000+', label: 'Students Trained' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Calendar, value: 'Since 2007', label: 'Years of Excellence' },
  ];

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Master Mathematics from 9TH to 12TH Standard
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Right Click Institute - Where Math Makes Sense! Expert coaching, personalized attention, 
            and proven results in Central Town, Jalandhar.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors shadow-lg"
            >
              Book Free Demo Class
            </a>
            <a
              href="#programs"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Our Programs
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;