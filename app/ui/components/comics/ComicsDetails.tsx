import { fetchCategoryById } from "@/app/lib/data";
import React from "react";
import CardDetails from "../CardDetails";
import { getImageUrl } from "@/app/lib/utils";
import { Comic } from "@/app/lib/definitions";

const ComicsDetails = async ({ id }: { id: string }) => {
  // fetch single comic by id
  const comicsIdData = await fetchCategoryById("comics", id);
  const comicsPage = comicsIdData.data.results;

  // get date from api
  const getPublishedDate = (dateOfPublish: string) => {
    const date = new Date(dateOfPublish);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  return (
    <div className="m-10">
      {comicsPage.map((comic: Comic) => {
        return (
          <CardDetails
            name={comic.title}
            imgUrl={getImageUrl(comic.thumbnail)}
            description={comic.description}
            date={getPublishedDate(comic.dates[0].date)}
            key={comic.id}
          />
        );
      })}
    </div>
  );
};

export default ComicsDetails;
