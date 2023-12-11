import { fetchCategoryStories } from "@/app/lib/data";
import Story from "../Story";

const EventsStories = async ({ id }: { id: string }) => {
  // Events Stories
  const eventsStoriesData = await fetchCategoryStories("events", id);
  const eventsStories = eventsStoriesData.data.results;
  return (
    <div>
      <Story stories={eventsStories} />
    </div>
  );
};

export default EventsStories;
