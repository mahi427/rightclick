import React from 'react';
import { BookOpen, Target, Award } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      standard: '9th & 10th',
      title: 'Board Excellence Program',
      subjects: ['MATHEMATICS', 'SCIENCE'],
      color: 'blue',
      description: 'Complete CBSE/ICSE/PSEB syllabus with focus on board exams',
      icon: BookOpen,
      features: ['Board Exam Preparation', 'Concept Building', 'Regular Tests']
    },
    {
      standard: '+1 & +2',
      title: 'Advanced Program',
      subjects: ['MATHEMATICS'],
      color: 'red',
      description: 'Advanced mathematics for JEE/NEET and board exams',
      icon: Target,
      features: ['Competitive Exam Focus', 'Advanced Problems', 'Mock Tests']
    },
  ];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-blue-800">OUR</span>{' '}
            <span className="text-red-600">PROGRAMS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized coaching for different academic levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className={`bg-${program.color}-600 text-white p-6`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                  <program.icon className="w-8 h-8" />
                </div>
                <div className="mt-2">
                  <span className="text-lg font-semibold">{program.standard}</span>
                </div>
                <div className="mt-2">
                  {program.subjects.map((subject, idx) => (
                    <div key={idx} className="text-sm font-semibold opacity-90">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className={`w-2 h-2 bg-${program.color}-500 rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Batch Size:</span>
                    <span className="font-bold">15-20 Students</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-bold">Monday-Saturday</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-center mb-6">Why Choose Us?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold mb-1">Daily Practice</h4>
                <p className="text-sm text-gray-600">Solved examples & problems</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-bold mb-1">Performance Tracking</h4>
                <p className="text-sm text-gray-600">Regular progress reports</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold mb-1">Doubt Sessions</h4>
                <p className="text-sm text-gray-600">Daily doubt clearing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;