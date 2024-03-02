import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Carousel } from "flowbite-react";
import { createApiAnime } from "../../services/anime.service";
import SliderLoader from "../../Loader/SliderLoader";
import * as Icon from "react-feather";
import { getAnime } from "../../services/animelist.service";
const SliderComponents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // getAnime((res) => setData(res));
  }, []);
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-[26rem]  w-full md:px-20 px-5  ">
        <Carousel
          indicators={false}
          // onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          {getAnime.map((item, i) => (
            <Suspense key={item.node.id} fallback={<SliderLoader />}>
              <Img item={item} />
            </Suspense>
          ))}
        </Carousel>
      </div>
      <div className="flex justify-center mt-10">
        <Button>Favorite</Button>
        <Button style={`flex bg-purple-800 items-center justify-center gap-2`}>
          <Icon.Play size={15} /> Watch now
        </Button>

        <Button>Learn more</Button>
      </div>
    </>
  );
};

const Img = ({ item }) => {
  return (
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
      <img
        src={item.node.main_picture.large}
        className=" w-full object-center "
      />
      <div className="text-center absolute md:bottom-14 sm:bottom-12 bottom-10 ">
        <div className="bg_opacity-black"></div>
        <p className="md:text-2xl text-md font-bold text-white z-10  px-10  md:py-3   ">
          {item.node.title}
        </p>
      </div>
    </div>
  );
};

const Button = ({ children, style }) => {
  return (
    <button
      className={`sm:px-10 px-6 rounded-lg py-2 sm:text-md text-xs  ${style}`}
    >
      {children}
    </button>
  );
};

export default SliderComponents;
