import { fetchCategory } from "@/app/lib/data";
// typescript definitions
import { Character } from "@/app/lib/definitions";
import CharactersComics from "@/app/ui/components/characters/CharactersComics";
import CharactersDetails from "@/app/ui/components/characters/CharactersDetails";
import CharactersEvents from "@/app/ui/components/characters/CharactersEvents";
import CharactersSeries from "@/app/ui/components/characters/CharactersSeries";
import CharactersStories from "@/app/ui/components/characters/CharactersStories";
import CollectionLoadingSkeleton from "@/app/ui/components/loading-skeleton/CollectionLoadingSkeleton";
import DetailsSkeletonLoading from "@/app/ui/components/loading-skeleton/DetailsSkeletonLoading";
import { Suspense } from "react";

export async function generateStaticParams() {
  const charactersData = await fetchCategory("characters", "0");
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
      <Suspense fallback={<DetailsSkeletonLoading />}>
        <CharactersDetails id={id} />
      </Suspense>

      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <CharactersComics id={id} />
      </Suspense>

      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <CharactersSeries id={id} />
      </Suspense>

      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <CharactersEvents id={id} />
      </Suspense>

      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <CharactersStories id={id} />
      </Suspense>
    </section>
  );
};

export default page;
