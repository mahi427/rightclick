import React from "react";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const AnimatedCarousel = () => {
  return (
    <section className="w-full max-w-6xl mx-auto mt-10 rounded-3xl overflow-hidden shadow-xl">
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-3xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-[400px] flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-pink-600 text-white">
            <h1 className="text-5xl font-extrabold">
              FREE DEMO CLASS
            </h1>
            <p className="mt-4 text-xl">
              Experience Our Methodology
            </p>
            <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-bold">
              Book Free Demo Class
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-[400px] flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h1 className="text-5xl font-extrabold">
              CLASSES 9th - 12th
            </h1>
            <p className="mt-4 text-xl">
              Specialized Mathematics Coaching
            </p>
            <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-bold">
              Join Now
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-[400px] flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-teal-600 text-white">
            <h1 className="text-5xl font-extrabold">
              5000+ Students
            </h1>
            <p className="mt-4 text-xl">
              Trusted in Jalandhar
            </p>
            <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-bold">
              Contact Us
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default AnimatedCarousel;
