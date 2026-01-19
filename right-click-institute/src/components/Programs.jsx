import React from 'react';
import { BookOpen, Target, Award, Brain, Clock, Users, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';

const Programs = () => {
  const programs = [
    {
      standard: '9TH & 10TH',
      title: 'BOARD EXCELLENCE PROGRAM',
      subjects: ['MATHEMATICS', 'SCIENCE'],
      color: 'blue',
      description: 'Complete CBSE/ICSE/PSEB syllabus with focus on scoring 100/100 in board exams',
      icon: BookOpen,
      features: ['Complete Syllabus Coverage', 'Regular Unit Tests', 'Sample Paper Solving', 'Time Management Training'],
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      standard: '+1 & +2',
      title: 'ADVANCED PROGRAM',
      subjects: ['MATHEMATICS'],
      color: 'red',
      description: 'Specialized coaching for JEE (IIT) Mathematics + Board Exams preparation',
      icon: Target,
      features: ['JEE (IIT) Mathematics Focus', 'Advanced Problem Solving', 'Mock Test Series', 'Competitive Exam Strategy'],
      gradient: 'from-red-600 to-red-700'
    },
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="programs" className="py-16 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              OUR SPECIALIZED PROGRAMS
            </h2>
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
          </div>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Exclusive coaching for 9<sup>TH</sup> to 12<sup>TH</sup> standard students with proven track record since 2007
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <AnimatedCard 
                className="h-full"
                delay={index * 0.2}
                hoverScale={1.03}
              >
                {/* Animated Header */}
                <motion.div 
                  className={`bg-gradient-to-r ${program.gradient} text-white p-6 rounded-t-xl relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <motion.h3 
                        className="text-2xl font-bold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 + 0.5 }}
                      >
                        {program.title}
                      </motion.h3>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <program.icon className="w-10 h-10 opacity-90" />
                      </motion.div>
                    </div>
                    <motion.div 
                      className="mt-2 text-xl font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.7 }}
                    >
                      {program.standard}
                    </motion.div>
                    <div className="mt-3">
                      {program.subjects.map((subject, idx) => (
                        <motion.div 
                          key={idx} 
                          className="text-lg font-bold bg-white/20 inline-block px-3 py-1 rounded-lg mr-2 mb-1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.3 + 0.9 + idx * 0.1 }}
                        >
                          {subject}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Body with staggered animations */}
                <div className="p-6">
                  <motion.p 
                    className="text-gray-700 mb-6 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 1.1 }}
                  >
                    {program.description}
                  </motion.p>
                  
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 + 1.3 + idx * 0.1 }}
                      >
                        <motion.div 
                          className={`w-3 h-3 rounded-full mr-3 ${program.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div 
                    className="mt-8 pt-6 border-t"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 1.8 }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Users className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                        <div className="font-bold text-xl">15-20</div>
                        <div className="text-sm text-gray-600">Students/Batch</div>
                      </motion.div>
                      <motion.div 
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Clock className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                        <div className="font-bold text-xl">Mon-Sat</div>
                        <div className="text-sm text-gray-600">Classes</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Key Features */}
        <motion.div 
          className="mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            🚀 KEY FEATURES
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Brain, 
                title: "Conceptual Clarity", 
                description: "Strong foundation building with emphasis on understanding concepts",
                color: "blue"
              },
              { 
                icon: Award, 
                title: "Regular Assessments", 
                description: "Weekly tests, monthly exams, and detailed performance analysis",
                color: "red"
              },
              { 
                icon: Zap, 
                title: "Personal Attention", 
                description: "Individual doubt clearing sessions and personalized mentoring",
                color: "green"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`absolute -top-10 -right-10 w-20 h-20 bg-${feature.color}-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-300`}
                />
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-4 mx-auto relative z-10`}>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold text-center mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;