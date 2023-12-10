import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";
import { Suspense } from "react";
import CardsLoadingSkeletons from "@/app/ui/components/loading-skeleton/CardsLoadingSkeletons";
import Comics from "@/app/ui/components/comics/Comics";

export default function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={"Comics"} />
      <Suspense
        key={searchParams.query + searchParams.page}
        fallback={<CardsLoadingSkeletons />}
      >
        <Comics query={searchParams.query} page={searchParams.page} />
      </Suspense>
      <Pagination charactersLength={30} />
    </section>
  );
}
