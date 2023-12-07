import Header from "@/app/ui/components/Header";
import Pagination from "@/app/ui/components/Pagination";
import Characters from "@/app/ui/components/characters/Characters";
import CardsLoadingSkeltons from "@/app/ui/components/charactersLoadingSkeletons/CardsLoadingSkeltons";
import { Suspense, useState } from "react";

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
        fallback={<CardsLoadingSkeltons />}
      >
        <Characters query={searchParams.query} page={searchParams.page} />
      </Suspense>
      <Pagination charactersLength={30} />
    </section>
  );
};

export default page;

// import { fetchCharacters, fetchCharactersByName } from "@/app/lib/data";
// import Card from "@/app/ui/components/Card";
// import NotFound from "@/app/marvel/not-found";
// // typescript definitions
// import { Character } from "@/app/lib/definitions";
// import Pagination from "@/app/ui/components/Pagination";
// import Header from "@/app/ui/components/Header";
// import { Suspense } from "react";

// export default async function page({
//   searchParams,
// }: {
//   searchParams: { query?: string; page: string };
// }) {
//   // handling pagination
//   // whenever a click the oofset will be multiplie with page number
//   const page = searchParams.page;
//   const offset = 50 * Number(page);

//   // geting data from lib/data.tsx file
//   const charactersData = await fetchCharacters(offset.toString());
//   let characters = charactersData.data.results;

//   // geting data from params to filter the search engin
//   const SearchValue = searchParams.query;
//   if (SearchValue) {
//     const searchCharactersData = await fetchCharactersByName(
//       SearchValue.toLowerCase(),
//       offset.toString()
//     );
//     const searchCharacters = searchCharactersData.data.results;
//     characters = searchCharacters;
//   }

//   return (
//     <section
//       className="flex flex-col justify-center items-center"
//       key={Math.random()}
//     >
//       <Header title={"Characters"} />
//       <Suspense fallback={<p>Loading feed...</p>}>
//         <div className="flex flex-wrap justify-center my-4 w-full">
//           {characters.map((character: Character) => {
//             return (
//               <Card
//                 category="characters"
//                 key={character.id}
//                 id={character.id}
//                 name={character.name}
//                 img={character.thumbnail}
//               />
//             );
//           })}
//         </div>
//         {characters.length === 0 && (
//           <div>
//             <NotFound />
//           </div>
//         )}
//       </Suspense>
//       <Pagination charactersLength={characters.length} />
//     </section>
//   );
// }
