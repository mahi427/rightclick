import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import AnimatedHeader from './components/AnimatedHeader';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';
import LoadingAnimation from './components/LoadingAnimation';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
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
          
          <Routes>
            {/* Home page - contains all sections */}
            <Route path="/" element={<Home />} />
            
            {/* Other pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/class/:className/notes" element={<ClassNotes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
          
          <Footer />
          <ChatButton />
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
