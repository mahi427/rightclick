import React from 'react';
import { Target, Users, Award, Calendar } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Target, value: '5.0', label: 'Rating (29 reviews)' },
    { icon: Users, value: '500+', label: 'Students Trained' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Calendar, value: '6-12', label: 'Standards' },
  ];

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Master Mathematics from 6th to 12th Standard
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Right Click Institute - Where Math Makes Sense! Expert coaching in Central Town, Jalandhar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors"
            >
              Free Demo Class
            </a>
            <a
              href="#programs"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              View Programs
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;