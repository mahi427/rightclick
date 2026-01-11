import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, User, GraduationCap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    message: 'I am interested in admission'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly for free demo class.');
    setFormData({ name: '', phone: '', grade: '', message: 'I am interested in admission' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-blue-800">CONTACT</span>{' '}
            <span className="text-red-600">US</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get admission details, fee structure, and schedule a free demo class
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Visit Our Institute
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Address</h4>
                    <p className="text-gray-700">
                      151/4 Central Town<br />
                      Near Mata Rani Chowk<br />
                      Jalandhar, Punjab 144001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phone Number</h4>
                    <a 
                      href="tel:9888144156" 
                      className="text-xl font-bold text-gray-800 hover:text-red-600"
                    >
                      98881 44156
                    </a>
                    <p className="text-gray-600 mt-1">Call for immediate response</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Working Hours</h4>
                    <p className="text-gray-700">
                      Monday to Saturday: 9:00 AM - 8:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Batch Timing Info */}
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold text-lg mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Batch Timings
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-semibold text-blue-800">Morning Batch</p>
                    <p className="text-sm text-gray-600">6:30 AM - 8:30 AM</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="font-semibold text-red-600">Evening Batch</p>
                    <p className="text-sm text-gray-600">4:00 PM - 8:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg mb-4">Our Location</h4>
              <div className="h-48 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  <p className="font-bold">Central Town, Jalandhar</p>
                  <p className="text-sm text-gray-600 mt-1">Near Mata Rani Chowk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Form */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg p-4 mb-6">
                <h3 className="text-2xl font-bold text-center">
                  ADMISSION FORM 2025-26
                </h3>
                <p className="text-center opacity-90 mt-1">
                  Limited Seats Available
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="98881 44156"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Select Class *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['9th', '10th', '+1', '+2'].map((grade) => (
                      <button
                        key={grade}
                        type="button"
                        onClick={() => setFormData({...formData, grade})}
                        className={`
                          py-3 rounded-lg border font-medium transition-all
                          ${formData.grade === grade 
                            ? 'bg-blue-600 text-white border-blue-600' 
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'}
                        `}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Admission Request
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  * We will call you within 2 hours to schedule a FREE DEMO CLASS
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;