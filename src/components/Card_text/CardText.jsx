import * as Icon from "react-feather";
export default function CardText({
  src = "image1.jpg",
  alt,
  id,
  title,
  episode = 1,
}) {
  return (
    <div className=" md:max-w-[20rem] lg:max-w-[23rem]  w-full  ease-in-out transition-all duration-500  group relative z-0  ">
      <div className=" bg-white rounded-3xl overflow-hidden relative ">
        <div className="bg_opacity-image"></div>
        <Icon.PlayCircle
          size={40}
          className="absolute  left-0 right-0 top-0 bottom-0 m-auto "
        />
        <img src={src} alt={alt} className="w-full object-cover " />
      </div>
      <div className="">
        <h3 className="font-semibold">{title.substring(0, 25)}...</h3>
        <p className="text-sm">{episode} episode</p>
      </div>
    </div>
  );
}
