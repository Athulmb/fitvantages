import React, { useState, useEffect } from "react";
import { USERSTORY_API, BASE_URL } from "../config";

const UserStoryCarousel = () => {
  const [stories, setStories] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loadedBg, setLoadedBg] = useState({});
  const [loadedImage, setLoadedImage] = useState({});
  const [loadedVideo, setLoadedVideo] = useState({});

  const totalSlides = stories.length;

  // Fetch stories from API
  const fetchStories = async () => {
    try {
      const res = await fetch(USERSTORY_API);
      const data = await res.json();
      setStories(data.stories || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  // Slide navigation
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Touch handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  // Style per card
  const getCardStyle = (index) => {
    const position = (index - currentSlide + totalSlides) % totalSlides;
    const baseStyle = {
      position: "absolute",
      top: 0,
      left: "50%",
      width: "320px",
      height: "400px",
      transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
    switch (position) {
      case 0:
        return { ...baseStyle, transform: "translateX(-50%) scale(1)", zIndex: 30, opacity: 1 };
      case 1:
        return { ...baseStyle, transform: "translateX(-170%) scale(0.85)", zIndex: 20, opacity: 0.8 };
      case 2:
        return { ...baseStyle, transform: "translateX(-220%) scale(0.75)", zIndex: 15, opacity: 0.6 };
      case 3:
        return { ...baseStyle, transform: "translateX(120%) scale(0.75)", zIndex: 15, opacity: 0.6 };
      case 4:
        return { ...baseStyle, transform: "translateX(70%) scale(0.85)", zIndex: 20, opacity: 0.8 };
      default:
        return { ...baseStyle, transform: "translateX(-50%) scale(0.5)", zIndex: 5, opacity: 0 };
    }
  };

  const getResponsiveCardStyle = (index) => {
    const style = getCardStyle(index);
    const position = (index - currentSlide + totalSlides) % totalSlides;

    if (window.innerWidth <= 768) {
      style.width = "280px";
      style.height = "350px";
      if (position === 1) style.transform = "translateX(-150%) scale(0.8)";
      if (position === 2) style.transform = "translateX(-190%) scale(0.7)";
      if (position === 3) style.transform = "translateX(90%) scale(0.7)";
      if (position === 4) style.transform = "translateX(50%) scale(0.8)";
    }

    if (window.innerWidth <= 480 && (position === 2 || position === 3)) {
      style.opacity = 0;
      style.transform = "translateX(-50%) scale(0.5)";
    }

    return style;
  };

  // Handlers for image/video loaded
  const handleBgLoad = (id) => setLoadedBg((prev) => ({ ...prev, [id]: true }));
  const handleImageLoad = (id) => setLoadedImage((prev) => ({ ...prev, [id]: true }));
  const handleVideoLoad = (id) => setLoadedVideo((prev) => ({ ...prev, [id]: true }));

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-8 py-8 md:py-12 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-white max-w-4xl">
        User{" "}
        <span className="italic relative inline-block px-1 text-green-500">
          <span className="relative z-10 px-2 md:px-3 py-1 text-white bg-green-500 rounded">
            Story
          </span>
        </span>
      </h2>

      {/* Carousel */}
      <div className="relative w-full flex justify-center items-center">
        <div className="relative" style={{ height: "400px", width: "100%", maxWidth: "800px" }}>
          {stories.map((card, index) => (
            <div
              key={card._id}
              style={getResponsiveCardStyle(index)}
              className="cursor-pointer"
            >
              <div className="relative w-full h-full mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-2xl">
                {/* BG Image with fade-in */}
                {card.bg && (
                  <img
                    src={`${BASE_URL}${card.bg}`}
                    alt="BG"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      loadedBg[card._id] ? "opacity-30" : "opacity-0"
                    }`}
                    onLoad={() => handleBgLoad(card._id)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Thumbnail Image */}
                {card.image && (
                  <img
                    src={`${BASE_URL}${card.image}`}
                    alt={card.name}
                    className={`absolute bottom-20 sm:bottom-24 right-3 sm:right-4 w-24 sm:w-32 h-36 sm:h-48 object-cover object-top rounded-lg z-10 transition-opacity duration-500 ${
                      loadedImage[card._id] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(card._id)}
                  />
                )}

                {/* Play Button */}
                <div
                  className="absolute bottom-20 sm:bottom-24 left-[35%] sm:left-[40%] z-20"
                  onClick={() => setSelectedCard(card)}
                >
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

                {/* Info Footer */}
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
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
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

      {/* Video Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 bg-black/70 text-white rounded-full p-2 hover:bg-black"
            >
              ✕
            </button>

            <video
              src={`${BASE_URL}${selectedCard.videoUrl}`}
              controls
              autoPlay
              className="w-full rounded-t-2xl max-h-[80vh] transition-opacity duration-500"
              onLoadedData={() => handleVideoLoad(selectedCard._id)}
            />

            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{selectedCard.name}</h3>
              <p className="text-gray-600">{selectedCard.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserStoryCarousel;
