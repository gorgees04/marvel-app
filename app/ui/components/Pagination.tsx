"use client";
import { useEffect, useState } from "react";
import Btn from "./Btn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import spidermanIcon from "../img/spiderman.png";

const Pagination = ({ charactersLength }: { charactersLength: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // the firist page will be 0 whatever is fetching it will be multiplie with 0 as this will the number of page
  const [page, setPage] = useState(0);

  // assign a page param
  const params = new URLSearchParams(searchParams);
  params.set("page", page.toString());

  // when the search engin work will set the pages to 0 again
  useEffect(() => {
    if (params.get("query")) {
      setPage(0);
    }
  }, [params.get("query")]);

  // handling the click on next & previous btns to increase or decrease the page
  const handleClick = (ope: string) => {
    if (ope === "next") {
      setPage((prev) => ++prev);
    } else if (ope === "prev" && page > 0) {
      setPage((prev) => --prev);
    }
  };

  // using useEffect to not render the component whenever rended another component
  useEffect(() => {
    // if (page > 0) {
    return replace(`${pathname}?${params.toString()}`);
    // } else {
    //   setPage(0);
    //   return replace(`${pathname}?${params.toString()}");
    // }
  }, [page]);

  if (charactersLength >= 30) {
    return (
      <div className="w-full flex justify-around items-center text-white my-10">
        {page > 0 ? (
          <Btn btnName={"Previuos"} handleClick={() => handleClick("prev")} />
        ) : (
          <div></div>
        )}
        <Image src={spidermanIcon} alt="spiderman icon" width={80} height={0} />
        {charactersLength !== 0 && (
          <Btn btnName={"Next"} handleClick={() => handleClick("next")} />
        )}
      </div>
    );
  }
};

export default Pagination;
