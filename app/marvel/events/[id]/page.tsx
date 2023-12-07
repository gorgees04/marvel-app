import {
  fetchEvents,
  fetchEventsById,
  fetchEventsCharacters,
  fetchEventsComics,
  fetchEventsCreators,
  fetchEventsSeries,
  fetchEventsStories,
} from "@/app/lib/data";
import { Comic, Events } from "@/app/lib/definitions";
import { getImageUrl } from "@/app/lib/utils";
import CardDetails from "@/app/ui/components/CardDetails";
import Collection from "@/app/ui/components/Collection";
import Story from "@/app/ui/components/Story";

export async function generateStaticParams() {
  const eventsData = await fetchEvents("0");
  const posts = eventsData.data.results;

  return posts.map((post: Events) => ({
    id: post.id.toString(),
  }));
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // fetch single comic by id
  const eventsIdData = await fetchEventsById(id);
  const eventsPage = eventsIdData.data.results;

  // Events characters
  const eventsCharactersData = await fetchEventsCharacters(id);
  const eventsCharacters = eventsCharactersData.data.results;

  // Events Comics
  const eventsComicsData = await fetchEventsComics(id);
  const eventsComics = eventsComicsData.data.results;

  // Events Series
  const eventsSeriesData = await fetchEventsSeries(id);
  const eventsSeries = eventsSeriesData.data.results;

  // Events Creators
  const eventsCreatorsData = await fetchEventsCreators(id);
  const eventsCreators = eventsCreatorsData.data.results;

  // Events Stories
  const eventsStoriesData = await fetchEventsStories(id);
  const eventsStories = eventsStoriesData.data.results;

  return (
    <section>
      <div className="m-10">
        {eventsPage.map((comic: Events) => {
          return (
            <CardDetails
              name={comic.title}
              imgUrl={getImageUrl(comic.thumbnail)}
              description={comic.description}
            />
          );
        })}
      </div>
      <Collection title={"Characters"} category={eventsCharacters} />
      <Collection title={"Comics"} category={eventsComics} />
      <Collection title={"Creators"} category={eventsCreators} />
      <Collection title={"Series"} category={eventsSeries} />
      <Story stories={eventsStories} />
    </section>
  );
};

export default page;
