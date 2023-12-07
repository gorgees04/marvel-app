import { fetchCharactersComics } from "@/app/lib/data";
import Collection from "../Collection";

const CharactersComics = async ({ id }: { id: string }) => {
  // Characters comics
  const comicsData = await fetchCharactersComics(id);
  const comics = comicsData.data.results;
  return (
    <div>
      <Collection title={"Comics"} category={comics} />
    </div>
  );
};

export default CharactersComics;
