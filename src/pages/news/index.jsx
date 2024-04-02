import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "react-feather";
import { getRecentAnimeRecommendations } from "../../services/animelist.service";
const settingCard = {
  root: {
    base: "flex  border border-gray-200  shadow-md border-gray-700 bg-gray-800 rounded-lg relative ",
    children: "flex flex-col justify-start gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "w-full lg:max-w-lg flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    horizontal: {
      on: "max-h-[18rem] h-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg",
    },
  },
};
const NewsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRecentAnimeRecommendations((res) => {
      setData(res);
    }, 1);

    return () => {
      setData([]);
      console.log("clean");
    };
  }, []);
  return (
    <div className="mt-24 px-7 mb-2 text-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {data.map((item) => (
          <Card
            key={item?.mal_id}
            theme={settingCard}
            imgSrc={item?.images?.jpg?.image_url}
            horizontal
          >
            <ArrowUpRight className="absolute top-1 right-1 sm:top-3 sm:right-3 " />
            <h5 className=" text-xl font-bold tracking-tight  text-white">
              {item?.title}
            </h5>
            <p className="font-normal sm:text-lg  text-gray-400 line-clamp-5 sm:line-clamp-none">
              {item?.excerpt}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
