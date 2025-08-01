"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah George",
    location: "Dubai",
    image: "/sarah.png",
    rating: 4.8,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "John Doe",
    location: "New York",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
    review:
      "Great experience! The platform is very user-friendly and helped me stay consistent with my workouts.",
  },
  {
    name: "Ayesha Khan",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5.0,
    review:
      "Absolutely love the flexibility and the range of workout programs. Highly recommended!",
  },
];

export default function ReviewSection() {
  const items = reviews.map((review) => ({
    quote: (
      <div className="bg-gradient-to-br from-[#122f23] to-[#111] rounded-xl p-6 h-full flex flex-col justify-between text-left border border-white/10 shadow-md hover:scale-[1.01] transition duration-300 w-[320px] sm:w-[360px] lg:w-[400px]">
        <div className="text-7xl text-gray-400 mb-4 leading-none">“</div>
        <p className="text-sm text-gray-300 mb-6 leading-relaxed">{review.review}</p>
        <div className="flex items-center gap-4 mt-auto">
          <img
            src={review.image}
            alt={review.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold text-white">{review.name}</p>
            <p className="text-xs text-gray-400">{review.location}</p>
          </div>
          <div className="flex items-center bg-black text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
            <Star size={16} className="mr-1 fill-yellow-400" />
            {review.rating}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section className="py-16 px-4 text-center bg-black text-white">
      <h2 className="text-4xl font-bold italic mb-10">Reviews</h2>
      <div className="flex justify-center items-center">
        <InfiniteMovingCards items={items} direction="left" speed="normal" />
      </div>
    </section>
  );
}
