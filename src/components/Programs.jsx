import React, { useRef, useEffect } from 'react';
import { BookOpen, Target, Award, Users, Clock, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Programs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollPercent = 1 - (rect.top / window.innerHeight);
      
      // 3D tilt effect on cards based on mouse position
      const handleMouseMove = (e) => {
        cardsRef.current.forEach((card, index) => {
          if (card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 5;
            const rotateX = ((centerY - y) / centerY) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${index * 5}px)`;
          }
        });
      };

      const handleMouseLeave = () => {
        cardsRef.current.forEach(card => {
          if (card) {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
          }
        });
      };

      // Add event listeners
      cardsRef.current.forEach(card => {
        if (card) {
          card.addEventListener('mousemove', handleMouseMove);
          card.addEventListener('mouseleave', handleMouseLeave);
        }
      });

      return () => {
        cardsRef.current.forEach(card => {
          if (card) {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
          }
        });
      };
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <section 
      ref={sectionRef}
      id="programs" 
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200 via-transparent to-red-200" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-blue-800">OUR</span>{' '}
            <span className="text-red-600">PROGRAMS</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Exclusive coaching for 9TH to 12TH standard students with proven track record since 2007
          </p>
        </motion.div>

        {/* 3D Cards with Parallax */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="card-3d parallax-element"
              initial={{ opacity: 0, y: 100, rotateY: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card Shadow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-red-500/20 blur-xl rounded-3xl" />
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 h-full">
                {/* Header with Depth Effect */}
                <div 
                  className={`relative h-48 ${
                    program.color === 'blue' 
                    ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800' 
                    : 'bg-gradient-to-br from-red-600 via-red-700 to-red-800'
                  } text-white`}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {/* Floating Icon */}
                  <motion.div
                    className="absolute top-6 right-6"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    <program.icon className="w-12 h-12 opacity-80" />
                  </motion.div>
                  
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 depth-1">{program.title}</h3>
                      <div className="text-xl font-semibold mb-4 depth-2">{program.standard}</div>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-white/20 rounded-lg text-sm font-medium depth-3"
                            style={{ transform: `translateZ(${idx * 5}px)` }}
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <p className="text-gray-700 mb-6 text-lg depth-1">{program.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center text-gray-700 depth-1"
                        style={{ transform: `translateZ(${idx * 2}px)` }}
                      >
                        <div className={`w-2 h-2 ${
                          program.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'
                        } rounded-full mr-3`} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats with Depth */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-6">
                      <motion.div 
                        className="text-center depth-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Users className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                        <div className="font-bold text-xl">15-20</div>
                        <div className="text-sm text-gray-600">Students/Batch</div>
                      </motion.div>
                      <motion.div 
                        className="text-center depth-3"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Clock className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                        <div className="font-bold text-xl">Mon-Sat</div>
                        <div className="text-sm text-gray-600">Classes</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features with Parallax */}
        <motion.div 
          className="mt-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Programs?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Brain, 
                title: "Conceptual Clarity", 
                description: "Strong foundation building with emphasis on understanding concepts",
                delay: 0
              },
              { 
                icon: Award, 
                title: "Regular Assessments", 
                description: "Weekly tests, monthly exams, and detailed performance analysis",
                delay: 0.1
              },
              { 
                icon: Users, 
                title: "Personal Attention", 
                description: "Individual doubt clearing sessions and personalized mentoring",
                delay: 0.2
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl text-center parallax-element"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center mx-auto mb-6 depth-1">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <feature.icon className="w-10 h-10 text-blue-600" />
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold mb-4 depth-2">{feature.title}</h4>
                <p className="text-gray-600 depth-3">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;