// import React, { useState, useEffect } from "react";
// import { Phone, Menu, X, Calculator, Brain, Award, BookOpen, User, LogOut, LogIn } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export const HEADER_HEIGHT = 80; // Increased slightly to accommodate larger logo

// const AnimatedHeader = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showClassDropdown, setShowClassDropdown] = useState(false);
//   const { isAuthenticated, user, logout } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // smooth scroll with offset
//   const handleAnchorClick = (e, targetId) => {
//     e.preventDefault();
//     const target = document.getElementById(targetId);
//     if (!target) return;

//     const y =
//       target.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;

//     window.scrollTo({ top: y, behavior: "smooth" });
//     setIsMenuOpen(false);
//   };

//   const navItems = [
//     { name: "Home", id: "home", icon: "🏠" },
//     { name: "Programs", id: "programs", icon: "📚" },
//     { name: "Results", id: "results", icon: "🏆" },
//     { name: "Testimonials", id: "testimonials", icon: "⭐" },
//     { name: "Contact", id: "contact", icon: "📞" },
//   ];

//   const classItems = ['9th', '10th', '11th', '12th'];

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 120 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300
//         bg-white/20 backdrop-blur-xl
//         border-b border-white/20
//         ${scrolled ? "shadow-md" : ""}
//       `}
//     >
//       {/* glass highlight */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 pointer-events-none" />

//       {/* HEADER CONTAINER */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-[80px] flex items-center">
//         <div className="flex justify-between items-center w-full">
//           {/* LOGO - FIXED SIZE */}
//           <motion.div
//             className="flex items-center gap-3 cursor-pointer"
//             whileHover={{ scale: 1.02 }}
//             onClick={(e) => handleAnchorClick(e, "home")}
//           >
//             <img
//               src="/images/1.png"
//               alt="Right Click Institute"
//               className="w-auto object-contain h-[70px] md:h-[80px]" // Larger logo
//             />

//             <motion.div
//               className="hidden md:flex space-x-2"
//               animate={{ rotate: [0, 360] }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             >
//               <Calculator className="w-6 h-6 text-blue-600" />
//               <Brain className="w-6 h-6 text-red-600" />
//               <Award className="w-6 h-6 text-yellow-500" />
//             </motion.div>
//           </motion.div>

//           {/* DESKTOP NAV */}
//           <nav className="hidden md:flex items-center gap-3">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={`#${item.id}`}
//                 onClick={(e) => handleAnchorClick(e, item.id)}
//                 className="
//                   text-gray-800 font-medium text-sm
//                   px-3 py-2 rounded-full
//                   hover:bg-white/30
//                   transition whitespace-nowrap
//                 "
//               >
//                 <span className="mr-1">{item.icon}</span>
//                 {item.name}
//               </a>
//             ))}

//             {/* Class Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setShowClassDropdown(true)}
//               onMouseLeave={() => setShowClassDropdown(false)}
//             >
//               <button
//                 className="
//                   flex items-center gap-1
//                   text-gray-800 font-medium text-sm
//                   px-3 py-2 rounded-full
//                   hover:bg-white/30
//                   transition whitespace-nowrap
//                 "
//               >
//                 <BookOpen className="w-4 h-4" />
//                 Classes
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               <AnimatePresence>
//                 {showClassDropdown && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -5 }}
//                     className="absolute top-full left-0 mt-1 w-40 bg-white/90 backdrop-blur-xl rounded-lg shadow-lg border border-white/30 overflow-hidden text-sm"
//                   >
//                     {classItems.map((cls) => (
//                       <Link
//                         key={cls}
//                         to={`/class/${cls}/notes`}
//                         className="block px-3 py-2 text-gray-800 hover:bg-white/50 transition-colors"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         Class {cls} Notes
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Auth Buttons */}
//             {isAuthenticated ? (
//               <div className="flex items-center gap-1">
//                 <Link
//                   to="/dashboard"
//                   className="
//                     flex items-center gap-1
//                     bg-gradient-to-r from-purple-600 to-blue-600
//                     text-white px-3 py-2 rounded-full text-sm
//                     font-medium
//                     shadow-sm hover:shadow-md
//                     transition whitespace-nowrap
//                   "
//                 >
//                   <User className="w-4 h-4" />
//                   {user?.name?.split(' ')[0] || 'Dashboard'}
//                 </Link>
//                 <button
//                   onClick={logout}
//                   className="
//                     flex items-center gap-1
//                     bg-white/30 text-gray-800
//                     px-2 py-2 rounded-full text-sm
//                     font-medium
//                     hover:bg-white/50
//                     transition
//                   "
//                 >
//                   <LogOut className="w-4 h-4" />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center gap-1">
//                 <Link
//                   to="/login"
//                   className="
//                     flex items-center gap-1
//                     bg-white/30 text-gray-800
//                     px-3 py-2 rounded-full text-sm
//                     font-medium
//                     hover:bg-white/50
//                     transition whitespace-nowrap
//                   "
//                 >
//                   <LogIn className="w-4 h-4" />
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="
//                     flex items-center gap-1
//                     bg-gradient-to-r from-blue-600 to-red-600
//                     text-white px-3 py-2 rounded-full text-sm
//                     font-medium
//                     shadow-sm hover:shadow-md
//                     transition whitespace-nowrap
//                   "
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             )}

