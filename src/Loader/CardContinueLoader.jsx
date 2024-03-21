import { Spinner } from "flowbite-react";

const CardLoader = () => {
  return (
    <div className=" sm:w-[350px] ease-in-out transition-all duration-500  group relative z-0 ">
      <div className=" rounded-3xl w-[350px]  h-[200px] flex justify-center items-center  ">
        <Spinner color="purple" aria-label="Purple spinner example" />
      </div>
      <div className="">
        <h3 className="font-semibold">Loading...</h3>
        <p className="text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default CardLoader;
