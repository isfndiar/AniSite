import { useEffect } from "react";
import { getApiAnime } from "../services/anime.service";
import { useState } from "react";
import Image from "../components/Card/Image";

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
      <div className="mt-20 text-center text-white   ">
        <div className=" ">Hi joe Lets talk about crypto</div>
        <ul className="flex gap-5 flex-wrap">
          {data.map((item, i) => (
            <li key={item + i}>
              <Image src={item.image_url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
