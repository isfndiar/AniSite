import { Suspense, useEffect, lazy } from "react";
import { useState } from "react";
import SliderComponents from "../components/slider";
import CardLoader from "../Loader/CardLoader";
import LatestNews from "../components/LatestNew";
import { getAnimeContinueWatching } from "../services/animelist.service";
import Pagination from "../components/Pagination/Pagination";
import RecentlyUpdate from "../components/RecentlyUpdate/RecentlyUpdate";
import Header from "../components/Header";
import { useLoader } from "../hooks/useLoader";
import Navbar from "../layouts/Navbar";
const CardText = lazy(() => import("../components/Card_text/CardText"));

const HomePage = () => {
  const { isLoading } = useLoader();

  return (
    <>
    <div className=" mt-28 mb-2  text-white sm:px-5 py-1">
      <SliderComponents />
      <Header>Continue Watching</Header>
      <main className="md:flex gap-x-3 items-start  px-3 mt-10 ">
        <section className="w-full">
          <ContinueWatching />
          <Pagination />
          <RecentlyUpdate />
        </section>
        <LatestNews />
      </main>
    </div>
    </>
  );
};

const ContinueWatching = () => {
  const [data, setData] = useState([]);

  // Get ApI
  useEffect(() => {
    getAnimeContinueWatching((res) => setData(res.data.data));
  }, []);
  return (
    <div className="grid sm:grid-cols-2 gap-x-2 grid-cols-1 gap-y-3   w-full  ">
      {data.map((item) => (
        <Suspense fallback={<CardLoader />} key={item.mal_id}>
          <CardText
            src={item.trailer.images.image_url}
            alt={item.title}
            title={item.title}
            episode={item.episodes}
            id={item.mal_id}
          />
        </Suspense>
      ))}
    </div>
  );
};
export default HomePage;
