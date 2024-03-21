import { Spinner } from "flowbite-react";

const CardAniMangaLoader = () => {
  return (
    <div className=" w-full max-w-[170px] ease-in-out transition-all duration-500 rounded-3xl  group relative z-0 text-white">
      <div className="flex justify-center items-center  w-full max-w-[170px]  h-[220px] mt-7">
        <Spinner color="purple" aria-label="Purple spinner example" />
      </div>
      <section className="flex flex-col">
        <p className="flex justify-between items-center text-sm hover:text-gray-200">
          Loading...
        </p>
      </section>
    </div>
  );
};

export default CardAniMangaLoader;
