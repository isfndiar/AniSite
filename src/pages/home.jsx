import { Suspense, useEffect, lazy } from "react";
import { getApiAnime } from "../services/anime.service";
import { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import SliderComponents from "../components/slider";
import CardLoader from "../Loader/CardLoader";
import LatestNews from "../components/LatestNew";
const CardText = lazy(() => import("../components/Card_text/CardText"));
const HomePage = () => {
  const [ImageData, setImageData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [istest, setIsTest] = useState(
    Array(20)
      .fill()
      .map((_, i) => i + 1)
  );

  // Get ApI
  useEffect(() => {
    getApiAnime((res) => setData(res));
  }, []);

  // Test loader
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className=" mt-16  text-white sm:px-5 py-1      ">
        <SliderComponents content={istest} />
        <h2 className="text-2xl font-bold mt-20 ps-3  ">Continue Watching</h2>
        {/* <Main istest={istest} data={data} /> */}
        <div className="md:flex gap-x-3 items-start  px-3 mt-10 ">
          <div className="w-full">
            <div className="grid sm:grid-cols-2 gap-x-2 grid-cols-1 gap-y-3   w-full  ">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <Suspense fallback={<CardLoader />} key={i}>
                    <CardText />
                  </Suspense>
                ))}
            </div>
            <div className="flex justify-center mt-10 gap-7">
              <button className="h-8 w-8 text-sm rounded-full bg-purple-400">
                1
              </button>
              <button className="h-8 w-8 text-sm rounded-full bg-purple-400">
                1
              </button>
              <button className="h-8 w-8 text-sm rounded-full bg-purple-400">
                1
              </button>
              <button className="h-8 w-8 text-sm rounded-full bg-purple-400">
                1
              </button>
              <button className="h-8 w-8 text-sm rounded-full bg-purple-400">
                1
              </button>
            </div>
          </div>

          <LatestNews />
        </div>
      </div>
    </>
  );
};

export default HomePage;

// Test
const Main = (prop) => {
  const { istest, data } = prop;
  return (
    <div className="flex md:gap-7 gap-y-4 flex-wrap justify-around mt-10 ">
      {/* {data.map((item, i) => (
        <Link key={item.id} to={`/anime/${item.id}`}>
          <Card id={item.id} src={item.image_url} alt={"sfsa"} />
        </Link>
      ))} */}
      {istest.map((_, i) => (
        <Link key={i + crypto.randomUUID()} to={`/anime/${i}`}>
          <Card id={i} src={"./src/assets/bgAuth.png"} alt={"sfsa"} />
        </Link>
      ))}
    </div>
  );
};
