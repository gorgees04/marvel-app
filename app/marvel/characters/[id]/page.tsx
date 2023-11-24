import { fetchCharacterById, fetchCharacterComics } from "@/app/lib/data";
// typescript definitions
import { Character } from "@/app/lib/definitions";
import { getImageUrl } from "@/app/lib/utils";
import Card from "@/app/ui/components/Card";
import CardDetails from "@/app/ui/components/CardDetails";

const page = async ({ params }: { params: { id: string } }) => {
  // geting params from url depending on character's id
  const { id } = params;
  // fetching data depending on id that we got it from params
  const data = await fetchCharacterById(id);
  const characterPage = data.data.results;

  // comics
  const comicsData = await fetchCharacterComics(id);
  const comics = comicsData.data.results;
  console.log(comics);

  return (
    <section className="ml-[150px] md:ml-[250px] mt-[120px] text-white">
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
      <div className="flex flex-wrap">
        {comics.map((comic) => {
          return (
            <Card
              key={comic.id}
              name={comic.title}
              img={comic.thumbnail}
              id={comic.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;
