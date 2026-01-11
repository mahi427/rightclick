import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      grade: '12th Standard',
      text: 'Right Click Institute transformed my approach to mathematics. From scoring 65% to achieving 95% in boards!',
      rating: 5,
      parent: 'Mr. Sharma (Parent)'
    },
    {
      name: 'Priya Patel',
      grade: '10th Standard',
      text: 'The personalized attention and regular tests helped me overcome my fear of algebra. Highly recommended!',
      rating: 5,
      parent: 'Mrs. Patel (Parent)'
    },
    {
      name: 'Amit Kumar',
      grade: '8th Standard',
      text: 'Fun learning environment with amazing teachers. Mathematics is now my favorite subject!',
      rating: 5,
      parent: 'Mr. Kumar (Parent)'
    }
  ];

  const reviews = [
    { platform: 'Google', rating: 5.0, count: 29 },
    { platform: 'JustDial', rating: 5.0, count: 12 },
    { platform: 'Facebook', rating: 4.9, count: 8 },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students & Parents Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join 500+ students who have transformed their mathematics learning experience
          </p>
        </div>

        {/* Reviews Summary */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg min-w-[200px]">
              <div className="text-4xl font-bold text-primary mb-2">{review.rating}/5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="font-semibold text-gray-700">{review.platform}</div>
              <div className="text-sm text-gray-500">{review.count} reviews</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative">
              <Quote className="w-8 h-8 text-gray-200 absolute top-6 right-6" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.grade}</p>
                <p className="text-sm text-gray-500 mt-1">{testimonial.parent}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Ready to transform your mathematics learning journey?
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors"
          >
            Book Your Seat Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;