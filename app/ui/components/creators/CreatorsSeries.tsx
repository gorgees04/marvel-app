import { fetchCategorySeries } from "@/app/lib/data";
import React from "react";
import Collection from "../Collection";

const CreatorsSeries = async ({ id }: { id: string }) => {
  // Creators Series
  const creatorsSeriesData = await fetchCategorySeries("creators", id);
  const creatorsSeries = creatorsSeriesData.data.results;
  return (
    <div>
      <Collection title={"Series"} category={creatorsSeries} />
    </div>
  );
};

export default CreatorsSeries;
