import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Massive Upper body",
    subtitle: "7 Week · 5x/week",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Strength & Power",
    subtitle: "5 Week · 4x/week",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Shredded Physique",
    subtitle: "6 Week · 6x/week",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Endurance Boost",
    subtitle: "4 Week · 3x/week",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Fat Burn Express",
    subtitle: "3 Week · 5x/week",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Core Strength",
    subtitle: "4 Week · 4x/week",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
  },
];

const ProgramCard = ({ program, onClick }) => {
  return (
    <div 
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[320px] h-[320px] sm:h-[340px] md:h-[360px] rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-xl relative transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer snap-start"
      onClick={onClick}
    >
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-[240px] sm:h-[260px] md:h-[280px] object-cover"
      />
      <div className="absolute bottom-0 w-full h-24 bg-black/50 backdrop-blur-md px-5 py-3 flex flex-col justify-end">
        <h3 className="font-bold text-white text-base sm:text-lg">
          {program.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/80">{program.subtitle}</p>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
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

  const handleProgramClick = (program) => {
    console.log("Selected program:", program.title);
    // Add your navigation logic here
  };

  return (
    <section className="w-full py-20 bg-[#0D1310] text-white font-sans">
      <div className="relative px-4 sm:px-10 lg:px-20 py-10">
        {/* Heading with styled "Programs" text */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Our{" "}
          <span className="italic relative inline-block px-1">
            <span className="relative z-10 px-3 py-1">Programs</span>
            <span
              className="absolute inset-0 -inset-y-1 border border-green-500 -skew-x-6 z-0 rounded-sm"
              aria-hidden="true"
            ></span>
          </span>
        </h1>

        

        {/* Product Scroll Area */}
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
          
          <div className="inline-flex space-x-4 sm:space-x-6 w-max pb-4">
            {programs.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                onClick={() => handleProgramClick(program)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;