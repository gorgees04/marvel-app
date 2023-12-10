import { fetchCategoryById } from "@/app/lib/data";
import React from "react";
import CardDetails from "../CardDetails";
import { getImageUrl } from "@/app/lib/utils";
import { Creators } from "@/app/lib/definitions";

const CreatorsDetails = async ({ id }: { id: string }) => {
  // fetch Creators page by id
  const creatorsIdData = await fetchCategoryById("creators", id);
  const creatorsPage = creatorsIdData.data.results;
  return (
    <div className="m-10">
      {creatorsPage.map((creator: Creators) => {
        return (
          <CardDetails
            name={creator.fullName}
            imgUrl={getImageUrl(creator.thumbnail)}
            key={creator.id}
          />
        );
      })}
    </div>
  );
};

export default CreatorsDetails;
