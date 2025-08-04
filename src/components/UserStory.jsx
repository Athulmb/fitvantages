import React, { useRef, useEffect, useState } from 'react';

const cards = [
  {
    id: 1,
    name: 'Robin Thomas',
    title: 'Mister Dubai Champion 2024',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&crop=face',
    bg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Fitness Transformation 2024',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=600&fit=crop&crop=face',
    bg: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    name: 'Mike Chen',
    title: 'Bodybuilding Champion 2024',
    image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=400&h=600&fit=crop&crop=face',
    bg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    title: 'Weight Loss Success 2024',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=600&fit=crop&crop=face',
    bg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    name: 'David Rodriguez',
    title: 'Strength Training Expert 2024',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=600&fit=crop&crop=face',
    bg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
  },
];

const UserStoryCarousel = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = cards.length;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? totalSlides - 1 : prev - 1);
  };

  // Get card style based on position relative to current slide
  const getCardStyle = (index) => {
    const position = (index - currentSlide + totalSlides) % totalSlides;
    
    const baseStyle = {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '320px',
      height: '400px',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };

    switch (position) {
      case 0: // Center card
        return {
          ...baseStyle,
          transform: 'translateX(-50%) scale(1)',
          zIndex: 30,
          filter: 'blur(0px)',
          opacity: 1,
        };
      case 1: // First left card
        return {
          ...baseStyle,
          transform: 'translateX(-170%) scale(0.85)',
          zIndex: 20,
          filter: 'blur(2px)',
          opacity: 0.8,
        };
      case 2: // Second left card
        return {
          ...baseStyle,
          transform: 'translateX(-220%) scale(0.75)',
          zIndex: 15,
          filter: 'blur(3px)',
          opacity: 0.6,
        };
      case 3: // Second right card
        return {
          ...baseStyle,
          transform: 'translateX(120%) scale(0.75)',
          zIndex: 15,
          filter: 'blur(3px)',
          opacity: 0.6,
        };
      case 4: // First right card
        return {
          ...baseStyle,
          transform: 'translateX(70%) scale(0.85)',
          zIndex: 20,
          filter: 'blur(2px)',
          opacity: 0.8,
        };
      default: // Hidden cards
        return {
          ...baseStyle,
          transform: 'translateX(-50%) scale(0.5)',
          zIndex: 5,
          filter: 'blur(4px)',
          opacity: 0,
        };
    }
  };

  // Responsive card style adjustments
  const getResponsiveCardStyle = (index) => {
    const baseStyle = getCardStyle(index);
    const position = (index - currentSlide + totalSlides) % totalSlides;
    
    // Mobile adjustments
    if (window.innerWidth <= 768) {
      baseStyle.width = '280px';
      baseStyle.height = '350px';
      
      if (position === 1) {
        baseStyle.transform = 'translateX(-150%) scale(0.8)';
      } else if (position === 2) {
        baseStyle.transform = 'translateX(-190%) scale(0.7)';
      } else if (position === 3) {
        baseStyle.transform = 'translateX(90%) scale(0.7)';
      } else if (position === 4) {
        baseStyle.transform = 'translateX(50%) scale(0.8)';
      }
    }
    
    // Very small mobile - hide side cards
    if (window.innerWidth <= 480) {
      if (position === 2 || position === 3) {
        baseStyle.opacity = 0;
        baseStyle.transform = 'translateX(-50%) scale(0.5)';
      }
    }
    
    return baseStyle;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // Touch handling for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-8 py-8 md:py-12 overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-white max-w-4xl">
        User{" "}
        <span className="italic relative inline-block px-1 text-green-500">
          <span className="relative z-10 px-2 md:px-3 py-1 text-white bg-green-500 rounded">
            Story
          </span>
        </span>
      </h2>

      {/* Carousel Container */}
      <div 
        className="relative w-full flex justify-center items-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative" style={{ height: '400px', width: '100%', maxWidth: '800px' }}>
          {cards.map((card, index) => (
            <div 
              key={card.id} 
              style={getResponsiveCardStyle(index)}
              className="cursor-pointer"
              onClick={() => goToSlide(index)}
            >
              <div className="relative w-full h-full mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-2xl">
                {/* Background Image */}
                <img
                  src={card.bg}
                  alt="Gym Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6">
                  <div className="border-2 border-white inline-block px-2 sm:px-3 py-2 mb-4 sm:mb-6 text-left text-white bg-white/10 backdrop-blur-sm rounded-lg">
                    <p className="font-bold text-xs sm:text-sm">MY FITNESS</p>
                    <p className="font-bold text-xs sm:text-sm">MY</p>
                    <p className="font-extrabold text-lg sm:text-2xl">
                      succ<span className="text-white">ESS</span>
                    </p>
                  </div>
                </div>

                {/* User Image */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="absolute bottom-20 sm:bottom-24 right-3 sm:right-4 w-24 sm:w-32 h-36 sm:h-48 object-cover object-top rounded-lg z-10"
                  loading="lazy"
                />

                {/* Play Button */}
                <div className="absolute bottom-20 sm:bottom-24 left-[35%] sm:left-[40%] z-20">
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-green-300 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* User Info Footer */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/20 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-xl z-20 text-white max-w-[calc(100%-2rem)]">
                  <p className="font-bold text-sm sm:text-lg truncate">{card.name}</p>
                  <p className="text-xs sm:text-sm opacity-90 truncate">{card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-8 sm:mt-12 z-50">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default UserStoryCarousel;