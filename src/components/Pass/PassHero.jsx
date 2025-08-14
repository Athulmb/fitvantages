import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face" },
  { id: 2, src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=300&fit=crop" },
  { id: 3, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face" },
  { id: 4, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
  { id: 5, src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face" },
];

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div 
        className="relative overflow-hidden  bg-gray-900 shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={image.id} className="w-full flex-shrink-0">
              <div className="relative">
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>


      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-green-500 scale-125"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail navigation (hidden on mobile) */}
      <div className="hidden md:flex justify-center mt-6 space-x-2 lg:space-x-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
              currentIndex === index
                ? "ring-2 ring-green-500 scale-110"
                : "opacity-60 hover:opacity-80"
            }`}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-12 lg:w-20 lg:h-16 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const VantagePassSection = () => {
  return (
    <section className="bg-black text-white min-h-screen px-3 sm:px-4 md:px-8 lg:px-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-32 flex flex-col flex-grow">
        {/* Heading */}
        <div className="text-center md:text-left mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Vantage Pass
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 max-w-4xl mx-auto md:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto md:mx-0">
            Look at the following presentation to know why.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex-grow flex items-center justify-center mb-8 sm:mb-12">
          <SimpleCarousel />
        </div>
      </div>

      {/* Bottom Text & Buttons */}
      <div className="text-center pb-8 sm:pb-12 px-4">
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          Interested in joining the Vantage Pass network or knowing more?
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto min-w-[200px] px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-full transition-all duration-300 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
            CONTACT US
          </button>
          <button className="w-full sm:w-auto min-w-[200px] px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
            DOWNLOAD BROCHURE
          </button>
        </div>
      </div>
    </section>
  );
};

export default VantagePassSection;