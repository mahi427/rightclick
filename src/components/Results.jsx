import React from 'react';
import { Trophy, Star, Users, Target, Award } from 'lucide-react';

const Results = () => {
  const scores = [
    { marks: '100/100', count: 12 },
    { marks: '99/100', count: 8 },
    { marks: '98/100', count: 6 },
    { marks: '97/100', count: 5 },
    { marks: '96/100', count: 4 },
    { marks: '95/100', count: 3 },
    { marks: '94/100', count: 2 },
    { marks: '93/100', count: 2 },
    { marks: '92/100', count: 2 },
    { marks: '91/100', count: 1 },
    { marks: '90/100', count: 1 },
    { marks: '89/100', count: 1 },
  ];

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
            CLASSES - 9<sup>TH</sup>, 10<sup>TH</sup>, +1, +2
          </p>
        </div>

        {/* Scores Display - Grid View */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {scores.map((score, index) => (
              <div key={index} className="relative">
                <div className={`
                  rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300
                  ${score.marks === '100/100' ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-xl' : 
                    score.marks.startsWith('99') ? 'bg-gradient-to-br from-yellow-300 to-yellow-400' : 
                    score.marks.startsWith('98') ? 'bg-gradient-to-br from-green-400 to-green-500' : 
                    score.marks.startsWith('97') ? 'bg-gradient-to-br from-blue-400 to-blue-500' : 
                    score.marks.startsWith('96') ? 'bg-gradient-to-br from-purple-400 to-purple-500' : 
                    'bg-gradient-to-br from-indigo-400 to-indigo-500'}
                `}>
                  <div className="text-white text-3xl font-bold mb-2">{score.marks}</div>
                  <div className="text-white text-lg font-semibold">{score.count} Students</div>
                  {score.marks === '100/100' && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center animate-pulse">
                      ★
                    </div>
                  )}
                </div>
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
        </div>
      </div>
    </section>
  );
};

export default Results;