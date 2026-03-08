import React, { useState, useRef, useEffect } from 'react';
import { Phone, Menu, X, User, LogOut, ChevronDown, BookOpen, Crown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const classes = [
    { name: '9th Class', path: '/class/9th', icon: '🔢' },
    { name: '10th Class', path: '/class/10th', icon: '📐' },
    { name: '11th Class', path: '/class/11th', icon: '📈' },
    { name: '12th Class', path: '/class/12th', icon: '🎯' }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Results', path: '/#results' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/#contact' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsClassDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      // Handle anchor links
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      navigate('/');
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo on Left */}
          <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="text-left">
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-blue-800">RIGHT</span>
                  <span className="text-2xl font-bold text-red-600 ml-1">CLICK</span>
                </div>
                <div className="text-xs text-gray-600 mt-[-2px]">INSTITUTE FOR MATHEMATICS</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Regular nav items */}
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}

            {/* Classes Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                <BookOpen className="w-4 h-4 mr-1" />
                <span>Classes</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isClassDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isClassDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                  {classes.map((cls) => (
                    <Link
                      key={cls.name}
                      to={cls.path}
                      className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsClassDropdownOpen(false)}
                    >
                      <span className="text-xl mr-3">{cls.icon}</span>
                      <span className="font-medium">{cls.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* User Section */}
            {user ? (
              <div className="flex items-center space-x-4 ml-4">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <User size={18} />
                  <span>{user.name?.split(' ')[0] || 'User'}</span>
                </Link>
                {user.subscription?.isActive && (
                  <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    <Crown className="w-4 h-4" />
                    <span>Premium</span>
                  </div>
                )}
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4 ml-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Phone Number */}
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
              {/* Regular nav items */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}

              {/* Classes in mobile */}
              <div className="border-t pt-4">
                <p className="font-bold text-gray-700 mb-2">Classes</p>
                {classes.map((cls) => (
                  <Link
                    key={cls.name}
                    to={cls.path}
                    className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">{cls.icon}</span>
                    <span>{cls.name}</span>
                  </Link>
                ))}
              </div>

              {/* User section in mobile */}
              <div className="border-t pt-4">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 py-2 text-blue-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={18} />
                      <span>Dashboard</span>
                    </Link>
                    {user.subscription?.isActive && (
                      <div className="flex items-center space-x-1 text-yellow-600 py-2">
                        <Crown className="w-4 h-4" />
                        <span className="text-sm">Premium Member</span>
                      </div>
                    )}
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 py-2 text-red-600 font-medium"
                    >
                      <LogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      className="block text-center py-2 text-blue-600 font-medium border border-blue-600 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block text-center py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>

              {/* Phone in mobile */}
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