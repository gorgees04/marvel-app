import { fetchCategory } from "@/app/lib/data";
import Collection from "../Collection";

const HomeCharacters = async () => {
  // fetrching characters data
  const herosData = await fetchCategory("characters", "0");
  const heros = herosData.data.results;
  return (
    <div className=" w-screen">
      <Collection category={heros} title="Characters" />
    </div>
  );
};

export default HomeCharacters;
