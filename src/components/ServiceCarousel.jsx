import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BASE_API = "http://localhost:7000/api/"; // for API requests
const BASE_URL = "http://localhost:7000"; // for static images
const SERVICES_API = `${BASE_API}services`;

const ServiceCard = ({ service, isCenter, onClick }) => {
  return (
    <div
      className={`relative flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] 
        h-[220px] rounded-2xl overflow-hidden cursor-pointer 
        transition-all duration-500 ease-out snap-start
        ${isCenter ? "scale-105 z-20 border-2 border-green-500 shadow-lg shadow-green-500/40" : "scale-95 opacity-80 border border-gray-700 z-0"}`}
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={service.imagePath ? `${BASE_URL}${service.imagePath}` : service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 z-20">
        <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-lg">
          {service.title}
        </h3>
      </div>
    </div>
  );
};

const ServiceCarousel = () => {
  const scrollRef = useRef(null);
  const [services, setServices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const token = localStorage.getItem("token");

  // Fetch services from backend
  const fetchServices = async () => {
    try {
      const res = await fetch(SERVICES_API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch services");
      const data = await res.json();
      setServices(data.data); // assuming backend returns { data: [...] }
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Auto-scroll to center the current item
  useEffect(() => {
    if (scrollRef.current && services.length > 0) {
      const cardWidth = 320 + 24; // approximate card width + gap
      const containerWidth = scrollRef.current.clientWidth;
      const scrollPosition = currentIndex * cardWidth - containerWidth / 2 + cardWidth / 2;

      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex, services]);

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => setCurrentIndex(index);

  const handleServiceClick = (service, index) => {
    setCurrentIndex(index);
    console.log("Selected service:", service.title);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(scrollRight, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, services]);

  if (services.length === 0) return <div className="text-center text-white py-20">Loading services...</div>;

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#010a04] to-[#07160b] text-white text-center font-sans">
      <div className="relative px-4 sm:px-10 lg:px-20 py-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          Service{" "}
          <span className="italic relative inline-block px-1">
            <span className="relative z-10 px-3 py-1">Category</span>
            <span className="absolute inset-0 -inset-y-1 border border-green-500 -skew-x-6 z-0" aria-hidden="true"></span>
          </span>
        </h2>

        {/* Scroll Buttons */}
        <div className="absolute top-6 right-4 flex gap-2 z-20">
          <button onClick={scrollLeft} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button onClick={scrollRight} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Service Scroll Area */}
        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
            <div className="inline-flex space-x-6 w-max pb-6 px-4 pt-6">
              {services.map((service, index) => (
                <ServiceCard key={service._id} service={service} isCenter={index === currentIndex} onClick={() => handleServiceClick(service, index)} />
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-2">
          {services.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-green-500 scale-125" : "bg-white/30 hover:bg-white/50"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
