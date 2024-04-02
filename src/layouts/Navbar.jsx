import * as Icon from "react-feather";
import { Link, NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import { useState } from "react";
import { fixed, flexRes } from "./";
import Logo from "../components/Logo";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <nav
      className={`py-5 pe-6 lg:ps-[15rem] ps-6 w-full   bg-slate-800 text-white ${fixed}  z-50`}
    >
      {/* Search Input mobile responsive*/}
      <div>
        {isClick && (
          <Search
            classSearch={`${flexRes} bg-slate-900 px-2 py-1 rounded-xl w-full mb-5 transition-all`}
          />
        )}
      </div>
      <div className={`${flexRes} w-full`}>
        <Logo classname="ms-2 text-3xl w-1/2 sm:hidden inline-block" to={"/"} />
        <Search
          classSearch={
            "hidden sm:flex justify-between  items-center bg-slate-900 px-2 py-1 rounded-xl w-[45%]"
          }
        />
        <ListMenu
          classname={"md:flex text-sm  hidden  w-1/3 px-3 justify-between"}
        />

        {/* Navbar-List Mobile Responsive */}
        <NavPhoneRes handleClick={() => setIsOpen(false)} isOpen={isOpen} />
        {/* Auth, Menu, Search Button */}
        <div className="flex items-center  gap-3">
          <Icon.Search
            onClick={() => setIsClick((isClick) => !isClick)}
            className={` sm:hidden cursor-pointer`}
          />
          <Link to={"/login"}>
            <Button title={"Sign In"} />
          </Link>
          {/* Menu Icon */}
          <Link
            className={"md:hidden  flex"}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Icon.Menu />
          </Link>
        </div>
      </div>
    </nav>
  );
}

const NavPhoneRes = ({ isOpen, handleClick }) => {
  return (
    <div>
      {isOpen && (
        <>
          <ListMenu classname={styles.mobile.list} />
          <button className={styles.mobile.button} onClick={handleClick}>
            X
          </button>
        </>
      )}
    </div>
  );
};

const Search = ({ classSearch }) => {
  return (
    <div className={`${classSearch}`}>
      <input
        type="text"
        className="border-none w-full bg-transparent text-white placeholder:text-white py-1 px-1 outline-none "
        placeholder="Search"
      />
      <Icon.Search className="w-4" />{" "}
    </div>
  );
};

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
      <div className={`px-2 py-2 text-gray-500 cursor-default`}>Movies</div>
    </div>
  );
};

const styles = {
  mobile: {
    button: "z-30 text-3xl font-semibold  absolute right-10 top-10 ",
    list: "w-full max-w-xs text-3xl flex justify-center items-center flex-col gap-3 bg-slate-800  transition-all fixed bottom-0 top-0 right-0",
  },
};
