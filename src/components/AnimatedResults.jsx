import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, TrendingUp, BarChart, Target, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';


const AnimatedResults = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counts, setCounts] = useState({
    perfect100: 0,
    above90: 0,
    above75: 0,
    totalStudents: 0
  });

  const finalCounts = {
    perfect100: 12,
    above90: 24,
    above75: 30,
    totalStudents: 45
  };

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounts(prev => ({
          perfect100: prev.perfect100 < finalCounts.perfect100 ? prev.perfect100 + 1 : finalCounts.perfect100,
          above90: prev.above90 < finalCounts.above90 ? prev.above90 + 1 : finalCounts.above90,
          above75: prev.above75 < finalCounts.above75 ? prev.above75 + 1 : finalCounts.above75,
          totalStudents: prev.totalStudents < finalCounts.totalStudents ? prev.totalStudents + 1 : finalCounts.totalStudents
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView]);

  const scores = [
    { marks: '100/100', count: 12, color: 'from-yellow-400 to-yellow-500' },
    { marks: '99/100', count: 8, color: 'from-yellow-300 to-yellow-400' },
    { marks: '98/100', count: 6, color: 'from-green-400 to-green-500' },
    { marks: '97/100', count: 5, color: 'from-blue-400 to-blue-500' },
    { marks: '96/100', count: 4, color: 'from-purple-400 to-purple-500' },
    { marks: '95/100', count: 3, color: 'from-indigo-400 to-indigo-500' },
    { marks: '94/100', count: 2, color: 'from-pink-400 to-pink-500' },
    { marks: '93/100', count: 2, color: 'from-red-400 to-red-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="results" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Animated Graph Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
            <Trophy className="w-10 h-10 text-yellow-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold math-text">
              ACADEMIC EXCELLENCE 2024-25
            </h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-xl text-gray-600">
            Celebrating Outstanding Performance Across All Standards
          </motion.p>
        </motion.div>

        {/* Animated Score Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16"
        >
          {scores.map((score, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`bg-gradient-to-br ${score.color} rounded-xl p-4 text-center shadow-lg transform hover:shadow-2xl transition-all duration-300`}>
                <motion.div
                  className="text-white text-2xl font-bold mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  {score.marks}
                </motion.div>
                <div className="text-white text-lg font-semibold">{score.count} Students</div>
                {score.marks === '100/100' && (
                  <motion.div
                    className="absolute -top-2 -right-2 bg-white rounded-full p-1"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Statistics */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-full mb-4">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="font-bold text-lg">PERFORMANCE METRICS</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              HISTORICAL SUCCESS SINCE 2007
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                value: counts.perfect100,
                label: 'Perfect 100/100 Scores',
                color: 'yellow',
                max: finalCounts.perfect100
              },
              {
                icon: Star,
                value: counts.above90,
                label: 'Students Above 90%',
                color: 'green',
                max: finalCounts.above90
              },
              {
                icon: Award,
                value: counts.above75,
                label: 'Students Above 75%',
                color: 'blue',
                max: finalCounts.above75
              },
              {
                icon: Target,
                value: '98%',
                label: 'Overall Success Rate',
                color: 'red',
                isPercentage: true
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 rounded-full bg-${stat.color}-100 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <motion.div
                  className={`text-4xl font-bold text-${stat.color}-600 mb-2`}
                  animate={inView ? {
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {stat.isPercentage ? stat.value : counts[stat.label.toLowerCase().replace(/ /g, '')]}
                </motion.div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                
                {/* Animated Progress Bar */}
                {!stat.isPercentage && (
                  <motion.div className="mt-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-${stat.color}-500 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(counts[stat.label.toLowerCase().replace(/ /g, '')] / stat.max) * 100}%` }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {Math.round((counts[stat.label.toLowerCase().replace(/ /g, '')] / stat.max) * 100)}% Achievement
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Animated Bar Chart */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <h4 className="text-xl font-bold text-center mb-6 flex items-center justify-center">
              <BarChart className="w-6 h-6 mr-2 text-blue-600" />
              PERFORMANCE DISTRIBUTION
            </h4>
            <div className="flex items-end justify-center space-x-4 h-40">
              {[
                { label: '9TH', value: 85, color: 'bg-blue-500' },
                { label: '10TH', value: 92, color: 'bg-blue-600' },
                { label: '+1', value: 88, color: 'bg-red-500' },
                { label: '+2', value: 94, color: 'bg-red-600' }
              ].map((bar, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                >
                  <div className="text-gray-600 mb-2">{bar.label}</div>
                  <motion.div
                    className={`w-12 ${bar.color} rounded-t-lg`}
                    initial={{ height: 0 }}
                    animate={{ height: `${bar.value}%` }}
                    transition={{ duration: 1, delay: 1.4 + index * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div
                    className="mt-2 font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
                  >
                    {bar.value}%
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedResults;