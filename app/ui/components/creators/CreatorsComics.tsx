import { fetchCategoryComics } from "@/app/lib/data";
import React from "react";
import Collection from "../Collection";

const CreatorsComics = async ({ id }: { id: string }) => {
  // Creators Comics
  const creatorsComicsData = await fetchCategoryComics("creators", id);
  const creatorsComics = creatorsComicsData.data.results;
  return (
    <div>
      <Collection title={"Comics"} category={creatorsComics} />
    </div>
  );
};

export default CreatorsComics;
