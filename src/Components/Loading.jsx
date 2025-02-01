import React from "react";

function Loading() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-md z-50 flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
        </div>
    </>
  );
}

export default Loading;
