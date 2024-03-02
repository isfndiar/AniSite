import { Link } from "react-router-dom";
import Image from "./Image";
import * as Icon from "react-feather";

export default function Card({ src, alt, score, title, episodes, id }) {
  return (
    <div className=" w-full max-w-[170px] ease-in-out transition-all duration-500 rounded-3xl  group relative z-0">
      <Image
        src={src}
        alt={alt}
        style={{ borderRadius: "1rem", height: "250px" }}
      />
      <section className="flex flex-col">
        <h1 className="text-md font-semibold">
          {title.length > 20 ? title.substring(0, 18) + ` ...` : title}
        </h1>
        <Link
          to={`/anime/anime-detail/${id}`}
          className="flex justify-between items-center text-sm hover:text-gray-200"
        >
          {episodes} episode
          <span className="flex items-center">
            <Icon.Star color="yellow" fill="yellow" size={12} />
            {score}
          </span>
        </Link>
      </section>
    </div>
  );
}
