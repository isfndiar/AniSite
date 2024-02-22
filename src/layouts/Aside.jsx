import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Aside({ zIndex, isOpen }) {
  return (
    <div
      className={`${zIndex} ${
        isOpen ? "block" : "  hidden lg:block"
      } min-h-screen bg-slate-800 text-white md:w-2/12 sm:w-2/12  shadow-2xl border-r  border-slate-900 text-center pt-10 fixed  overflow-scroll focus:overscroll-auto `}
    >
      <Logo to={"/"} classname=" " />
      <Main />
    </div>
  );
}

const Main = () => {
  return (
    <>
      {Array(40)
        .fill()
        .map((_, i) => (
          <p key={i}>hai</p>
        ))}
    </>
  );
};
