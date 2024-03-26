import { useEffect, useState } from "react";
import { getRecentAnimeRecommendations } from "../../../services/animelist.service";
import * as Icon from "react-feather";

const LatestNews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRecentAnimeRecommendations((res) => {
      setData(res);
    });

    return () => {
      setData([]);
      console.log("clean");
    };
  }, []);

  return (
    <div className=" bg-slate-800  py-5 px-3 text-center hidden md:inline-block  w-4/12 rounded-3xl">
      <h1 className="text-white  bg-purple-800 font-semibold  px-14 py-3 inline-block rounded-md mb-10 pointer-events-none">
        Latest News
      </h1>
      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <Content
            key={item.mal_id}
            src={item?.images?.jpg?.image_url}
            title={item?.title}
            desc={item.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;

const Content = (props) => {
  const { title, src, desc } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex text-xl text-left px-2 items-start">
        {title}
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="outline-none"
        >
          <Icon.ChevronUp
            className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}
          />
        </button>
      </div>
      <div className="flex flex-col items-center  mt-10 ">
        {isOpen && (
          <>
            <img src={src} alt="" className=" h-72 rounded-3xl" />
            <div className=" text-sm text-left mt-5">{desc}</div>
          </>
        )}
      </div>
    </>
  );
};
