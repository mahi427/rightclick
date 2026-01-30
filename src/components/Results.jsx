import React, { useRef, useEffect } from 'react';
import { Trophy, Star, Users, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Results = () => {
  const sectionRef = useRef(null);
  const scoreCardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollPercent = 1 - (rect.top / window.innerHeight);
      
      // Parallax effect on score cards
      scoreCardsRef.current.forEach((card, index) => {
        if (card) {
          const yOffset = scrollPercent * 50 * (index % 2 === 0 ? 1 : -1);
          card.style.transform = `translateY(${yOffset}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scores = [
    { marks: '100/100', count: 12 },
    { marks: '99/100', count: 8 },
    { marks: '98/100', count: 6 },
    { marks: '97/100', count: 5 },
    { marks: '96/100', count: 4 },
    { marks: '95/100', count: 3 },
    { marks: '94/100', count: 2 },
    { marks: '93/100', count: 2 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="results" 
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-red-50/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <Trophy className="w-12 h-12 text-yellow-500 mr-4" />
            <h2 className="text-5xl font-bold text-gray-900">
              TOPPER STUDENTS 2024-25
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            CLASSES - 9<sup>TH</sup>, 10<sup>TH</sup>, +1, +2
          </p>
        </motion.div>

        {/* Parallax Score Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
          {scores.map((score, index) => (
            <motion.div
              key={index}
              ref={el => scoreCardsRef.current[index] = el}
              className="parallax-element"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className={`
                rounded-xl p-4 text-center shadow-lg backdrop-blur-sm
                ${score.marks === '100/100' 
                  ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-xl' 
                  : score.marks.startsWith('99') 
                  ? 'bg-gradient-to-br from-yellow-300 to-yellow-400'
                  : score.marks.startsWith('98')
                  ? 'bg-gradient-to-br from-green-400 to-green-500'
                  : 'bg-gradient-to-br from-blue-400 to-blue-500'}
              `}>
                <div className="text-white text-2xl font-bold mb-1">{score.marks}</div>
                <div className="text-white text-sm opacity-90">{score.count} Students</div>
                {score.marks === '100/100' && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Star className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats with Parallax */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl shadow-2xl p-12 max-w-6xl mx-auto border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-3 rounded-full mb-6">
              <Star className="w-6 h-6 mr-3" />
              <span className="font-bold text-xl">HISTORICAL ACHIEVEMENTS</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              MORE THAN 30 STUDENTS SECURED OVER 75 MARKS IN 2024-25
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, value: '12', label: 'Students with 100/100', color: 'yellow' },
              { icon: Users, value: '30+', label: 'Students above 75 marks', color: 'blue' },
              { icon: Target, value: '24', label: 'Students above 90 marks', color: 'red' },
              { icon: Award, value: '98%', label: 'Overall Success Rate', color: 'green' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 parallax-element"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-20 h-20 ${
                  stat.color === 'yellow' ? 'bg-yellow-100' :
                  stat.color === 'blue' ? 'bg-blue-100' :
                  stat.color === 'red' ? 'bg-red-100' : 'bg-green-100'
                } rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <stat.icon className={`w-10 h-10 ${
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'red' ? 'text-red-600' : 'text-green-600'
                  }`} />
                </div>
                <div className={`text-4xl font-bold mb-3 ${
                  stat.color === 'yellow' ? 'text-yellow-600' :
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'red' ? 'text-red-600' : 'text-green-600'
                }`}>
                  {stat.value}
                </div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;