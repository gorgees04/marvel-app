import { fetchCategoryCreators } from "@/app/lib/data";
import React from "react";
import Collection from "../Collection";

const ComicsCreators = async ({ id }: { id: string }) => {
  // Comics creators
  const comicsCreatorsData = await fetchCategoryCreators("comics", id);
  const comicsCreators = comicsCreatorsData.data.results;

  return (
    <div>
      <Collection title={"Creators"} category={comicsCreators} />
    </div>
  );
};

export default ComicsCreators;
