import { fetchCategoryCreators } from "@/app/lib/data";
import Collection from "../Collection";

const EventsCreators = async ({ id }: { id: string }) => {
  // Events Creators
  const eventsCreatorsData = await fetchCategoryCreators("events", id);
  const eventsCreators = eventsCreatorsData.data.results;
  return (
    <div>
      <Collection title={"Creators"} category={eventsCreators} />
    </div>
  );
};

export default EventsCreators;
