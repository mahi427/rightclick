import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Award, Brain, Clock, Users, Zap, Sparkles, ChevronRight } from 'lucide-react';


const AnimatedPrograms = () => {
  const [hoveredProgram, setHoveredProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "BOARD EXCELLENCE PROGRAM",
      grades: "9TH & 10TH",
      subjects: ["MATHEMATICS", "SCIENCE"],
      description: "Master CBSE/ICSE/PSEB syllabus with focus on scoring 100/100 in board exams",
      features: ["Complete Syllabus Coverage", "Regular Unit Tests","Exampler & PYQ question solved", "Time Management"],
      color: "blue",
      icon: BookOpen,
      stats: { students: 2500, success: 96 }
    },
    {
      id: 2,
      title: "ADVANCED IIT JEE PROGRAM",
      grades: "+1 & +2",
      subjects: ["MATHEMATICS"],
      description: "Specialized coaching for JEE (IIT) Mathematics with advanced problem solving",
      features: ["JEE Focused Curriculum", "Advanced Problem Sets", "Mock Test Series", "Competitive Strategy"],
      color: "red",
      icon: Target,
      stats: { students: 1500, success: 94 }
    }
  ];

  const programVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      y: -20,
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="programs" className="py-16 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-yellow-500 mr-3" />
            <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              OUR SPECIALIZED PROGRAMS
            </span>
            <Sparkles className="w-8 h-8 text-yellow-500 ml-3" />
          </motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transformative learning experiences for 9TH to 12TH grade students
          </motion.p>
        </motion.div>

        {/* Animated Programs Grid - Only 2 Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              custom={index}
              variants={programVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
            >
              {/* Glow Effect on Hover */}
              <motion.div
                className={`absolute -inset-1 rounded-2xl blur opacity-0 ${
                  program.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'
                }`}
                animate={{ opacity: hoveredProgram === program.id ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Program Card */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                {/* Animated Header */}
                <motion.div 
                  className={`h-48 relative overflow-hidden ${
                    program.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 'bg-gradient-to-br from-red-600 to-red-800'
                  }`}
                  animate={{ scale: hoveredProgram === program.id ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
                  </div>
                  
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <motion.div
                            animate={{ rotate: hoveredProgram === program.id ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <program.icon className="w-12 h-12 text-white mb-4" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                        </div>
                        <motion.div
                          className="text-white text-lg font-bold bg-white/20 rounded-full px-4 py-2"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {program.grades}
                        </motion.div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-white/20 rounded-lg text-sm font-medium text-white"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + idx * 0.1 }}
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Program Content */}
                <div className="p-6">
                  <motion.p 
                    className="text-gray-700 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {program.description}
                  </motion.p>

                  {/* Animated Features List */}
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        custom={idx}
                        variants={featureVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <motion.div
                          className={`w-2 h-2 rounded-full mr-3 ${
                            program.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'
                          }`}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: idx * 0.2 }}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Animated Stats */}
                  <motion.div 
                    className="flex justify-between items-center pt-6 border-t"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{program.stats.students}+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{program.stats.success}%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <motion.button
                      className={`px-4 py-2 rounded-lg font-medium ${
                        program.color === 'blue' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 'bg-red-100 text-red-700 hover:bg-red-200'
                      } transition-colors flex items-center`}
                      whileHover={{ x: 5 }}
                    >
                    
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Features Comparison */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 shadow-lg max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            🚀 KEY FEATURES
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Small Batches", desc: "15-20 students per batch", color: "blue" },
              { icon: Clock, title: "Flexible Timing", desc: "Morning & Evening batches", color: "green" },
              { icon: Award, title: "Regular Tests", desc: "Weekly assessments", color: "red" },
              { icon: Zap, title: "Doubt Sessions", desc: "Daily doubt clearing", color: "purple" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-full ${
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'red' ? 'bg-red-100' : 'bg-purple-100'
                  } flex items-center justify-center mx-auto mb-4`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <feature.icon className={`w-8 h-8 ${
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'green' ? 'text-green-600' :
                    feature.color === 'red' ? 'text-red-600' : 'text-purple-600'
                  }`} />
                </motion.div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedPrograms;