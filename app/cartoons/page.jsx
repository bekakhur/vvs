import React from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";

const m50 = [
  "x963dpw",
  "x8jxj29",
  "x8hc0m6",
  "x7ut7pe",
  "x8jtm1c",
  "x3eq1p1",
  "x8zuuy8",
  "x90pdfm",
];
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
      <Banner img="/detachment.jpg" title="detachment" videoId="x8txj9k" />
      <MovieGrid title="30s" videoIds={m30} />
      <MovieGrid title="40s" videoIds={m40} />
      <MovieGrid title="50s" videoIds={m50} banner={true} />
      <Footer />
    </div>
  );
};

export default page;
