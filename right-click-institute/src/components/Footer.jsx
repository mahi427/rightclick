import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold mb-2">
                <span className="text-blue-300">RIGHT</span>
                <span className="text-red-300"> CLICK</span>
              </div>
              <div className="text-sm text-gray-300">INSTITUTE FOR MATHEMATICS</div>
            </div>
            <p className="text-gray-300 text-sm">
              Premier mathematics coaching institute in Jalandhar since 2007, 
              specializing in 9th, 10th, +1, and +2 standards.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  151/4 Central Town, Near Mata Rani Chowk, Jalandhar, Punjab 144001
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                <a href="tel:9888144156" className="text-gray-300 text-sm hover:text-blue-300">
                  98881 44156
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                <a href="mailto:info@rightclickinstitute.com" className="text-gray-300 text-sm hover:text-blue-300">
                  info@rightclickinstitute.com
                </a>
              </div>
            </div>
          </div>

          {/* Classes Offered */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Classes Offered</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-800/30 p-2 rounded text-center text-sm">
                9th Standard
              </div>
              <div className="bg-red-800/30 p-2 rounded text-center text-sm">
                10th Standard
              </div>
              <div className="bg-blue-800/30 p-2 rounded text-center text-sm">
                +1 (11th)
              </div>
              <div className="bg-red-800/30 p-2 rounded text-center text-sm">
                +2 (12th)
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://facebook.com/rightclickinstitute" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/rightclickinstitute" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white rounded-full flex items-center justify-center transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@rightclickinstitute" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center mt-4">
              <Clock className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-300 text-sm">
                Mon-Sat: 9:00 AM - 8:30 PM
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Right Click Institute. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Established in 2007 • Over 5000+ Students Trained • 98% Success Rate
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Designed for Mathematics Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;