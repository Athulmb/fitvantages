import React from "react";

const features = [
  {
    title: "Unlimited access to",
    highlight: "110+",
    subtitle: "PRO GYMS",
    img: null,
    className: "bg-[#1e1e1e]",
  },
  {
    title: "ELITE gyms & group",
    subtitle: "classes",
    img: "Elitecard.png",
    className: "bg-black",
  },
  {
    title: "Multiple workout",
    subtitle: "formats",
    img: "Elitecard.png",
    className: "bg-black",
  },
  {
    title: "At-Home",
    subtitle: "Live Workout",
    img: "Elitecard.png",
    className: "bg-[#1e1e1e]",
  },
  {
    title: "SMART",
    subtitle: "Workout plans",
    img: "Elitecard.png",
    className: "bg-[#1e1e1e]",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-12 px-4 md:px-10 bg-black text-white">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 uppercase">Features</p>
        <h2 className="text-2xl md:text-4xl font-semibold mt-2">For an Active Lifestyle</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Column 1: 60/40 */}
        <div className="grid grid-rows-[64%_36%] gap-6 h-[600px]">
          {/* Top card - No image */}
          <div className={`${features[0].className} rounded-xl p-6 flex flex-col border border-white/5  items-center justify-center`}>
            <p className="text-gray-400 text-sm">{features[0].title}</p>
            <h2 className="text-8xl text-white/90 font-bold mt-2">{features[0].highlight}</h2>
            <p className="text-sm mt-1">{features[0].subtitle}</p>
          </div>

          {/* Bottom card with bg image */}
          <div
            className={`${features[1].className} rounded-xl p-6 bg-cover  bg-center flex flex-col items-center pt-28 justify-center`}
            style={{ backgroundImage: `url(${features[1].img})` }}
          >
            <p className="text-lg font-semibold">{features[1].title}</p>
            <p className="text-lg font-semibold">{features[1].subtitle}</p>
          </div>
        </div>

        {/* Column 2: Full height image */}
        <div
          className={`${features[2].className} rounded-xl p-6 bg-cover bg-center flex flex-col justify-center items-center pb-80 h-[600px]`}
          style={{ backgroundImage: `url(${features[2].img})` }}
        >
          <p className="text-2xl font-semibold">{features[2].title}</p>
          <p className="text-2xl font-semibold">{features[2].subtitle}</p>
        </div>

        {/* Column 3: 40/60 */}
        <div className="grid grid-rows-[64%_36%] gap-6 h-[600px]">
          {/* Top card */}
          <div
            className={`${features[3].className} rounded-xl p-6 bg-cover bg-center border border-white/5 flex flex-col justify-center`}
            style={{ backgroundImage: `url(${features[3].img})` }}
          >
            <p className="text-lg font-semibold">{features[3].title}</p>
            <p className="text-lg font-semibold">{features[3].subtitle}</p>
          </div>

          {/* Bottom card */}
          <div
            className={`${features[4].className} rounded-xl p-6 bg-cover border border-white/5 bg-center flex flex-col justify-center`}
            style={{ backgroundImage: `url(${features[4].img})` }}
          >
            <p className="text-lg font-semibold">{features[4].title}</p>
            <p className="text-lg font-semibold">{features[4].subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
