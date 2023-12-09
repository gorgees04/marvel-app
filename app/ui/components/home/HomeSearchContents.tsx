import { fetchMainSearch } from "@/app/lib/data";
import React from "react";
import Card from "../Card";
import Characters from "../characters/Characters";

const HomeSearchContents = async ({
  query,
  category,
}: {
  query?: string | undefined;
  category?: string | undefined;
}) => {
  let searchResults;
  if (category && query) {
    const getData = await fetchMainSearch(category, query);
    searchResults = getData.data.results;
  }
  console.log(searchResults);

  if (query && category) {
    return (
      <div>
        {searchResults.map((res: any) => {
          // some api has name as title and other has title
          let name;
          if (res.name) {
            name = res.name;
          } else {
            name = res.title;
          }
          return (
            <Card
              id={res.id}
              category={category}
              name={name}
              img={res.thumbnail}
            />
          );
        })}
      </div>
    );
  }
};

export default HomeSearchContents;
