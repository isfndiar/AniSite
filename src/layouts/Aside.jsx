import { Link, NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import * as Icon from "react-feather";

export default function Aside({ zIndex, isOpen }) {
  return (
    <div className="invisible">
      <div
        className={`${zIndex} ${
          isOpen ? "block" : "  hidden lg:block"
        } h-full bg-slate-800 text-white md:w-2/12 sm:w-2/12  shadow-2xl border-r  border-slate-900 text-center  fixed top-0  overflow-y-scroll visible `}
      >
        <div className="sticky top-0 left-0 right-0 bg-slate-800 pb-10 py-5 w-full  ">
          <Logo to={"/"} classname="  text-center   " />
        </div>
        <Main />
      </div>
    </div>
  );
}

const Main = () => {
  const setIsOpen = ({ isActive, isPending }) => {
    return isActive
      ? "bg-purple-500 px-2 py-2 rounded-md"
      : isPending
      ? ""
      : "px-2 py-2";
  };
  return (
    <div className="visible flex flex-col mt-5 gap-5  text-sm">
      {/* {Array(40)
        .fill()
        .map((_, i) => (
          <p key={i}>hai</p>
        ))} */}
      <NavLink
        to={"/"}
        className={`${setIsOpen} flex gap-3   rounded-lg mx-7 `}
      >
        <Icon.User size={20} /> Profile
      </NavLink>
      <NavLink
        to={"/anime"}
        className={`${setIsOpen} flex rounded-lg mx-7 gap-3 `}
      >
        <Icon.File size={20} /> Genres
      </NavLink>
      <NavLink
        to={"/about"}
        className={`${setIsOpen} flex rounded-lg mx-7 gap-3 `}
      >
        <Icon.FileText size={20} /> MyList <Icon.ArrowDown />
      </NavLink>
      <NavLink
        to={"/return"}
        className={`${setIsOpen} flex rounded-lg mx-7 gap-3 `}
      >
        <Icon.Download size={20} /> Download
      </NavLink>
      <NavLink
        to={"/homee"}
        className={`${setIsOpen} flex rounded-lg mx-7 gap-3 `}
      >
        <Icon.Heart size={20} /> Favorite
      </NavLink>
      <NavLink
        to={"/homee"}
        className={`${setIsOpen} flex rounded-lg mx-7 gap-3 `}
      >
        <Icon.Grid size={20} /> Global evaluation
      </NavLink>
      <NavLink
        to={"/homee"}
        className={`${setIsOpen} flex rounded-lg mx-7 gap-3 `}
      >
        <Icon.Calendar size={20} /> Episode Dates
      </NavLink>
      <NavLink
        to={"/homee"}
        className={`${setIsOpen} flex rounded-lg mx-7 gap-3 `}
      >
        <Icon.Settings size={20} /> Setting
      </NavLink>
    </div>
  );
};
