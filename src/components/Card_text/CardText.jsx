export default function CardText({ src, alt, id }) {
  return (
    <div className=" md:max-w-[20rem] lg:max-w-[23rem]  w-full  ease-in-out transition-all duration-500  group relative z-0 ">
      <img src="image1.jpg" alt="" className=" rounded-3xl  " />
      <div className="">
        <h3 className="font-semibold">Jujutsu Kaisen</h3>
        <p className="text-sm">Episode 1</p>
      </div>
    </div>
  );
}
