import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Brain, Target, Sparkles } from 'lucide-react';
import { Helmet } from "react-helmet-async";

<Helmet>
  <link rel="canonical" href="https://rightclickinstitute.in/" />
</Helmet>

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const mathSymbols = ['π', '∑', '∫', '∞', 'Δ', 'θ', '√', '≈', '≠', '±'];

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 z-50 flex items-center justify-center"
        >
          {/* Floating Mathematical Symbols */}
          <div className="absolute inset-0 overflow-hidden">
            {mathSymbols.map((symbol, index) => (
              <motion.div
                key={index}
                className="absolute text-4xl font-bold text-white/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  rotate: [0, 360],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Rotating Geometry */}
                <motion.div
                  className="w-32 h-32 border-4 border-white/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Icons */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Calculator className="w-12 h-12 text-white absolute top-0" />
                  <Brain className="w-12 h-12 text-white absolute right-0" />
                  <Target className="w-12 h-12 text-white absolute bottom-0" />
                  <Sparkles className="w-12 h-12 text-white absolute left-0" />
                </motion.div>
              </div>
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                RIGHT CLICK INSTITUTE
              </h1>
              <div className="text-white/80 text-lg mb-8">
                Loading Mathematical Excellence...
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-red-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            {/* Solving Equation Animation */}
            <motion.div
              className="mt-8 text-white font-mono text-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Solving: 2x + 5 = 15
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;