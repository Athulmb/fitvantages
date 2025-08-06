import React from "react";
import { ArrowRight, Check, Play } from "lucide-react";

export default function ElitePricingCards() {
  const pricingPlans = [
    {
      duration: "1 Month",
      price: 15,
      features: [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply",
        "Lorem Ipsum is simply text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply text"
      ],
      isPopular: false,
    },
    {
      duration: "3 Months",
      price: 40,
      features: [
        "Lorem Ipsum is simply",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simp",
        "Lorem Ipsum",
        "Lorem Ipsum is simply"
      ],
      isPopular: true,
    },
    {
      duration: "6 Months",
      price: 75,
      features: [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply",
        "Lorem Ipsum is simply text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply text"
      ],
      isPopular: false,
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-green-600 to-green-400 px-4 py-10 flex flex-col items-center text-white">
      
      {/* Offer Icons */}
      <div className="flex flex-col sm:flex-row gap-6 mb-10 items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-black bg-opacity-20 flex items-center justify-center mb-2">
            <Play className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm sm:text-base font-medium">Buy Now<br /> <span className="text-xs">limited time offers</span></p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-black bg-opacity-20 flex items-center justify-center mb-2">
            <span className="text-white font-bold text-sm">EMI</span>
          </div>
          <p className="text-sm sm:text-base font-medium">No-Cost<br /><span className="text-xs">EMI available</span></p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl sm:rounded-3xl w-full lg:w-96 bg-gray-800 text-white aspect-[3/4] flex flex-col justify-between"
            >
              {/* Top Section with Duration and Price */}
              <div className="p-2 sm:p-3">
                <div
                  className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 ${
                    plan.isPopular
                      ? "bg-green-400 text-black"
                      : "bg-white/10 backdrop-blur-sm border border-white/20"
                  }`}
                >
                  {/* Duration */}
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-medium">
                      {plan.duration}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl sm:text-3xl">$</span>
                      <span className="text-5xl sm:text-6xl md:text-7xl font-bold">
                        {plan.price}
                      </span>
                      <span className="text-xl sm:text-2xl ml-1">/mo</span>
                    </div>
                  </div>

                  {/* Best Value Badge */}
                  {plan.isPopular && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 sm:-bottom-3">
                      <div className="bg-yellow-400 text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Best Value
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Section with Features and Button */}
              <div className="p-2 sm:p-3 pt-0 pb-6 flex flex-col items-center gap-3 sm:gap-4 justify-center overflow-auto">
                {/* Features */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <Check
                        className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 ${
                          plan.isPopular ? "text-black" : "text-green-400"
                        }`}
                      />
                      <span className="text-xs sm:text-sm text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Get Started Button */}
                <button
                  className={`w-3/4 sm:w-3/4 py-2 sm:py-3 px-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${
                    plan.isPopular
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-3 h-3 " />
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
