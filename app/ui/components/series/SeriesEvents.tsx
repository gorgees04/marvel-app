import { fetchCategoryEvents } from "@/app/lib/data";
import Collection from "../Collection";

const SeriesEvents = async ({ id }: { id: string }) => {
  // Series Events
  const seriesEventsData = await fetchCategoryEvents("series", id);
  const seriesEvents = seriesEventsData.data.results;
  return (
    <div>
      <Collection title={"Events"} category={seriesEvents} />
    </div>
  );
};

export default SeriesEvents;
