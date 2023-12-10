import { fetchCategoryEvents } from "@/app/lib/data";
import React from "react";
import Collection from "../Collection";

const ComicsEvents = async ({ id }: { id: string }) => {
  // Comics Events
  const comicsEventsData = await fetchCategoryEvents("comics", id);
  const comicsEvents = comicsEventsData.data.results;

  return (
    <div>
      <Collection title={"Events"} category={comicsEvents} />
    </div>
  );
};

export default ComicsEvents;
