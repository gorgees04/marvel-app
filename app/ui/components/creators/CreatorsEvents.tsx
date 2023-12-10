import { fetchCategoryEvents } from "@/app/lib/data";
import Collection from "../Collection";

const CreatorsEvents = async ({ id }: { id: string }) => {
  // Creators Events
  const creatorsEventsData = await fetchCategoryEvents("creators", id);
  const creatorsEvents = creatorsEventsData.data.results;
  return (
    <div>
      <Collection title={"Events"} category={creatorsEvents} />
    </div>
  );
};

export default CreatorsEvents;
