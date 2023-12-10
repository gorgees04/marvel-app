import React from "react";
import CardsLoadingSkeletons from "./CardsLoadingSkeletons";

const CollectionLoadingSkeleton = () => {
  const cards = new Array(6).fill(null);
  return (
    <div className="m-10 animate-pulse">
      <div className="h-7 w-32 m-3 bg-gray-700 md:my-4 "></div>
      <div className="overflow-x-auto flex items-center justify-start shadow-lg shadow-black">
        {cards.map((_card: any, id: number) => {
          return (
            <div className="flex m-3" key={id}>
              <div className="border border-gray-400 shadow rounded-md w-[150px] h-[250px] mx-auto md:w-[160px] md:h-[270px]">
                <div className="animate-pulse">
                  <div className="rounded-md w-full h-[210px] bg-gray-700 md:h-[225px]"></div>
                  <div className="py-auto">
                    <div className="h-3 w-24 my-3 mx-auto bg-gray-800 rounded md:my-4"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionLoadingSkeleton;
