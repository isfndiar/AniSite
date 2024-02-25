import { useEffect } from "react";
import Content from "./Content";
const LatestNews = () => {
  return (
    <div className=" bg-slate-800  py-5 px-3 text-center hidden md:inline-block  w-4/12 rounded-3xl">
      <h1 className="text-white  bg-purple-800 font-semibold  px-14 py-3 inline-block rounded-md mb-10 pointer-events-none">
        Latest News
      </h1>
      <div className="flex flex-col gap-3">
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
};

export default LatestNews;
