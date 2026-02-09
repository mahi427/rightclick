import React from 'react';
import { BookOpen, Target, Award, Users, Clock, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Programs = () => {
  const programs = [
    {
      standard: '9TH & 10TH',
      title: 'BOARD EXCELLENCE PROGRAM',
      subjects: ['MATHEMATICS', 'SCIENCE'],
      color: 'blue',
      description: 'Complete CBSE/ICSE/PSEB syllabus with focus on scoring 100/100 in board exams',
      icon: BookOpen,
      features: ['Complete Syllabus Coverage', 'Regular Unit Tests', 'Sample Paper Solving', 'Time Management Training']
    },
    {
      standard: '+1 & +2',
      title: 'ADVANCED IIT JEE PROGRAM',
      subjects: ['MATHEMATICS'],
      color: 'red',
      description: 'Specialized coaching for JEE (IIT) Mathematics + Board Exams preparation',
      icon: Target,
      features: ['JEE (IIT) Mathematics Focus', 'Advanced Problem Solving', 'Mock Test Series', 'Competitive Exam Strategy']
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
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-800">OUR</span>{' '}
            <span className="text-red-600">PROGRAMS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Exclusive coaching for 9TH to 12TH standard students with proven track record since 2007
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${program.color === 'blue' ? 'from-blue-600 to-blue-700' : 'from-red-600 to-red-700'} text-white p-6`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                  <program.icon className="w-10 h-10 opacity-90" />
                </div>
                <div className="mt-2">
                  <span className="text-xl font-semibold">{program.standard}</span>
                </div>
                <div className="mt-3">
                  {program.subjects.map((subject, idx) => (
                    <div key={idx} className="text-lg font-bold bg-white/20 inline-block px-3 py-1 rounded-lg mr-2 mb-1">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-lg">{program.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 ${program.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'} rounded-full mr-3`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <Users className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                      <div className="font-bold">15-20</div>
                      <div className="text-sm text-gray-600">Students/Batch</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                      <div className="font-bold">Mon-Sat</div>
                      <div className="text-sm text-gray-600">Classes</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Features */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Why Choose Our Programs?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Conceptual Clarity</h4>
              <p className="text-gray-600 text-sm">Strong foundation building with emphasis on understanding concepts</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Regular Assessments</h4>
              <p className="text-gray-600 text-sm">Weekly tests, monthly exams, and detailed performance analysis</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Personal Attention</h4>
              <p className="text-gray-600 text-sm">Individual doubt clearing sessions and personalized mentoring</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;