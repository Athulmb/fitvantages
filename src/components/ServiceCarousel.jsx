// src/components/ServiceCarousel.jsx

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICE_API, BASE_URL } from "../config"; // ✅ use config file

const ServiceCard = ({ service, isCenter, onClick }) => {
  return (
    <div
      className={`relative flex-shrink-0 
        w-[240px] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[360px]
        h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px]
        rounded-2xl overflow-hidden cursor-pointer 
        transition-all duration-500 ease-out snap-start
        ${
          isCenter
            ? "scale-105 z-20 border-2 border-green-500 shadow-lg shadow-green-500/40"
            : "scale-95 opacity-80 border border-gray-700 z-0"
        }`}
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
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow-lg">
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  // Fetch services
  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch(SERVICE_API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error(`Failed to fetch services: ${res.statusText}`);

      const data = await res.json();

      if (Array.isArray(data)) setServices(data);
      else if (data.data && Array.isArray(data.data)) setServices(data.data);
      else if (data.services && Array.isArray(data.services))
        setServices(data.services);
      else throw new Error("Unexpected API response format");

      setError("");
    } catch (err) {
      console.error("Error fetching services:", err);
      setError(err.message || "Something went wrong while fetching services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Auto-scroll to center
  useEffect(() => {
    if (scrollRef.current && services.length > 0) {
      const cardWidth = 300 + 24; // card + gap
      const containerWidth = scrollRef.current.clientWidth;
      const scrollPosition =
        currentIndex * cardWidth - containerWidth / 2 + cardWidth / 2;

      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex, services]);

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  // Auto-play
  useEffect(() => {
    if (services.length > 1) {
      const interval = setInterval(scrollRight, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, services]);

  return (
    <section className="w-full py-16 sm:py-20 bg-black text-white font-sans">
      <div className="relative px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          Service{" "}
          <span className="italic relative inline-block px-1">
            <span className="relative z-10 px-3 py-1">Category</span>
            <span
              className="absolute inset-0 -inset-y-1 border border-green-500 -skew-x-6 z-0"
              aria-hidden="true"
            ></span>
          </span>
        </h2>

        {/* Content State */}
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3">Loading services...</span>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-60 text-red-500">
            {error}
          </div>
        ) : services.length === 0 ? (
          <div className="flex justify-center items-center h-60 text-gray-300">
            No services available.
          </div>
        ) : (
          <>
            {/* Carousel */}
            <div className="relative overflow-hidden">
              <div
                ref={scrollRef}
                className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <div className="inline-flex space-x-6 w-max py-6 px-2 sm:px-4">
                  {services.map((service, index) => (
                    <ServiceCard
                      key={service._id || index}
                      service={service}
                      isCenter={index === currentIndex}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-green-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ServiceCarousel;
