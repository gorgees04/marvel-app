import {
  fetchCharacterById,
  fetchCharacters,
  fetchCharactersComics,
  fetchCharactersEvents,
  fetchCharactersSeries,
  fetchCharactersStories,
} from "@/app/lib/data";
// typescript definitions
import { Character } from "@/app/lib/definitions";
import { getImageUrl } from "@/app/lib/utils";
import CardDetails from "@/app/ui/components/CardDetails";
import Collection from "@/app/ui/components/Collection";
import Story from "@/app/ui/components/Story";

export async function generateStaticParams() {
  const charactersData = await fetchCharacters("0");
  const posts = charactersData.data.results;

  return posts.map((post: Character) => ({
    id: post.id.toString(),
  }));
}

const page = async ({ params }: { params: { id: string } }) => {
  // geting params from url depending on character's id
  const { id } = params;
  // characters data by ID
  const data = await fetchCharacterById(id);
  const characterPage = data.data.results;

  // Characters comics
  const comicsData = await fetchCharactersComics(id);
  const comics = comicsData.data.results;

  // characters series
  const characterSeriesData = await fetchCharactersSeries(id);
  const characterSeries = characterSeriesData.data.results;

  // characters events
  const characterEventsData = await fetchCharactersEvents(id);
  const characterEvents = characterEventsData.data.results;

  // characters stories
  const characterStoriesData = await fetchCharactersStories(id);
  const characterStories = characterStoriesData.data.results;

  return (
    <section className="ml-[120px] md:ml-[220px] mt-[120px] text-white">
      <div className="m-10">
        {characterPage.map((character: Character) => {
          return (
            <CardDetails
              name={character.name}
              imgUrl={getImageUrl(character.thumbnail)}
              description={character.description}
            />
          );
        })}
      </div>
      <Collection title={"Comics"} category={comics} />
      <Collection title={"Series"} category={characterSeries} />
      <Collection title={"Events"} category={characterEvents} />
      <Story stories={characterStories} />
    </section>
  );
};

export default page;
