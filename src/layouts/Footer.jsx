import Logo from "../components/Logo";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full flex justify-between  sm:justify-around lg:ps-[17rem] py-7 px-4 pb-20 sm:pb-0  bg-slate-800 ">
      <div className="sm:flex justify-center items-center hidden ">
        <Logo />
      </div>
      <Navigation title={"Site Menu"}>
        <Link>Home</Link>
        <Link>Read Manga</Link>
        <Link>News</Link>
        <Link>Movies</Link>
      </Navigation>
      <Navigation title={"Follow Us"}>
        <div className="grid grid-cols-2 gap-3">
          <a href="">
            <Icon.Youtube />
          </a>
          <a href="">
            <Icon.Mail />
          </a>
          <a href="">
            <Icon.Linkedin />
          </a>
          <a href="">
            <Icon.Twitter />
          </a>
        </div>
      </Navigation>
      <Navigation title={"Contact Us"}>
        <a href="">123456789</a>
        <a href="">isfandiaradi21@gmail.com</a>
      </Navigation>
    </div>
  );
};

const Navigation = ({ children, title }) => {
  return (
    <nav className="flex flex-col text-white text-xs sm:text-sm md:text-md">
      <header className="font-bold mb-2">{title}</header>
      {children}
    </nav>
  );
};

export default Footer;
