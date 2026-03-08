import React from 'react';
import { motion } from 'framer-motion';


const AnimatedCard = ({ children, className = "", delay = 0, hoverScale = 1.05, tapScale = 0.98 }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: hoverScale, rotateZ: 1 }}
      whileTap={{ scale: tapScale }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Animated Border */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 blur"
        transition={{ duration: 0.3 }}
      />
      
      {/* Card Content */}
      <div className="relative bg-white rounded-xl p-6 shadow-lg h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;