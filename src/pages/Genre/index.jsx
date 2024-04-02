import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  getAnimeByGenre,
  getAnimeGenre,
} from "@/services/anime__genre.service";
import { Badge } from "flowbite-react";
import CardAniMangaLoader from "../../Loader/CardAniMangaLoader";
const Card = lazy(() => import("../../components/Card"));

const GenrePage = () => {
  const [data, setData] = useState([]);
  const [dataGenre, setDataGenre] = useState([]);
  const [genre, setGenre] = useState(1);
  useEffect(() => {
    getAnimeGenre((res) => setData(res));
  }, []);
  useEffect(() => {
    getAnimeByGenre((res) => setDataGenre(res), genre);
  }, [genre]);

  useEffect(() => {}, [genre]);
  return (
    <div className="mt-20 mb-2 text-white">
      <div className="flex  flex-wrap justify-center gap-3 px-3 py-10 ">
        {data.map((item) => (
          <Badge
            color={"gray"}
            className="cursor-pointer hover:bg-gray-700"
            onClick={() => setGenre(item?.mal_id)}
            key={item?.mal_id}
          >
            {item?.name}
          </Badge>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap px-3 gap-3 justify-center ">
          {dataGenre.map((item) => (
            <Suspense
              fallback={<CardAniMangaLoader />}
              key={item.mal_id + crypto.randomUUID()}
            >
              <Card
                id={item.mal_id}
                src={item.images.jpg.image_url}
                alt={item.title}
                title={item.title}
                episodes={item.episodes ? item.episodes : "-"}
                score={item.score ? item.score : "-"}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
