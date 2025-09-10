import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FreeTrialModal from "./FreeTrialModel";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  return (
    <>
      <section
        className="relative w-full h-screen flex items-center justify-center px-4 sm:px-8 text-white font-lufga bg-cover bg-black bg-center"
        style={{ backgroundImage: "url('/HeroBG.png')" }}
      >
        <div className="max-w-7xl w-full flex flex-col items-center justify-center z-10">
          {/* Headline */}
          <div className="w-full flex flex-col md:flex-row justify-center text-center md:text-left gap-6 sm:gap-14 -mt-28 md:-mt-12 lg:-mt-16 px-2">
            {/* Left Text */}
            <div className="flex flex-col justify-center items-center md:items-end">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide italic">
                <div className="whitespace-nowrap">ELEVATE YOUR</div>
                <div className="whitespace-nowrap pl-2 sm:pl-10">HEALTH</div>
              </h1>
            </div>

            {/* Right Text */}
            <div className="flex flex-col justify-center items-center md:items-start">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide italic">
                <div className="whitespace-nowrap">FITNESS FOR</div>
                <div className="whitespace-nowrap">
                  AND{" "}
                  <span className="text-green-400 font-extrabold outlined-text">
                    VITALITY
                  </span>
                </div>
              </h1>
            </div>

            {/* Center Image */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <img
                src="/Heromain.png"
                alt="Main Hero"
                className="w-[200px] sm:w-[280px] md:w-[360px] lg:w-[500px] xl:w-[500px] 2xl:w-[550px] object-contain translate-y-24 sm:translate-y-32 md:translate-y-12 md:-translate-x-4 lg:-translate-x-8 lg:translate-y-36"
              />
            </div>
          </div>

          {/* Bottom Left Stats */}
          <div className="absolute bottom-4 sm:bottom-10 left-0 ml-2 sm:ml-8 lg:ml-24 xl:ml-32 2xl:ml-40 text-left text-white space-y-2 sm:space-y-4">
            <div>
              <p className="text-lg sm:text-4xl font-extrabold">140+</p>
              <p className="text-xs sm:text-lg font-medium">Active Students</p>
            </div>
            <div>
              <p className="text-lg sm:text-4xl font-extrabold">200+</p>
              <p className="text-xs sm:text-lg font-medium">Online Classes</p>
            </div>
          </div>

          {/* Bottom Center Buttons */}
<div className="absolute bottom-28 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-6 px-2">
  <button
    onClick={openModal}
    className="bg-green-400 text-black font-semibold text-xs sm:text-lg px-3 sm:px-6 py-1.5 sm:py-3 rounded-full shadow-md hover:bg-green-500 transition-all"
  >
    Get the Free Plan
  </button>
  <button
    onClick={() => navigate("/elitecare")}
    className="text-green-300 font-semibold text-xs sm:text-lg px-3 sm:px-6 py-1.5 sm:py-3 rounded-full border border-green-400 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:border-white/30 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]"
  >
    Fitvantage Elite Care
  </button>
</div>


          {/* Bottom Right Trainers */}
          <div className="absolute bottom-4 sm:bottom-10 right-0 mr-2 sm:mr-8 lg:mr-24 xl:mr-32 2xl:mr-40 text-right text-[10px] sm:text-sm">
            <p className="text-lg sm:text-4xl font-bold">50+</p>
            <p className="text-xs sm:text-lg font-medium">FITNESS TRAINERS</p>
            <div className="mt-1 sm:mt-2 flex justify-end">
              <div className="flex items-center space-x-[-6px] sm:space-x-[-10px]">
                <img
                  src="/trainer1.jpg"
                  alt="Trainer 1"
                  className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/trainer2.jpg"
                  alt="Trainer 2"
                  className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                />
                <div className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-green-500 text-black rounded-full text-[10px] sm:text-base font-bold border-2 border-white">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <FreeTrialModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HeroSection;
