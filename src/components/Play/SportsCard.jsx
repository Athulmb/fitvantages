import React from "react";

const sports = [
  {
    title: "Badminton",
    subtitle: "playing",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop", // Replace with your badminton image
  },
  {
    title: "Swimming",
    subtitle: "all levels",
    image:
      "https://images.unsplash.com/photo-1506321806993-0e1ef57a5140?q=80&w=800&auto=format&fit=crop", // Replace with your swimming image
  },
  {
    title: "Teble Tennis",
    subtitle: "playing",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=800&auto=format&fit=crop", // Replace with your table tennis image
  },
  
];

export default function SportsCards() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f2415] to-[#0b1b0e] flex items-center justify-center px-4">
      <div className="flex flex-wrap gap-6 justify-center max-w-6xl">
        {sports.map((sport, index) => (
          <div
            key={index}
            className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
          >
            <img
              src={sport.image}
              alt={sport.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-medium">{sport.subtitle}</p>
              <p className="text-2xl font-extrabold">{sport.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
