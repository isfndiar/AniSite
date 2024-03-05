import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnimeByID } from "../../services/animelist.service";
import { ArrowLeft, Youtube } from "react-feather";

export default function AnimeByID() {
  const [data, setData] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getAnimeByID((res) => setData(res), id);
  }, [id]);

  console.log(data);

  return (
    <>
      <div className={`w-full min-h-screen flex flex-col `}>
        <Link
          to={"/"}
          className="absolute top-12 left-9 hover:border hover:border-white border border-transparent hover:p-1 p-1 rounded-full "
        >
          <ArrowLeft color="white" />
        </Link>
        <header className="mt-0  absolute bg-blue-500 top-0 left-0 right-0 -z-10 ">
          <img
            src={data.trailer?.images?.maximum_image_url || ""}
            alt=""
            className="w-full h-[30rem]"
          />
        </header>
        <main className="w-full min-h-screen px-20  py-6   bg-gray-800 mt-40  ">
          <section className="bg-gray-500  relative flex md:gap-10 gap-0 md:flex-row flex-col pb-10">
            <img
              src={data.images?.jpg?.image_url || ""}
              alt=""
              className="md:w-full h-[25rem] -translate-y-32 m-auto md:ms-7 md:my-1 bg-white"
            />
            <div className="text-center md:text-left text-white px-10 -translate-y-24 md:translate-y-0 ">
              <h1 className="text-[3rem] font-bold mb-2 ">{data?.title}</h1>
              <h1 className="text-[1rem] font-bold mb-2">
                {data?.title_japanese || data?.title_english}
              </h1>
              <p className="text-md mb-10"> Rating: {data?.score}</p>
              <article className=" text-justify ">
                <p
                  className={`md:line-clamp-none ${
                    readMore ? "line-clamp-none" : "line-clamp-6"
                  }`}
                >
                  {data?.synopsis}
                </p>
                <span
                  onClick={() => setReadMore(() => !readMore)}
                  className="md:hidden text-blue-200 hover:text-blue-500 cursor-pointer"
                >
                  {readMore ? "close" : "Read more"}
                </span>
              </article>
              <a
                href={data?.trailer?.embed_url}
                className="gap-2 flex items-center w-40 mt-3 hover:text-gray-700 mb-7"
              >
                <Youtube color="white" size={40} fill="red" />
                Watch Trailer
              </a>
              <iframe
                src={data?.trailer?.embed_url}
                className="m-auto md:max-w-[500px] h-[300px] w-full"
              ></iframe>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
