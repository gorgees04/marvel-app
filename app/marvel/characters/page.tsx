import { fetchCharacterByName, fetchHerosCharaters } from "@/app/lib/data";
import Card from "@/app/ui/components/Card";
import SearchBar from "@/app/ui/components/SearchBar";
import NotFound from "../not-found";
// typescript definitions
import { Character } from "@/app/lib/definitions";
import Pagination from "@/app/ui/components/Pagination";

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  // handling pagination
  // whenever a click the oofset will be multiplie with page number
  let page = "0";
  searchParams.page ? (page = searchParams.page) : page;
  const offset = 50 * Number(page);

  // geting data from lib/data.tsx file
  const data = await fetchHerosCharaters(offset.toString());
  let characters = data.data.results;

  // geting data from params to filter the search engin
  if (searchParams.query) {
    searchParams.page ? (page = searchParams.page) : page;
    const characterName = await fetchCharacterByName(
      searchParams.query.toLowerCase(),
      offset.toString()
    );

    characters = characterName.data.results;
  }

  return (
    <section className="ml-[150px] md:ml-[250px] mt-[120px] flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center flex-col md:flex-row md:justify-between md:px-10">
        <h1 className="text-4xl md:text-[40px] font-extrabold text-marvelRed m-4">
          Characters
        </h1>
        <SearchBar />
      </div>
      <div className="flex flex-wrap justify-center my-4 w-full">
        {characters.map((character: Character) => {
          return (
            <Card
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
      <Pagination charactersLength={characters.length} />
    </section>
  );
}
