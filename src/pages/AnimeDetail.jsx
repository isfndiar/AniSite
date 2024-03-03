import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeByID } from "../services/animelist.service";

export default function AnimeDetail() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAnimeByID((res) => setData(res), id);
  }, [id]);
  return (
    <>
      <div className={`absolute w-full min-h-screen flex flex-col `}>
        <div className="mt-0  absolute bg-blue-500 top-0 left-0 right-0 -z-10 ">
          <img
            src={data.trailer?.images?.maximum_image_url || ""}
            alt=""
            className="w-full h-[20rem]"
          />
        </div>
        <div className="w-full min-h-screen px-20 py-6 bg-gray-800 mt-40  ">
          <div className="bg-gray-500 ps-[20rem] relative">
            <img
              src={data.images?.jpg?.image_url || ""}
              alt=""
              className="absolute -top-[8rem] left-10"
            />
            <header>
              <h1 className="text-2xl font-bold text-white">{data?.title}</h1>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}
