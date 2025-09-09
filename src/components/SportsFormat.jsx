import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sports = [
  { id: 1, title: "Badminton", image: "/badminton.png" },
  { id: 2, title: "Swimming", image: "/swimming.png" },
  { id: 3, title: "Football", image: "/football.png" },
  { id: 4, title: "Badminton", image: "/badminton.png" },
  { id: 5, title: "Swimming", image: "/swimming.png" },
  { id: 6, title: "Football", image: "/football.png" },
];

const SportsCard = ({ sport, onClick }) => {
  return (
    <div 
      className="flex-shrink-0 relative w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] h-[360px] 
      bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl cursor-pointer 
      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl snap-start 
      border border-gray-700 flex flex-col items-center justify-center overflow-hidden"
      onClick={onClick}
    >
      {/* Background Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white/10 tracking-tight select-none">
  {sport.title}
</h1>

      </div>
      
      {/* Main Sport Image - Centered */}
      <img
        src={sport.image}
        alt={sport.title}
        className="h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] object-contain z-20 drop-shadow-2xl"
      />

      {/* Bottom Title Section */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-left tracking-wide">
          {sport.title}
        </h2>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-40"></div>
    </div>
  );
};


const SportsFormat = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSportClick = (sport) => {
    console.log("Selected sport:", sport.title);
    // Add your navigation logic here
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-black text-white">
      <div className="relative px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
          Explore <span className="text-green-400 italic">Sports Format</span>
        </h2>
        
        {/* Navigation Buttons - Hidden on mobile */}
        <button
          onClick={scrollLeft}
          className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={scrollRight}
          className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Sports Scroll Area */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="inline-flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 w-max pb-4 px-2 sm:px-4">
            {sports.map((sport) => (
              <SportsCard
                key={sport.id}
                sport={sport}
                onClick={() => handleSportClick(sport)}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex space-x-2">
            {sports.slice(0, 3).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-white/30 rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsFormat;