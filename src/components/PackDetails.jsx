import React from "react";
import { CheckCircle, Circle } from "lucide-react";

const packData = {
  breadcrumb: ["Home", "cult.fit", "cult.fit packs"],
  image:
    "man.", // Replace with actual image link
  title: "3 Month FLEX PLUS",
  subtitle: "Elite Plus",
  oldPrice: "$55",
  newPrice: "$40",
  taxes: "+1664 Taxes & Fees",
  cta: "Get Pack",
  offer: [
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
  ],
  about: [
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
  ],
  cancellation: "Lorem Ipsum is simply dummy text",
  howItWorks: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's stan`,
  extraPoints: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
};

export default function PackDetails() {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-6 md:px-16 lg:px-24 pt-28">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6">
        {packData.breadcrumb.map((crumb, idx) => (
          <span key={idx}>
            {crumb}
            {idx < packData.breadcrumb.length - 1 && " > "}
          </span>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Image */}
        <div>
          <img
            src={packData.image}
            alt={packData.title}
            className="rounded-lg w-full object-cover"
          />
          <h2 className="text-2xl font-bold mt-4">Fitvantage FLEX PLUS</h2>
        </div>

        {/* Right Content */}
        <div>
          {/* Title & Price */}
          <h1 className="text-2xl md:text-3xl font-bold">{packData.title}</h1>
          <p className="text-green-400 font-semibold">{packData.subtitle}</p>

          <div className="flex items-center gap-4 mt-2">
            <span className="line-through text-gray-500">{packData.oldPrice}</span>
            <span className="text-2xl font-bold">{packData.newPrice}</span>
          </div>
          <p className="text-sm text-green-400">{packData.taxes}</p>

          {/* CTA */}
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-semibold">
            {packData.cta}
          </button>

          <hr className="my-6 border-gray-700" />

          {/* Offer */}
          <SectionList title="Offer" items={packData.offer} />

          {/* About */}
          <SectionList title="About this pack" items={packData.about} />

          {/* Cancellation */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Cancellation & No Shows</h3>
            <div className="flex items-center mt-2 text-gray-300">
              <Circle className="w-5 h-5 mr-2" />
              <span>{packData.cancellation}</span>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />

          {/* How it works */}
          <div>
            <h3 className="text-lg font-semibold">How it works</h3>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              {packData.howItWorks}
            </p>
            {packData.extraPoints.map((point, idx) => (
              <div className="flex items-start mt-4 text-sm" key={idx}>
                <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionList({ title, items }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-2 space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-gray-300 text-sm">
            <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
