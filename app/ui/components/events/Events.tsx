import { fetchCategory, fetchCategoryByName } from "@/app/lib/data";
import { Events } from "@/app/lib/definitions";
import Card from "../Card";
import NotFound from "@/app/marvel/not-found";

const Events = async ({ query, page }: { query?: string; page: string }) => {
  // main category
  const category = "events";
  // get page params from path
  const offset = 50 * Number(page);

  // fetching Events data
  const eventsData = await fetchCategory(category, offset.toString());
  let events = eventsData.data.results;

  // search Events
  const SearchValue = query;
  if (SearchValue) {
    const searchEventsData = await fetchCategoryByName(
      category,
      SearchValue.toLowerCase(),
      offset.toString()
    );
    const searchEvents = searchEventsData.data.results;
    events = searchEvents;
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center my-4 w-full">
        {events.map((event: Events) => {
          return (
            <Card
              category="events"
              key={event.id}
              name={event.title}
              img={event.thumbnail}
              id={event.id}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {events.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default Events;
