import React from "react";

const LoadingCard = () => {
  return (
    <div className="w-full bg-white rounded-md shadow-md">
      <div className="bg-gray-300 h-44 rounded-t-md animate-pulse"></div>
      <div className="p-5">
        <div className="h-6 mb-4 duration-75 bg-gray-200 rounded-sm animate-pulse"></div>
        <div className="animate-pulse">
          <div className="w-1/2 h-1 mt-2 bg-gray-300 rounded-sm"></div>
          <div className="w-1/3 h-1 mt-2 bg-gray-300 rounded-sm"></div>
          <div className="w-2/3 h-1 mt-2 bg-gray-300 rounded-sm"></div>
          <div className="h-1 mt-2 bg-gray-300 rounded-sm"></div>
          <div className="h-1 mt-2 bg-gray-300 rounded-sm"></div>
          <div className="h-1 mt-2 bg-gray-300 rounded-sm"></div>
          <div className="h-2 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
