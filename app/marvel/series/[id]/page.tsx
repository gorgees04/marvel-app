import { fetchSeries } from "@/app/lib/data";
import { Series } from "@/app/lib/definitions";
import CardsLoadingSkeletons from "@/app/ui/components/loading-skeleton/CardsLoadingSkeletons";
import CollectionLoadingSkeleton from "@/app/ui/components/loading-skeleton/CollectionLoadingSkeleton";
import DetailsSkeletonLoading from "@/app/ui/components/loading-skeleton/DetailsSkeletonLoading";
import StoryLoadingSkeleton from "@/app/ui/components/loading-skeleton/StoryLoadingSkeleton";
import SeriesCreators from "@/app/ui/components/series/ SeriesCreators";
import SeriesCharacters from "@/app/ui/components/series/SeriesCharacters";
import SeriesComics from "@/app/ui/components/series/SeriesComics";
import SeriesDetails from "@/app/ui/components/series/SeriesDetails";
import SeriesEvents from "@/app/ui/components/series/SeriesEvents";
import SeriesStoriests from "@/app/ui/components/series/SeriesStoriests";
import { Suspense } from "react";

export async function generateStaticParams() {
  const seriesData = await fetchSeries("0");
  const posts = seriesData.data.results;

  return posts.map((post: Series) => ({
    id: post.id.toString(),
  }));
}

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <section>
      <Suspense fallback={<DetailsSkeletonLoading />}>
        <SeriesDetails id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <SeriesCharacters id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <SeriesComics id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <SeriesCreators id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <SeriesEvents id={id} />
      </Suspense>
      <Suspense fallback={<StoryLoadingSkeleton />}>
        <SeriesStoriests id={id} />
      </Suspense>
    </section>
  );
};

export default page;
