import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";
import Series from "@/app/ui/components/series/Series";
import { Suspense } from "react";
import CardsLoadingSkeletons from "@/app/ui/components/loading-skeleton/CardsLoadingSkeletons";

export default function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={"Series"} />
      <Suspense
        // pass a key when query and page params uses, it will show loading skeleton
        key={searchParams.query + searchParams.page}
        fallback={<CardsLoadingSkeletons />}
      >
        <Series query={searchParams.query} page={searchParams.page} />
      </Suspense>
      <Pagination pagesLength={30} />
    </section>
  );
}
