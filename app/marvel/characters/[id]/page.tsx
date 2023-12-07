import { fetchCharacters } from "@/app/lib/data";
// typescript definitions
import { Character } from "@/app/lib/definitions";
import CharactersComics from "@/app/ui/components/characters/CharactersComics";
import CharactersDetails from "@/app/ui/components/characters/CharactersDetails";
import CharactersEvents from "@/app/ui/components/characters/CharactersEvents";
import CharactersSeries from "@/app/ui/components/characters/CharactersSeries";
import CharactersStories from "@/app/ui/components/characters/CharactersStories";
import { Suspense } from "react";

export async function generateStaticParams() {
  const charactersData = await fetchCharacters("0");
  const posts = charactersData.data.results;

  return posts.map((post: Character) => ({
    id: post.id.toString(),
  }));
}

const page = ({ params }: { params: { id: string } }) => {
  // geting params from url depending on character's id
  const { id } = params;

  return (
    <section>
      <Suspense fallback={<p className="text-white">Loading feed...</p>}>
        <CharactersDetails id={id} />
      </Suspense>

      <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
        <CharactersComics id={id} />
      </Suspense>

      <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
        <CharactersSeries id={id} />
      </Suspense>

      <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
        <CharactersEvents id={id} />
      </Suspense>

      <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
        <CharactersStories id={id} />
      </Suspense>
    </section>
  );
};

export default page;
