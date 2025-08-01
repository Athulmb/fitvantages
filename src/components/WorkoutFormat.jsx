import React from "react";

const WorkoutFormat = () => {
  return (
    <div className="min-h-full bg-black flex items-center justify-center px-4 py-10">
<div
  className="rounded-[30px] p-6 sm:p-8 md:p-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10"
  style={{
    backgroundImage: "linear-gradient(to bottom right, #7FFA88, #326836)",
  }}
>
        {/* Left section */}
        <div className="flex flex-col justify-center text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Explore Format <br /> Workouts
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            One place for all your well-being needs
          </p>
          <button className="w-max px-6 py-2 border border-black text-black bg-transparent rounded-full font-semibold hover:bg-black hover:text-white transition">
            Explore Now
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-auto lg:h-[460px]">
          {/* Column 1 - Yoga full height */}
          <div className="lg:col-span-1 h-full">
            <div className="h-full lg:h-full sm:h-[300px] rounded-2xl overflow-hidden relative">
              <img src="/yoga.png" alt="Yoga" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute bottom-3 left-3 text-white font-semibold text-base sm:text-lg drop-shadow">
                Yoga
              </div>
            </div>
          </div>

          {/* Column 2 - Boxing + Cardio */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="h-[240px] sm:h-[60%] rounded-2xl overflow-hidden relative">
              <img src="/boxing.png" alt="Boxing" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute bottom-3 left-3 text-white font-semibold text-base sm:text-lg drop-shadow">
                Boxing
              </div>
            </div>
            <div className="h-[160px] sm:h-[40%] rounded-2xl overflow-hidden relative">
              <img src="/cardio.png" alt="Cardio" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute bottom-3 left-3 text-white font-semibold text-base sm:text-lg drop-shadow">
                Cardio
              </div>
            </div>
          </div>

          {/* Column 3 - Strength + Circuit */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="h-[160px] sm:h-[35%] rounded-2xl overflow-hidden relative">
              <img src="/strength.png" alt="Strength Training" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute bottom-3 left-3 text-white font-semibold text-base sm:text-lg drop-shadow">
                Strength Training
              </div>
            </div>
            <div className="h-[240px] sm:h-[65%] rounded-2xl overflow-hidden relative">
              <img src="/circuit.png" alt="Circuit Training" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute bottom-3 left-3 text-white font-semibold text-base sm:text-lg drop-shadow">
                Circuit Training
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutFormat;
