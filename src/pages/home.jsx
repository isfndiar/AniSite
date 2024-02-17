import { useEffect } from "react";
import { getApiAnime } from "../services/anime.service";
import { useState } from "react";
import Image from "../components/Card/Image";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import SliderComponents from "../components/slider";

const HomePage = () => {
  const [ImageData, setImageData] = useState([]);
  const [data, setData] = useState([]);
  const [istest, setIsTest] = useState(
    Array(20)
      .fill()
      .map((_, i) => i + 1)
  );

  useEffect(() => {
    getApiAnime((res) => setData(res));
  }, [istest]);

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <>
      <div className="mt-20  text-white sm:px-5   ">
        <SliderComponents content={istest} />
        <div className="flex md:gap-7 gap-y-4 flex-wrap justify-around mt-10">
          {/* {data.map((item, i) => (
            <Link key={item.id} to={`/anime/${item.id}`}>
              <Card id={item.id} src={item.image_url} alt={"sfsa"} />
            </Link>
          ))} */}
          {istest.map((_, i) => (
            <Link key={i + crypto.randomUUID()} to={`/anime/${i}`}>
              <Card id={i} src={"image1.jpg"} alt={"sfsa"} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
