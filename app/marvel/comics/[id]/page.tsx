import { fetchCategory } from "@/app/lib/data";
import { Comic } from "@/app/lib/definitions";
import ComicsCharacters from "@/app/ui/components/comics/ComicsCharacters";
import ComicsCreators from "@/app/ui/components/comics/ComicsCreators";
import ComicsDetails from "@/app/ui/components/comics/ComicsDetails";
import ComicsEvents from "@/app/ui/components/comics/ComicsEvents";
import ComicsStories from "@/app/ui/components/comics/ComicsStories";
import CollectionLoadingSkeleton from "@/app/ui/components/loading-skeleton/CollectionLoadingSkeleton";
import DetailsSkeletonLoading from "@/app/ui/components/loading-skeleton/DetailsSkeletonLoading";
import StoryLoadingSkeleton from "@/app/ui/components/loading-skeleton/StoryLoadingSkeleton";
import { Suspense } from "react";

export async function generateStaticParams() {
  const comicsData = await fetchCategory("comics", "0");
  const posts = comicsData.data.results;

  return posts.map((post: Comic) => ({
    id: post.id.toString(),
  }));
}

const page = ({ params }: { params: { id: string } }) => {
  // geting id from params
  const { id } = params;

  return (
    <section>
      <Suspense fallback={<DetailsSkeletonLoading />}>
        <ComicsDetails id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <ComicsCharacters id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <ComicsCreators id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <ComicsEvents id={id} />
      </Suspense>
      <Suspense fallback={<StoryLoadingSkeleton />}>
        <ComicsStories id={id} />
      </Suspense>
    </section>
  );
};

export default page;
