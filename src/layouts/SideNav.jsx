import { Link } from "react-router-dom";

export default function SideNav({ zIndex, isOpen }) {
  return (
    <div
      className={`${zIndex} ${
        isOpen ? "block" : "  hidden lg:block"
      } min-h-screen bg-slate-800 text-white md:w-2/12 sm:w-2/12  shadow-2xl border-r  border-slate-900 text-center pt-10 relative z-[99]`}
    >
      <Link to={"/"} className=" sticky top-5">
        <span className="text-purple-600 text-2xl font-bold font-mono">
          Ani
        </span>
        <span className="text-xl font-bold font-mono"> Site</span>
      </Link>
    </div>
  );
}
