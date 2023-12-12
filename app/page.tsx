import Image from "next/image";
import Link from "next/link";
import avengersImg from "@/app/ui/img/avengers-1.png";
import { Suspense } from "react";
import CollectionLoadingSkeleton from "./ui/components/loading-skeleton/CollectionLoadingSkeleton";
import HomeCharacters from "./ui/components/home/HomeCharacters";

export default function Home() {
  return (
    <main className="text-white flex items-center justify-center flex-col my-[80px] mx-[30px] sm:my-[120px] sm:mx-[180px]">
      <div className="text-center mt-10">
        <h1 className="text-3xl sm:text-6xl mb-2 font-bold">
          Welcome to G-Marvel website
        </h1>
        <p className="text-slate-300 my-10">
          Here we only talk about our marvel universe & our heros
        </p>
      </div>
      <div>
        <Image src={avengersImg} alt="avengers image" width={500} height={0} />
      </div>
      <div>
        <Link href={"/marvel"}>
          <h2 className="mt-5 text-lg text-center border-4 bg-marvelRed text-white p-2 hover:bg-offWhite hover:border-marvelRed hover:text-marvelRed">
            Explore the Marvel Universe &gt;&gt;
          </h2>
        </Link>
      </div>
      <div>
        <Suspense fallback={<CollectionLoadingSkeleton />}>
          <HomeCharacters />
        </Suspense>
      </div>
    </main>
  );
}
