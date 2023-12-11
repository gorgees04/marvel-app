import { fetchCategory } from "@/app/lib/data";
import { Events } from "@/app/lib/definitions";
import EventsCharacters from "@/app/ui/components/events/EventsCharacters";
import EventsComics from "@/app/ui/components/events/EventsComics";
import EventsCreators from "@/app/ui/components/events/EventsCreators";
import EventsDetails from "@/app/ui/components/events/EventsDetails";
import EventsSeries from "@/app/ui/components/events/EventsSeries";
import EventsStories from "@/app/ui/components/events/EventsStories";
import CollectionLoadingSkeleton from "@/app/ui/components/loading-skeleton/CollectionLoadingSkeleton";
import DetailsSkeletonLoading from "@/app/ui/components/loading-skeleton/DetailsSkeletonLoading";
import StoryLoadingSkeleton from "@/app/ui/components/loading-skeleton/StoryLoadingSkeleton";
import { Suspense } from "react";

export async function generateStaticParams() {
  const eventsData = await fetchCategory("events", "0");
  const posts = eventsData.data.results;

  return posts.map((post: Events) => ({
    id: post.id.toString(),
  }));
}

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <section>
      <Suspense fallback={<DetailsSkeletonLoading />}>
        <EventsDetails id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <EventsCharacters id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <EventsComics id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <EventsCreators id={id} />
      </Suspense>
      <Suspense fallback={<CollectionLoadingSkeleton />}>
        <EventsSeries id={id} />
      </Suspense>
      <Suspense fallback={<StoryLoadingSkeleton />}>
        <EventsStories id={id} />
      </Suspense>
    </section>
  );
};

export default page;
