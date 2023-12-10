import Header from "@/app/ui/components/Header";
import Pagination from "@/app/ui/components/Pagination";
import Characters from "@/app/ui/components/characters/Characters";
import CardsLoadingSkeletons from "@/app/ui/components/loading-skeleton/CardsLoadingSkeletons";
import { Suspense } from "react";

const page = ({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={"Characters"} />
      <Suspense
        key={searchParams.query + searchParams.page}
        fallback={<CardsLoadingSkeletons />}
      >
        <Characters query={searchParams.query} page={searchParams.page} />
      </Suspense>
      <Pagination charactersLength={30} />
    </section>
  );
};

export default page;
