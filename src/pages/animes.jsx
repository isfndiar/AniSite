import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeDetail } from "../services/anime.service";

export default function AnimeDetail() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getAnimeDetail(id, (res) => setData(res));
  }, [id]);
  return (
    <div className=" text-black">
      <img src={data.image_url} alt="" />
    </div>
  );
}
