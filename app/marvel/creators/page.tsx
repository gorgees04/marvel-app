import { fetchCreators, fetchCreatorsByName } from "@/app/lib/data";
import NotFound from "../not-found";
import Card from "@/app/ui/components/Card";
import { Comic, Creators } from "@/app/lib/definitions";
import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  // get page params from path
  const page = searchParams.page;
  const offset = 50 * Number(page);

  // fetching creators data
  const creatorsData = await fetchCreators(offset.toString());
  let creators = creatorsData.data.results;

  // search creators
  const SearchValue = searchParams.query;
  if (SearchValue) {
    const searchCreatorsData = await fetchCreatorsByName(
      SearchValue.toLowerCase(),
      offset.toString()
    );
    const searchCreators = searchCreatorsData.data.results;
    creators = searchCreators;
  }

  return (
    <section className="ml-[150px] md:ml-[250px] mt-[120px] flex flex-col justify-center items-center">
      <Header title={"Creators"} />
      <div className="flex flex-wrap justify-center my-4 w-full">
        {creators.map((creator: Creators) => {
          return (
            <Card
              category="creators"
              key={creator.id}
              name={creator.fullName}
              img={creator.thumbnail}
              id={creator.id}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {creators.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
      <Pagination charactersLength={creators.length} />
    </section>
  );
}
