import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const pickOfTheWeek = ["x66aov7", "x6aiala", "x6ku1og"];
const movies = ["x77n9jw"];

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
      <Banner img="/joker.jpg" title="joker" />
      <Carousel title="PICK OF THE WEEK" videoIds={pickOfTheWeek} />
      <Carousel title="MOVIES" videoIds={movies} />
      <Carousel title="SERIES" videoIds={movies} />
      <Carousel title="CARTOONS" videoIds={movies} />
      <Footer />
    </div>
  );
}
