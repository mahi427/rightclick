import React, { useState } from 'react';
import { Award, Star, Trophy, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TopperHighlights = () => {
  const [selectedTopper, setSelectedTopper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toppers = [
    {
      id: 1,
      name: "AVNI",
      school: "APJ School, Jalandhar",
      marks: "79/80",
      subject: "Mathematics",
      class: "9th Class",
      year: "2025-26",
      image: "/images/topper-avni.jpeg",
      achievement: "Top Performer",
      quote: "Right Click Institute made mathematics my favorite subject!"
    },
    {
      id: 2,
      name: " NISHTHA",
      school: "Innocent Hearts School, Jalandhar",
      marks: "94/100",
      subject: "Mathematics",
      class: "10th Class",
      year: "2025-26",
      image: "/images/topper-1.jpeg",
      achievement: "Outstanding Performer",
      quote: "The teaching methodology here is exceptional!"
    },
    {
      id: 3,
      name: "PRIYANSHI",
      school: "Innocent Hearts School, Jalandhar",
      marks: "90/100",
      subject: "Mathematics",
      class: "10th Class",
      year: "2025-26",
      image: "/images/topper-3.jpeg",
      achievement: "Brilliant Performer",
      quote: "Cleared JEE Mains with flying colors thanks to Right Click!"
    },
    {
      id: 4,
      name: "TANISH",
      school: "La Blossom, Jalandhar",
      marks: "90/100",
      subject: "Mathematics",
      class: "9th Class",
      year: "2025-26",
      image: "/images/topper-5.jpeg",
      achievement: "Excellent Performer",
      quote: "The doubt clearing sessions are a game-changer!"
    },
     {
      id: 5,
      name: "SHANAYA",
      school: "Cambridge Co-ed, Jalandhar",
      marks: "90/100",
      subject: "Mathematics",
      class: "9th Class",
      year: "2025-26",
      image: "/images/topper-6.jpeg",
      achievement: "Excellent Performer",
      quote: "The doubt clearing sessions are a game-changer!"
    },
     {
      id: 6,
      name: "KRITIKA",
      school: "Innocent Hearts School, Jalandhar",
      marks: "88/100",
      subject: "Mathematics",
      class: "10th Class",
      year: "2025-26",
      image: "/images/topper-7.jpeg",
      achievement: "Excellent Performer",
      quote: "The doubt clearing sessions are a game-changer!"
    },
     {
      id: 7,
      name: "DAKSH",
      school: "APJ Public School, Jalandhar",
      marks: "88/100",
      subject: "Mathematics",
      class: "11th Class",
      year: "2025-26",
      image: "/images/topper-8.jpeg",
      achievement: "Excellent Performer",
      quote: "The doubt clearing sessions are a game-changer!"
    },
     {
      id: 8,
      name: "AYUSHI",
      school: "Innocent Hearts School, Jalandhar",
      marks: "83/100",
      subject: "Mathematics",
      class: "10th Class",
      year: "2025-26",
      image: "/images/topper-9.jpeg",
      achievement: "Excellent Performer",
      quote: "The doubt clearing sessions are a game-changer!"
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedTopper(toppers[index]);
  };

  const closeLightbox = () => {
    setSelectedTopper(null);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % toppers.length;
    setCurrentIndex(newIndex);
    setSelectedTopper(toppers[newIndex]);
  };

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + toppers.length) % toppers.length;
    setCurrentIndex(newIndex);
    setSelectedTopper(toppers[newIndex]);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-5 py-2 rounded-full mb-4 shadow-md">
            <Trophy className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">SESSION 2025-26 TOPPERS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Celebrating Excellence
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our talented students who made us proud with their outstanding achievements
          </p>
        </motion.div>

        {/* Portrait Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {toppers.map((topper, index) => (
            <motion.div
              key={topper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-white hover:border-yellow-400 transition-all duration-300">
                
                {/* Portrait Container */}
                <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${topper.name}&size=150&background=random&color=fff`;
                    }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Marks Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full font-bold text-sm shadow-md transform group-hover:scale-110 transition-transform">
                    {topper.marks}
                  </div>
                  
                  {/* Name Overlay on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold">{topper.name}</h3>
                    <p className="text-xs opacity-90 truncate">{topper.school}</p>
                  </div>
                </div>

                {/* Info Bar */}
                <div className="p-3 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{topper.name}</h3>
                      <p className="text-xs text-gray-500">{topper.class}</p>
                    </div>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enroll CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-12"
        >
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Want to see your name here next year? Join us today!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Enroll Now for 2026-27
            <ChevronRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal - COMPLETELY RESTRUCTURED */}
      <AnimatePresence>
        {selectedTopper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Main Content - Simple 2 Column Layout */}
              <div className="flex flex-col md:flex-row">
                
                {/* Left Column - Image (50%) */}
                <div className="md:w-1/2 h-80 md:h-[600px] bg-gradient-to-br from-purple-200 to-pink-200 relative">
                  <img
                    src={selectedTopper.image}
                    alt={selectedTopper.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${selectedTopper.name}&size=500&background=8B5CF6&color=fff&bold=true`;
                    }}
                  />
                </div>

                {/* Right Column - Info (50%) */}
                <div className="md:w-1/2 p-8 md:p-10 bg-white overflow-y-auto max-h-[600px]">
                  
                  {/* Achievement Badge */}
                  <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-md">
                    <Trophy className="inline w-4 h-4 mr-2" />
                    {selectedTopper.achievement}
                  </div>

                  {/* Congratulations Message */}
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Congratulations!</h3>
                  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
                    {selectedTopper.name}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">{selectedTopper.school}</p>

                  {/* For securing */}
                  <p className="text-gray-700 mb-2">for securing</p>
                  
                  {/* Marks - Large and Bold */}
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-2">
                    {selectedTopper.marks}
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-2">
                    marks in <span className="font-semibold">{selectedTopper.subject}</span>
                  </p>
                  <p className="text-gray-700 text-lg mb-6">
                    in <span className="font-semibold">{selectedTopper.class}</span>
                  </p>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Class</p>
                      <p className="font-semibold text-gray-800">{selectedTopper.class}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Marks</p>
                      <p className="font-bold text-green-600 text-xl">{selectedTopper.marks}</p>
                    </div>
                  </div>

                  {/* Session */}
                  <div className="bg-blue-50 p-4 rounded-xl mb-6">
                    <p className="text-xs text-gray-500 mb-1">Session</p>
                    <p className="font-semibold text-gray-800">{selectedTopper.year}</p>
                  </div>

                  {/* Quote */}
                  <div className="bg-gray-50 p-6 rounded-xl mb-6 border-l-4 border-purple-500">
                    <p className="text-gray-700 italic text-lg">
                      &quot;{selectedTopper.quote}&quot;
                    </p>
                  </div>

                  {/* Enroll Button */}
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Enroll Now for 2026-27
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TopperHighlights;