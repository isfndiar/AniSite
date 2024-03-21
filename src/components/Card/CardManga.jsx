import { Link } from "react-router-dom";
import * as Icon from "react-feather";

export default function CardManga({ src, alt, score, title, id, chapter }) {
  return (
    <div className=" w-full max-w-[170px] ease-in-out transition-all duration-500 rounded-3xl  group relative z-0 text-white">
      <Header
        src={src}
        alt={alt}
        style={{ borderRadius: "1rem", height: "250px" }}
        title={title}
        id={id}
      />
      <section className="flex flex-col">
        <Link
          to={`/manga/${title}/${id}`}
          className="flex justify-between items-center text-sm hover:text-gray-200"
        >
          {chapter} chapter
          <span className="flex items-center">
            <Icon.Star color="yellow" fill="yellow" size={12} />
            {score}
          </span>
        </Link>
      </section>
    </div>
  );
}

function Header({ src, alt, style, title, id }) {
  return (
    <Link to={`/manga/${title}/${id}`}>
      <img
        src={src}
        alt={alt}
        className="object-cover bg-no-repeat  h-full"
        style={style}
      />
      <h1 className="text-md font-semibold">
        {title.length > 20 ? title.substring(0, 18) + ` ...` : title}
      </h1>
    </Link>
  );
}
