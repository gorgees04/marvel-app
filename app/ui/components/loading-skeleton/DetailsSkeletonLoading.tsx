import React from "react";

const DetailsSkeletonLoading = () => {
  return (
    <div className="flex flex-col ml-[50px] lg:flex-row mb-[50px] md:mb-[100px] text-white animate-pulse">
      {/* Image Placeholder */}
      <div className="w-[150px] h-[230px] lg:w-[240px] lg:h-[280px] m-5 border-4 border-gray-400  rounded bg-gray-700"></div>

      <div className="m-5 lg:my-10 w-full">
        {/* Title Placeholder */}
        <div className="w-36 h-6 bg-gray-700 mb-4"></div>

        {/* Description Placeholder */}
        <div className="w-72 h-4 bg-gray-700 mb-2"></div>
        <div className="w-80 h-4 bg-gray-700 mb-2"></div>
        <div className="w-64 h-4 bg-gray-700 mb-2"></div>

        {/* Date Placeholder */}
        <div className="w-48 h-4 bg-gray-700 mt-10"></div>
      </div>
    </div>
  );
};

export default DetailsSkeletonLoading;
