import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Class 10 Student',
      text: "Right Click Institute made mathematics my strongest subject. The practice notes are excellent and helped me score 95% in boards!",
      rating: 5,
      year: '2024'
    },
    {
      name: 'Priya Verma',
      role: 'Class 12 Student',
      text: "The chapter-wise PDF notes are a lifesaver. I can study anytime, anywhere. Highly recommended for JEE preparation.",
      rating: 5,
      year: '2024'
    },
    {
      name: 'Amit Kumar',
      role: 'Parent',
      text: "My child's performance has improved dramatically. The teaching methodology is exceptional. Thank you Right Click!",
      rating: 5,
      year: '2023'
    },
    {
      name: 'Neha Singh',
      role: 'Class 9 Student',
      text: "I love how each chapter is explained in detail. The free PDF notes are really helpful for practice.",
      rating: 5,
      year: '2024'
    },
    {
      name: 'Rajesh Patel',
      role: 'Class 11 Student',
      text: "Best coaching institute for mathematics. The faculty is experienced and very supportive.",
      rating: 5,
      year: '2023'
    },
    {
      name: 'Sunita Rani',
      role: 'Parent',
      text: "Regular progress updates and parent-teacher meetings. Very professional approach.",
      rating: 5,
      year: '2024'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">Student</span>{' '}
            <span className="text-red-600">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600">What our students and parents say about us</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200" />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-3">{testimonial.text}</p>
              
              <div className="text-sm text-gray-400">Batch {testimonial.year}</div>
            </motion.div>
          ))}
        </div>

        {/* Google Review Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-2xl p-8 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold mb-4">5.0 ⭐ Google Rating</h3>
          <p className="text-xl mb-6">Based on 29+ reviews from students and parents</p>
          <a 
            href="https://g.page/r/CWY6u6JN0PcMEAI/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Write a Review
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;