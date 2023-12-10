import { fetchCategorySeries } from "@/app/lib/data";
import React from "react";
import Collection from "../Collection";

const CharactersSeries = async ({ id }: { id: string }) => {
  // characters series
  const characterSeriesData = await fetchCategorySeries("characters", id);
  const characterSeries = characterSeriesData.data.results;
  return (
    <div>
      <Collection title={"Series"} category={characterSeries} />
    </div>
  );
};

export default CharactersSeries;
