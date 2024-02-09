import React from "react";
import Image from "./Image";

export default function Card({ src, alt, id }) {
  return (
    <div className=" sm:w-[200px] sm:h-[300px] w-[170px] h-[220px] hover:scale-110  ease-in-out transition-all duration-500 rounded-md overflow-hidden border border-white group relative z-0">
      <Image src={src} alt={alt} />
      <div className="hidden group-hover:flex items-end absolute  text-white left-0 right-0   top-0  bottom-0">
        <div className=" z-0 after:absolute after:min-h-screen after:left-0  after:right-0 after:top-0 after:bottom-0  after:content-[''] after:bg-black after:opacity-35"></div>
        <div className=" z-10 text-xs ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit
          tempore dolore sunt minima voluptates quis magni dolores sed eligendi?
        </div>
      </div>
    </div>
  );
}
