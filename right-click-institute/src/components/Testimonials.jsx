import React from 'react';
import { Star, Quote, User, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      grade: 'Scored 100/100 in 10th',
      text: 'Right Click Institute made mathematics my strongest subject. The systematic approach and regular tests helped me achieve perfect score!',
      rating: 5,
      year: '2024'
    },
    {
      name: 'Priya Verma',
      grade: '+2 Student, JEE Aspirant',
      text: 'The JEE mathematics coaching here is exceptional. Faculty guidance helped me crack difficult problems with ease. Highly recommended!',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Amit Kumar',
      grade: '9th Student',
      text: 'From fearing mathematics to loving it! The teachers here make complex concepts so simple. My confidence has grown tremendously.',
      rating: 5,
      year: '2024'
    },
    {
      name: 'Sunita Rani',
      grade: 'Parent of +1 Student',
      text: 'As a parent, I appreciate the regular updates and parent-teacher meetings. My child s progress is clearly visible. Thank you Right Click!',
      rating: 5,
      year: '2023'
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Students & Parents</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join 5000+ students who transformed their mathematics learning journey since 2007
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-8 h-8 text-gray-200 absolute top-6 right-6" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <div className="flex items-center text-gray-600 text-sm">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    {testimonial.grade}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Batch: {testimonial.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews */}
        <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
              </div>
              <div className="text-4xl font-bold">5.0</div>
              <div className="text-lg">Google Rating</div>
              <div className="text-sm opacity-90">Based on 29 reviews</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">5000+</div>
              <div className="text-lg">Students Trained</div>
              <div className="text-sm opacity-90">Since 2007</div>
            </div>
            
            <div className="text-center mt-6 md:mt-0">
              <a 
                href="https://g.page/r/CWY6u6JN0PcMEAI/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                ✍️ Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;