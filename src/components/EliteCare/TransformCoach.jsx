import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const coaches = [
  {
    name: "James",
    role: "ACE certified Trainer",
    transformations: "100+ Transformations",
    image: "/man.png",
  },
  {
    name: "James",
    role: "ACE certified Trainer",
    transformations: "100+ Transformations",
    image: "/man.png",
  },
  {
    name: "James",
    role: "ACE certified Trainer",
    transformations: "100+ Transformations",
    image: "/man.png",
  },
  {
    name: "James",
    role: "ACE certified Trainer",
    transformations: "100+ Transformations",
    image: "/man.png",
  },
  {
    name: "James",
    role: "ACE certified Trainer",
    transformations: "100+ Transformations",
    image: "/man.png",
  },
  {
    name: "James",
    role: "ACE certified Trainer",
    transformations: "100+ Transformations",
    image: "/man.png",
  },
];

export default function TransformCoaches() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const scrollAmount = window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 600 : 900;
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    const scrollAmount = window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 600 : 900;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-8 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Meet our Transform Coaches
      </h2>

      {/* Arrow Controls */}
      <div className="flex justify-end items-center gap-3 pr-4 mb-4">
        <button
          onClick={scrollLeft}
          className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Carousel - Single horizontal scroll for all screen sizes */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="inline-flex space-x-6 w-max pb-2">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-end items-center flex-shrink-0 w-[280px] h-[550px] snap-start bg-transparent"
            >
              {/* Image - appears in front of card */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 w-full h-[340px]">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Card (behind the image) */}
              <div className="bg-[#1b1b1b] w-full text-center shadow-md pt-[220px] pb-6 px-4 z-0 h-[400px] relative overflow-visible rounded-md">
                {/* Card Content - above image */}
                <div className="relative z-30 flex flex-col items-center">
                  <h1 className="text-white text-5xl font-bold">{coach.name}</h1>
                  <p className="text-white text-sm mt-2">{coach.role}</p>
                  <div className="bg-gradient-to-r from-black/80 to-white/25 backdrop-blur-md text-white py-2 px-4 mt-6 rounded-full text-sm font-medium transition w-fit mx-auto shadow-md">
                    {coach.transformations}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}