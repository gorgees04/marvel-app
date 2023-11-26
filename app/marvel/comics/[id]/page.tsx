import {
  fetchComics,
  fetchComicsById,
  fetchComicsCharacters,
  fetchComicsCreators,
  fetchComicsEvents,
  fetchComicsStories,
} from "@/app/lib/data";
import { Comic } from "@/app/lib/definitions";
import { getImageUrl } from "@/app/lib/utils";
import CardDetails from "@/app/ui/components/CardDetails";
import Collection from "@/app/ui/components/Collection";
import Story from "@/app/ui/components/Story";

export async function generateStaticParams() {
  const comicsData = await fetchComics("0");
  const posts = comicsData.data.results;

  return posts.map((post: Comic) => ({
    id: post.id.toString(),
  }));
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // fetch single comic by id
  const comicsIdData = await fetchComicsById(id);
  const comicsPage = comicsIdData.data.results;

  // Comics characters
  const comicsCharactersData = await fetchComicsCharacters(id);
  const comicsCharacters = comicsCharactersData.data.results;

  // Comics creators
  const comicsCreatorsData = await fetchComicsCreators(id);
  const comicsCreators = comicsCreatorsData.data.results;

  // Comics Events
  const comicsEventsData = await fetchComicsEvents(id);
  const comicsEvents = comicsEventsData.data.results;

  // Comics stories
  const comicsStoriesData = await fetchComicsStories(id);
  const comicsStories = comicsStoriesData.data.results;

  // get date from api
  const getPublishedDate = (dateOfPublish: string) => {
    const date = new Date(dateOfPublish);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  return (
    <section className="ml-[150px] md:ml-[250px] mt-[120px] text-white">
      <div className="m-10">
        {comicsPage.map((comic: Comic) => {
          return (
            <CardDetails
              name={comic.title}
              imgUrl={getImageUrl(comic.thumbnail)}
              description={comic.description}
              date={getPublishedDate(comic.dates[0].date)}
            />
          );
        })}
      </div>
      <Collection title={"Characters"} category={comicsCharacters} />
      <Collection title={"Creators"} category={comicsCreators} />
      <Collection title={"Events"} category={comicsEvents} />
      <Story stories={comicsStories} />
    </section>
  );
};

export default page;
