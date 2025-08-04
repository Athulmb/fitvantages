import React from 'react';

const topics = Array(6).fill({
  title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting",
  date: "Aug 10, 2022",
  category: "Fitness",
  image: "https://www.mensjournal.com/.image/t_share/MjA5MjM2NjAxMzI1MjMzNzc2/weight-loss-exercise-plan.jpg", // Replace with your image path
});

const TrendingTopics = () => {
  return (
    <div className="min-h-screen  py-12 text-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trending Topics for you</h2>
      <hr className="border-gray-400 mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="relative">
              <img
                src={topic.image}
                alt="Fitness Topic"
                className="w-full rounded-lg h-[263px] object-cover"
              />
              <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                {topic.category}
              </span>
            </div>
            <div className="py-2">
              <h3 className="text-lg font-semibold mb-2 leading-snug">
                {topic.title}
              </h3>
              <div className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {topic.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;