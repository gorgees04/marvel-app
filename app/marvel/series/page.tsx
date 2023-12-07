import { fetchSeries, fetchSeriesByTitle } from "@/app/lib/data";
import NotFound from "../not-found";
import { Comic } from "@/app/lib/definitions";
import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";
import Card from "@/app/ui/components/Card";

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  // get page params from path
  const page = searchParams.page;
  const offset = 50 * Number(page);

  // fetching series data
  const seriesData = await fetchSeries(offset.toString());
  let series = seriesData.data.results;

  // search series
  const SearchValue = searchParams.query;
  if (SearchValue) {
    const searchSeriesData = await fetchSeriesByTitle(
      SearchValue.toLowerCase(),
      offset.toString()
    );
    const searchSeries = searchSeriesData.data.results;
    series = searchSeries;
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={"Series"} />
      <div className="flex flex-wrap justify-center my-4 w-full">
        {series.map((aSeries: Comic) => {
          return (
            <Card
              category="series"
              key={aSeries.id}
              name={aSeries.title}
              img={aSeries.thumbnail}
              id={aSeries.id}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {series.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
      <Pagination charactersLength={series.length} />
    </section>
  );
}
