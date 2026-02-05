import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from "react-helmet-async";

<Helmet>
  <link rel="canonical" href="https://rightclickinstitute.in/" />
</Helmet>

const Carousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const initSwiper = async () => {
      if (window.Swiper) {
        const Swiper = window.Swiper;
        swiperRef.current = new Swiper('.swiper-container', {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    };

    initSwiper();

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const slides = [
    {
      title: "RIGHT CLICK INSTITUTE",
      subtitle: "For Mathematics Excellence",
      description: "Since 2007 | 5000+ Students Trained | 98% Success Rate",
      color: "from-blue-600 to-red-600",
    },
    {
      title: "CLASSES 9TH - 12TH",
      subtitle: "Specialized Mathematics Coaching",
      description: "Board Exams & JEE (IIT) Preparation",
      color: "from-blue-700 to-purple-700",
    },
    {
      title: "12 STUDENTS SCORED 100/100",
      subtitle: "Academic Year 2024-25",
      description: "30+ Students above 75 marks | 24 Students above 90 marks",
      color: "from-green-600 to-blue-600",
    },
    {
      title: "FREE DEMO CLASS",
      subtitle: "Experience Our Teaching Methodology",
      description: "Limited Seats Available | Call: 98881 44156",
      color: "from-red-600 to-yellow-600",
    },
  ];

  return (
    <section className="pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="swiper-container rounded-2xl overflow-hidden shadow-2xl">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                <div className={`min-h-[400px] bg-gradient-to-r ${slide.color} text-white flex items-center`}>
                  <div className="w-full text-center py-12 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-2xl md:text-3xl font-semibold mb-6">{slide.subtitle}</p>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">{slide.description}</p>
                    <div className="mt-8">
                      <a
                        href="#contact"
                        className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                      >
                        Book Free Demo Class
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="swiper-pagination"></div>
          
          {/* Navigation Buttons */}
          <div className="swiper-button-next">
            <ChevronRight className="w-8 h-8" />
          </div>
          <div className="swiper-button-prev">
            <ChevronLeft className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;