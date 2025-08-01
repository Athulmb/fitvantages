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
      className="flex-shrink-0 relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] h-[360px] bg-white/5 rounded-3xl overflow-hidden backdrop-blur-md border border-white/10 shadow-xl flex flex-col items-center pt-20 pb-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105  snap-start"
      onClick={onClick}
    >
      {/* Background Title */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase text-white opacity-20 tracking-wider drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
          {sport.title}
        </h1>
      </div>
      
      {/* Top Image */}
      <div className="absolute -top-10 z-10">
        <img
          src={sport.image}
          alt={sport.title}
          className="w-28 h-28 object-contain"
        />
      </div>
      
      {/* Footer Text */}
      <div className="relative z-20 mt-auto w-full bg-transparent backdrop-blur-md p-4 rounded-b-3xl text-center">
        <h2 className="text-lg font-bold">{sport.title}</h2>
      </div>
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
    <section className="w-full py-20 bg-black text-white text-center">
      <div className="relative px-4 sm:px-10 lg:px-20 py-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 italic text-center">
          Explore <span className="text-green-400 not-italic">Sports Format</span>
        </h2>

       

        {/* Sports Scroll Area */}
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
          
          <div className="inline-flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 w-max pb-4 px-4">
            {sports.map((sport) => (
              <SportsCard
                key={sport.id}
                sport={sport}
                onClick={() => handleSportClick(sport)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsFormat;