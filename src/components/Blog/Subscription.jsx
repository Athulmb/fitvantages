import React from 'react';

const SubscribeFooter = () => {
  return (
    <div className="w-full border border-gray-500 rounded-md mt-10 px-5 md:px-16 py-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* LEFT TEXT */}
      <p className="text-white text-center md:text-left text-[16px] md:text-[22px] font-semibold italic leading-snug">
        Lorem Ipsum is simply dummy text of the <br className="hidden md:block" />
        printing and typesetting industry.
      </p>

      {/* RIGHT INPUT SECTION */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
        <input
          type="email"
          placeholder="Email Address"
          className="bg-[#2D2D2D] border border-gray-500 text-white px-4 py-2 rounded-md w-full sm:w-[300px] focus:outline-none"
        />
        <button className="bg-gradient-to-r from-[#4B9451] to-[#144718] px-5 py-2 text-black rounded-md font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeFooter;
