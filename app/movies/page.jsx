import React from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";

const pickOfTheWeek = ["x66aov7", "x6aiala", "x6ku1og"];
const movies = ["x77n9jw"];
const m40 = [
  "x6ukg92",
  "x6wacwi",
  "x6ukiox",
  "x6py71o",
  "x6vna3z",
  "x6uejo2",
  "x6qocf1",
  "x6vpalx",
];

const m30 = [
  "x6xh1zk",
  "x6q5p0r",
  "x36ycr3",
  "x6vw7fl",
  "x6w35la",
  "x8mqi7b",
  "x8txj9k",
  "x8ucf1y",
];

const page = () => {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-24 min-h-screen">
      <Banner img="/time_enemy.jpg" title="time enemy" videoId="x66aov7" />
      <MovieGrid title="30s" videoIds={m30} />
      <MovieGrid title="40s" videoIds={m40} />
      <MovieGrid title="30s" videoIds={m30} />
      <Footer />
    </div>
  );
};

export default page;
