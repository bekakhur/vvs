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
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

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
            className="flex-1 min-w-[calc(50%-1rem)] lg:min-w-[calc(25%-1rem)] border border-white/20 rounded-sm relative grayscale flex justify-center items-center bg-gradient-to-t from-black via-gray-600 to-black"
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
              className="w-full cursor-pointer rounded-sm opacity-70 h-40 object-cover md:h-64"
            />
            <h3 className="text-white text-xl font-semibold absolute left-2 bottom-1 md:bottom-2">
              {video.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
