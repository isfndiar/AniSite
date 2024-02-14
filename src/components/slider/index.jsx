import React, { useEffect, useRef } from "react";
import { Carousel } from "flowbite-react";
const SliderComponents = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 w-1/2">
      <Carousel
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src="image1.png" className=" object-center" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="./src/assets/bgAuth.png"
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
};

export default SliderComponents;
