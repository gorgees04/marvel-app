"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const MarvelSideBar = () => {
  const pathname = usePathname().split("/");
  const linkCategory = pathname[2];

  const categories = ["characters", "comics", "series", "stories"];

  return (
    <aside className="fixed top-[100px] z-10 left-0 flex flex-col w-[150px] md:w-[250px] h-screen text-white p-1 md:p-6 shadow-xl">
      <h1 className="text-center text-marvelRed font-bold text-xl md:text-3xl py-7">
        Marvel Categories
      </h1>

      <div className="flex flex-col text-md pr-2 border-r-2 border-gray-700 md:text-l md:p-4">
        {categories.map((category, id) => {
          return (
            <Link
              key={id}
              href={`/marvel/${category}?page=0`}
              className={clsx(
                { "bg-marvelRed": linkCategory === category },
                "border-2 border-white rounded-md p-2 m-4 transition-all duration-300 text-center capitalize hover:mr-0"
              )}
            >
              {category}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default MarvelSideBar;
