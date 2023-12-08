import { fetchComics, fetchComicsByTitle } from "@/app/lib/data";
import React from "react";
import Card from "../Card";
import NotFound from "@/app/marvel/not-found";
import { Comic } from "@/app/lib/definitions";

const Comics = async ({ query, page }: { query?: string; page: string }) => {
  // get page params from path
  const offset = 50 * Number(page);

  // fetching comics data
  const comicsData = await fetchComics(offset.toString());
  let comics = comicsData.data.results;

  // search comics
  const SearchValue = query;
  if (SearchValue) {
    const searchComicsData = await fetchComicsByTitle(
      SearchValue.toLowerCase(),
      offset.toString()
    );
    const searchComics = searchComicsData.data.results;
    comics = searchComics;
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center my-4 w-full">
        {comics.map((comic: Comic) => {
          return (
            <Card
              category="comics"
              key={comic.id}
              name={comic.title}
              img={comic.thumbnail}
              id={comic.id}
            />
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {comics.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default Comics;
