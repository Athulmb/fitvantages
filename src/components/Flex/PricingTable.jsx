import React from "react";

const plans = [
    { label: "12 MONTHS", price: "$20/MO*" },
    { label: "6 MONTHS", price: "$20/MO*" },
    { label: "3 MONTHS", price: "$20/MO*" },
    { label: "24 MONTHS", price: "$20/MO*" },
    { label: "1 MONTH", price: "$20/MO*" },
];

export default function PricingTable() {
    return (
        <section className="bg-black text-white py-10 ">
            <div className="max-w-6xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Choose your Fitvantage FLEX
                </h2>
                <p className="text-gray-400 text-sm md:text-base mb-8">
                    2 flexible plans to suit your fitness Needs
                </p>

                {/* Plan duration buttons */}
                <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <button
                            key={i}
                            className="bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-gray-700 px-10 py-6 min-w-[160px] rounded-xl text-lg md:text-xl font-semibold transition"
                        >
                            <div>{plan.label}</div>
                            <div className="text-gray-400 text-base md:text-lg mt-1">{plan.price}</div>
                        </button>
                    ))}
                </div>


                {/* Pricing comparison table */}
               {/* Pricing comparison table */}
<div className="overflow-x-auto">
  <div className="grid grid-cols-3 text-left max-w-[650px] mx-auto">
    {/* Empty corner */}
    <div></div>
    
    {/* FLEX PLUS column */}
    <div className="text-center p-5">
      <h3 className="text-green-500 font-bold text-lg">FLEX</h3>
      <p className="text-green-500 font-bold text-sm">PLUS</p>
      <p className="text-gray-300 mt-1 text-sm">₹722/MO*</p>
    </div>

    {/* FLEX column */}
    <div className="text-center p-5">
      <h3 className="font-bold text-lg">FLEX</h3>
      <p className="text-gray-300 mt-1 text-sm">₹661/MO*</p>
    </div>

    {/* Rows */}
    <React.Fragment>
     <div className="p-5 border-t border-gray-700 text-sm">Membership Pause Days</div>

      <div className="p-5 border-t border-gray-700 text-center text-sm">60</div>
      <div className="p-5 border-t border-gray-700 text-center text-sm">30</div>

      <div className="p-5 border-t border-gray-700 text-sm">Access Credits</div>
      <div className="p-5 border-t border-gray-700 text-center text-sm">100</div>
      <div className="p-5 border-t border-gray-700 text-center text-sm">50</div>

      <div className="p-5 border-t border-gray-700 text-sm">Membership Transfer</div>
      <div className="p-5 border-t border-gray-700 text-center text-green-500 text-sm">✔</div>
      <div className="p-5 border-t border-gray-700 text-center text-gray-500 text-sm">✘</div>

      <div className="p-5 border-t border-gray-700 text-sm">Video workouts</div>
      <div className="p-5 border-t border-gray-700 text-center text-green-500 text-sm">✔</div>
      <div className="p-5 border-t border-gray-700 text-center text-gray-500 text-sm">✘</div>

      {/* Total Payable */}
      <div className="p-5 border-t border-gray-700 text-sm">Total Payable</div>
      <div className="p-5 border-t border-gray-700 text-center">
        <p className="text-base font-bold">₹9391</p>
        <p className="text-gray-400 text-xs">+₹1831 (Taxes & Fees)</p>
        <button className="bg-green-500 hover:bg-green-400 text-black px-3 py-1 mt-2 rounded text-xs font-semibold">
          BUY
        </button>
      </div>
      <div className="p-5 border-t border-gray-700 text-center">
        <p className="text-base font-bold">₹8591</p>
        <p className="text-gray-400 text-xs">+₹1687 (Taxes & Fees)</p>
        <button className="bg-green-500 hover:bg-green-400 text-black px-3 py-1 mt-2 rounded text-xs font-semibold">
          BUY
        </button>
      </div>
    </React.Fragment>
  </div>
</div>


                {/* Footer Note */}
                <p className="text-gray-500 text-xs mt-6">
                    *Effective Monthly Pricing including Extension, if any
                </p>
            </div>
        </section>
    );
}
