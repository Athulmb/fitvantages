import React from "react";
import { ArrowUpRight } from "lucide-react";

const businessOptions = [
    {
        title: "Fitvantage Franchise",
        desc: "Lorem Ipsum is simply s survived not only five centuries, but also",
        img: "https://i.ibb.co/x1knn9T/muscle-man.png",
    },
    {
        title: "Fitvantage Network",
        desc: "Lorem Ipsum is simply s survived not only five centuries, but also",
        img: "https://i.ibb.co/WvP7hf0/couple-fitness.png",
    },
    {
        title: "Corporate Partnerships",
        desc: "Lorem Ipsum is simply s survived not only five centuries, but also",
        img: "https://i.ibb.co/fvnXBYq/man-tank.png",
    },
    {
        title: "Fitvantage equipment",
        desc: "Lorem Ipsum is simply s survived not only five centuries, but also",
        img: "https://i.ibb.co/SNh9gmB/man-gym.png",
    },
];

export default function FitvantageBusiness() {
    return (
        <div className="w-full">
            {/* SECTION 1 - Title */}
            <section className="bg-gradient-to-b from-black via-[#061402] to-black text-white h-screen flex flex-col justify-center">
                <div className="max-w-8xl mx-auto flex flex-col items-center sm:items-start px-4 sm:px-8">
                    {/* Logo */}
                    <img
                        src="/logo2.png"
                        alt="Fitvantage Logo"
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-6"
                    />

                    {/* First Row */}
                    <h2 className="text-4xl sm:text-xl lg:text-7xl font-bold leading-snug text-left">
                        Fitvantage for Business – Where Wellness
                    </h2>

                    {/* Second Row */}
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-snug text-left mt-2 flex flex-wrap items-center gap-3">
                        Becomes
                        <span className="bg-gradient-to-r from-green-400 to-black px-5 pe-24 py-2  text-black ">
                            Workplace Culture
                        </span>

                    </h2>
                </div>
            </section>

            {/* SECTION 2 - Cards */}
            <section className="bg-gradient-to-b from-black via-[#061402] to-black text-white h-screen flex justify-center px-4 sm:px-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl w-full">
                    {businessOptions.map((item, idx) => (
                        <div
                        key={idx}
                        className="bg-[#21D07A] bg-opacity-20 rounded-xl p-6 sm:p-8 flex flex-col hover:shadow-lg transition-shadow h-[280px] sm:h-[300px] lg:h-[320px]"
                      >
                        {/* Top section (text + image) */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 flex-grow">
                          {/* Text */}
                          <div className="flex-1">
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-lg text-gray-300">{item.desc}</p>
                          </div>
                      
                          {/* Image */}
                          <div className="flex-shrink-0">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full max-w-[180px] sm:max-w-[200px] object-contain"
                            />
                          </div>
                        </div>
                      
                        {/* Button pinned at bottom */}
                        <div className="mt-auto pt-6">
                          <button className="flex items-center gap-7 bg-black text-white rounded-full px-6 py-2 text-lg font-medium hover:bg-green-600 transition">
                            Explore now
                            <span className="bg-green-500 rounded-full p-2 flex items-center justify-center">
                              <ArrowUpRight className="w-5 h-5 text-white" />
                            </span>
                          </button>
                        </div>
                      </div>
                      
                    ))}
                </div>
            </section>

        </div>
    );
}
