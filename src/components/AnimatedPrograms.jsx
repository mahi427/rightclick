import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Brain, Zap, Clock, Users, BarChart3, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const AnimatedPrograms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const programs = [
    {
      title: "9TH & 10TH STANDARD",
      subtitle: "BOARD EXCELLENCE PROGRAM",
      icon: BookOpen,
      color: "blue",
      features: [
        "Complete CBSE/ICSE/PSEB Syllabus",
        "Focus on Scoring 100/100",
        "Regular Unit Tests & Assessments",
        "Time Management Strategies"
      ],
      animationDelay: 0
    },
    {
      title: "+1 & +2 STANDARD",
      subtitle: "ADVANCED JEE PROGRAM",
      icon: Target,
      color: "red",
      features: [
        "JEE (IIT) Mathematics Focus",
        "Advanced Problem Solving",
        "Mock Test Series",
        "Competitive Exam Strategy"
      ],
      animationDelay: 0.2
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1
      }
    })
  };

  return (
    <section id="programs" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-red-50/30"></div>
      
      {/* Floating Graphs Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-40 h-40 border-2 border-blue-300/30 rounded-lg"
          animate={{
            rotate: [0, 45, 90, 135, 180],
            scale: [1, 1.1, 1, 0.9, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-60 h-60 border-2 border-red-300/30 rounded-full"
          animate={{
            rotate: [180, 135, 90, 45, 0],
            scale: [1, 0.9, 1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold math-text">
              OUR SPECIALIZED PROGRAMS
            </h2>
            <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored coaching programs designed for academic excellence and competitive success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card-3d bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
              whileHover={{ y: -20 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ animationDelay: `${program.animationDelay}s` }}
            >
              {/* Program Header with Animation */}
              <motion.div
                className={`p-8 text-white bg-gradient-to-r ${program.color === 'blue' ? 'from-blue-600 to-blue-700' : 'from-red-600 to-red-700'}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + program.animationDelay }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <motion.h3
                      className="text-2xl font-bold"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + program.animationDelay }}
                    >
                      {program.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg opacity-90 mt-1"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + program.animationDelay }}
                    >
                      {program.subtitle}
                    </motion.p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <program.icon className="w-10 h-10" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Program Features with Staggered Animation */}
              <div className="p-8">
                <ul className="space-y-4">
                  {program.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      custom={featureIndex}
                      variants={featureVariants}
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className={`w-8 h-8 rounded-full bg-${program.color}-100 flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className={`w-5 h-5 text-${program.color}-600`} />
                      </motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Animated Stats */}
                <motion.div
                  className="mt-8 pt-6 border-t grid grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + program.animationDelay }}
                >
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Users className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <div className="font-bold text-2xl">15-20</div>
                    <div className="text-sm text-gray-600">Students/Batch</div>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Clock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <div className="font-bold text-2xl">6 Days</div>
                    <div className="text-sm text-gray-600">Weekly Classes</div>
                  </motion.div>
                </motion.div>

                {/* Animated CTA Button */}
                <motion.div
                  className="mt-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + program.animationDelay, type: "spring" }}
                >
                  <motion.a
                    href="#contact"
                    className={`block text-center py-3 px-6 rounded-lg font-bold ${program.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'} text-white shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enroll Now
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 math-text">
            🚀 WHY CHOOSE OUR PROGRAMS?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "Concept Clarity",
                description: "Strong foundation with visual learning",
                color: "purple",
                animation: { rotate: [0, 360] }
              },
              {
                icon: BarChart3,
                title: "Performance Tracking",
                description: "Regular assessments & progress reports",
                color: "green",
                animation: { y: [0, -10, 0] }
              },
              {
                icon: Zap,
                title: "Quick Doubt Solving",
                description: "Instant doubt clearance sessions",
                color: "yellow",
                animation: { scale: [1, 1.1, 1] }
              },
              {
                icon: Target,
                title: "Exam Strategy",
                description: "Time management & exam techniques",
                color: "red",
                animation: { rotate: [0, 5, -5, 0] }
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-full bg-${feature.color}-100 flex items-center justify-center mx-auto mb-4`}
                  animate={feature.animation}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                </motion.div>
                <h4 className="text-xl font-bold text-center mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedPrograms;