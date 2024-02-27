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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [istest, setIsTest] = useState(
    Array(8)
      .fill()
      .map((_, i) => i + 1)
  );

  // Get ApI
  useEffect(() => {
    getApiAnime(
      (res) => setData(res),
      (message) => {
        console.log(message);
      }
    );
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
        <Header>Continue Watching</Header>
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
            <Pagination />
            <RecentlyUpdate istest={istest} />
          </div>
          <LatestNews />
        </div>
      </div>
    </>
  );
};

export default HomePage;

const Header = ({ children }) => (
  <h2 className="text-2xl font-bold mt-20 ps-3  ">{children}</h2>
);

const RecentlyUpdate = ({ istest }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="ps-7">
      <header className="flex gap-20 items-end">
        <Header>Recently Update</Header>
        <span className="flex gap-10">
          <Link
            onClick={() => setActiveIndex(0)}
            className={activeIndex == 0 ? "text-white" : " text-gray-500"}
          >
            All
          </Link>
          <Link
            onClick={() => setActiveIndex(1)}
            className={activeIndex == 1 ? "text-white" : " text-gray-500"}
          >
            Trending
          </Link>
          <Link
            onClick={() => setActiveIndex(2)}
            className={activeIndex == 2 ? "text-white" : " text-gray-500"}
          >
            Random
          </Link>
        </span>
      </header>
      <Main istest={istest} />
    </div>
  );
};

// Test
const Main = (prop) => {
  const { istest } = prop;
  return (
    <>
      <div className="flex flex-wrap gap-x-5 gap-y-10   mt-10 ">
        {istest.map((_, i) => (
          <Card
            key={i + crypto.randomUUID()}
            id={i}
            src={"bgAuth.png"}
            alt={"sfsa"}
          />
        ))}
      </div>
      <Pagination />
    </>
  );
};

const Pagination = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex justify-center mt-10 gap-7">
      {Array(5)
        .fill()
        .map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i + 1)}
            className={`h-8 w-8 text-sm rounded-full  ${
              activeIndex == i + 1 ? "bg-purple-400" : ""
            } `}
          >
            {i + 1}
          </button>
        ))}
    </div>
  );
};
