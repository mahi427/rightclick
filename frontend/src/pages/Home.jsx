import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  BookOpen, Users, Award, Target, ChevronRight, 
  Calendar, TrendingUp, Star, Phone, MapPin, 
  GraduationCap, FileText, Play, ChevronLeft,
  Sparkles, Zap, Brain, Clock, BarChart3
} from 'lucide-react';

// Import Swiper for carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Home = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const classes = ['9th', '10th', '11th', '12th'];

  const stats = [
    { icon: Calendar, value: '2007', label: 'Established' },
    { icon: Users, value: '5000+', label: 'Students Trained' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Star, value: '5.0', label: 'Google Rating' },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Chapter-wise Notes',
      description: 'Comprehensive practice materials for every chapter',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Free PDF Downloads',
      description: 'All notes are completely free to download',
      color: 'green'
    },
    {
      icon: Target,
      title: 'JEE Focus',
      description: 'Special coaching for IIT aspirants',
      color: 'red'
    },
    {
      icon: Brain,
      title: 'Concept Clarity',
      description: 'Strong foundation with visual learning',
      color: 'purple'
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Study anytime, anywhere',
      color: 'yellow'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Regular assessments & progress reports',
      color: 'indigo'
    }
  ];

  const carouselSlides = [
    {
      title: "RIGHT CLICK INSTITUTE",
      subtitle: "Excellence in Mathematics Since 2007",
      description: "Specialized coaching for 9th to 12th standard students",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Start Learning",
      link: "/class/9th/notes"
    },
    {
      title: "Free Practice Notes",
      subtitle: "Chapter-wise PDF Downloads",
      description: "Access all chapters for free - Number Systems to Statistics",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Download Now",
      link: "/class/9th/notes"
    },
    {
      title: "12 Students Scored 100/100",
      subtitle: "Academic Year 2024-25",
      description: "30+ students above 75 marks | 24 students above 90 marks",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "View Results",
      link: "/testimonials"
    }
  ];

  const achievements = [
    { number: 12, label: 'Perfect 100/100', suffix: '', color: 'yellow' },
    { number: 24, label: 'Students Above 90%', suffix: '+', color: 'green' },
    { number: 30, label: 'Students Above 75%', suffix: '+', color: 'blue' },
    { number: 5000, label: 'Total Students', suffix: '+', color: 'red' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          className="h-full"
        >
          {carouselSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                  >
                    <motion.h1 
                      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.h2 
                      className="text-2xl md:text-3xl lg:text-4xl mb-4 text-yellow-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.h2>
                    <motion.p 
                      className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Link
                        to={slide.link}
                        className="inline-flex items-center bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg"
                      >
                        {slide.cta}
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-600">Choose Your</span>{' '}
              <span className="text-red-600">Class</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access free chapter-wise practice notes for all classes
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {classes.map((className, index) => (
              <motion.div
                key={className}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-red-600 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <GraduationCap className="w-12 h-12 mx-auto mb-4 relative z-10" />
                  <h3 className="text-2xl font-bold text-center relative z-10">Class {className}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                      <span>12 Chapters</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FileText className="w-4 h-4 mr-2 text-green-600" />
                      <span>Free PDF Notes</span>
                    </div>
                  </div>
                  <Link
                    to={`/class/${className.toLowerCase()}/notes`}
                    className="block text-center py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all group-hover:scale-105"
                  >
                    View Notes
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-red-600">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive learning resources for mathematics excellence
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 group"
                >
                  <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Celebrating excellence since 2007
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 text-${item.color}-300`}>
                  {item.number}{item.suffix}
                </div>
                <div className="text-sm opacity-90">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Access free practice notes for all chapters and classes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/class/9th/notes"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-shadow"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Start Learning Free
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg border-2 border-blue-600 hover:border-red-600 transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;