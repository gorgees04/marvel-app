import { fetchComicsStories } from "@/app/lib/data";
import React from "react";
import Story from "../Story";

const ComicsStories = async ({ id }: { id: string }) => {
  // Comics stories
  const comicsStoriesData = await fetchComicsStories(id);
  const comicsStories = comicsStoriesData.data.results;
  return (
    <div>
      <Story stories={comicsStories} />
    </div>
  );
};

export default ComicsStories;
