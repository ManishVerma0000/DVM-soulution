"use client";
import React, { useState } from "react";

const items = [
  {
    name: "Fresh Tomatoes",
    image: "/tomato.jpg",
  },
  {
    name: "Green Cucumbers",
    image: "/cucumber.jpg",
  },
  {
    name: "Leafy Spinach",
    image: "/Leafy.jpg",
  },
  {
    name: "Ripe Bananas",
    image: "/banana.jpg",
  },
  {
    name: "Juicy Apples",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    name: "Carrots",
    image: "/carrot.jpg",
  },
];

const CustomCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  const maxIndex = Math.ceil(items.length / itemsPerSlide) - 1;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const start = currentIndex * itemsPerSlide;
  const visibleItems = items.slice(start, start + itemsPerSlide);

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Cards */}
      <div className="flex gap-4 justify-center transition-all duration-500">
        {visibleItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-[300px] transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 text-white rounded ${
            currentIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className={`px-4 py-2 text-white rounded ${
            currentIndex === maxIndex
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
