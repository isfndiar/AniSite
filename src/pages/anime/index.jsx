import CardVideo from "./components/CardVideo";
import { useEffect, useState } from "react";
import { getAnimeRandom } from "@/services/animelist.service";

const Anime = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAnimeRandom((res) => {
      setData(res);
    });
  }, []);

  // window on load  to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full sm:px-10 px-7  mt-24 mb-3">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 sm:gap-y-3 w-full ">
        {data.map((item) => (
          <CardVideo
            key={item.mal_id}
            title={item?.title}
            img={item?.images?.jpg?.image_url}
            episodes={item?.mal_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Anime;
