import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaCalendarAlt, FaRegClock, FaPlay, FaTimes } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./blogslider.css";

const slides = [
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/workout-morning-1566312037.jpg",
    tag: "Fitness",
    date: "May 12, 2023",
    time: "7 min read",
    title:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/workout-morning-1566312037.jpg",
    tag: "Workout",
    date: "May 12, 2023",
    time: "7 min read",
    title: "Another Inspiring Title For The Carousel Display",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/workout-morning-1566312037.jpg",
    tag: "Health",
    date: "May 12, 2023",
    time: "7 min read",
    title: "Training Tips For Building Muscle And Strength Fast",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
];

const BlogSlider = () => {
  const [playing, setPlaying] = useState(null); // currently playing video
  const [activeIndex, setActiveIndex] = useState(0); // currently active slide
  const swiperRef = useRef(null);

  const handleSidebarClick = (index) => {
    swiperRef.current?.slideTo(index);
    setPlaying(null); // reset video when switching
  };

  return (
    <div className="text-white py-10 flex flex-col lg:flex-row gap-8">
      {/* LEFT SLIDER */}
      <div className="lg:w-2/3 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setPlaying(null); // stop video on slide change
          }}
          className="rounded-lg overflow-hidden h-full custom-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[560px] md:h-[600px] w-full">
                {playing === index ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={`${slide.videoUrl}?autoplay=1`}
                      title="video"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    ></iframe>
                    {/* Close button */}
                    <button
                      onClick={() => setPlaying(null)}
                      className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={slide.image}
                      alt="slide"
                      className="object-cover w-full h-full"
                    />
                    <button
                      onClick={() => setPlaying(index)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40"
                    >
                      <FaPlay className="text-white text-5xl bg-red-600 p-4 rounded-full" />
                    </button>
                    {/* Overlay only on thumbnail */}
                    <div className="absolute bottom-8 p-6 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                        {slide.tag}
                      </span>
                      <div className="flex items-center text-sm mt-2 text-gray-300 space-x-4">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-white" /> {slide.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaRegClock className="text-white" /> {slide.time}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold mt-2">
                        {slide.title}
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="lg:w-1/3 flex flex-col justify-between gap-4">
        {slides.map((item, index) => {
          const isActive = index === activeIndex; // highlight current
          return (
            <div
              key={index}
              onClick={() => handleSidebarClick(index)}
              className={`flex flex-col gap-3 border-b border-gray-600 pb-6 cursor-pointer p-2 rounded transition-all ${
                isActive ? "bg-green-400 scale-105" : "hover:bg-gray-800/40"
              }`}
            >
              <div className="flex gap-4 items-start">
                <img
                  src={item.image}
                  alt="thumb"
                  className="w-24 h-20 rounded-md object-cover"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-sm font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-400 mt-2 gap-4">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-white text-[10px]" />
                      {item.date}
                    </span>
                    <span className="border-r border-gray-500 h-4"></span>
                    <span className="flex items-center gap-1">
                      <FaRegClock className="text-white text-[10px]" />
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSlider;
