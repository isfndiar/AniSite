import { Suspense, useEffect, lazy } from "react";
import { useState } from "react";
import { getAnimeRandom } from "../../services/animelist.service";
import SliderComponents from "./components/home__SliderComponents";
import CardContinueLoader from "../../Loader/CardContinueLoader";
import LatestNews from "./components/home__LastNew";
import Pagination from "../../components/Pagination/Pagination";
import RecentlyUpdate from "./components/home__RecentlyUpdate";
import Header from "../../components/Header";
const CardText = lazy(() => import("@/components/Card_text/CardText"));

const HomePage = () => {
  return (
    <div className=" mt-28 mb-2  text-white sm:px-5 py-1">
      <SliderComponents />
      <Header>Continue Watching</Header>
      <Main />
    </div>
  );
};

const Main = () => {
  return (
    <main className="md:flex gap-x-3 items-start  px-3 mt-10 ">
      <section className="w-full">
        <ContinueWatching />
        <Pagination />
        <RecentlyUpdate />
      </section>
      <LatestNews />
    </main>
  );
};

const ContinueWatching = () => {
  const [data, setData] = useState([]);
  // Get ApI
  useEffect(() => {
    getAnimeRandom((res) => setData(res));
    return () => {
      setData([]);
    };
  }, []);
  return (
    <div className="grid sm:grid-cols-2 gap-x-2 grid-cols-1 gap-y-3   w-full  ">
      {data
        .map((item) => (
          <Suspense fallback={<CardContinueLoader />} key={item.mal_id}>
            <CardText
              src={item?.images?.jpg?.image_url}
              alt={item?.title}
              title={item?.title}
              episode={item?.episode}
              id={item?.mal_id}
            />
          </Suspense>
        ))
        .slice(0, 4)}
    </div>
  );
};
export default HomePage;
