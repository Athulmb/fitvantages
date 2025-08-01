import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { id: 1, title: "Play Sports", image: "/sports.png" },
  { id: 2, title: "Gyms", image: "/Servicegym.png" },
  { id: 3, title: "Live Workouts", image: "/Liveworkout.png" },
  { id: 4, title: "Play Sports", image: "/sports.png" },
  { id: 5, title: "Gyms", image: "/Servicegym.png" },
  { id: 6, title: "Live Workouts", image: "/Liveworkout.png" },
];

const ServiceCard = ({ image, isCenter, onClick }) => {
  return (
    <div 
      className={`flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] h-[400px] bg-gradient-to-b from-red-50 to-gray-900 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-out hover:shadow-green-500/20 hover:shadow-2xl snap-start ${
        isCenter ? 'scale-110 z-10' : 'scale-95 opacity-70'
      }`}
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center p-8">
        <img
          src={image}
          alt="Service"
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

const ServiceCarousel = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [visibleCards, setVisibleCards] = useState(3);

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto-scroll to center the current item
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      const containerWidth = scrollRef.current.clientWidth;
      const scrollPosition = (currentIndex * cardWidth) - (containerWidth / 2) + (cardWidth / 2);
      
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleServiceClick = (service, index) => {
    setCurrentIndex(index);
    console.log("Selected service:", service.title);
    // Add your navigation logic here
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#010a04] to-[#07160b] text-white text-center font-sans">
      <div className="relative px-4 sm:px-10 lg:px-20 py-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          Service{" "}
          <span className="italic relative inline-block px-1">
            <span className="relative z-10 px-3 py-1">Category</span>
            <span
              className="absolute inset-0 -inset-y-1 border border-green-500 -skew-x-6 z-0"
              aria-hidden="true"
            ></span>
          </span>
        </h2>

        {/* Scroll Buttons */}
        <div className="absolute top-6 right-4 flex gap-2 z-20">
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Service Scroll Area */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            <div className="inline-flex space-x-6 w-max pb-4 px-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  isCenter={index === currentIndex}
                  onClick={() => handleServiceClick(service, index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Custom Pagination */}
        <div className="mt-10 flex justify-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-green-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;