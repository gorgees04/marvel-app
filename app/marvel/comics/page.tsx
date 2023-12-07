import { fetchComics, fetchComicsByTitle } from "@/app/lib/data";
import NotFound from "../not-found";
import Card from "@/app/ui/components/Card";
import { Comic } from "@/app/lib/definitions";
import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  // get page params from path
  const page = searchParams.page;
  const offset = 50 * Number(page);

  // fetching comics data
  const comicsData = await fetchComics(offset.toString());
  let comics = comicsData.data.results;

  // search comics
  const SearchValue = searchParams.query;
  if (SearchValue) {
    const searchComicsData = await fetchComicsByTitle(
      SearchValue.toLowerCase(),
      offset.toString()
    );
    const searchComics = searchComicsData.data.results;
    comics = searchComics;
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={"Comics"} />

      {/* <div className="flex flex-wrap justify-center my-4 w-full">
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
      </div> */}

      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {comics.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
      <Pagination charactersLength={comics.length} />
    </section>
  );
}
