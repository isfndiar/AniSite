export default function SideNav({ zIndex, isOpen }) {
  return (
    <div
      className={`${zIndex} ${
        isOpen ? "block" : "  hidden lg:block"
      } min-h-screen bg-slate-800 text-white md:w-2/12 sm:w-2/12  shadow-2xl border-r  border-slate-900 text-center pt-10 relative`}
    >
      <div className="  ">Side Nav</div>
    </div>
  );
}
