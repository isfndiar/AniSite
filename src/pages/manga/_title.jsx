import { useEffect, useState } from "react";
import { ArrowLeft } from "react-feather";
import { Link, useParams } from "react-router-dom";
import { getMangaByID, getMangaData } from "../../services/manga.service";

const MangaByTitle = () => {
  const [data, setData] = useState({});
  const { title, id } = useParams();
  useEffect(() => {
    getMangaByID((res) => setData(res), id);
  }, [id]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="">
      <Link
        to={`/manga`}
        className="absolute top-12 left-9 hover:border hover:border-white border border-transparent hover:p-1 p-1 rounded-full "
      >
        <ArrowLeft color="white" />
      </Link>
      <h1 className="text-white text-3xl font-bold font-mono text-center mt-7">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row  mt-7 text-white">
        <img
          src={data?.images?.jpg?.image_url}
          alt=""
          width={300}
          className="self-center"
        />
        <div className="px-5 mt-10">
          <div className="text-center">info | sinopsis</div>
          <div className="w-full bg-gray-600 rounded-xl p-3">
            <PostContent header={"Rank"} content={"Uhuy"} />
            <PostContent
              header={"Rank"}
              content={"Uhuy dslkslkfs sdaflkj   "}
            />
            <PostContent header={"Updating"} content={"Uhuy"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaByTitle;

const PostContent = ({ header, content }) => {
  return (
    <div className="flex ">
      <div className=" w-20 ">{header}</div>
      <div>{content}</div>
    </div>
  );
};
