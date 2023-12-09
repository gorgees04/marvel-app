"use client";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import clsx from "clsx";

const HomeCategories = () => {
  const categories = ["characters", "comics", "creators", "series", "events"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // if (!searchParams.has("query")) {
  //   setSelectedCategory("");
  // }

  const handleCategory = useDebouncedCallback((category: string) => {
    setSelectedCategory(category);
    // make to create a params
    const params = new URLSearchParams(searchParams);

    // useinf get to assign a param for the link
    if (category && searchParams.has("query")) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    // replace the link with including the query params
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center w-[500px] sm:w-[800px]">
        {categories.map((category: string) => {
          return (
            <Link
              href={searchParams.has("query") ? "" : `/marvel/${category}`}
              key={category}
            >
              <button
                onClick={() => handleCategory(category)}
                className={clsx(
                  `m-5 text-xl bg-marvelRed border-4 p-1 w-[115px] h-[50px] sm:w-[140px] text-center rounded font-bold shadow-xl shadow-black transition-transform duration-300 transform hover:scale-110 bg-opacity-80`,
                  {
                    "text-marvelRed border-marvelRed bg-zinc-950":
                      selectedCategory === category &&
                      searchParams.has("query"),
                  }
                )}
              >
                {category}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCategories;
