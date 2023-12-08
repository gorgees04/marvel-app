import { fetchComics, fetchComicsByTitle } from "@/app/lib/data";
import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";
import { Suspense } from "react";
import CardsLoadingSkeletons from "@/app/ui/components/loading-skeleton/CardsLoadingSkeletons";
import Comics from "@/app/ui/components/comics/Comics";

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
      <Suspense
        key={searchParams.query + searchParams.page}
        fallback={<CardsLoadingSkeletons />}
      >
        <Comics query={searchParams.query} page={searchParams.page} />
      </Suspense>
      <Pagination charactersLength={30} />
    </section>
  );
}
