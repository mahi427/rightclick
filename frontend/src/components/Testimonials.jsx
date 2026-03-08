import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, User, GraduationCap, Award } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "RAJESH SHARMA",
      grade: "Scored 100/100 in 10TH Board",
      text: "Right Click Institute transformed my approach to mathematics. The systematic teaching method and regular tests helped me achieve a perfect score!",
      rating: 5,
      year: "2024",
      achievements: ["Perfect Score", "School Topper"]
    },
    {
      id: 2,
      name: "PRIYA VERMA",
      grade: "+2 Student, JEE Aspirant",
      text: "The JEE mathematics coaching here is exceptional. Faculty's guidance and advanced problem sets helped me crack difficult problems with ease.",
      rating: 5,
      year: "2023",
      achievements: ["JEE Advanced Qualified", "State Rank 45"]
    },
    {
      id: 3,
      name: "AMIT KUMAR",
      grade: "9TH Student",
      text: "From fearing mathematics to loving it! Teachers here make complex concepts so simple. My confidence has grown tremendously.",
      rating: 5,
      year: "2024",
      achievements: ["95% in Maths", "Improved by 40%"]
    },
    {
      id: 4,
      name: "SUNITA RANI",
      grade: "Parent of +1 Student",
      text: "As a parent, I appreciate the regular updates and parent-teacher meetings. My child's progress is clearly visible. Thank you Right Click!",
      rating: 5,
      year: "2023",
      achievements: ["Regular Progress", "Parent Satisfaction"]
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-400"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ★
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center mb-4">
            <Star className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Student Success Stories
            </h2>
            <Star className="w-8 h-8 text-yellow-500 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students and parents about their transformative journey
          </p>
        </motion.div>

        {/* Animated Testimonial Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Testimonial Content */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <Quote className="w-12 h-12 text-blue-200 mr-4" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-6 h-6 fill-yellow-400 text-yellow-400" 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <motion.blockquote 
                      className="text-2xl text-gray-700 mb-8 italic leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      "{currentTestimonial.text}"
                    </motion.blockquote>
                    
                    <div className="flex items-center">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center mr-6 bg-gradient-to-r from-blue-500 to-red-500`}>
                        <User className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                        <div className="flex items-center text-gray-600 mt-1">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          {currentTestimonial.grade}
                        </div>
                        <div className="text-gray-500 mt-1">Batch: {currentTestimonial.year}</div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Sidebar */}
                  <div className="bg-gradient-to-br from-blue-50 to-red-50 p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <Award className="w-6 h-6 mr-3 text-blue-600" />
                      Achievements
                    </h3>
                    <div className="space-y-4">
                      {currentTestimonial.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-white rounded-xl p-4 shadow-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-3 bg-gradient-to-r from-blue-500 to-red-500" />
                            <span className="font-medium text-gray-800">{achievement}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex 
                  ? 'bg-gradient-to-r from-blue-600 to-red-600' 
                  : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.5 }}
                animate={{
                  scale: idx === currentIndex ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
              </div>
              <div className="text-5xl font-bold mb-2">5.0</div>
              <div className="text-lg">Google Rating</div>
              <div className="text-sm opacity-90">Based on 29 authentic reviews</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-lg">Successful Students</div>
              <div className="text-sm opacity-90">Since 2007</div>
            </div>
            
            <motion.div 
              className="text-center mt-6 md:mt-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://g.page/r/CWY6u6JN0PcMEAI/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow"
              >
                <Star className="w-5 h-5 mr-2" />
                Write a Review
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;