"use client";

import { useState, useEffect } from "react";

const images = [
  "./joker.jpg",
  "./time_enemy.jpg",
  "./knight.jpg",
  "./detachment.jpg",
  "./joker.jpg",
  "./time_enemy.jpg",
  "./knight.jpg",
  "./detachment.jpg",
];

const slidesToShow = 3;

const Carousel = ({ slidesToShow = 3, gap = 20 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(slidesToShow);

  // Обработка изменения размера экрана для адаптивности
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToScroll(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToScroll(2);
      } else {
        setSlidesToScroll(slidesToShow);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [slidesToShow]);

  const nextSlide = () => {
    if (currentIndex < images.length - slidesToScroll) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0); // Вернуться к первому слайду
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(images.length - slidesToScroll); // Перейти к последнему видимому слайду
    }
  };

  return (
    <div className="w-full h-auto flex flex-col items-center gap-8 px-4">
      <h2 className="text-white uppercase font-bold text-xl md:text-3xl">
        Premier League
      </h2>
      <div className="relative w-full border border-white rounded-sm p-4 max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / slidesToScroll) * 100}%)`,
            gap: `${gap}px`, // Задаём отступы между слайдами
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / slidesToScroll}% - ${gap}px)`, // Корректируем ширину с учётом отступов
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full cursor-pointer h-40 object-cover md:h-64"
              />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 bg-opacity-40 text-white px-5 py-2 text-3xl rounded-full active:bg-yellow-300 active:bg-opacity-40 md:hover:bg-gray-300 transition-opacity duration-300 focus:outline-none"
        >
          &#8249;
        </button>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 bg-opacity-40 text-white px-5 py-2 text-3xl rounded-full active:bg-yellow-300 active:bg-opacity-40 md:hover:bg-gray-300 transition-opacity duration-300 focus:outline-none"
        >
          &#8250;
        </button>

        {/* Indicators */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
      </div>
    </div>
  );
};

export default Carousel;
