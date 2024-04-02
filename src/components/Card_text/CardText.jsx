import * as Icon from "react-feather";
import { Link } from "react-router-dom";
export default function CardText({
  src = "image1.jpg",
  alt,
  id,
  title,
  episode = 1,
}) {
  return (
    <div className="xl:max-w-xl   w-full  ease-in-out transition-all duration-500  group relative z-0  ">
      <Link
        to={`/anime/${id}`}
        className="block rounded-3xl overflow-hidden relative cursor-pointer "
      >
        <div className="bg_opacity-image"></div>
        <Icon.PlayCircle
          size={40}
          className="absolute  left-0 right-0 top-0 bottom-0 m-auto "
        />
        <img src={src} alt={alt} className="w-full object-cover " />
      </Link>
      <footer className="">
        <Link to={`/anime/${id}`}>
          <h3 className="xl:text-xl 2xl:text-2xl lg:text-lg font-semibold hover:text-gray-500">
            {title.length > 45 ? title.substring(0, 45) + ` ...` : title}
          </h3>
        </Link>
        <Link to={`/anime/${id}`}>
          <p className="text-sm xl:text-xl 2xl:text-2xl lg:text-lg hover:text-gray-500">
            {episode}
          </p>
        </Link>
      </footer>
    </div>
  );
}
