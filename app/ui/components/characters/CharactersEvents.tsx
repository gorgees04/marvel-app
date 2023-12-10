import { fetchCategoryEvents } from "@/app/lib/data";
import React from "react";
import Collection from "../Collection";

const CharactersEvents = async ({ id }: { id: string }) => {
  // characters events
  const characterEventsData = await fetchCategoryEvents("characters", id);
  const characterEvents = characterEventsData.data.results;

  return (
    <div>
      <Collection title={"Events"} category={characterEvents} />
    </div>
  );
};

export default CharactersEvents;
