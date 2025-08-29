import React from "react";

const WhatWeOffer = () => {
  // Data for "What do we offer?"
  const offers = [
    {
      title: "Health Expert",
      desc: "Enable goal-setting and engage in habit-building activities with regular assessments to improve your organisation’s overall lifestyle around health and wellness.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", // gym trainer
    },
    {
      title: "Nutrition",
      desc: "Join webinars by experts from the world of nutrition and get access to over 100+ healthy at-home recipes & exclusive celebrity chef content.",
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80", // nutritionist
    },
    {
      title: "Highly Engaging Unique Programs",
      desc: "Enroll in curated programs around building a healthier lifestyle, weight loss and postpartum fitness to get you back on track – the cult way!",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80", // fitness activity
    },
  ];

  // Data for "Why Vantage for Corporates?"
  const corporates = [
    {
      title: "3,000+ Unique Programs",
      desc: "Robust demand generation and best-in-class marketing.",
    },
    {
      title: "The vantage sales engine",
      desc: "Robust demand generation and best-in-class marketing.",
    },
    {
      title: "The vantage sales engine",
      desc: "Robust demand generation and best-in-class marketing.",
    },
  ];

  return (
    <div className="bg-[#0a0f0c] text-white px-6 md:px-16 lg:px-24 py-16">
      {/* Section 1 - What do we offer */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What do we offer?
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Poster Style Image */}
        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
            alt="Fit Your Day Poster"
            className="rounded-lg shadow-lg object-cover w-full max-w-sm"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-left">
            <p className="text-xs uppercase tracking-widest">Accessories</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              FIT <br /> YOUR <br /> DAY
            </h1>
            <p className="text-xs mt-2">#DontStop</p>
            <p className="text-xs mt-1">VA LOGO</p>
          </div>
        </div>

        {/* Right mapped content */}
        <div className="space-y-8">
          {offers.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 - Why Vantage */}
      <div className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Why vantage for Corporates?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
              alt="Corporate Fitness"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Right mapped content */}
          <div className="space-y-8">
            {corporates.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
