import { fetchCategoryById } from "@/app/lib/data";
import CardDetails from "../CardDetails";
import { getImageUrl } from "@/app/lib/utils";
import { Events } from "@/app/lib/definitions";

const EventsDetails = async ({ id }: { id: string }) => {
  // fetch single comic by id
  const eventsIdData = await fetchCategoryById("events", id);
  const eventsPage = eventsIdData.data.results;
  return (
    <div className="m-10">
      {eventsPage.map((comic: Events) => {
        return (
          <CardDetails
            name={comic.title}
            imgUrl={getImageUrl(comic.thumbnail)}
            description={comic.description}
            key={comic.id}
          />
        );
      })}
    </div>
  );
};

export default EventsDetails;
