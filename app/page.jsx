import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

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
      <Carousel title="PICK OF THE WEEK" />
      <Carousel title="MOVIES" />
      <Carousel title="SERIES" />
      <Carousel title="CARTOONS" />
      <Footer />
    </div>
  );
}
