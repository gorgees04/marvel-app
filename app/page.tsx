import Image from "next/image";
import Link from "next/link";
import HomeSearchBar from "./ui/components/home/HomeSearchBar";
import HomeContent from "./ui/components/home/HomeContent";

export default function Home() {
  return (
    <main className="text-white flex items-center flex-col mt-[80px] mx-5">
      <div className="text-center mt-10">
        <h1 className="text-3xl sm:text-6xl mb-2 font-bold">
          Welcome to G-Marvel website
        </h1>
        <p className="text-slate-300">
          Here we only talk about our marvel universe & our heros
        </p>
      </div>
      <div>
        <Link href={"/marvel"}>
          <h2 className="mt-5 text-lg hover:text-marvelRed">
            Fine out more &gt;&gt;
          </h2>
        </Link>
      </div>

      <div>
        <HomeSearchBar />
      </div>
      <div>
        <HomeContent />
      </div>
    </main>
  );
}
