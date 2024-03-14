import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAnimeRecently } from "@/services/animelist.service";
import Pagination from "@/components/Pagination/Pagination";
import Header from "@/components/Header";
import Card from "@/components/Card";

const RecentlyUpdate = () => {
  return (
    <>
      <div className="sm:ps-7 ">
        <header className="flex sm:gap-20  sm:items-end flex-col sm:flex-row items-center sm:gap-y-0 gap-y-5">
          <Header classname={`text-sm sm:text-2xl`}>Recently Update</Header>
          <RecentlyMenu />
        </header>
        <Main />
      </div>
    </>
  );
};

function RecentlyMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const RecentlyMenu = [`All`, "Trending", "Random"];
  return (
    <span className="flex gap-10">
      {RecentlyMenu.map((item, i) => (
        <Link
          key={i}
          onClick={() => setActiveIndex(i)}
          className={activeIndex == i ? "text-white" : " text-gray-500"}
        >
          {item}
        </Link>
      ))}
    </span>
  );
}

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
      <div className="flex flex-wrap gap-x-5 gap-y-10 justify-center  mt-10 ">
        {data
          .map((item, i) => (
            <Card
              key={item.mal_id + crypto.randomUUID()}
              id={item.mal_id}
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
