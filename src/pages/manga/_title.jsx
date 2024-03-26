import { useEffect, useState } from "react";
import { ArrowLeft, Star } from "react-feather";
import { Link, useParams } from "react-router-dom";
import { getMangaByID } from "../../services/manga.service";
import Footer from "@/layouts/Footer";
const MangaByTitle = () => {
  const { title, id } = useParams();
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    getMangaByID((res) => setData(res), id);
  }, [id]);

  return (
    <div className="">
      <Link
        to={`/manga`}
        className="absolute top-12 left-9 hover:border hover:border-white border border-transparent hover:p-1 p-1 rounded-full "
      >
        <ArrowLeft color="white" />
      </Link>
      <h1 className="text-white text-3xl font-bold font-mono text-center mt-7">
        {data?.title}
      </h1>
      <div className="flex flex-col md:flex-row  my-10 text-white justify-center">
        <img
          src={data.images?.jpg?.image_url}
          alt=""
          width={300}
          className="self-center"
        />
        <div className="px-5 mt-10  w-full max-w-[48rem]">
          <div className="text-center flex gap-1 justify-center mb-2">
            <Button
              title={"Info"}
              handleClick={() => setActiveIndex(1)}
              classActive={activeIndex == 1 && "bg-white text-black"}
            />
            <Button
              title={"Sinopsis"}
              handleClick={() => setActiveIndex(2)}
              classActive={activeIndex == 2 && "bg-white text-black"}
            />
          </div>
          <div className="w-full  bg-gray-800 rounded-xl p-4 mb-2">
            {activeIndex == 1 ? (
              <div className="flex flex-col md:flex-row gap-10">
                <section id="section-1">
                  <PostContent header={"type"} content={data?.type} />
                  <PostContent
                    header={"genres"}
                    content={data?.genres?.map((item) => (
                      <div key={item.mal_id}>{item.name}</div>
                    ))}
                  />
                  <PostContent
                    header={"Authors"}
                    content={data?.authors?.map((item) => (
                      <div key={item.mal_id}>{item.name}</div>
                    ))}
                  />
                  <PostContent
                    header={"Popularity"}
                    content={data?.popularity}
                  />
                  <PostContent header={"chapters"} content={data?.chapters} />
                </section>
                <section id="section-2" className=" self-start md:self-end">
                  <PostContent content={data?.status} header={"Status"} />
                  <PostContent
                    content={data?.published?.string}
                    header={"Release"}
                  />
                  <div className="flex gap-3 mt-2">
                    <Star fill="white" />
                    {data?.scored}
                  </div>
                </section>
              </div>
            ) : activeIndex == 2 ? (
              <div>{data?.synopsis}</div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MangaByTitle;

const PostContent = ({ header, content }) => {
  return (
    <div className="flex ">
      <div className=" w-24 ">{header}</div>
      <div className="flex flex-wrap gap-y-0 gap-2">{content}</div>
    </div>
  );
};

const Button = ({ title, handleClick, classActive }) => {
  return (
    <button
      onClick={handleClick}
      className={`${classActive} px-5 h-10 rounded-full border border-transparent hover:border-white transition-all `}
    >
      {title}
    </button>
  );
};
