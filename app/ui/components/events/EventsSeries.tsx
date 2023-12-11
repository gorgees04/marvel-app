import { fetchCategorySeries } from "@/app/lib/data";
import Collection from "../Collection";

const EventsSeries = async ({ id }: { id: string }) => {
  // Events Series
  const eventsSeriesData = await fetchCategorySeries("events", id);
  const eventsSeries = eventsSeriesData.data.results;
  return (
    <div>
      <Collection title={"Series"} category={eventsSeries} />
    </div>
  );
};

export default EventsSeries;
