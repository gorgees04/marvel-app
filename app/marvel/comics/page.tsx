import { fetchComics } from "@/app/lib/data";
import SearchBar from "@/app/ui/components/SearchBar";
import NotFound from "../not-found";
import Card from "@/app/ui/components/Card";
import { Comic } from "@/app/lib/definitions";

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  const page = searchParams.page;
  const comicsData = await fetchComics(page);
  const comics = comicsData.data.results;

  return (
    <section className="ml-[150px] md:ml-[250px] mt-[120px] flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center flex-col md:flex-row md:justify-between md:px-10">
        <h1 className="text-4xl md:text-[40px] font-extrabold text-marvelRed m-4">
          Comics
        </h1>
        <SearchBar />
      </div>
      <div className="flex flex-wrap justify-center my-4 w-full">
        {comics.map((comic: Comic) => {
          return (
            <Card
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
      {/* <Pagination charactersLength={characters.length} /> */}
    </section>
  );
}
