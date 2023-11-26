import {
  fetchCreators,
  fetchCreatorsById,
  fetchCreatorsComics,
  fetchCreatorsEvents,
  fetchCreatorsSeries,
  fetchCreatorsStories,
} from "@/app/lib/data";
import { Creators } from "@/app/lib/definitions";
import { getImageUrl } from "@/app/lib/utils";
import CardDetails from "@/app/ui/components/CardDetails";
import Collection from "@/app/ui/components/Collection";
import Story from "@/app/ui/components/Story";

export async function generateStaticParams() {
  const creatorsData = await fetchCreators("0");
  const posts = creatorsData.data.results;

  return posts.map((post: Creators) => ({
    id: post.id.toString(),
  }));
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // fetch Creators page by id
  const creatorsIdData = await fetchCreatorsById(id);
  const creatorsPage = creatorsIdData.data.results;

  // Creators Comics
  const creatorsComicsData = await fetchCreatorsComics(id);
  const creatorsComics = creatorsComicsData.data.results;

  // Creators Events
  const creatorsEventsData = await fetchCreatorsEvents(id);
  const creatorsEvents = creatorsEventsData.data.results;

  // Creators Series
  const creatorsSeriesData = await fetchCreatorsSeries(id);
  const creatorsSeries = creatorsSeriesData.data.results;

  // Creators Series
  const creatorsStoriesData = await fetchCreatorsStories(id);
  const creatorsStories = creatorsStoriesData.data.results;

  return (
    <section className="ml-[150px] md:ml-[250px] mt-[120px] text-white">
      <div className="m-10">
        {creatorsPage.map((creator: Creators) => {
          return (
            <CardDetails
              name={creator.fullName}
              imgUrl={getImageUrl(creator.thumbnail)}
            />
          );
        })}
      </div>
      <Collection title={"Comics"} category={creatorsComics} />
      <Collection title={"Events"} category={creatorsEvents} />
      <Collection title={"Series"} category={creatorsSeries} />
      <Story stories={creatorsStories} />
    </section>
  );
};

export default page;
