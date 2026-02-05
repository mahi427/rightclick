import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Helmet } from "react-helmet-async";

<Helmet>
  <link rel="canonical" href="https://rightclickinstitute.in/" />
</Helmet>

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Results', href: '#results' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo on Left */}
          <div className="flex items-center space-x-3">
            <div className="text-left">
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-blue-800">RIGHT</span>
                  <span className="text-2xl font-bold text-red-600 ml-1">CLICK</span>
                </div>
                <div className="text-xs text-gray-600 mt-[-2px]">INSTITUTE FOR MATHEMATICS</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            {/* Contact Info in Navbar */}
            <div className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg ml-4">
              <Phone size={18} />
              <a href="tel:9888144156" className="font-semibold">
                98881 44156
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t">
                <a href="tel:9888144156" className="flex items-center space-x-2 text-blue-600 font-semibold">
                  <Phone size={18} />
                  <span>98881 44156</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;