//             {/* PHONE NUMBER */}
//             <a
//               href="tel:9888144156"
//               className="
//                 flex items-center gap-1
//                 bg-gradient-to-r from-blue-600 to-red-600
//                 text-white px-4 py-2 rounded-full text-sm
//                 font-semibold whitespace-nowrap
//                 shadow-sm hover:shadow-md
//                 transition
//               "
//             >
//               <Phone className="w-4 h-4" />
//               98881 44156
//             </a>
//           </nav>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-gray-800 p-1"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="md:hidden bg-white/20 backdrop-blur-xl border-t border-white/20"
//           >
//             <div className="px-4 py-3 space-y-2 text-sm">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={`#${item.id}`}
//                   onClick={(e) => handleAnchorClick(e, item.id)}
//                   className="block text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition"
//                 >
//                   {item.icon} {item.name}
//                 </a>
//               ))}

//               {/* Mobile Class Links */}
//               <div className="border-t border-white/30 pt-2 mt-2">
//                 <p className="text-gray-600 px-3 py-1 font-semibold text-xs">📚 CLASS NOTES</p>
//                 <div className="grid grid-cols-2 gap-1">
//                   {classItems.map((cls) => (
//                     <Link
//                       key={cls}
//                       to={`/class/${cls}/notes`}
//                       className="block text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition text-center text-sm"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Class {cls}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* Mobile Auth */}
//               <div className="border-t border-white/30 pt-2 mt-2">
//                 {isAuthenticated ? (
//                   <div className="space-y-1">
//                     <Link
//                       to="/dashboard"
//                       className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <User className="w-4 h-4" />
//                       Dashboard
//                     </Link>
//                     <button
//                       onClick={() => {
//                         logout();
//                         setIsMenuOpen(false);
//                       }}
//                       className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition w-full"
//                     >
//                       <LogOut className="w-4 h-4" />
//                       Logout
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="space-y-1">
//                     <Link
//                       to="/login"
//                       className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <LogIn className="w-4 h-4" />
//                       Login
//                     </Link>
//                     <Link
//                       to="/register"
//                       className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Sign Up
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Phone */}
//               <a
//                 href="tel:9888144156"
//                 className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white py-2 rounded-full font-bold text-sm mt-2"
//               >
//                 <Phone className="w-4 h-4" />
//                 98881 44156
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="h-[2px] bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500" />
//     </motion.header>
//   );
// };

// export default AnimatedHeader;

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Calculator, Brain, Award, BookOpen, User, LogOut, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const HEADER_HEIGHT = 80;

const AnimatedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation - works for both home page (with scroll) and other pages
  const handleNavigation = (path, sectionId = null) => {
    setIsMenuOpen(false);
    
    if (path === '/') {
      // If we're already on home page, just scroll to section
      if (location.pathname === '/') {
        if (sectionId) {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              const y = element.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }, 100);
        }
      } else {
        // Navigate to home page, then scroll after page loads
        navigate('/');
        if (sectionId) {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              const y = element.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }, 300);
        }
      }
    } else {
      // Navigate to other pages
      navigate(path);
    }
  };

  const navItems = [
    { name: "Home", path: '/', section: 'home' },
    { name: "Programs", path: '/', section: 'programs' },
    { name: "Results", path: '/', section: 'results' },
    { name: "Testimonials", path: '/', section: 'testimonials' },
    { name: "Contact", path: '/', section: 'contact' },
  ];

  const classItems = ['9th', '10th', '11th', '12th'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        bg-white/20 backdrop-blur-xl
        border-b border-white/20
        ${scrolled ? "shadow-md" : ""}
      `}
    >
      {/* glass highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 pointer-events-none" />

      {/* HEADER CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-[80px] flex items-center">
        <div className="flex justify-between items-center w-full">
          {/* LOGO */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavigation('/', 'home')}
          >
            <img
              src="/images/1.png"
              alt="Right Click Institute"
              className="w-auto object-contain h-[70px] md:h-[80px]"
            />

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
          <nav className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path, item.section)}
                className="
                  text-gray-800 font-medium text-sm
                  px-3 py-2 rounded-full
                  hover:bg-white/30
                  transition whitespace-nowrap
                "
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </button>
            ))}

            {/* Class Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowClassDropdown(true)}
              onMouseLeave={() => setShowClassDropdown(false)}
            >
              <button
                className="
                  flex items-center gap-1
                  text-gray-800 font-medium text-sm
                  px-3 py-2 rounded-full
                  hover:bg-white/30
                  transition whitespace-nowrap
                "
              >
                <BookOpen className="w-4 h-4" />
                Classes
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {showClassDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-full left-0 mt-1 w-40 bg-white/90 backdrop-blur-xl rounded-lg shadow-lg border border-white/30 overflow-hidden text-sm"
                  >
                    {classItems.map((cls) => (
                      <Link
                        key={cls}
                        to={`/class/${cls}/notes`}
                        className="block px-3 py-2 text-gray-800 hover:bg-white/50 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Class {cls} Notes
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="flex items-center gap-1">
                <Link
                  to="/dashboard"
                  className="
                    flex items-center gap-1
                    bg-gradient-to-r from-purple-600 to-blue-600
                    text-white px-3 py-2 rounded-full text-sm
                    font-medium
                    shadow-sm hover:shadow-md
                    transition whitespace-nowrap
                  "
                >
                  <User className="w-4 h-4" />
                  {user?.name?.split(' ')[0] || 'Dashboard'}
                </Link>
                <button
                  onClick={logout}
                  className="
                    flex items-center gap-1
                    bg-white/30 text-gray-800
                    px-2 py-2 rounded-full text-sm
                    font-medium
                    hover:bg-white/50
                    transition
                  "
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <Link
                  to="/login"
                  className="
                    flex items-center gap-1
                    bg-white/30 text-gray-800
                    px-3 py-2 rounded-full text-sm
                    font-medium
                    hover:bg-white/50
                    transition whitespace-nowrap
                  "
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
                <Link
                  to="/register"
                  className="
                    flex items-center gap-1
                    bg-gradient-to-r from-blue-600 to-red-600
                    text-white px-3 py-2 rounded-full text-sm
                    font-medium
                    shadow-sm hover:shadow-md
                    transition whitespace-nowrap
                  "
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* PHONE NUMBER */}
            <a
              href="tel:9888144156"
              className="
                flex items-center gap-1
                bg-gradient-to-r from-blue-600 to-red-600
                text-white px-4 py-2 rounded-full text-sm
                font-semibold whitespace-nowrap
                shadow-sm hover:shadow-md
                transition
              "
            >
              <Phone className="w-4 h-4" />
              98881 44156
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 p-1"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="md:hidden bg-white/20 backdrop-blur-xl border-t border-white/20"
          >
            <div className="px-4 py-3 space-y-2 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path, item.section)}
                  className="block w-full text-left text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition"
                >
                  {item.icon} {item.name}
                </button>
              ))}

              {/* Mobile Class Links */}
              <div className="border-t border-white/30 pt-2 mt-2">
                <p className="text-gray-600 px-3 py-1 font-semibold text-xs">📚 CLASS NOTES</p>
                <div className="grid grid-cols-2 gap-1">
                  {classItems.map((cls) => (
                    <Link
                      key={cls}
                      to={`/class/${cls}/notes`}
                      className="block text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition text-center text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Class {cls}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Auth */}
              <div className="border-t border-white/30 pt-2 mt-2">
                {isAuthenticated ? (
                  <div className="space-y-1">
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <Link
                      to="/login"
                      className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="w-4 h-4" />
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded-lg hover:bg-white/30 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Phone */}
              <a
                href="tel:9888144156"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white py-2 rounded-full font-bold text-sm mt-2"
              >
                <Phone className="w-4 h-4" />
                98881 44156
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[2px] bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500" />
    </motion.header>
  );
};

export default AnimatedHeader;