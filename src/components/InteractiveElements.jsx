import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';


const InteractiveElements = () => {
  const [activeProblem, setActiveProblem] = useState(null);
  const [graphType, setGraphType] = useState('linear');

  const problems = [
    {
      id: 1,
      question: "Solve: x² - 5x + 6 = 0",
      solution: "x² - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or x = 3",
      difficulty: "Easy",
      topic: "Quadratic Equations"
    },
    {
      id: 2,
      question: "Find the derivative of f(x) = 3x⁴ - 2x³ + x² - 5",
      solution: "f'(x) = 12x³ - 6x² + 2x",
      difficulty: "Medium",
      topic: "Calculus"
    },
    {
      id: 3,
      question: "Prove that √2 is irrational",
      solution: "Assume √2 = a/b (in lowest terms). Then 2 = a²/b², so a² = 2b². Thus a² is even, so a is even. Let a = 2k. Then 4k² = 2b², so b² = 2k², making b even. Contradiction to lowest terms.",
      difficulty: "Hard",
      topic: "Number Theory"
    }
  ];

  const graphs = {
    linear: { equation: "y = 2x + 1", points: [[0,1], [1,3], [2,5], [3,7], [4,9]] },
    quadratic: { equation: "y = x²", points: [[-2,4], [-1,1], [0,0], [1,1], [2,4]] },
    exponential: { equation: "y = 2ˣ", points: [[0,1], [1,2], [2,4], [3,8]] },
    trigonometric: { equation: "y = sin(x)", points: [[0,0], [Math.PI/2,1], [Math.PI,0], [3*Math.PI/2,-1], [2*Math.PI,0]] }
  };

  const theorems = [
    { name: "Pythagoras Theorem", statement: "a² + b² = c²" },
    { name: "Binomial Theorem", statement: "(a+b)ⁿ = Σ[nCk aⁿ⁻ᵏ bᵏ]" },
    { name: "Fundamental Theorem of Calculus", statement: "∫ₐᵇ f(x)dx = F(b) - F(a)" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Interactive Learning Experience
          </h2>
          <p className="text-gray-600 text-lg">
            Click, hover, and explore mathematical concepts interactively
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Interactive Problems Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <HelpCircle className="w-6 h-6 mr-3 text-blue-600" />
              Interactive Problems
            </h3>
            <div className="space-y-4">
              {problems.map((problem) => (
                <motion.div
                  key={problem.id}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <button
                    onClick={() => setActiveProblem(activeProblem === problem.id ? null : problem.id)}
                    className="w-full p-4 text-left flex justify-between items-center bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 transition-all duration-300"
                  >
                    <div>
                      <span className="font-bold text-gray-800">{problem.question}</span>
                      <div className="flex items-center mt-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {problem.difficulty}
                        </span>
                        <span className="ml-3 text-sm text-gray-600">{problem.topic}</span>
                      </div>
                    </div>
                    {activeProblem === problem.id ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {activeProblem === problem.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-gray-50 border-t"
                    >
                      <div className="flex items-start mb-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
                          <p className="text-gray-700">{problem.solution}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Graph Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold flex items-center">
                <RefreshCw className="w-6 h-6 mr-3 text-red-600" />
                Interactive Graphs
              </h3>
              <div className="flex space-x-2">
                {Object.keys(graphs).map((type) => (
                  <button
                    key={type}
                    onClick={() => setGraphType(type)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      graphType === type 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="animated-graph mb-6">
              <svg width="100%" height="200" viewBox="0 0 400 200">
                {/* Axes */}
                <line x1="50" y1="10" x2="50" y2="190" stroke="#ccc" strokeWidth="2" />
                <line x1="50" y1="190" x2="350" y2="190" stroke="#ccc" strokeWidth="2" />
                
                {/* Graph Line */}
                <motion.polyline
                  points={graphs[graphType].points.map(([x, y]) => `${50 + x * 50},${190 - y * 20}`).join(' ')}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                  className="graph-line"
                />
                
                {/* Points */}
                {graphs[graphType].points.map(([x, y], index) => (
                  <motion.circle
                    key={index}
                    cx={50 + x * 50}
                    cy={190 - y * 20}
                    r="4"
                    fill="#ef4444"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                ))}
              </svg>
            </div>
            
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800 mb-2">
                {graphs[graphType].equation}
              </div>
              <p className="text-gray-600">
                Click on different graph types to see how the equation changes
              </p>
            </div>
          </motion.div>
        </div>

        {/* Interactive Theorems */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl shadow-2xl p-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Famous Mathematical Theorems</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {theorems.map((theorem, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold mb-4">📐</div>
                <h4 className="text-xl font-bold mb-3">{theorem.name}</h4>
                <div className="text-lg font-mono bg-white/20 rounded-lg p-3">
                  {theorem.statement}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hover Effects Demo */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold text-center mb-6">Try Hover Effects</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { text: "Scale Up", color: "blue" },
              { text: "Rotate", color: "red" },
              { text: "Shadow Glow", color: "green" },
              { text: "Color Change", color: "purple" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`h-32 rounded-xl flex items-center justify-center font-bold text-white text-lg cursor-pointer
                  bg-gradient-to-br from-${item.color}-500 to-${item.color}-700`}
                whileHover={{
                  scale: item.text === "Scale Up" ? 1.1 : 1,
                  rotate: item.text === "Rotate" ? 5 : 0,
                  boxShadow: item.text === "Shadow Glow" ? "0 0 30px rgba(0,0,0,0.3)" : "none",
                  background: item.text === "Color Change" ? 
                    `linear-gradient(135deg, #f59e0b, #ef4444)` : undefined
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveElements;