import * as Icon from "react-feather";
import { Link, NavLink, Outlet } from "react-router-dom";
import Button from "../components/Button/Button";
import Aside from "./Aside";
import { useState } from "react";
import { fixed, flexRes } from "./";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Footer from "./Footer";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
      <nav
        className={`py-5 pe-6 lg:ps-[15rem] ps-6 w-full   bg-slate-800 text-white ${fixed}  z-50`}
      >
        {/* Search Input mobile responsive*/}
        {isClick && (
          <Search
            classIcon={`hidden`}
            classSearch={`flex justify-between  items-center bg-slate-900 px-2 py-1 rounded-xl w-full mb-5 transition-all`}
          />
        )}
        
        <div className={`${flexRes} w-full`}>
          <Logo
            classname="ms-2 text-3xl w-1/2 sm:hidden inline-block"
            to={"/"}
          />
          <Search
            classIcon={"inline-block"}
            classSearch={
              "hidden sm:flex justify-between  items-center bg-slate-900 px-2 py-1 rounded-xl w-[45%]"
            }
            handleClick={() => setIsClick((isClick) => !isClick)}
          />
          <ListMenu
            classname={"md:flex text-sm  hidden  w-1/3 px-3 justify-between"}
          />

          {/* Navbar-List Mobile Responsive */}
          {isOpen && (
            <>
              <ListMenu
                classname={
                  "w-full fixed text-3xl flex justify-center items-center flex-col gap-3 bg-slate-700    bottom-0 top-0 left-0 right-0 z-20"
                }
              />
              <button
                className="z-30 text-3xl font-semibold  absolute right-10 top-10 "
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </>
          )}
          {/* Navbar-List */}

          {/* Auth Button */}
          <div className="lg:ms-0 ms-auto md:me-0 me-3">
            <Link to={"/login"}>
              <Button title={"Sign In"} />
            </Link>
          </div>

          {/* Menu Icon */}
          <Link
            className={"md:hidden  flex"}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Icon.Menu />
          </Link>
        </div>
      </nav>


  );
}

const ListMenu = ({ classname }) => {
  const setIsOpen = ({ isActive, isPending }) => {
    return isActive
      ? "bg-black px-2 py-2 rounded-md"
      : isPending
      ? ""
      : "px-2 py-2";
  };
  return (
    <div className={classname}>
      <NavLink to={"/anime"} className={setIsOpen}>
        Anime
      </NavLink>
      <NavLink to={"/manga"} className={setIsOpen}>
        Manga
      </NavLink>
      <NavLink to={"/news"} className={setIsOpen}>
        News
      </NavLink>
      <NavLink to={"/movies"} className={setIsOpen}>
        Movies
      </NavLink>
    </div>
  );
};
