import { fetchCategory } from "@/app/lib/data";
import Collection from "../Collection";

const HomeComics = async () => {
  // fetrching comics data
  const comicsData = await fetchCategory("comics", "0");
  const comics = comicsData.data.results;
  return (
    <div className=" w-screen">
      <Collection category={comics} title="Comics" />
    </div>
  );
};

export default HomeComics;
