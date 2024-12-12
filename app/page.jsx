import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const pickOfTheWeek = [
  "x66aov7",
  "x6aiala",
  "x6ku1og",
  "x6vvwea",
  "x6vw7fl",
  "x6w35la",
  "x6rr15m",
];
const movies = ["x77n9jw", "x6pt1q8", "x6qbv6p"];

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

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-24  min-h-screen">
      {/* <div className="bg-black shadow-2xl relative shadow-zinc-900 flex items-center justify-center w-full h-[60vh] sm:h-[100vh]">
        <Image
          src="/joker.jpg"
          width={500}
          height={500}
          objectFit="cover"
          alt="joker"
          className="h-[60vh] grayscale sm:h-[100vh] w-auto object-cover"
        />
        <Link
          className="absolute bottom-10 bg-yellow-400 text-sm p-3 rounded-md"
          href={"/player"}
        >
          WATCH NOW
        </Link>
      </div> */}

      <Banner img="/joker.jpg" title="joker" videoId="x6ku1og" />
      <Carousel title="wild west" videoIds={pickOfTheWeek} />
      <Carousel title="new york" videoIds={movies} />
      <Carousel title="chicago" videoIds={movies} />
      <Carousel title="oscar winners" videoIds={movies} />
      <Footer />
    </div>
  );
}
