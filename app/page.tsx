import Image from "next/image";
import Link from "next/link";
import logo from "./ui/img/avengers-logo.png";
import CardsLoadingSkeltons from "./ui/components/loading-skeleton/CardsLoadingSkeletons";
import DetailsSkeletonLoading from "./ui/components/loading-skeleton/DetailsSkeletonLoading";

export default function Home() {
  const categories = ["characters", "comics", "creators", "series", "events"];
  return (
    <main className="text-white flex items-center flex-col mt-[80px] mx-5">
      <div className="text-center my-10">
        <h1 className="text-3xl sm:text-6xl mb-2 font-bold">
          Welcome to G-Marvel website
        </h1>
        <p className="text-slate-300">
          Here we only talk about our marvel universe & our heros
        </p>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center items-center w-[400px] sm:w-[700px]">
          {categories.map((category: string) => {
            return (
              <Link href={`/marvel/${category}`} key={category}>
                <li className="m-5 text-xl bg-marvelRed border-4 border-white p-1 w-[115px] text-center">
                  {category}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
