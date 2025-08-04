

// components/Hero.jsx
// components/Hero.jsx
// components/Hero.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#2D2D2D] mt-12 rounded-md px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between text-white">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold italic mb-4 md:mb-0 text-center md:text-left">
        YOUR BODY, YOUR POWER
      </h1>
      <div className="flex gap-8 sm:gap-10 text-center">
        <div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">140+</p>
          <p className="text-sm sm:text-base">Active Students</p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">200+</p>
          <p className="text-sm sm:text-base">Online classes</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;






