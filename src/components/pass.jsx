import React, { useState } from "react";

export default function FitvantagePass() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const passes = [
    {
      title: "FLEX",
      sub: "Fitvantage",
      color: "text-gray-400",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?fit=crop&w=900&q=80",
    },
    {
      title: "PLAY",
      sub: "Fitvantage pass",
      color: "text-green-400",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 font-sans">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-16">
        <span className="italic font-semibold">Fitvantage</span>
        <span className="ml-2 px-2 py-1 border border-green-500 text-green-400 italic bg-black">
          PASS
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        {passes.map((pass, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out flex flex-col items-center ${
                isExpanded ? "h-[600px]" : "h-[560px]"
              } 
              w-[60%] sm:w-11/12 md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]
              bg-[#0e0e0e] rounded-xl overflow-hidden p-6`}
            >
              <div className="w-full">
                <img
                  src={pass.image}
                  alt={`${pass.sub} ${pass.title}`}
                  className="rounded-lg object-cover w-full h-[250px]"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {pass.sub} <span className={pass.color}>{pass.title}</span>
              </h3>
              <ul className="text-sm text-white mt-4 space-y-2 list-disc list-inside">
                <li>Lorem Ipsum is simply</li>
                <li>Lorem Ipsum is simply dummy Lorem</li>
                <li>Lorem Ipsum is simply</li>
              </ul>
              <div className="flex gap-4 mt-6 flex-wrap justify-center">
                <button className="bg-[#2c2c2c] px-6 py-2 rounded-md text-sm">
                  TRY FOR FREE
                </button>
                <button
                  className="bg-green-500 text-black px-6 py-2 rounded-md text-sm font-semibold"
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : index)
                  }
                >
                  {isExpanded ? "SHRINK" : "LEARN MORE"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
