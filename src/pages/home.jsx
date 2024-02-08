import { useEffect } from "react";
import { getApiAnime } from "../services/anime.service";
import { useState } from "react";
import Image from "../components/Card/Image";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [ImageData, setImageData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiAnime((res) => setData(res));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="mt-20 text-center text-white px-5  ">
        <div className=" ">Hi joe Lets talk about crypto</div>
        <div className="flex gap-7 flex-wrap justify-center mt-10">
          {data.map((item, i) => (
            <Link key={item.id} to={`/anime/${item.id}`}>
              <Card id={item.id} src={item.image_url} alt={"sfsa"} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
