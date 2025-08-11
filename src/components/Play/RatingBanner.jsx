import React from "react";

export default function RatingBanner() {
  return (
    <div className="bg-[#041507] flex justify-center items-center py-10 px-4">
      <div className="bg-[#1A1A1A] rounded-2xl flex flex-col md:flex-row items-center md:items-center p-6 md:p-10 gap-8 max-w-6xl w-full relative overflow-hidden">
        
        {/* Left Section */}
        <div className="relative flex-shrink-0 flex justify-center md:justify-start">
          {/* Green Circle */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#1CB36F] rounded-full -translate-x-6 -translate-y-6"></div>

          {/* Hand with Stars */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src="/hand.png" // Place your exact hand image here
              alt="Hand"
              className="w-40 md:w-48"
            />
            <div className="flex gap-3 mt-4">
              <img src="/star.png" alt="star" className="w-8 md:w-10" />
              <img src="/star.png" alt="star" className="w-12 md:w-14" />
              <img src="/star.png" alt="star" className="w-6 md:w-8" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center text-white max-w-lg text-center md:text-left z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">
            Lorem Ipsum is simply dummy text of the printing
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing is simply dummy
          </p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
