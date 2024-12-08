"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

const videoIds = [
  "x6xh1zk",
  "x6q5p0r",
  "x36ycr3",
  "x6vw7fl",
  "x6w35la",
  "x8mqi7b",
  "x8txj9k",
  "x8ucf1y",
];

const page = ({ params }) => {
  const id = params.playerId;

  const [videoDetails, setVideoDetails] = useState(null);

  const router = useRouter();

  const handleBack = () => {
    router.back(); // Возвращает на предыдущую страницу
  };

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
    <div className="w-full bg-black text-white min-h-screen">
      <SignedIn>
        <div className="w-full text-white h-[40vh] z-50 sm:h-[100vh] sm:overflow-hidden sticky top-0 bg-black flex justify-center items-center">
          <iframe
            src={`https://geo.dailymotion.com/player.html?video=${id}`}
            className="w-full h-[40vh] sm:h-[100vh]"
            allowfullscreen
            title="Dailymotion Video Player"
            allow="web-share, autoplay"
          ></iframe>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="w-full text-white h-[40vh] z-50 sm:h-[100vh] md:overflow-hidden sticky top-0 bg-black flex flex-col justify-center items-center">
          <button
            onClick={handleBack}
            className="absolute top-4 left-6 text-4xl md:text-6xl"
          >
            &times;
          </button>
          <img
            src="../lock.svg"
            alt=""
            className="z-50 h-16 w-16 md:h-28 md:w-28 md:mb-16 mb-8"
          />
          <div className="flex gap-2 items-center font-semibold  text-white">
            <SignInButton mode="modal">
              <button className="uppercase px-4 py-2 bg-gradient-to-t from-green-800 to-green-400 font-light rounded-sm">
                sign in
              </button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>
      <div className="text-2xl sm:text-5xl bg-black border-t border-opacity-10 border-white sm:border-none sm:bg-transparent sticky top-[40vh] sm:top-auto py-6 px-6 z-50 left-6 sm:hidden font-bold">
        <h2>{videoDetails?.title || "..."}</h2>
      </div>

      <div className="flex sm:hidden bg-black flex-col gap-2 mx-6 pb-4">
        {thumbnails.map((video, index) => {
          return (
            <Link
              className="w-full flex justify-center items-center relative h-64"
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
              <SignedOut>
                <img
                  src="../lock.svg"
                  className=" h-20 w-20 mb-6 absolute opacity-80"
                  alt=""
                />
              </SignedOut>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
