import React from 'react';
import PricingPlan from '../components/Services/PricingPlan';

const Services = () => {
  return (
    <div className="text-white w-full bg-[#010A04]">
      {/* Top Background Section */}
      <div
        className="relative bg-cover bg-center min-h-[400px] md:min-h-[500px] w-full flex items-center justify-start px-5 md:px-20 py-8 md:py-12"
        style={{ backgroundImage: "url('/Group 1000005248.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-white space-y-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Our <span className="text-white">Services</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>

          {/* Trainer Section */}
          <div className="flex flex-col items-start space-y-3 pt-2">
            {/* Text */}
            <div>
              <p className="text-white text-2xl font-bold leading-tight">50+</p>
              <p className="text-white text-xs font-semibold tracking-wide">
                FITNESS <span className="tracking-normal">TRAINERS</span>
              </p>
            </div>

            {/* Avatars */}
            <div className="flex items-center space-x-[-10px]">
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="trainer1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="trainer2"
              />
              <div className="w-10 h-10 rounded-full bg-[#52E661] text-black text-xl font-bold flex items-center justify-center border-2 border-white">
                +
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex items-center py-8 md:py-12">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 px-5 md:px-20 w-full">
          <div className="flex justify-center">
            <img
              src="/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club 1.png"
              alt="Trainer"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Why should People choose{" "}
              <span className="text-green-400">Fitvantage</span> Service
            </h3>
            <ul className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-1 bg-green-400 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="py-8 md:py-12">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-10 px-5 md:px-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white leading-tight">
              Why should People choose <br />
              <span className="text-green-400">Fitvantage</span> Service
            </h3>
            <ul className="space-y-4 text-gray-300">
              {[...Array(4)].map((_, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-4 h-4 mt-1 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm md:text-base leading-relaxed">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/couple.png"
              alt="Fitness Couple"
              className="rounded-lg h-[400px] md:h-[565px] w-full md:w-[565px] object-cover"
            />
          </div>
        </div>
      </div>
      <PricingPlan />
    </div>
  );
};

export default Services;