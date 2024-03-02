import { useEffect, useState } from "react";
import { getAnimeRecently } from "../../services/animelist.service";
import Card from "../Card";
import { Link } from "react-router-dom";
import Header from "../Header";
import Pagination from "../Pagination/Pagination";

const RecentlyUpdate = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="sm:ps-7 ps-0 ">
        <header className="flex sm:gap-20  sm:items-end flex-col sm:flex-row items-center sm:gap-y-0 gap-y-5 bg-blue-500">
          <Header classname={`text-sm sm:text-2xl`}>Recently Update</Header>
          <span className="flex gap-10">
            <Link
              onClick={() => setActiveIndex(0)}
              className={activeIndex == 0 ? "text-white" : " text-gray-500"}
            >
              All
            </Link>
            <Link
              onClick={() => setActiveIndex(1)}
              className={activeIndex == 1 ? "text-white" : " text-gray-500"}
            >
              Trending
            </Link>
            <Link
              onClick={() => setActiveIndex(2)}
              className={activeIndex == 2 ? "text-white" : " text-gray-500"}
            >
              Random
            </Link>
          </span>
        </header>
        <Main />
      </div>
    </>
  );
};

const Main = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    getAnimeRecently((res) => setData(res), activeIndex);
  }, [activeIndex]);

  const handleClick = (page) => {
    if (page == activeIndex) return;
    setActiveIndex(page);
  };
  return (
    <>
      <div className="flex flex-wrap gap-x-5 gap-y-10   mt-10 ">
        {data
          .map((item, i) => (
            <Card
              key={item.mal_id + crypto.randomUUID()}
              id={i}
              src={item.images.jpg.image_url}
              alt={item.title}
              title={item.title}
              episodes={item.episodes ? item.episodes : "-"}
              score={item.score ? item.score : "-"}
            />
          ))
          .splice(0, 8)}
      </div>
      <Pagination pageIndex={handleClick} />
    </>
  );
};
export default RecentlyUpdate;
