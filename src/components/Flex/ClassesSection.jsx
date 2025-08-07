import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const centerClasses = [
  { title: "evolve YOGA", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop" },
  { title: "evolve PILATES", image: "https://images.unsplash.com/photo-1506629905607-d9417d417c96?w=400&h=300&fit=crop" },
  { title: "evolve STRENGTH", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" },
  { title: "evolve CARDIO", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop" },
  { title: "evolve HIIT", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop" },
  { title: "evolve MEDITATION", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" },
  { title: "evolve DANCE", image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop" },
  { title: "evolve FLEXIBILITY", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop" },
];

const homeWorkouts = [
  {
    name: "Naveen Sharma",
    title: "Yoga 360 S3: Day 5",
    type: "YOGA • INTERMEDIATE • 50 Min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
  },
  {
    name: "Sarah Johnson",
    title: "Pilates Core Power",
    type: "PILATES • BEGINNER • 30 Min",
    image: "https://images.unsplash.com/photo-1506629905607-d9417d417c96?w=400&h=300&fit=crop",
  },
  {
    name: "Mike Chen",
    title: "Full Body Strength",
    type: "STRENGTH • ADVANCED • 45 Min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  },
  {
    name: "Lisa Rodriguez",
    title: "HIIT Cardio Blast",
    type: "CARDIO • INTERMEDIATE • 25 Min",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
  },
  {
    name: "Alex Kumar",
    title: "Morning Flow Yoga",
    type: "YOGA • BEGINNER • 40 Min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    name: "Emma Davis",
    title: "Dance Fitness Fun",
    type: "DANCE • ALL LEVELS • 35 Min",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
  },
  {
    name: "Ryan Thompson",
    title: "Flexibility Focus",
    type: "FLEXIBILITY • INTERMEDIATE • 20 Min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop",
  },
];

const ClassCard = ({ classItem, onClick }) => {
  return (
    <div 
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[320px] h-[280px] sm:h-[300px] rounded-2xl overflow-hidden shadow-xl relative transition-all duration-300 ease-in-out hover:scale-90 cursor-pointer snap-start"
      onClick={onClick}
    >
      <img
        src={classItem.image}
        alt={classItem.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white font-bold leading-tight">
        <div className="text-lg sm:text-xl">
          {classItem.title.split(' ')[0]} <br />
          <span className="text-2xl sm:text-3xl">{classItem.title.split(' ')[1]}</span>
        </div>
      </div>
    </div>
  );
};

const WorkoutCard = ({ workout, onClick }) => {
  return (
    <div 
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[320px] bg-[#1a1a1a] rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:scale-90 cursor-pointer snap-start"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={workout.image} 
          alt={workout.name} 
          className="w-full h-[160px] sm:h-[180px] md:h-[200px] object-cover" 
        />
        <div className="absolute top-2 left-2 bg-white/5 text-black px-2 py-1 text-xs rounded-full font-medium">
          26+ LIVE
        </div>
      </div>
      <div className="p-4">
  <p className="text-gray-400 text-sm">{workout.name}</p>
  <h3 className="font-semibold mt-1 text-lg text-white">{workout.title}</h3>
  <p className="text-sm text-gray-400 mt-1">{workout.type}</p>

  {/* CENTERED BUTTON */}
  <div className="mt-4 flex justify-center">
  <button className="w-1/3 bg-white/10 transition text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2">
    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
    JOIN
  </button>
</div>

</div>

    </div>
  );
};

const HorizontalScrollCarousel = ({ data, renderItem, title, subtitle }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-sm tracking-widest text-gray-300">{subtitle}</p>
        <h2 className="text-2xl md:text-4xl font-bold mt-2 text-white">{title}</h2>
      </div>

      {/* Navigation Buttons */}
      <div
  className="absolute top-1/2 transform -translate-y-1/2 z-10"
  style={{ left: "-20px" }}
>
  <button
    onClick={scrollLeft}
    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
  >
    <ChevronLeft size={24} />
  </button>
</div>



<div
  className="absolute top-1/2 transform -translate-y-1/2 z-10"
  style={{ right: "-20px" }}
>
  <button
    onClick={scrollRight}
    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
  >
    <ChevronRight size={24} />
  </button>
</div>


      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-8"
        style={{ 
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div className="inline-flex space-x-4 sm:space-x-6 w-max pb-4">
          {data.map((item, index) => (
            <div key={index}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ClassesSection = () => {
  const handleClassClick = (classItem) => {
    console.log("Selected class:", classItem.title);
    // Add your navigation logic here
  };

  const handleWorkoutClick = (workout) => {
    console.log("Selected workout:", workout.title);
    // Add your navigation logic here
  };

  return (
    <div className="bg-gradient-to-br from-black to-green-900 py-20 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* AT-CENTER Classes */}
        <HorizontalScrollCarousel
          data={centerClasses}
          title="Trainer-led group classes"
          subtitle="AT-CENTER"
          renderItem={(classItem) => (
            <ClassCard
              classItem={classItem}
              onClick={() => handleClassClick(classItem)}
            />
          )}
        />

        {/* AT-HOME Workouts */}
        <HorizontalScrollCarousel
          data={homeWorkouts}
          title="Unlimited home workouts with calorie tracking"
          subtitle="AT-HOME"
          renderItem={(workout) => (
            <WorkoutCard
              workout={workout}
              onClick={() => handleWorkoutClick(workout)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ClassesSection;