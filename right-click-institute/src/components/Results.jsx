import React from 'react';
import { Trophy, Star, Users, Target, Award } from 'lucide-react';

const Results = () => {
  const scores = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87];

  return (
    <section id="results" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-10 h-10 text-yellow-500 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              TOPPER STUDENTS 2024-25
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            CLASSES - 9TH, 10TH, +1, +2
          </p>
        </div>

        {/* Scores Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {scores.map((score, index) => (
              <div key={index} className="relative">
                <div className={`
                  rounded-xl p-3 text-center shadow-md transform hover:scale-110 transition-transform duration-200
                  ${score === 100 ? 'bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg' : 
                    score >= 95 ? 'bg-gradient-to-b from-green-400 to-green-500' : 
                    score >= 90 ? 'bg-gradient-to-b from-blue-400 to-blue-500' : 
                    'bg-gradient-to-b from-purple-400 to-purple-500'}
                `}>
                  <div className="text-white text-xl font-bold">{score}</div>
                  <div className="text-white text-xs opacity-90">/100</div>
                </div>
                {score === 100 && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    ★
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl shadow-xl p-8 max-w-5xl mx-auto border border-gray-200">
          <div className="text-center mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-full mb-4">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-bold text-lg">HISTORICAL ACHIEVEMENTS</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              MORE THAN 30 STUDENTS SECURED OVER 75 MARKS IN 2024-25
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
              <p className="text-gray-700 font-medium">Students with 100/100</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-700 font-medium">Students above 75 marks</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">24</div>
              <p className="text-gray-700 font-medium">Students above 90 marks</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-gray-700 font-medium">Overall Success Rate</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-gray-600 italic">
              "Consistent performance year after year since 2007 with 5000+ successful students"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;