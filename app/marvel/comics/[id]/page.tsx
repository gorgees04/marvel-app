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
import ComicsCharacters from "@/app/ui/components/comics/ComicsCharacters";
import ComicsCreators from "@/app/ui/components/comics/ComicsCreators";
import ComicsDetails from "@/app/ui/components/comics/ComicsDetails";
import ComicsEvents from "@/app/ui/components/comics/ComicsEvents";
import ComicsStories from "@/app/ui/components/comics/ComicsStories";
import { Suspense } from "react";

export async function generateStaticParams() {
  const comicsData = await fetchComics("0");
  const posts = comicsData.data.results;

  return posts.map((post: Comic) => ({
    id: post.id.toString(),
  }));
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <section>
      <Suspense fallback={<p className="text-white">Loading feed...</p>}>
        <ComicsDetails id={id} />
      </Suspense>
      <Suspense fallback={<p className="text-white">Loading feed...</p>}>
        <ComicsCharacters id={id} />
      </Suspense>
      <Suspense fallback={<p className="text-white">Loading feed...</p>}>
        <ComicsCreators id={id} />
      </Suspense>
      <Suspense fallback={<p className="text-white">Loading feed...</p>}>
        <ComicsEvents id={id} />
      </Suspense>
      <Suspense fallback={<p className="text-white">Loading feed...</p>}>
        <ComicsStories id={id} />
      </Suspense>
    </section>
  );
};

export default page;
