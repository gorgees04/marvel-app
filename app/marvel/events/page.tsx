import { fetchEvents, fetchEventsByTitle } from "@/app/lib/data";
import NotFound from "../not-found";
import Card from "@/app/ui/components/Card";
import { Events } from "@/app/lib/definitions";
import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  // get page params from path
  const page = searchParams.page;
  const offset = 50 * Number(page);

  // fetching Events data
  const eventsData = await fetchEvents(offset.toString());
  let events = eventsData.data.results;

  // search Events
  const SearchValue = searchParams.query;
  if (SearchValue) {
    const searchEventsData = await fetchEventsByTitle(
      SearchValue.toLowerCase(),
      offset.toString()
    );
    const searchEvents = searchEventsData.data.results;
    events = searchEvents;
  }

  return (
    <section className="ml-[150px] md:ml-[250px] mt-[120px] flex flex-col justify-center items-center">
      <Header title={"Events"} />
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
      <Pagination charactersLength={events.length} />
    </section>
  );
}
