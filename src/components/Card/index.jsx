import Image from "./Image";
import * as Icon from "react-feather";

export default function Card({ src, alt, score, title, episodes }) {
  return (
    <div className=" w-full max-w-[170px] ease-in-out transition-all duration-500 rounded-3xl  group relative z-0">
      <Image
        src={src}
        alt={alt}
        style={{ borderRadius: "1rem", height: "250px" }}
      />
      <div className="hidden group-hover:flex items-end absolute  text-white left-0 right-0   top-0  bottom-0">
        {/* <div className=" bg_opacity-black"></div> */}
      </div>
      <div className="flex flex-col">
        <h1 className="text-md font-semibold">{title.substring(0, 20)}...</h1>
        <p className="flex justify-between items-center text-sm">
          {episodes} episode
          <span className="flex items-center">
            <Icon.Star color="yellow" fill="yellow" size={12} />
            {score}
          </span>
        </p>
      </div>
    </div>
  );
}
