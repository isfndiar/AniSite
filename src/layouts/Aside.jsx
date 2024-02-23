import { Link, NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import * as Icon from "react-feather";
import { useState } from "react";

export default function Aside({ zIndex, isOpen }) {
  const setIsOpen = ({ isActive, isPending }) =>
    isActive
      ? "bg-purple-500 px-2 py-2 rounded-md"
      : isPending
      ? ""
      : "px-2 py-2";
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
        <Main setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

const Main = () => {
  const [isClick, setIsClick] = useState(true);
  const setIsOpen = ({ isActive, isPending }) => {
    return isActive
      ? ` bg-purple-500 px-2 py-2  flex gap-3 rounded-lg mx-7 `
      : isPending
      ? ""
      : "px-2 py-2 flex gap-3 rounded-lg mx-7 ";
  };

  return (
    <div className="flex flex-col mt-5 gap-5  text-sm">
      <NavLink to={"/setting/profile"} className={setIsOpen}>
        <Icon.User size={20} /> Profile
      </NavLink>
      <NavLink to={"/genre"} className={setIsOpen}>
        <Icon.File size={20} /> Genres
      </NavLink>
      <div className="Dropdown-Menu">
        <NavLink
          onClick={() => setIsClick((isClick) => !isClick)}
          className={
            isClick ? setIsOpen : "px-2 py-2  flex gap-3 rounded-lg mx-7"
          }
        >
          <Icon.FileText size={20} /> MyList{" "}
          <Icon.ChevronDown
            size={16}
            className={`transition-all ${isClick ? "" : "rotate-180  "} `}
          />
        </NavLink>
        {isClick && (
          <div className="flex flex-col gap-2 text-xs ml-20 mt-2  me-5 h-28 text-start overflow-y-auto scroll-purple ">
            <div>Last Watched</div>
            <div>Watching New</div>
            <div>Want To Watch</div>
            <div>Complete Later</div>
            <div>Completed</div>
          </div>
        )}
      </div>

      <NavLink to={"/download"} className={setIsOpen}>
        <Icon.Download size={20} /> Download
      </NavLink>
      <NavLink to={"/favorite"} className={setIsOpen}>
        <Icon.Heart size={20} /> Favorite
      </NavLink>
      <NavLink to={"/evaluation"} className={setIsOpen}>
        <Icon.Grid size={20} /> Global evaluation
      </NavLink>
      <NavLink to={"/episodes"} className={setIsOpen}>
        <Icon.Calendar size={20} /> Episode Dates
      </NavLink>
      <NavLink to={"/setting"} className={setIsOpen}>
        <Icon.Settings size={20} /> Setting
      </NavLink>
    </div>
  );
};
