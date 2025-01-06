"use client";

import React from "react";
import { useState, useEffect } from "react";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const MovieGrid = ({ title, videoIds }) => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % thumbnails.length);
    }, 15000); // 3 секунды

    return () => clearInterval(interval); // Очистить интервал при размонтировании
  }, [thumbnails.length]);

  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <h2 className="text-white font-semibold uppercase text-[25px] sm:text-[50px]">
        {title}
      </h2>
      <div className="flex max-w-7xl flex-wrap gap-2 px-4 sm:px-10">
        {thumbnails.map((video, index) => (
          <Link
            href={`/player/${video.id}`}
            key={index}
            className="flex-1 min-w-[calc(50%-1rem)] lg:min-w-[calc(25%-1rem)] border border-white/20 rounded-md relative grayscale flex justify-center items-center bg-gradient-to-t from-black via-black to-zinc-600"
          >
            <SignedOut>
              <img
                src="./lock.svg"
                className=" h-20 w-20 z-50 mb-4 absolute opacity-50"
                alt=""
              />
            </SignedOut>
            <div className="top-2 right-2 px-2 py-1 bg-opacity-60 text-sm bg-black z-50 absolute text-white">
              <p>{formatDuration(video.duration)}</p>
            </div>
            <img
              src={video.thumbnail}
              className="w-full cursor-pointer rounded-md opacity-50 h-40 object-cover md:h-64"
            />
            <h3 className="text-white font-semibold absolute left-2 bottom-1 md:bottom-2">
              {video.title}
            </h3>
          </Link>
        ))}
      </div>
      <div className="relative w-[90vw] max-w-[600px] shadow-xl shadow-zinc-700 bg-black h-auto overflow-hidden">
        <div
          className="flex transition-transform duration-[5000ms]"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {thumbnails.map((item, index) => (
            <div key={index} className="w-full justify-center flex-shrink-0">
              <img
                src={item.thumbnail} // Используем thumbnail из массива
                alt={`slide ${index}`}
                className="w-full h-full opacity-70 object-cover"
              />
              <h2 className="absolute bottom-4 text-3xl text-center font-semibold w-full text-white">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieGrid;
