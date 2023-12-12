import { fetchCategory } from "@/app/lib/data";
import Collection from "../Collection";

const HomeEvents = async () => {
  // fetrching Events data
  const eventsData = await fetchCategory("events", "0");
  const events = eventsData.data.results;
  return (
    <div className="w-screen">
      <Collection category={events} title="Events" />
    </div>
  );
};

export default HomeEvents;
