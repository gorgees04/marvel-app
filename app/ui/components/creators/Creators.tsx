import { fetchCategory, fetchCategoryByName } from "@/app/lib/data";
import { Creators } from "@/app/lib/definitions";
import React from "react";
import Card from "../Card";
import NotFound from "@/app/marvel/not-found";

const Creators = async ({ query, page }: { query?: string; page: string }) => {
  const category = "creators";
  // get page params from path
  const offset = 50 * Number(page);

  // fetching creators data
  const creatorsData = await fetchCategory(category, offset.toString());
  let creators = creatorsData.data.results;

  // search creators
  const SearchValue = query;
  if (SearchValue) {
    const searchCreatorsData = await fetchCategoryByName(
      category,
      SearchValue.toLowerCase(),
      offset.toString()
    );
    const searchCreators = searchCreatorsData.data.results;
    creators = searchCreators;
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center my-4 w-full">
        {creators.map((creator: Creators) => {
          return (
            <Card
              category="creators"
              key={creator.id}
              name={creator.fullName}
              img={creator.thumbnail}
              id={creator.id}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {creators.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default Creators;
