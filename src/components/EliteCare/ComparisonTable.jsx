import React from "react";
import { Check, X } from "lucide-react";

const features = [
  { label: "Lasting weight loss", fitvantage: true, others: false },
  { label: "Unlimited whatsapp chats & calls", fitvantage: true, others: true },
  { label: "Lasting weight loss", fitvantage: true, others: false },
  { label: "Lasting weight loss", fitvantage: true, others: true },
  { label: "Lasting weight loss", fitvantage: true, others: false },
  { label: "Lasting weight loss", fitvantage: true, others: false },
];

const ComparisonTable = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col justify-center items-center px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Fitvantage <span className="font-normal">Transform weight loss</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg mt-2">
          vs other weight loss programs
        </p>
      </div>

      <div className="w-full max-w-6xl space-y-8 mt-8">
  {features.map((item, idx) => ( 
    <div
      key={idx}
      className="flex justify-between items-center text-lg md:text-xl font-medium px-10"
    >
      {/* Label */}
      <span className="w-1/2">{item.label}</span>

      {/* Icons */}
      <div className="flex gap-10 w-1/2 justify-end">
        {/* Fitvantage */}
        <span className="w-10 h-10 rounded-full flex items-center justify-center border border-green-500 text-green-500">
          {item.fitvantage ? <Check size={20} /> : <X size={20} />}
        </span>

        {/* Others */}
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center border ${
            item.others
              ? "border-gray-300 text-white"
              : "border-gray-500 text-gray-500"
          }`}
        >
          {item.others ? <Check size={20} /> : <X size={20} />}
        </span>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default ComparisonTable;
