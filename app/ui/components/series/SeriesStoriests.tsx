import { fetchCategoryStories } from "@/app/lib/data";
import Story from "../Story";

const SeriesStoriests = async ({ id }: { id: string }) => {
  // Series Stories
  const seriesStoriesData = await fetchCategoryStories("series", id);
  const seriesStories = seriesStoriesData.data.results;
  return (
    <div>
      <Story stories={seriesStories} />
    </div>
  );
};

export default SeriesStoriests;
