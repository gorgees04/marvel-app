import { fetchCategoryCharacters } from "@/app/lib/data";
import React from "react";
import Collection from "../Collection";

const EventsCharacters = async ({ id }: { id: string }) => {
  // Events characters
  const eventsCharactersData = await fetchCategoryCharacters("events", id);
  const eventsCharacters = eventsCharactersData.data.results;
  return (
    <div>
      <Collection title={"Characters"} category={eventsCharacters} />
    </div>
  );
};

export default EventsCharacters;
