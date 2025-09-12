import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";
import { CENTER_API } from "../config"; // import your API

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const CenterSlider = () => {
  const swiperRef = useRef(null);
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const res = await axios.get(CENTER_API);
        if (res.data.success) {
          setCenters(res.data.centers || []); // adapt based on backend response
        }
      } catch (error) {
        console.error("Error fetching centers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCenters();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-8 text-center text-white">
        Loading centers...
      </section>
    );
  }

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-black text-white text-center font-lufga">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
        Centers near you{" "}
        <span className="underline underline-offset-2 sm:underline-offset-4">
          Dubai ▼
        </span>
      </h2>

      <Swiper
        ref={swiperRef}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        speed={600}
        allowTouchMove={true}
        threshold={30}
        longSwipes={false}
        shortSwipes={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          el: ".swiper-custom-pagination",
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15, effect: "slide", centeredSlides: true },
          375: { slidesPerView: 1, spaceBetween: 20, effect: "slide", centeredSlides: true },
          480: { slidesPerView: 1, spaceBetween: 20, effect: "slide", centeredSlides: true },
          640: { slidesPerView: 1.2, spaceBetween: 25, effect: "slide", centeredSlides: true },
          768: { slidesPerView: 1.5, spaceBetween: 30, effect: "slide", centeredSlides: true },
          1024: { slidesPerView: 2.5, spaceBetween: 30, effect: "coverflow", centeredSlides: true },
          1280: { slidesPerView: 3, spaceBetween: 40, effect: "coverflow", centeredSlides: true },
          1536: { slidesPerView: 3, spaceBetween: 50, effect: "coverflow", centeredSlides: true },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {centers.map((center, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`relative 
              w-[260px] xs:w-[280px] sm:w-[300px] md:w-[320px] lg:w-[360px] xl:w-[380px] 2xl:w-[400px]
              h-[480px] sm:h-[500px] md:h-[520px] lg:h-[540px] xl:h-[560px]
              rounded-lg sm:rounded-xl 
              overflow-hidden 
              bg-white/10
              backdrop-blur-lg
              border border-white/20
              shadow-xl sm:shadow-2xl
              transition-all duration-300 ease-in-out 
              flex flex-col
              mx-auto
              hover:shadow-3xl
              before:absolute before:inset-0 before:bg-white/5 before:rounded-lg sm:before:rounded-xl`}
            >
              {/* Top Image Section */}
              <div className="relative h-[320px] sm:h-[320px] md:h-[325px] lg:h-[345px] xl:h-[365px] z-10">
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                  <span className="bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium border border-white/20">
                    DAILY CLASSES
                  </span>
                </div>
                <img
                  src={center.image.startsWith("http") ? center.image : `${CENTER_API.replace("/api/centers","")}${center.image}`}
                  alt={center.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Bottom Section */}
              <div className="relative z-20 flex-shrink-0 flex flex-col">
                <div className="h-[120px] sm:h-[130px] md:h-[140px] px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 bg-black/30 backdrop-blur-xl border-t border-white/20 text-left">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-lg leading-tight">
                    {center.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1 sm:mt-2 flex items-center gap-1 drop-shadow-sm">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white/80 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9l-4.95 4.95a.75.75 0 01-1.06 0L5.05 13.95a7 7 0 010-9.9zm7.9 1.414a5.5 5.5 0 10-7.778 7.778L10 17.828l4.828-4.828a5.5 5.5 0 000-7.778z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="truncate">{center.location}</span>
                  </p>
                </div>
                <button
                  className="w-full h-[44px] sm:h-[48px] md:h-[52px] backdrop-blur-xl border-t border-white/20 text-white text-xs sm:text-sm font-medium flex items-center justify-center rounded-b-lg sm:rounded-b-xl cursor-pointer hover:bg-white/20 active:bg-white/30 transition-all duration-200 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                  onClick={() => console.log(`Booking ${center.title}`)}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="swiper-custom-pagination mt-6 sm:mt-8 md:mt-10 flex justify-center gap-1 sm:gap-2 px-4">
        <style jsx>{`
          .swiper-custom-pagination .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
            background: rgba(255, 255, 255, 0.3) !important;
            opacity: 1 !important;
            transition: all 0.3s ease !important;
            border-radius: 50% !important;
            margin: 0 4px !important;
          }
          .swiper-custom-pagination .swiper-pagination-bullet-active {
            background: white !important;
            transform: scale(1.2) !important;
          }
          @media (min-width: 640px) {
            .swiper-custom-pagination .swiper-pagination-bullet {
              width: 10px !important;
              height: 10px !important;
              margin: 0 6px !important;
            }
          }
          @media (min-width: 1024px) {
            .swiper-custom-pagination .swiper-pagination-bullet {
              width: 12px !important;
              height: 12px !important;
              margin: 0 8px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default CenterSlider;
