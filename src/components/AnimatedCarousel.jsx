import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Trophy, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const initSwiper = async () => {
      if (window.Swiper) {
        const Swiper = window.Swiper;
        swiperRef.current = new Swiper('.swiper-container', {
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 30,
            slideShadows: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    };

    initSwiper();

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const slides = [
    {
      title: "RIGHT CLICK INSTITUTE",
      subtitle: "For Mathematics Excellence",
      description: "Since 2007 | 5000+ Students Trained | 98% Success Rate",
      color: "from-blue-600 via-purple-600 to-red-600",
      icon: <Trophy className="w-16 h-16 mb-4" />,
      particles: 15
    },
    {
      title: "CLASSES 9TH - 12TH",
      subtitle: "Specialized Mathematics Coaching",
      description: "Board Exams & JEE (IIT) Preparation | 12 Students Scored 100/100",
      color: "from-red-600 via-yellow-600 to-blue-600",
      icon: <Users className="w-16 h-16 mb-4" />,
      particles: 12
    },
    {
      title: "EXPERIENCED FACULTY",
      subtitle: "Personalized Attention",
      description: "15-20 Students per Batch | Regular Tests & Performance Tracking",
      color: "from-green-600 via-blue-600 to-purple-600",
      icon: <Target className="w-16 h-16 mb-4" />,
      particles: 10
    },
    {
      title: "FREE DEMO CLASS",
      subtitle: "Experience Our Methodology",
      description: "Limited Seats Available | Call: 98881 44156",
      color: "from-yellow-600 via-red-600 to-pink-600",
      icon: <Star className="w-16 h-16 mb-4" />,
      particles: 8
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="pt-20 pb-8 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-red-500/20"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center mb-8"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            MATHEMATICS EXCELLENCE
          </motion.h1>
          <motion.p variants={itemVariants} className="text-2xl text-gray-600">
            Where Numbers Come to Life!
          </motion.p>
        </motion.div>

        <div className="swiper-container rounded-3xl overflow-hidden shadow-2xl">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                <div className={`min-h-[500px] bg-gradient-to-r ${slide.color} text-white relative overflow-hidden`}>
                  {/* Animated particles in slide */}
                  <div className="absolute inset-0">
                    {[...Array(slide.particles)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/20"
                        style={{
                          width: Math.random() * 10 + 5,
                          height: Math.random() * 10 + 5,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, Math.random() * 200 - 100],
                          x: [0, Math.random() * 100 - 50],
                          opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                          duration: Math.random() * 5 + 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10 w-full text-center py-16 px-4 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ rotate: 0, scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="mb-6"
                    >
                      {slide.icon}
                    </motion.div>
                    
                    <motion.h1 
                      className="text-4xl md:text-6xl font-bold mb-4"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      className="text-2xl md:text-3xl font-semibold mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.p 
                      className="text-xl opacity-90 max-w-2xl mx-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div 
                      className="mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      <motion.a
                        href="#contact"
                        className="inline-block bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg relative overflow-hidden group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">Book Free Demo Class</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination with animation */}
          <div className="swiper-pagination"></div>
          
          {/* Animated Navigation Buttons */}
          <motion.div 
            className="swiper-button-next"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-600 rounded-full blur opacity-30"></div>
              <ChevronRight className="w-8 h-8 relative z-10" />
            </div>
          </motion.div>
          <motion.div 
            className="swiper-button-prev"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-red-600 rounded-full blur opacity-30"></div>
              <ChevronLeft className="w-8 h-8 relative z-10" />
            </div>
          </motion.div>
        </div>

        {/* Animated Stats Bar */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { label: "Years", value: "17+", color: "blue" },
            { label: "Students", value: "5000+", color: "red" },
            { label: "Success Rate", value: "98%", color: "green" },
            { label: "100/100 Scores", value: "12", color: "yellow" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-4 shadow-lg text-center relative overflow-hidden group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-${stat.color}-600`}></div>
              <motion.div
                className={`text-3xl font-bold mb-2 ${stat.color === 'blue' ? 'text-blue-600' : stat.color === 'red' ? 'text-red-600' : stat.color === 'green' ? 'text-green-600' : 'text-yellow-600'}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedCarousel;