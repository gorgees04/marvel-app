import { fetchCharacterById } from "@/app/lib/data";
import { Character } from "@/app/lib/definitions";
import { Suspense } from "react";
import CardDetails from "../CardDetails";
import { getImageUrl } from "@/app/lib/utils";

const CharactersDetails = async ({ id }: { id: string }) => {
  // characters data by ID
  const data = await fetchCharacterById(id);
  const characterPage = data.data.results;
  return (
    <div className="m-10">
      {characterPage.map((character: Character) => {
        return (
          <CardDetails
            name={character.name}
            imgUrl={getImageUrl(character.thumbnail)}
            description={character.description}
            key={character.id}
          />
        );
      })}
    </div>
  );
};

export default CharactersDetails;
