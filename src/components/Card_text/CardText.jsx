import * as Icon from "react-feather";
export default function CardText({ src, alt, id }) {
  return (
    <div className=" sm:w-[350px] ease-in-out transition-all duration-500  group relative z-0 ">
      <div className="rounded-3xl overflow-hidden relative">
        <div className="bg_opacity-image"></div>
        <Icon.PlayCircle
          size={40}
          className="absolute  left-0 right-0 top-0 bottom-0 m-auto "
        />
        <img src="image1.jpg" alt="" className="  " />
      </div>
      <div className="">
        <h3 className="font-semibold">Jujutsu Kaisen</h3>
        <p className="text-sm">Episode 1</p>
      </div>
    </div>
  );
}
