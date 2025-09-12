// src/components/ProgramCarousel.jsx

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROGRAMS_API, BASE_URL } from "../config"; // ✅ import from config

const ProgramCard = ({ program, onClick }) => {
  return (
    <div
      className="flex-shrink-0 
      w-full sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[340px] 
      h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px]
      rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-xl relative 
      transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer snap-center"
      onClick={onClick}
    >
      {program.image && (
        <img
          src={`${BASE_URL}${program.image}`} // ✅ use BASE_URL from config
          alt={program.title}
          className="w-full h-[70%] object-cover"
        />
      )}
      <div className="absolute bottom-0 w-full h-20 sm:h-24 bg-black/50 backdrop-blur-md px-4 sm:px-5 py-3 flex flex-col justify-end">
        <h3 className="font-bold text-white text-base md:text-lg truncate">
          {program.title}
        </h3>
        <p className="text-sm text-white/80 truncate">{program.subtitle}</p>
      </div>
    </div>
  );
};

const ProgramCarousel = () => {
  const scrollRef = useRef(null);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const res = await fetch(PROGRAMS_API); // ✅ use PROGRAMS_API from config
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to fetch programs");

      setPrograms(data.programs || data.data || []);
      setError("");
    } catch (err) {
      console.error("Error fetching programs:", err);
      setError(err.message || "Something went wrong while fetching programs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.9;
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.9;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleProgramClick = (program) => {
    console.log("Selected program:", program.title);
  };

  return (
    <section className="w-full py-20 bg-[#0D1310] text-white font-sans">
      <div className="relative px-4 sm:px-10 lg:px-20 py-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
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
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-green-600 rounded-full z-10 hover:bg-green-700"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-green-600 rounded-full z-10 hover:bg-green-700"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel / States */}
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3">Loading programs...</span>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-60 text-red-500">
            {error}
          </div>
        ) : programs.length === 0 ? (
          <div className="flex justify-center items-center h-60 text-gray-400">
            No programs available.
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="w-full flex justify-start overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex w-max gap-4 sm:gap-6 pb-6 px-4 sm:px-8">
              {programs.map((program) => (
                <ProgramCard
                  key={program._id}
                  program={program}
                  onClick={() => handleProgramClick(program)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramCarousel;
