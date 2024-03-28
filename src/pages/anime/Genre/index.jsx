import React, { useEffect, useState } from "react";
import {
  getAnimeByGenre,
  getAnimeGenre,
} from "../../../services/anime__genre.service";

const GenrePage = () => {
  const [data, setData] = useState([]);
  const [dataGenre, setDataGenre] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    getAnimeGenre((res) => setData(res));
  }, []);
  useEffect(() => {
    getAnimeByGenre((res) => setDataGenre(res));
  }, [genre]);

  const handleClick = (name) => {
    setGenre(name);
  };
  return (
    <div className="mt-20 px-7 mb-2 text-white">
      <div className="flex gap-3 flex-wrap py-10 ">
        {/* {data.map((item) => (
          <div onClick={() => handleClick(item?.name)} key={item?.mal_id}>
            {item?.name}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default GenrePage;
