import { fetchCategoryStories } from "@/app/lib/data";
import React from "react";
import Story from "../Story";

const CharactersStories = async ({ id }: { id: string }) => {
  // characters stories
  const characterStoriesData = await fetchCategoryStories("characters", id);
  const characterStories = characterStoriesData.data.results;
  return (
    <div>
      <Story stories={characterStories} />
    </div>
  );
};

export default CharactersStories;
