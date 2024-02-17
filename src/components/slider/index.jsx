import React, { useEffect, useRef } from "react";
import { Carousel } from "flowbite-react";
import { createApiAnime } from "../../services/anime.service";
const SliderComponents = ({ content }) => {
  return (
    <div className="h-56 sm:h-64 xl:h-[26rem]  w-full px-20">
      <Carousel
        indicators={false}
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        {createApiAnime.map((item, i) => (
          <div
            key={i + crypto.randomUUID()}
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative"
          >
            <img src={item.imgUrl} className=" w-full object-center " />
            <div className="text-center absolute bottom-14 ">
              <div className="bg_opacity-black"></div>
              <p className="text-2xl font-bold text-white z-10  px-10 py-3">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponents;
