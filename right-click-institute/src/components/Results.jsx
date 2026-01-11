import React from 'react';
import { Trophy, Star, Users, Target } from 'lucide-react';

const Results = () => {
  const scores = [94, 92, 90, 90, 90, 88, 90, 90, 90, 90, 88, 88, 83, 82];

  return (
    <section id="results" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Achievers of Year 2024-25 Batch
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            CLASSES - 9TH, 10TH, +1, +2
          </p>
        </div>

        {/* Scores Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {scores.map((score, index) => (
              <div key={index} className="relative">
                <div className={`
                  rounded-lg p-4 text-center shadow-lg transform hover:scale-105 transition-transform
                  ${score >= 90 ? 'bg-gradient-to-b from-yellow-400 to-yellow-500' : 
                    score >= 85 ? 'bg-gradient-to-b from-blue-400 to-blue-500' : 
                    'bg-gradient-to-b from-green-400 to-green-500'}
                `}>
                  <div className="text-white text-2xl font-bold">{score}</div>
                  <div className="text-white text-sm opacity-90">Marks</div>
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  #{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="bg-gray-50 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center bg-red-100 text-red-600 px-6 py-3 rounded-full mb-4">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-bold text-lg">OUTSTANDING ACHIEVEMENT</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              MORE THAN 30 STUDENTS SECURED OVER 75 MARKS IN THE ACADEMIC YEAR 2024-25
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-600 font-medium">Students above 75 marks</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">14</div>
              <p className="text-gray-600 font-medium">Students above 85 marks</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{scores.length}</div>
              <p className="text-gray-600 font-medium">Top Performers Displayed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;