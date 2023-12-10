import { fetchCategoryCharacters } from "@/app/lib/data";
import Collection from "../Collection";

const SeriesCharacters = async ({ id }: { id: string }) => {
  // Series Characters
  const seriesCharactersData = await fetchCategoryCharacters("series", id);
  const seriesCharacters = seriesCharactersData.data.results;
  return (
    <div>
      <Collection title={"Characters"} category={seriesCharacters} />
    </div>
  );
};

export default SeriesCharacters;
