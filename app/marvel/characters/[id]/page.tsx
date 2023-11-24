import { fetchCharacter } from "@/app/lib/data";
// typescript definitions
import { Character } from "@/app/lib/definitions";
import { fetchHeros, getImageUrl } from "@/app/lib/utils";
import CardDetails from "@/app/ui/components/CardDetails";

const page = async ({ params }: { params: { id: string } }) => {
  // geting params from url depending on character's id
  const { id } = params;
  // fetching data depending on id that we got it from params
  const data = await fetchCharacter(id);
  const characterPage = data.data.results;
  return (
    <section className="ml-[150px] md:ml-[250px] mt-[120px] text-white">
      <div className="m-10">
        {characterPage.map((character: Character) => {
          console.log(character);
          return (
            <CardDetails
              name={character.name}
              imgUrl={getImageUrl(character.thumbnail)}
              description={character.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;
