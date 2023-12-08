import {
  fetchSeries,
  fetchSeriesById,
  fetchSeriesCharacters,
  fetchSeriesComics,
  fetchSeriesCreators,
  fetchSeriesEvents,
  fetchSeriesStories,
} from "@/app/lib/data";
import { Series } from "@/app/lib/definitions";
import { getImageUrl } from "@/app/lib/utils";
import CardDetails from "@/app/ui/components/CardDetails";
import Collection from "@/app/ui/components/Collection";
import Story from "@/app/ui/components/Story";

export async function generateStaticParams() {
  const seriesData = await fetchSeries("0");
  const posts = seriesData.data.results;

  return posts.map((post: Series) => ({
    id: post.id.toString(),
  }));
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // fetch single series
  const seriesIdData = await fetchSeriesById(id);
  const seriesPage = seriesIdData.data.results;

  // Series Characters
  const seriesCharactersData = await fetchSeriesCharacters(id);
  const seriesCharacters = seriesCharactersData.data.results;

  // Series Comics
  const seriesComicsData = await fetchSeriesComics(id);
  const seriesComics = seriesComicsData.data.results;

  // Series Creators
  const seriesCreatorsData = await fetchSeriesCreators(id);
  const seriesCreators = seriesCreatorsData.data.results;

  // Series Events
  const seriesEventsData = await fetchSeriesEvents(id);
  const seriesEvents = seriesEventsData.data.results;

  // Series Stories
  const seriesStoriesData = await fetchSeriesStories(id);
  const seriesStories = seriesStoriesData.data.results;

  return (
    <section>
      <div className="m-10">
        {seriesPage.map((aSeries: Series) => {
          return (
            <CardDetails
              name={aSeries.title}
              imgUrl={getImageUrl(aSeries.thumbnail)}
              description={aSeries.description}
              key={aSeries.id}
            />
          );
        })}
      </div>
      <Collection title={"Characters"} category={seriesCharacters} />
      <Collection title={"Comics"} category={seriesComics} />
      <Collection title={"Creators"} category={seriesCreators} />
      <Collection title={"Events"} category={seriesEvents} />
      <Story stories={seriesStories} />
    </section>
  );
};

export default page;
