import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import * as Icon from "react-feather";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  const navClicked = ({ isActive, isPending }) => {
    return isActive
      ? `text-purple-800`
      : isPending
      ? "text-white"
      : "text-white";
  };
  return (
    <>
      <Navbar />
      <div className="w-full py-3 px-3 rounded-tl-3xl rounded-tr-3xl fixed left-0 right-0 bottom-0 sm:hidden flex justify-around  bg-slate-800 text-white z-[99] border-t border-white">
        <NavLink className={navClicked} to={"/"}>
          <Icon.Home size={30} />
        </NavLink>
        <NavLink className={navClicked} to={"/profile"}>
          <Icon.User size={30} />
        </NavLink>
        <NavLink className={navClicked} to={"/gallery"}>
          <Icon.Grid size={30} />
        </NavLink>
        <NavLink className={navClicked} to={"/setting"}>
          <Icon.Settings size={30} />
        </NavLink>
      </div>
      <div className="flex relative">
        <Icon.ChevronRight
          size={35}
          onClick={() => setIsOpen((x) => !x)}
          className={`${
            isOpen ? "translate-x-56" : ""
          } transition-all duration-1000 chevron-right cursor-pointer`}
          color="white"
        />
        <div
          className={`${
            isOpen ? "sm:max-w-[14rem]" : " sm:max-w-0 lg:max-w-[14rem] "
          } hidden sm:inline-block lg:inline-block h-full w-full transition-all duration-1000 origin-left text-center  fixed top-0  overflow-y-scroll visible z-[99] bg-slate-800 text-white shadow-2xl border-r  border-slate-900`}
        >
          <header className="sticky top-0 left-0 right-0 bg-slate-800 pb-10 py-5 w-full  ">
            <Logo to={"/"} classname="  text-center " />
          </header>
          <Main />
        </div>
        <div className="w-full min-h-screen bg-slate-900  lg:ml-[16%] ml-0 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

const Main = () => {
  const [isClick, setIsClick] = useState(false);
  const setIsOpen = ({ isActive, isPending }) => {
    return isActive
      ? ` bg-purple-500 px-2 py-2  flex gap-3 rounded-lg mx-7 `
      : isPending
      ? ""
      : "px-2 py-2 flex gap-3 rounded-lg mx-7 ";
  };

  return (
    <div className="flex flex-col mt-5 gap-5  text-sm">
      <NavLink to={"/profile"} className={setIsOpen}>
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
          <Icon.FileText size={20} /> MyList
          <Icon.ChevronDown
            size={16}
            className={`transition-all ${isClick ? "" : "rotate-180  "} `}
          />
        </NavLink>
        {isClick && (
          <div className="flex flex-col gap-2 text-xs ml-20 mt-2  me-5 h-28 text-start overflow-y-auto scroll-purple ">
            <Link className="hover:text-slate-300">Last Watched</Link>
            <Link className="hover:text-slate-300">Watching New</Link>
            <Link className="hover:text-slate-300">Want To Watch</Link>
            <Link className="hover:text-slate-300">Complete Later</Link>
            <Link className="hover:text-slate-300">Completed</Link>
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
      <NavLink to={"/dates"} className={setIsOpen}>
        <Icon.Calendar size={20} /> Episode Dates
      </NavLink>
      <NavLink to={"/setting"} className={setIsOpen}>
        <Icon.Settings size={20} /> Setting
      </NavLink>
    </div>
  );
};
