// src/components/ui/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, image }) => {
  return (
    <div
      className="w-[380px] h-[280px] relative rounded-2xl overflow-hidden bg-contain bg-no-repeat bg-center transition-transform duration-300 hover:scale-103"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-transparent" />
      <div className="absolute bottom-6 left-6 text-white text-2xl font-semibold font-lufga z-10">
        {title}
      </div>
    </div>
  );
};

export default ServiceCard;
