import { fetchCategory, fetchCategoryByName } from "@/app/lib/data";
import { Series } from "@/app/lib/definitions";
import Card from "../Card";
import NotFound from "@/app/marvel/not-found";

const Series = async ({ query, page }: { query?: string; page: string }) => {
  // main category
  const category = "series";

  // get page params from path
  const offset = 50 * Number(page);

  // fetching series data
  const seriesData = await fetchCategory(category, offset.toString());
  let series = seriesData.data.results;

  // search series
  const SearchValue = query;
  if (SearchValue) {
    const searchSeriesData = await fetchCategoryByName(
      category,
      SearchValue.toLowerCase(),
      offset.toString()
    );
    const searchSeries = searchSeriesData.data.results;
    series = searchSeries;
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center my-4 w-full">
        {series.map((aSeries: Series) => {
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
    </div>
  );
};

export default Series;
