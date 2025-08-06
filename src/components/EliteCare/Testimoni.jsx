import React, { useRef } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah James",
    result: "Lost 10 kg in 2 months",
    image: "/Elitecard.png",
  },
  {
    name: "Mark Thompson",
    result: "Gained visible muscle mass in 6 weeks",
    image: "/Elitecard.png",
  },
  {
    name: "Emily Carter",
    result: "Transformed body and mindset",
    image: "/Elitecard.png",
  },
  {
    name: "John Smith",
    result: "Dropped 15 kg with Fitvantage",
    image: "/Elitecard.png",
  },
  {
    name: "Olivia Brown",
    result: "From tired to toned in 3 months",
    image: "/Elitecard.png",
  },
  {
    name: "Liam Wilson",
    result: "Shredded and confident now",
    image: "/Elitecard.png",
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section
      className="text-white py-20 px-4 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/contactbg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Real members, real results
        </h2>

        {/* Carousel Arrows */}
        <div className="flex justify-end items-center mb-4 gap-3 pr-4">
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

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="inline-flex space-x-6 w-max pb-4">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[270px] h-[440px] rounded-xl overflow-hidden shadow-lg relative snap-start"
              >
                <div className="relative h-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-14 h-14 bg-white bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition">
                      <Play className="text-black" />
                    </button>
                  </div>

                  {/* Glassmorphic Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-32 px-4 py-4 backdrop-blur-md bg-green-900/30 text-white">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
