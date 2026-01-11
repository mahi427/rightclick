import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Institute Info */}
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold">
                <span className="text-blue-300">RIGHT</span>{' '}
                <span className="text-red-300">CLICK</span>{' '}
                <span className="text-blue-300">INSTITUTE</span>
              </div>
              <p className="text-gray-300 mt-1">For Mathematics Classes</p>
            </div>
            <p className="text-gray-300">
              Premier mathematics coaching institute in Jalandhar, specializing in 
              9th, 10th, +1, and +2 standards.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-300 mr-3" />
                <a href="tel:9888144156" className="hover:text-blue-300">
                  98881 44156
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-300 mr-3" />
                <span>151/4 Central Town, Near Mata Rani Chowk, Jalandhar</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-300 mr-3" />
                <span>Mon-Sat: 9:00 AM - 8:30 PM</span>
              </div>
            </div>
          </div>

          {/* Classes Offered */}
          <div>
            <h3 className="text-xl font-bold mb-4">Classes Offered</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-800/30 p-2 rounded text-center">
                9th Standard
              </div>
              <div className="bg-red-800/30 p-2 rounded text-center">
                10th Standard
              </div>
              <div className="bg-blue-800/30 p-2 rounded text-center">
                +1 (11th)
              </div>
              <div className="bg-red-800/30 p-2 rounded text-center">
                +2 (12th)
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Right Click Institute. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            151/4 Central Town, Near Mata Rani Chowk, Jalandhar, Punjab 144001
          </p>
          <p className="text-gray-500 text-sm mt-1">Phone: 98881 44156</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;