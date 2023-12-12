import { fetchCategory } from "@/app/lib/data";
import Collection from "../Collection";

const HomeCreators = async () => {
  // fetrching creators data
  const creatorsData = await fetchCategory("creators", "0");
  const creators = creatorsData.data.results;
  return (
    <div className="w-screen">
      <Collection category={creators} title="Creators" />
    </div>
  );
};

export default HomeCreators;
