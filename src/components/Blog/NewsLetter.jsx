
import React from 'react';

const NewsletterCard = () => {
  return (
    <div className="bg-gradient-to-r from-[#4B9451] to-[#144718] rounded-md mx-auto mt-10 w-full max-w-[1500px] h-[200px] flex flex-col md:flex-row items-center justify-between text-white overflow-hidden">
      
      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-2/3 flex flex-col justify-center h-full px-6 md:px-10">
        <h2 className="text-2xl font-bold mb-2">Lorem Ipsum Is Simply Dummy</h2>
        <p className="text-sm mb-4 leading-relaxed">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
        </p>
        <button className="bg-black text-white px-6 py-2 rounded w-fit">Subscribe</button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:block w-1/3 h-full">
        <img
          src="/young-fitness-man-studio 1.png" // Your local image
          alt="Gym Man"
          className="object-cover w-full h-full" // No padding or border radius
        />
      </div>
    </div>
  );
};

export default NewsletterCard;