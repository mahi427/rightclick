import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-400">RIGHT</span>{' '}
              <span className="text-red-400">CLICK</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Premier mathematics coaching institute in Jalandhar since 2007.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Classes</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/class/9th/notes" className="hover:text-white">9th Class</Link></li>
              <li><Link to="/class/10th/notes" className="hover:text-white">10th Class</Link></li>
              <li><Link to="/class/11th/notes" className="hover:text-white">11th Class</Link></li>
              <li><Link to="/class/12th/notes" className="hover:text-white">12th Class</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:9888144156">98881 44156</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@rightclickinstitute.com">info@rightclickinstitute.com</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Central Town, Jalandhar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Right Click Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;