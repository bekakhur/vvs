"use client";

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

const videoIds = ["x66aov7", "x6aiala", "x6ku1og"];

const page = ({ params }) => {
  const id = params.playerId;

  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const API_URL = `https://api.dailymotion.com/video/${id}?fields=title`;

      const res = await fetch(API_URL);
      const data = await res.json();
      setVideoDetails(data);
    };

    fetchVideoDetails();
  }, []);

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
    <div className="w-full text-white min-h-screen">
      <div className="w-full text-white h-[40vh] z-50 sm:h-[100vh] sm:overflow-hidden sticky top-0 bg-black flex justify-center items-center">
        <iframe
          src={`https://geo.dailymotion.com/player.html?video=${id}`}
          className="w-full h-[40vh] sm:h-[100vh]"
          allowfullscreen
          title="Dailymotion Video Player"
          allow="web-share, autoplay"
        ></iframe>
      </div>
      <div className="text-2xl sm:text-5xl bg-black border-t border-opacity-10 border-white sm:border-none sm:bg-transparent sticky top-[40vh] sm:top-auto py-6 px-6 z-50 left-6 sm:hidden font-bold">
        <h2>{videoDetails?.title || ""}</h2>
      </div>

      <div className="flex sm:hidden bg-black flex-col gap-2 mx-6 pb-4">
        {thumbnails.map((video, index) => {
          return (
            <Link
              className="w-full relative h-64"
              key={index}
              href={`/player/${video.id}`}
            >
              <img
                src={video.thumbnail}
                alt=""
                className="opacity-70 object-cover grayscale w-full h-64"
              />
              <h2 className="absolute text-white text-2xl font-semibold bottom-2 left-2">
                {video.title}
              </h2>
              <div className="absolute top-2 right-2 bg-black rounded-sm opacity-80">
                <span className="py-1 px-2 text-sm text-white">
                  {formatDuration(video.duration)}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
