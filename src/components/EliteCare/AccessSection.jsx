import React from "react";

export default function AccessSection() {
  return (
    <section className="bg-[#111311] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-400">With elitcare, you can</p>
        <h2 className="text-3xl font-bold mb-12">Get access to</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[620px]">
          {/* Column 1 - Large Card */}
          <div className="h-full">
            <div className="relative w-full h-full bg-black rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/coach1.jpg"
                alt="Transform Coach"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-4 left-4 text-left">
                <h3 className="text-green-400 text-lg font-semibold">
                  Transform Coach
                </h3>
                <p className="text-xs text-gray-300 w-60">
                  Lorem Ipsum is simply dummy text...
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 - Flex with 40/60 split */}
          <div className="flex flex-col h-full gap-6">
            {/* Top - 40% */}
            <div className="flex-[2] relative w-full bg-black rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/coach2.jpg"
                alt="Coach 2"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-4 left-4 text-left">
                <h3 className="text-green-400 text-lg font-semibold">
                  Transform Coach
                </h3>
                <p className="text-xs text-gray-300 w-60">
                  Lorem Ipsum is simply dummy text...
                </p>
              </div>
            </div>

            {/* Bottom - 60% */}
            <div className="flex-[3] relative w-full bg-black rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/coach3.jpg"
                alt="Coach 3"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-4 left-4 text-left">
                <h3 className="text-green-400 text-lg font-semibold">
                  Transform Coach
                </h3>
                <p className="text-xs text-gray-300 w-60">
                  Lorem Ipsum is simply dummy text...
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 - Flex with 65/35 split */}
          <div className="flex flex-col h-full gap-6">
            {/* Top - 65% */}
            <div className="flex-[13] relative w-full bg-black rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/mealplan.jpg"
                alt="Meal Plan"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-4 left-4 text-left">
                <h3 className="text-green-400 text-lg font-semibold">
                  Tailored meal Plan
                </h3>
                <p className="text-xs text-gray-300 w-60">
                  Lorem Ipsum is simply dummy text...
                </p>
              </div>
            </div>

            {/* Bottom - 35% */}
            <div className="relative flex-[7] w-full rounded-lg group overflow-hidden">
  {/* Animated Border Layer */}
  <div className="absolute inset-[-2px] bg-[conic-gradient(#22c55e,#111311,#22c55e)] animate-spinSlow rounded-[inherit] z-0"></div>

  {/* Inner Content with Solid Background */}
  <div className="relative z-10 w-full h-full bg-[#111311] rounded-lg border border-green-400 flex items-center justify-center group-hover:bg-green-600/10 transition">
    <span className="text-green-400 font-semibold text-xl">
      See More
    </span>
  </div>
</div>

          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="border border-green-400 text-green-400 px-6 py-2 rounded-md hover:bg-green-500 hover:text-black transition">
            EXPLORE PLANS
          </button>
        </div>
      </div>
    </section>
  );
}
