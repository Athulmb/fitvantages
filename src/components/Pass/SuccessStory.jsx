import React from "react";

const testimonials = [
  {
    name: "Tressa",
    brand: "Fuerza",
    location: "Abu Dhabi",
    image: "https://via.placeholder.com/50", // Replace with actual image
    feedback:
      "I am so pleased with impressive training to staff to upgrade the service standards. Appreciate the smooth transition into CULT pass! I couldn’t have wished for a better alliance."
  },
];

// Example: More than 9 items in your data
const allTestimonials = Array(12).fill(testimonials[0]);

export default function SuccessStories() {
  // Limit to 9 testimonials
  const displayedTestimonials = allTestimonials.slice(0, 9);

  return (
    <section className="bg-[#051e0f] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
          Vantage pass Success Stories
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {displayedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-200 text-gray-800 p-6 rounded-sm shadow-sm flex flex-col w-full max-w-xs sm:max-w-sm min-h-[320px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="font-bold text-blue-800">{t.brand}</p>
                  <p className="text-sm text-gray-600">{t.location}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
