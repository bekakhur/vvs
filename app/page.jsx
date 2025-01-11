import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
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

      <Banner img="/joker.jpg" title="joker" videoId="x66aov7" />
      <Carousel title="30s" videoIds={m30} />
      <Carousel title="40s" videoIds={m40} />
      <Carousel title="50s" videoIds={m50} />
      <Footer />
    </div>
  );
}
