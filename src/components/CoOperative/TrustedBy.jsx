import React from "react";

const TrustedBy = () => {
  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_of_Deloitte.svg",
      alt: "Deloitte",
    },
    {
      src: "https://static.cdnlogo.com/logos/f/80/fidelity-investments.png",
      alt: "Fidelity Investments",
    },
    {
      src: "https://freebiesupply.com/logos/fidelity-investments-logo/…", // black & white fidelity
      alt: "Fidelity (B&W)",
    },
    {
      src: "https://www.stickpng.com/img/icons-logos-emojis/iconic-brands/fidelity-investments-logo",
      alt: "Fidelity (Color)",
    },
  ];

  // Create a 3x4 grid (total 12 displayed logos, cycling through the 4)
  const gridLogos = Array.from({ length: 12 }, (_, i) => logos[i % logos.length]);

  return (
    <section className="w-full bg-[#0b0f0c] py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-gray-300 text-sm md:text-base">
          1500+ organizations across all cities
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Trusted by the Best
        </h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
          {gridLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-12 object-contain brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
