import React from 'react';
import { BookOpen, Target, Award, Brain, Clock, Users } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      standard: '9th & 10th',
      title: 'BOARD EXCELLENCE PROGRAM',
      subjects: ['MATHEMATICS', 'SCIENCE'],
      color: 'blue',
      description: 'Complete CBSE/ICSE/PSEB syllabus with focus on scoring 100/100 in board exams',
      icon: BookOpen,
      features: ['Complete Syllabus Coverage', 'Regular Unit Tests', 'Sample Paper Solving', 'Time Management Training']
    },
    {
      standard: '+1 & +2',
      title: 'ADVANCED PROGRAM',
      subjects: ['MATHEMATICS'],
      color: 'red',
      description: 'Specialized coaching for JEE (IIT) Mathematics + Board Exams preparation',
      icon: Target,
      features: ['JEE (IIT) Mathematics Focus', 'Advanced Problem Solving', 'Mock Test Series', 'Competitive Exam Strategy']
    },
  ];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-800">OUR SPECIALIZED</span>{' '}
            <span className="text-red-600">PROGRAMS</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Exclusive coaching for 9th to 12th standard students with proven track record since 2007
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              {/* Header - Fixed dynamic classes */}
              <div className={`p-6 text-white ${program.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-red-600 to-red-700'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                  <program.icon className="w-10 h-10 opacity-90" />
                </div>
                <div className="mt-2">
                  <span className="text-xl font-semibold">{program.standard}</span>
                </div>
                <div className="mt-3">
                  {program.subjects.map((subject, idx) => (
                    <div key={idx} className="text-lg font-bold bg-white/20 inline-block px-3 py-1 rounded-lg mr-2 mb-1">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-lg">{program.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full mr-3 ${program.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <Users className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                      <div className="font-bold">15-20</div>
                      <div className="text-sm text-gray-600">Students/Batch</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                      <div className="font-bold">Mon-Sat</div>
                      <div className="text-sm text-gray-600">Classes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Key Features of Our Programs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-center mb-3">Conceptual Clarity</h4>
              <p className="text-gray-600 text-center">Strong foundation building with emphasis on understanding concepts</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-7 h-7 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-center mb-3">Regular Assessments</h4>
              <p className="text-gray-600 text-center">Weekly tests, monthly exams, and detailed performance analysis</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Target className="w-7 h-7 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-center mb-3">Personal Attention</h4>
              <p className="text-gray-600 text-center">Individual doubt clearing sessions and personalized mentoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;