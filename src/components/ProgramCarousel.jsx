import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const API = "http://localhost:7000/api/programs";
const BASE_URL = "http://localhost:7000"; // for images

const ProgramCard = ({ program, onClick }) => {
  return (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] h-[300px] 
      rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-xl relative 
      transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer snap-start"
      onClick={onClick}
    >
      {program.image && (
        <img
          src={`${BASE_URL}${program.image}`}
          alt={program.title}
          className="w-full h-[220px] object-cover"
        />
      )}
      <div className="absolute bottom-0 w-full h-20 bg-black/50 backdrop-blur-md px-5 py-3 flex flex-col justify-end">
        <h3 className="font-bold text-white text-base sm:text-lg">
          {program.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/80">{program.subtitle}</p>
      </div>
    </div>
  );
};

const ProgramCarousel = () => {
  const scrollRef = useRef(null);
  const [programs, setPrograms] = useState([]);

  const fetchPrograms = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (res.ok) {
        setPrograms(data.programs || data.data); // backend may return programs[] or data[]
      } else {
        console.error(data.message || "Failed to fetch programs");
      }
    } catch (err) {
      console.error("Error fetching programs:", err);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

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
    // Add navigation or detail modal here
  };

  return (
    <section className="w-full py-20 bg-[#0D1310] text-white font-sans">
      <div className="relative px-4 sm:px-10 lg:px-20 py-10">
        {/* Heading */}
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

        {/* Scroll Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-green-600 rounded-full z-10 hover:bg-green-700"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-green-600 rounded-full z-10 hover:bg-green-700"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Center cards */}
          <div className="flex justify-center w-max gap-6 pb-6 px-4">
            {programs.length > 0 ? (
              programs.map((program) => (
                <ProgramCard
                  key={program._id}
                  program={program}
                  onClick={() => handleProgramClick(program)}
                />
              ))
            ) : (
              <p className="text-gray-400">No programs available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramCarousel;
