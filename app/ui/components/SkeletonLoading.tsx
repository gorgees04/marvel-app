import React from "react";

const SkeletonLoading = () => {
  return (
    <div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border border-blue-300 shadow flex flex-col rounded overflow-hidden m-3 p-2 w-[150px] md:w-[200px] ">
          <div className="animate-pulse bg-slate-700 h-[150px] md:h-[200px] rounded"></div>
          <p className=" h-2 bg-slate-700 rounded col-span-2  w-10  p-2 flex justify-center items-center"></p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
