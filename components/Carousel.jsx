"use client";

import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
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

const Carousel = ({ slidesToShow = 3, gap = 20, title, videoIds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(slidesToShow);

  const [thumbnails, setThumbnails] = useState([]);
  // замените на настоящие идентификаторы видео

  useEffect(() => {
    const fetchThumbnails = async () => {
      const results = await Promise.all(
        videoIds.map(async (videoId) => {
          const url = `https://api.dailymotion.com/video/${videoId}?fields=thumbnail_240_url,title,duration,id`;
          try {
            const response = await fetch(url);
            const data = await response.json();
            return {
              thumbnail: data.thumbnail_240_url,
              title: data.title,
              duration: data.duration,
              id: data.id,
            };
          } catch (error) {
            console.error(`Ошибка загрузки для видео ${videoId}:`, error);
            return null;
          }
        })
      );

      setThumbnails(results.filter((item) => item !== null));
    };

    fetchThumbnails();
  }, []);

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600); // Часы
    const minutes = Math.floor((seconds % 3600) / 60); // Минуты
    const remainingSeconds = seconds % 60; // Секунды

    // Форматируем минуты и секунды с ведущими нулями
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    // Если видео меньше часа, убираем часы
    if (hours > 0) {
      return `${hours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  };

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
    if (currentIndex < thumbnails.length - slidesToScroll) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0); // Вернуться к первому слайду
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(thumbnails.length - slidesToScroll); // Перейти к последнему видимому слайду
    }
  };

  return (
    <div className="w-full h-auto mb-8 flex flex-col items-center gap-8 px-4">
      <h2 className="text-white font-semibold uppercase text-[25px] sm:text-[50px]">
        {title}
      </h2>
      <div className="relative w-full h-[320px] flex items-center  md:h-[340px] bg-zinc-900 border border-zinc-400 rounded-sm p-4 max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 bg-zinc-900 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / slidesToScroll) * 100}%)`,
            gap: `${gap}px`, // Задаём отступы между слайдами
          }}
        >
          {thumbnails.map((video, index) => (
            <Link
              href={`/player/${video.id}`}
              key={index}
              className="flex-shrink-0 relative grayscale h-[300px] md:[350px] border border-white/30 rounded-2xl flex justify-center items-center bg-gradient-to-t from-black via-gray-600 to-black"
              style={{
                width: `calc(${100 / slidesToScroll}% - ${gap}px)`, // Корректируем ширину с учётом отступов
              }}
            >
              <SignedOut>
                <img
                  src="./lock.svg"
                  className=" h-20 w-20 z-50 mb-4 absolute opacity-80"
                  alt=""
                />
              </SignedOut>
              <div className="top-2 right-2 px-2 py-1 bg-opacity-60 text-sm bg-black z-50 absolute text-white">
                <p>{formatDuration(video.duration)}</p>
              </div>
              <img
                src={video.thumbnail}
                alt={`Slide ${index + 1}`}
                className="w-full cursor-pointer opacity-70 object-cover h-[300px] md:[350px] rounded-2xl"
              />
              <h3 className="text-white text-xl font-semibold absolute left-2 bottom-1 md:bottom-2">
                {video.title}
              </h3>
            </Link>
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
