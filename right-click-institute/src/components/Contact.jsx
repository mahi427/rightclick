import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, User, GraduationCap, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
    message: 'I am interested in admission and would like to schedule a free demo class.'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you! We will contact you shortly for free demo class.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        grade: '',
        message: 'I am interested in admission and would like to schedule a free demo class.'
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-800">VISIT OUR</span>{' '}
            <span className="text-red-600">CAMPUS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Schedule a free demo class and experience our teaching methodology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Institute Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Campus Address</h4>
                    <p className="text-gray-700">
                      <strong>Right Click Institute</strong><br />
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
                    <h4 className="font-bold text-lg mb-2">Contact Numbers</h4>
                    <div className="space-y-1">
                      <a 
                        href="tel:9888144156" 
                        className="text-xl font-bold text-gray-800 hover:text-red-600 block"
                      >
                        📞 98881 44156
                      </a>
                      <a 
                        href="tel:9888144156" 
                        className="text-lg text-gray-700 hover:text-blue-600 block"
                      >
                        📱 98881 44156 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email Address</h4>
                    <a 
                      href="mailto:info@rightclickinstitute.com" 
                      className="text-lg text-gray-700 hover:text-green-600"
                    >
                      info@rightclickinstitute.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Working Hours</h4>
                    <p className="text-gray-700">
                      <strong>Monday to Saturday:</strong> 9:00 AM - 8:30 PM<br />
                      <strong>Sunday:</strong> Closed<br />
                      <strong>Office Hours:</strong> 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com/rightclickinstitute" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://instagram.com/rightclickinstitute" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://youtube.com/@rightclickinstitute" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-lg mb-4">Find Us on Google Maps</h4>
              <div className="h-64 bg-gray-200 rounded-xl overflow-hidden">
                {/* Google Map Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7558586200964!2d75.5729!3d31.3269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9e4ab%3A0x6b5b5c5e5d5e5d5e!2sCentral%20Town%2C%20Jalandhar%2C%20Punjab%20144001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Right Click Institute Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://goo.gl/maps/YOUR_LOCATION_LINK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Admission Form */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl p-4 mb-6">
                <h3 className="text-2xl font-bold text-center">
                  🎓 ADMISSION FORM 2025-26
                </h3>
                <p className="text-center opacity-90 mt-1">
                  Limited Seats Available | Classes 9th to +2
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

                <div className="grid md:grid-cols-2 gap-6">
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
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="parent@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Select Class *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Class (9th to +2 only)</option>
                    <option value="9th">9th Standard</option>
                    <option value="10th">10th Standard</option>
                    <option value="+1">+1 (11th Standard)</option>
                    <option value="+2">+2 (12th Standard)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message/Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements, preferred timing, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50 shadow-lg"
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Admission Request
                    </>
                  )}
                </button>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-center font-medium text-yellow-800">
                    ⚡ <strong>Immediate Response:</strong> We'll call you within 30 minutes to schedule your FREE DEMO CLASS
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;