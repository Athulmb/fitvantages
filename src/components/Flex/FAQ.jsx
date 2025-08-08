import React from "react";

const faqData = [
  {
    title: "Joining Partner.fitvantage",
    questions: [
      "How can I register myself on this platform?",
      "How long does it take to go live on this platform?",
      "How can I register myself on this platform?",
      "How long does it take to go live on this platform?",
      "How long does it take to go live on this platform?",
    ],
  },
  {
    title: "Joining Partner.fitvantage",
    questions: [
      "How can I register myself on this platform?",
      "How long does it take to go live on this platform?",
      "How can I register myself on this platform?",
      "How long does it take to go live on this platform?",
      "How long does it take to go live on this platform?",
    ],
  },
  {
    title: "Joining Partner.fitvantage",
    questions: [
      "How can I register myself on this platform?",
      "How long does it take to go live on this platform?",
      "How can I register myself on this platform?",
      "How long does it take to go live on this platform?",
      "How long does it take to go live on this platform?",
    ],
  },
];

export default function FAQSection() {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center py-12 px-4">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {faqData.map((faq, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col gap-4 text-white"
          >
            <h3 className="text-sm md:text-base font-medium">{faq.title}</h3>
            <p className="text-sm text-gray-400">5 Questions</p>

            <ul className="space-y-4 text-sm md:text-base">
              {faq.questions.map((q, qIdx) => (
                <li
                  key={qIdx}
                  className="flex items-start gap-2 text-gray-300 hover:text-white transition"
                >
                  <span className="text-lg font-bold leading-none">{">"}</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
