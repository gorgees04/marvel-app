import { fetchCategoryComics } from "@/app/lib/data";
import Collection from "../Collection";

const SeriesComics = async ({ id }: { id: string }) => {
  // Series Comics
  const seriesComicsData = await fetchCategoryComics("series", id);
  const seriesComics = seriesComicsData.data.results;
  return (
    <div>
      <Collection title={"Comics"} category={seriesComics} />
    </div>
  );
};

export default SeriesComics;
