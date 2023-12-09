"use client";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const HomeContent = () => {
  const categories = ["characters", "comics", "creators", "series", "events"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleCategory = useDebouncedCallback((category: string) => {
    setSelectedCategory(category);
    // make to create a params
    const params = new URLSearchParams(searchParams);

    // useinf get to assign a param for the link
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    // replace the link with including the query params
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center w-[500px] sm:w-[800px]">
        {categories.map((category: string) => {
          return (
            <Link
              href={searchParams.has("query") ? "" : `/marvel/${category}`}
              key={category}
              onClick={() => handleCategory(category)}
            >
              <button className="m-5 text-xl bg-marvelRed border-4 border-white p-1 w-[115px] text-center">
                {category}
              </button>
            </Link>
          );
        })}
      </ul>
      <div></div>
    </div>
  );
};

export default HomeContent;
