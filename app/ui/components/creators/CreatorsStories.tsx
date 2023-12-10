import { fetchCategoryStories } from "@/app/lib/data";
import React from "react";
import Story from "../Story";

const CreatorsStories = async ({ id }: { id: string }) => {
  // Creators Stories
  const creatorsStoriesData = await fetchCategoryStories("creators", id);
  const creatorsStories = creatorsStoriesData.data.results;
  return (
    <div>
      <Story stories={creatorsStories} />
    </div>
  );
};

export default CreatorsStories;
