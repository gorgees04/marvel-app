import { fetchCategory } from "@/app/lib/data";
import Collection from "../Collection";

const HomeSeries = async () => {
  // fetrching series data
  const seriesData = await fetchCategory("series", "0");
  const series = seriesData.data.results;
  return (
    <div className="w-screen">
      <Collection category={series} title="Series" />
    </div>
  );
};

export default HomeSeries;
