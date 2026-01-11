import React from 'react';
import { ChevronLeft, ChevronRight, MapPin, Phone, Star, Users, Award } from 'lucide-react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    {
      image: "/images/1.webp",
      title: "RIGHT CLICK INSTITUTE",
      description: "For Mathematics Classes - 9th, 10th, +1 & +2",
      address: "151/4 Central Town Near Mata Rani Chowk, Jalandhar",
      phone: "9888144156"
    },
    {
      image: "/images/2.webp",
      title: "RIGHT FOR 9th & 10th",
      description: "MATHS & SCIENCE | FOR +1 & +2 MATHEMATICS",
      address: "Centre: 151/4 Central Town, Near Mata Rani Chowk, Jal.",
      phone: "98881-44156"
    },
    {
      image: "/images/3.webp",
      title: "ACHIEVERS OF YEAR 2024-25",
      description: "CLASSES-9TH, 10TH, +1, +2",
      achievements: "MORE THAN 30 STUDENTS SECURED OVER 75 MARKS",
      address: "151/4 Central Town, Jalandhar",
      phone: "9888144156"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-300 to-red-300 rounded-full opacity-10 blur-3xl"></div>
      
      {/* Mathematical pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="font-semibold">PREMIER INSTITUTE</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-blue-800">RIGHT</span>{' '}
            <span className="text-red-600">CLICK</span>{' '}
            <span className="text-blue-800">INSTITUTE</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Premier Mathematics Coaching Center in Central Town, Jalandhar
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            {/* Slides */}
            <div className="relative h-auto min-h-[500px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    currentSlide === index
                      ? 'opacity-100 translate-x-0 z-10'
                      : 'opacity-0 translate-x-full z-0'
                  }`}
                >
                  {/* Image Container with white background */}
                  <div className="absolute inset-0 bg-white flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-4xl max-h-[400px] flex items-center justify-center">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-auto h-auto max-w-full max-h-full object-contain shadow-lg rounded-lg"
                        style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzFlNDBhZiIvPjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SaWdodCBDbGljayBJbnN0aXR1dGU8L3RleHQ+PC9zdmc+";
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Overlay with info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8">
                    <div className="max-w-6xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-6 items-end">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {slide.title}
                          </h3>
                          <p className="text-lg text-white/90 mb-4">
                            {slide.description}
                          </p>
                          
                          {slide.achievements && (
                            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg inline-block">
                              <p className="font-bold">{slide.achievements}</p>
                            </div>
                          )}
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <div className="flex items-center gap-3 mb-3">
                            <MapPin className="w-5 h-5 text-yellow-300" />
                            <p className="text-white font-semibold">{slide.address}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-yellow-300" />
                            <p className="text-yellow-300 text-xl font-bold">
                              {slide.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110 hover:shadow-xl"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110 hover:shadow-xl"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-white w-8 shadow-lg'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="font-bold">{currentSlide + 1}</span>
              <span className="mx-1 opacity-70">/</span>
              <span className="opacity-70">{slides.length}</span>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl mb-6 mx-auto">
                  <Star className="w-10 h-10 text-blue-600" />
                </div>
                <div className="text-5xl font-bold text-blue-700 mb-3 text-center">5.0</div>
                <p className="font-bold text-gray-800 text-center text-lg mb-2">Google Rating</p>
                <p className="text-gray-600 text-center">29 Excellent Reviews</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-xl border border-red-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-100 to-red-200 rounded-2xl mb-6 mx-auto">
                  <Users className="w-10 h-10 text-red-600" />
                </div>
                <div className="text-5xl font-bold text-red-700 mb-3 text-center">500+</div>
                <p className="font-bold text-gray-800 text-center text-lg mb-2">Students Trained</p>
                <p className="text-gray-600 text-center">Since 2010</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-green-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl mb-6 mx-auto">
                  <Award className="w-10 h-10 text-green-600" />
                </div>
                <div className="text-5xl font-bold text-green-700 mb-3 text-center">95%</div>
                <p className="font-bold text-gray-800 text-center text-lg mb-2">Success Rate</p>
                <p className="text-gray-600 text-center">Board Exams 2024-25</p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 p-1 rounded-2xl shadow-2xl">
              <div className="bg-white rounded-xl p-2">
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                  <a
                    href="tel:9888144156"
                    className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Call Now: 98881 44156
                  </a>
                  <a
                    href="#contact"
                    className="group bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                  >
                    <span className="mr-3">📚</span>
                    Book Free Demo Class
                  </a>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-gray-600">
              Open Monday-Saturday: 9:00 AM - 8:30 PM
            </p>
            <p className="text-gray-500 text-sm mt-2">
              151/4 Central Town, Near Mata Rani Chowk, Jalandhar, Punjab 144001
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;