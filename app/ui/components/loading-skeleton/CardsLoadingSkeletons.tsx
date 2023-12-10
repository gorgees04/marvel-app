const CardsLoadingSkeletons = () => {
  const cards = new Array(30).fill(null);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center my-4 w-full">
        {cards.map((_card: any, id: number) => {
          return (
            <div className="flex m-3" key={id}>
              <div className="border border-gray-400 shadow rounded-md w-[150px] h-[270px] mx-auto md:w-[200px] md:h-[344px]">
                <div className="animate-pulse">
                  <div className="rounded-md w-full h-[228px] bg-gray-700 md:h-[300px]"></div>
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

export default CardsLoadingSkeletons;
