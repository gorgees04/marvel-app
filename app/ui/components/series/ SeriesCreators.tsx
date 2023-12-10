import { fetchCategoryCreators } from "@/app/lib/data";
import Collection from "../Collection";

const SeriesCreators = async ({ id }: { id: string }) => {
  // Series Creators
  const seriesCreatorsData = await fetchCategoryCreators("series", id);
  const seriesCreators = seriesCreatorsData.data.results;

  return (
    <div>
      <Collection title={"Creators"} category={seriesCreators} />
    </div>
  );
};

export default SeriesCreators;
