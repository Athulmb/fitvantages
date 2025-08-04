import React from 'react';

const PricingPlan = () => {
  const plans = [
    {
      duration: '1 Month',
      price: '15',
      features: [
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simply',
        'Lorem Ipsum is simply text',
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simply text',
      ],
      isPopular: false,
    },
    {
      duration: '3 Months',
      price: '40',
      features: [
        'Lorem Ipsum is simply',
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simp',
        'Lorem Ipsum',
        'Lorem Ipsum is simply',
      ],
      isPopular: true,
    },
    {
      duration: '6 Months',
      price: '75',
      features: [
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simply',
        'Lorem Ipsum is simply text',
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simply text',
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen  text-white py-12 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Choose{' '}
          <span className="italic border-2 border-green-500 px-3 py-1 inline-block rounded-md">
            your Plan
          </span>
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative"
          >
            {/* Main Card Container */}
            <div className="bg-[#2D2D2D] rounded-3xl overflow-hidden">
              {/* Top Section - Price */}
              <div
                className={`px-8 py-8 text-center rounded-3xl ${
                  plan.isPopular ? 'bg-[#7FFA88] text-black' : 'bg-[#535353] text-white'
                }`}
              >
                <p className="text-lg font-medium mb-4">{plan.duration}</p>
                <div className="flex justify-center items-baseline">
                  <span className="text-2xl font-semibold">$</span>
                  <span className="text-6xl font-bold mx-1">{plan.price}</span>
                  <span className="text-lg font-medium">/mo</span>
                </div>
              </div>

              {/* Best Value Badge */}
              {plan.isPopular && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-[#7FFA88] text-black text-sm font-bold px-4 py-1 rounded-full">
                    Best Value
                  </div>
                </div>
              )}

              {/* Bottom Section - Features */}
              <div className="bg-[#2D2D2D] text-white px-8 py-8 rounded-b-3xl">
                <div className="space-y-4 mb-8 mt-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 rounded-full bg-[#7FFA88] flex items-center justify-center text-black text-xs mt-0.5">
                        ✓
                      </div>
                      <p className="text-sm text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Get Started Button */}
                <button
                  className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-sm transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-[#7FFA88] text-black hover:bg-[#7FFA88]'
                      : 'border border-[#7FFA88] text-[#7FFA88] hover:bg-[#7FFA88] hover:text-black'
                  }`}
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
