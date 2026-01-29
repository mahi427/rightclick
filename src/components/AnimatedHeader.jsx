import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Calculator, Brain, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
      transition={{ type: "spring", stiffness: 120 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        bg-white/20 backdrop-blur-xl
        border-b border-white/20
        ${scrolled ? "shadow-xl" : ""}
      `}
    >
      {/* glass highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 pointer-events-none" />

      {/* HEADER CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-6 h-[110px] flex items-center">
        <div className="flex justify-between items-center w-full">

          {/* LOGO */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.03 }}
          >
           <img
              src="/images/1.png"
              alt="Right Click Institute"
              className="
                w-auto object-contain
                h-[65px]
                sm:h-[60px]
                md:h-[30px]
                lg:h-[80px]
              "
            />

            {/* floating icons */}
            <motion.div
              className="hidden md:flex space-x-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Calculator className="w-6 h-6 text-blue-600" />
              <Brain className="w-6 h-6 text-red-600" />
              <Award className="w-6 h-6 text-yellow-500" />
            </motion.div>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-gray-800 font-medium
                  px-4 py-2 rounded-full
                  hover:bg-white/30
                  transition
                "
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </a>
            ))}

            {/* PHONE BUTTON */}
            <a
              href="tel:9888144156"
              className="
                flex items-center gap-2
                bg-gradient-to-r from-blue-600 to-red-600
                text-white px-6 py-3 rounded-full
                font-bold whitespace-nowrap
                shadow-md hover:shadow-xl
                transition
              "
            >
              <Phone className="w-5 h-5" />
              98881 44156
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="
              md:hidden
              bg-white/20 backdrop-blur-xl
              border-t border-white/20
            "
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block text-gray-800
                    px-4 py-2 rounded-lg
                    hover:bg-white/30
                    transition
                  "
                >
                  {item.icon} {item.name}
                </a>
              ))}

              <a
                href="tel:9888144156"
                className="
                  flex justify-center items-center gap-2
                  bg-gradient-to-r from-blue-600 to-red-600
                  text-white py-3 rounded-full
                  font-bold
                "
              >
                <Phone />
                98881 44156
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* bottom gradient line */}
      <div className="h-[3px] bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500" />
    </motion.header>
  );
};

export default AnimatedHeader;
