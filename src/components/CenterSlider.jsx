import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const centers = [
    {
        title: "Mass Fitness",
        location: "Jumeirah",
    },
    {
        title: "Power Hub",
        location: "Deira",
    },
    {
        title: "Flex Zone",
        location: "Marina",
    },
    {
        title: "Core Station",
        location: "Al Quoz",
    },
    {
        title: "Prime Fit",
        location: "Business Bay",
    },
];

const CenterSlider = () => {
    const swiperRef = useRef(null);

    return (
        <section className="w-full py-20 bg-black text-white text-center font-lufga">
            <h2 className="text-4xl font-bold mb-12">
                Centers near you <span className="underline underline-offset-4">Dubai ▼</span>
            </h2>

            <Swiper
                ref={swiperRef}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                speed={600}
                allowTouchMove={true}
                threshold={50}
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
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        effect: "slide",
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        effect: "slide",
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 25,
                        effect: "slide",
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        effect: "slide",
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        effect: "coverflow",
                    },
                }}
                modules={[EffectCoverflow, Pagination]}
                className="w-full max-w-6xl px-4 sm:px-6"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {centers.map((center, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div
                            className={`relative 
                                w-[280px]         // mobile width
                                sm:w-[320px]      // small screens
                                md:w-[340px]      // medium screens
                                lg:w-[380px]      // large screens
                                xl:w-[400px]      // extra large screens
                                h-[480px]         // slightly reduced height for mobile
                                sm:h-[500px]      // original height for larger screens
                                rounded-xl overflow-hidden 
                                bg-white/10
                                backdrop-blur-lg
                                border border-white/20
                                shadow-2xl
                                transition-all duration-300 ease-in-out 
                                flex flex-col
                                mx-auto
                                before:absolute before:inset-0 before:bg-white/5 before:rounded-xl`}
                        >
                            {/* Top (Image/Label) */}
                            <div className="flex-1 relative z-10">
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium border border-white/20">
                                        DAILY CLASSES
                                    </span>
                                </div>
                                {/* Optional image with glassmorphism overlay */}
                                <div className="w-full h-full relative">
                                    <img src="/Rectangle 40.png" alt="Center" className="w-full h-full object-cover opacity-80" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            {/* Bottom fixed content + BOOK NOW */}
                            <div className="shrink-0 z-10">
                                <div className="h-[140px] px-4 sm:px-6 py-4 sm:py-6 bg-black/30 backdrop-blur-xl border-t border-white/20 text-left">
                                    <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-lg">{center.title}</h3>
                                    <p className="text-xs sm:text-sm text-white/90 mt-2 flex items-center gap-1 drop-shadow-sm">
                                        <svg
                                            className="w-3 h-3 sm:w-4 sm:h-4 text-white/80"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9l-4.95 4.95a.75.75 0 01-1.06 0L5.05 13.95a7 7 0 010-9.9zm7.9 1.414a5.5 5.5 0 10-7.778 7.778L10 17.828l4.828-4.828a5.5 5.5 0 000-7.778z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {center.location}
                                    </p>
                                </div>
                                <div
                                    className="h-[48px] sm:h-[52px] backdrop-blur-xl border-t border-white/20 text-white text-xs sm:text-sm font-medium flex items-center justify-center rounded-b-xl cursor-pointer hover:bg-white/20 transition-all duration-200 bg-white/10"
                                >
                                    BOOK NOW
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination */}
            <div className="swiper-custom-pagination mt-8 sm:mt-10 flex justify-center gap-2"></div>
        </section>
    );
};

export default CenterSlider;