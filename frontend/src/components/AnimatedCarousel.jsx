import React from "react";

// Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper Modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const AnimatedCarousel = () => {
  const slides = [
    "/images/classroom/class1.jpeg",
    "/images/classroom/class2.jpeg",
    "/images/classroom/class3.jpeg",
    "/images/classroom/class4.jpeg",
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              {/* ✅ Proper Image Container */}
              <div className="w-full h-[320px] sm:h-[400px] md:h-[450px]">
                <img
                  src={img}
                  alt={`Classroom Slide ${index + 1}`}
                  className="
                    w-full 
                    h-full 
                    object-cover 
                    object-center
                    rounded-2xl
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AnimatedCarousel;
