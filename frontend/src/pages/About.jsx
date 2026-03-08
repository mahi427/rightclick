import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Target, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">About</span>{' '}
            <span className="text-red-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Right Click Institute - Excellence in Mathematics Education Since 2007
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To provide quality mathematics education to students from 9th to 12th standard, 
              helping them build strong foundations and excel in their academic journey.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">15+ Years</h3>
                  <p className="text-gray-600">of teaching excellence</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold">5000+ Students</h3>
                  <p className="text-gray-600">trained successfully</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold">All Boards</h3>
                  <p className="text-gray-600">CBSE, ICSE, PSEB</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold">JEE Focus</h3>
                  <p className="text-gray-600">Special coaching for IIT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-gray-700">
                  151/4 Central Town, Near Mata Rani Chowk, Jalandhar, Punjab 144001
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                <a href="tel:9888144156" className="text-gray-700 hover:text-blue-600">
                  98881 44156
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;