import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Calculator, Brain, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "Programs", href: "#programs", icon: "📚" },
    { name: "Results", href: "#results", icon: "🏆" },
    { name: "Testimonials", href: "#testimonials", icon: "⭐" },
    { name: "Contact", href: "#contact", icon: "📞" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-xl"
          : "bg-white shadow-lg"
      }`}
    >
      {/* HEADER HEIGHT FIXED */}
      <div className="max-w-7xl mx-auto px-6 h-[110px] flex items-center">
        <div className="flex justify-between items-center w-full">

          {/* LOGO SECTION */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/images/1.jpg"
              alt="Right Click Institute"
              className="
                w-auto object-contain
                h-[80px]
                sm:h-[60px]
                md:h-[30px]
                lg:h-[80px]
              "
            />

            {/* Floating Icons */}
            <motion.div
              className="hidden md:flex space-x-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Calculator className="w-6 h-6 text-blue-600" />
              <Brain className="w-6 h-6 text-red-600" />
              <Award className="w-6 h-6 text-yellow-600" />
            </motion.div>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-red-50 hover:from-blue-100 hover:to-red-100 transition font-medium"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}

            {/* PHONE BUTTON */}
            <a
              href="tel:9888144156"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-lg font-bold whitespace-nowrap shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              98881 44156
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden w-12 h-12 rounded-lg bg-gradient-to-r from-blue-50 to-red-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="p-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg bg-gray-100"
                >
                  {item.icon} {item.name}
                </a>
              ))}

              <a
                href="tel:9888144156"
                className="flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 rounded-lg font-bold"
              >
                <Phone />
                98881 44156
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GRADIENT LINE */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600" />
    </motion.header>
  );
};

export default AnimatedHeader;
