const StoryLoadingSkeleton = () => {
  const skeletonStories = new Array(8).fill(null); // Adjust the number of skeleton stories as needed

  return (
    <div className="m-12 text-white animate-pulse">
      <h1 className="h-7 my-5 w-[150px] bg-slate-700"></h1>
      <div className="m-2">
        {skeletonStories.map((story: { title: string }, id: number) => {
          return (
            <div key={id} className="h-5 w-[200px] bg-slate-700 m-5"></div>
          );
        })}
      </div>
    </div>
  );
};

export default StoryLoadingSkeleton;
