import { fetchCategoryComics } from "@/app/lib/data";
import Collection from "../Collection";

const EventsComics = async ({ id }: { id: string }) => {
  // Events Comics
  const eventsComicsData = await fetchCategoryComics("events", id);
  const eventsComics = eventsComicsData.data.results;
  return (
    <div>
      <Collection title={"Comics"} category={eventsComics} />
    </div>
  );
};

export default EventsComics;
