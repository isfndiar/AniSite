import React, { Suspense, lazy, useEffect, useRef } from "react";
import { Carousel } from "flowbite-react";
import { createApiAnime } from "../../services/anime.service";
import SliderLoader from "../../Loader/SliderLoader";
const SliderComponents = ({ content }) => {
  return (
    <div className="h-56 sm:h-64 xl:h-[26rem]  w-full md:px-20 px-5">
      <Carousel
        indicators={false}
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        {createApiAnime.map((item, i) => (
          <Suspense key={i + crypto.randomUUID()} fallback={<SliderLoader />}>
            <Img item={item} />
          </Suspense>
        ))}
      </Carousel>
    </div>
  );
};

const Img = ({ item }) => {
  return (
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
      <img src={item.imgUrl} className=" w-full object-center " />
      <div className="text-center absolute md:bottom-14 sm:bottom-12 bottom-10 ">
        <div className="bg_opacity-black"></div>
        <p className="md:text-2xl text-md font-bold text-white z-10  px-10  md:py-3   ">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default SliderComponents;
