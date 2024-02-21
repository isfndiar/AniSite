import { Suspense, useEffect, lazy } from "react";
import { getApiAnime } from "../services/anime.service";
import { useState } from "react";
import Image from "../components/Card/Image";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import SliderComponents from "../components/slider";
import * as Icon from "react-feather";
import CardLoader from "../Loader/CardLoader";
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
  }, [istest]);

  // Test loader
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="mt-20  text-white sm:px-5 py-1     ">
        <SliderComponents content={istest} />
        <h2 className="text-2xl font-bold mt-20 px-3">Continue Watching</h2>
        {/* <Main istest={istest} /> */}
        <div className="md:flex items-start  md:px-3 px-3   mt-10   ">
          <div className="grid md:grid-cols-2  grid-cols-1 gap-y-3  w-full ">
            {Array(4)
              .fill()
              .map((_, i) => (
                <Suspense fallback={<CardLoader />} key={i}>
                  {" "}
                  <CardText />
                </Suspense>
              ))}
          </div>
          <LatestNews />
        </div>
      </div>
    </>
  );
};

const Main = (prop) => {
  const { istest } = prop;
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

const LatestNews = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className=" bg-slate-800  py-5 px-3 text-center hidden md:inline-block  w-4/12 rounded-3xl">
      <h1 className="text-white  bg-purple-800 font-semibold  px-14 py-3 inline-block rounded-md mb-10 pointer-events-none">
        Latest News
      </h1>
      <div className="flex text-xl text-left px-2 items-start">
        Jujustu kaisen is the most anime best in 2023
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="outline-none"
        >
          <Icon.ArrowUp
            className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}
          />
        </button>
      </div>
      <div className="flex flex-col items-center  mt-10">
        {isOpen && (
          <>
            <img src="Jujutsu.jpg" alt="" className=" h-72 rounded-3xl" />
            <div className=" text-sm text-left mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              modi soluta expedita delectus, minus quae consectetur dolor quasi
              ipsam repellendus!
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              ratione, nesciunt odit exercitationem excepturi odio debitis fugit
              nostrum consectetur fugiat.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
