import { Link } from "react-router-dom";
import Logo from "../components/Logo";

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
  return (
    <div className="visible">
      {Array(40)
        .fill()
        .map((_, i) => (
          <p key={i}>hai</p>
        ))}
    </div>
  );
};
