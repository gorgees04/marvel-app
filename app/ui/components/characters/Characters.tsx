import { fetchCategory, fetchCategoryByName } from "@/app/lib/data";
import Card from "@/app/ui/components/Card";
import NotFound from "@/app/marvel/not-found";
// typescript definitions
import { Character } from "@/app/lib/definitions";

export default async function Characters({
  query,
  page,
}: {
  query?: string;
  page: string;
}) {
  // handling pagination
  // whenever a click the oofset will be multiplie with page number
  const category = "characters";
  const offset = 30 * Number(page);

  // geting data from lib/data.tsx file
  const charactersData = await fetchCategory(category, offset.toString());
  let characters = charactersData.data.results;

  // geting data from params to filter the search engin
  const SearchValue = query;
  if (SearchValue) {
    const searchCharactersData = await fetchCategoryByName(
      category,
      SearchValue.toLowerCase(),
      offset.toString()
    );
    const searchCharacters = searchCharactersData.data.results;
    characters = searchCharacters;
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center my-4 w-full">
        {characters.map((character: Character) => {
          return (
            <Card
              category="characters"
              key={character.id}
              id={character.id}
              name={character.name}
              img={character.thumbnail}
            />
          );
        })}
      </div>
      {characters.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
    </section>
  );
}
