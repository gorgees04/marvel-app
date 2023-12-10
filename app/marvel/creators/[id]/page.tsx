import { fetchCategory } from "@/app/lib/data";
import { Creators } from "@/app/lib/definitions";
import CreatorsComics from "@/app/ui/components/creators/CreatorsComics";
import CreatorsDetails from "@/app/ui/components/creators/CreatorsDetails";
import CreatorsEvents from "@/app/ui/components/creators/CreatorsEvents";
import CreatorsSeries from "@/app/ui/components/creators/CreatorsSeries";
import CreatorsStories from "@/app/ui/components/creators/CreatorsStories";
import CollectionLoadingSkeleton from "@/app/ui/components/loading-skeleton/CollectionLoadingSkeleton";
import DetailsSkeletonLoading from "@/app/ui/components/loading-skeleton/DetailsSkeletonLoading";
import StoryLoadingSkeleton from "@/app/ui/components/loading-skeleton/StoryLoadingSkeleton";
import { Suspense } from "react";

export async function generateStaticParams() {
  const creatorsData = await fetchCategory("creators", "0");
  const posts = creatorsData.data.results;

  return posts.map((post: Creators) => ({
    id: post.id.toString(),
  }));
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <section>
      <Suspense fallback={<DetailsSkeletonLoading />}>
        <CreatorsDetails id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <CreatorsComics id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <CreatorsEvents id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <CreatorsSeries id={id} />
      </Suspense>
      <Suspense fallback={<StoryLoadingSkeleton />}>
        <CreatorsStories id={id} />
      </Suspense>
    </section>
  );
};

export default page;
