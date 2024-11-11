import Carousel from "@/components/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full shadow-yellow-300 flex flex-col gap-20 md:gap-32 items-center min-h-screen">
      <div className="bg-black shadow-2xl relative shadow-zinc-900 flex items-center justify-center w-full h-[60vh] sm:h-[100vh]">
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
      </div>
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}
