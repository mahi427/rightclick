import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import AnimatedHeader from './components/AnimatedHeader';
import AnimatedHero from './components/AnimatedHero';
import AnimatedCarousel from './components/AnimatedCarousel';
import AnimatedPrograms from './components/AnimatedPrograms';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import VideoIntro from './components/VideoIntro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import About from './components/About';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Add this component inside your Router
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// Then in your App component, add it inside Router:
<Router>
  <ScrollToTop />
  {/* rest of your app */}
</Router>

// New Pages for PDF Notes
import ClassNotes from './pages/ClassNotes';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen overflow-x-hidden">
          <LoadingAnimation />
          <AnimatedHeader />
          
          {/* Routes for different pages */}
          <Routes>
            {/* Main Home Page - includes all sections */}
            <Route path="/" element={
              <>
                <AnimatedHero />
                <AnimatedCarousel />
                <About />
                <AnimatedPrograms />
                <Results />
                <Testimonials />
                <VideoIntro />
                <Contact />
              </>
            } />
            
            {/* About Page */}
            <Route path="/about" element={<About />} />
            
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
            
            {/* PDF Notes Pages */}
            <Route path="/class/:className/notes" element={<ClassNotes />} />
            
            {/* Authentication Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Dashboard */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
          
          <Footer />
          <Toaster position="top-right" />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

// import React from 'react';
// import AnimatedHeader from './components/AnimatedHeader';
// import AnimatedHero from './components/AnimatedHero';
// import AnimatedCarousel from './components/AnimatedCarousel';
// import AnimatedPrograms from './components/AnimatedPrograms';
// import Results from './components/Results';
// import Testimonials from './components/Testimonials';
// import VideoIntro from './components/VideoIntro';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import LoadingAnimation from './components/LoadingAnimation';
// import About from './components/About';

// function App() {
//   return (
//     <div className="min-h-screen overflow-x-hidden">
//       <LoadingAnimation />
//       <AnimatedHeader />
//       <AnimatedHero />
//       <AnimatedCarousel />
//       <About/>
//       <AnimatedPrograms />
//       <Results />
//       <Testimonials />
//       <VideoIntro />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
