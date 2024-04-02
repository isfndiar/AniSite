import { useEffect, useState } from "react";
import { ArrowLeft, Heart, Star as IconStar } from "react-feather";
import { Link, useParams } from "react-router-dom";
import { getMangaByID } from "@/services/manga.service";
import Footer from "@/layouts/Footer";
import StarRating from "@/components/StarRating/StarRating";
import { useDispatch } from "react-redux";
import { favoriteItem } from "../../redux/favoriteSlice";
const MangaByTitle = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [userRating, setUserRating] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getMangaByID((res) => setData(res), id);
  }, [id]);

  const handleClick = () => {
    setIsClick((isClick) => !isClick);

    const getFavorite = {
      id,
      userRating,
      img: data?.images?.jpg?.image_url,
      title: data?.title,
    };
    dispatch(favoriteItem(getFavorite));
    // localStorage.setItem("favorite", JSON.stringify(fetchDataToFavorite));
  };

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
              <div>
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
                      <IconStar size={24} fill="white" />
                      {data?.scored}
                    </div>
                  </section>
                </div>
                <div className="flex flex-col items-center gap-3 w-full max-w-xs m-auto mt-5 py-3 bg-slate-700 rounded-xl">
                  <StarRating
                    color={"pink"}
                    max={5}
                    size={25}
                    onSetRating={(i) => setUserRating(i)}
                  />
                  <button
                    className=" px-5 h-10 rounded-full flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-600"
                    onClick={handleClick}
                  >
                    <Heart
                      fill={isClick ? "White" : "rgb(147 51 234)"}
                      color={"white"}
                      size={20}
                    />{" "}
                    Favorite
                  </button>
                </div>
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
