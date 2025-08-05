import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/EliteHero.png')" }}
    >
      {/* Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="outlined-text italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold uppercase drop-shadow-lg">
          FITVANTAGE
        </h1>

        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 drop-shadow-md uppercase">
          ELITE CARE
        </h2>

        <button className="mt-6 bg-green-400 hover:bg-green-500 text-black font-semibold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-lg transition duration-300">
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
