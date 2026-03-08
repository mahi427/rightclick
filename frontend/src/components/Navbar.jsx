import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, BookOpen, User, 
  LogOut, LogIn, UserPlus, LayoutDashboard 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, login, signup, logout, userClass } = useAuth();

  const classes = ['9th', '10th', '11th', '12th'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownEnter = (className) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(className);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={() => handleNavigation('/')}
          >
            <div className="text-2xl font-bold">
              <span className="text-blue-600">RIGHT</span>
              <span className="text-red-600"> CLICK</span>
            </div>
            <span className="text-xs text-gray-500 hidden sm:block">INSTITUTE</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-gray-50 ${
                  location.pathname === item.path ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </Link>
            ))}

            {/* Class Dropdowns */}
            <div className="flex items-center space-x-1" ref={dropdownRef}>
              {classes.map((className) => (
                <div
                  key={className}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(className)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${
                      location.pathname.includes(`/class/${className.toLowerCase()}`) 
                        ? 'text-blue-600 font-semibold bg-blue-50' 
                        : 'text-gray-700'
                    }`}
                  >
                    <span>Class {className}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === className ? 'rotate-180' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === className && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                        onMouseEnter={() => handleDropdownEnter(className)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <Link
                          to={`/class/${className.toLowerCase()}/notes`}
                          className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors"
                          onClick={() => handleNavigation(`/class/${className.toLowerCase()}/notes`)}
                        >
                          <BookOpen className="w-4 h-4 mr-3 text-blue-600" />
                          <span className="font-medium">Practice Notes</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 ml-4">
              {isAuthenticated ? (
                <>
                  <div className="relative group">
                    <button className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg font-medium">
                      <User className="w-4 h-4" />
                      <span>{user?.user_metadata?.full_name || 'Student'}</span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-3 border-b">
                        <p className="text-sm text-gray-600">Class {userClass}</p>
                        <p className="text-xs text-gray-400">{user?.email}</p>
                      </div>
                      <Link
                        to="/dashboard"
                        className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleNavigation('/dashboard')}
                      >
                        <LayoutDashboard className="w-4 h-4 mr-3 text-blue-600" />
                        <span>Dashboard</span>
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full flex items-center px-4 py-3 hover:bg-red-50 transition-colors text-red-600 border-t"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={login}
                    className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={signup}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Sign Up</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.name}
                  </Link>
                ))}

                {classes.map((className) => (
                  <div key={className} className="space-y-1">
                    <div className="px-4 py-2 font-semibold text-gray-900">
                      Class {className}
                    </div>
                    <Link
                      to={`/class/${className.toLowerCase()}/notes`}
                      className="block px-8 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                      onClick={() => handleNavigation(`/class/${className.toLowerCase()}/notes`)}
                    >
                      📚 Practice Notes
                    </Link>
                  </div>
                ))}

                {/* Mobile Auth */}
                {isAuthenticated ? (
                  <div className="pt-4 border-t space-y-2">
                    <div className="px-4 py-2 bg-gray-50 rounded-lg">
                      <p className="font-medium">{user?.user_metadata?.full_name || 'Student'}</p>
                      <p className="text-sm text-gray-500">Class {userClass}</p>
                    </div>
                    <Link
                      to="/dashboard"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                      onClick={() => handleNavigation('/dashboard')}
                    >
                      <LayoutDashboard className="w-4 h-4 mr-3" />
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t space-y-2">
                    <button
                      onClick={login}
                      className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg w-full"
                    >
                      <LogIn className="w-4 h-4 mr-3" />
                      Login
                    </button>
                    <button
                      onClick={signup}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg w-full"
                    >
                      <UserPlus className="w-4 h-4 mr-3" />
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;