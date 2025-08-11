import React, { useEffect, useState } from "react";

const flexData = {
  heading: "Vantage pass PLAY",
  features: [
    "Unlimited access to all PRO gyms",
    "Free credits to access ELITE gyms & group classes",
  ],
  priceNote: "Starting at $15 / month* + Taxes & Fees",
  buttons: [
    {
      label: "TRY FOR FREE",
      className: "bg-black text-white hover:bg-black/80",
    },
    {
      label: "BUY NOW",
      className: "bg-green-500 text-black hover:bg-green-400",
    },
  ],
  footnote: "*Effective Monthly Pricing including Extension, if any",
  promoImage: "/flexhero.png", // Replace with your "Increase Your Muscle Power" image path
  offer: {
    title: "FREE $20 AMAZON VOUCHER + 1-MONTH EXTENTION",
    subtitle: "Fitvantage pass PLAY",
    endsIn: ["10", "48", "26"], // [hh, mm, ss]
  },
};

export default function FitVantagePlay() {
  const [countdown, setCountdown] = useState(() => {
    const [h, m, s] = flexData.offer.endsIn.map(Number);
    return h * 3600 + m * 60 + s;
  });

  const formatCountdown = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return [hours, minutes, seconds];
  };

  useEffect(() => {
    if (countdown <= 0) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const [hh, mm, ss] = formatCountdown(countdown);

  return (
    <section className="min-h-screen w-full bg-black text-white px-4 py-12 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Vantage pass{" "}
            <span className="text-green-500 font-extrabold">PLAY</span>
          </h1>

          <ul className="space-y-4 text-lg md:text-xl">
            {flexData.features.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <span className="text-green-400 text-2xl">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg md:text-xl font-medium">{flexData.priceNote}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            {flexData.buttons.map((btn, idx) => (
              <button
                key={idx}
                className={`${btn.className} px-8 py-3 rounded-md text-sm font-semibold w-full sm:w-auto min-w-[12rem] text-center`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <p className="text-sm md:text-base text-gray-400">{flexData.footnote}</p>
        </div>

        {/* Right Section */}
        <div className="w-full mt-8 md:mt-12 flex justify-center">
          <img
            src={flexData.promoImage}
            alt="Flex Hero"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Offer Strip */}
      <div className="mt-16 w-full max-w-5xl bg-green-900 rounded-lg px-6 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
        <div>
          <p className="text-xs uppercase text-gray-300 tracking-widest">
            {flexData.offer.subtitle}
          </p>
          <p className="text-base font-semibold text-white">
            {flexData.offer.title}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-300">Ends In</p>
          <div className="flex gap-2 justify-center md:justify-end text-white font-bold text-lg">
            {[hh, mm, ss].map((val, i) => (
              <React.Fragment key={i}>
                <span>{val}</span>
                {i < 2 && <span>:</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
