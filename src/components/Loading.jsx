import React from "react";

const Loading = () => {
  return (
    <div className="h-screen bg-slate-800 flex flex-col gap-4 justify-center items-center">
      <span class="loader"></span>
      <span className=" text-white">loading please wait ...</span>
    </div>
  );
};

export default Loading;
