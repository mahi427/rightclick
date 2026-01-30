import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Target, Users, Trophy, Sparkles, ChevronDown } from 'lucide-react';

const AnimatedHero = () => {
  const [counts, setCounts] = useState({
    students: 0,
    successRate: 0,
    perfectScores: 0,
    years: 0
  });

  const finalCounts = {
    students: 5000,
    successRate: 98,
    perfectScores: 12,
    years: 17
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        students: prev.students < finalCounts.students ? prev.students + 100 : finalCounts.students,
        successRate: prev.successRate < finalCounts.successRate ? prev.successRate + 2 : finalCounts.successRate,
        perfectScores: prev.perfectScores < finalCounts.perfectScores ? prev.perfectScores + 1 : finalCounts.perfectScores,
        years: prev.years < finalCounts.years ? prev.years + 1 : finalCounts.years
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20 flex items-center">
      {/* Animated Background Particles */}
      {/* <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-red-400/20"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 200 - 100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div> */}

      {/* Geometric Shapes Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-blue-400/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity }
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-red-400/30 rounded-lg"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-full mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">SINCE 2007</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 math-text"
          >
            RIGHT CLICK INSTITUTE
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-700 mb-8"
          >
            Where Mathematics Comes <span className="text-gradient font-bold">ALIVE</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Premier coaching for 9<sup>TH</sup> to 12<sup>TH</sup> standard students. 
            Specializing in Board Exams & JEE (IIT) Mathematics preparation.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: Users, value: counts.students, label: 'Students Trained', suffix: '+', color: 'blue' },
              { icon: Trophy, value: counts.successRate, label: 'Success Rate', suffix: '%', color: 'green' },
              { icon: Target, value: counts.perfectScores, label: '100/100 Scores', suffix: '', color: 'red' },
              { icon: Calculator, value: counts.years, label: 'Years of Excellence', suffix: '+', color: 'yellow' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-12 h-12 rounded-full bg-${stat.color}-100 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className="text-3xl font-bold mb-2">
                  {stat.value}
                  <span className={`text-${stat.color}-600`}>{stat.suffix}</span>
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full font-bold text-lg shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">🎓 Book Free Demo Class</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            <motion.a
              href="#programs"
              className="px-8 py-4 bg-white text-gray-800 rounded-full font-bold text-lg shadow-lg border-2 border-blue-600 hover:border-red-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              📚 View Our Programs
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
            <p className="text-gray-500 mt-2">Scroll to Explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Mathematical Elements */}
      <div className="absolute bottom-10 left-10">
        <motion.div
          className="text-4xl mono-font opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          π
        </motion.div>
      </div>
      <div className="absolute top-10 right-10">
        <motion.div
          className="text-4xl mono-font opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          ∞
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;