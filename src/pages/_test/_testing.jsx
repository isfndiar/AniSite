import React, { useRef } from "react";
const Testing = () => {
  const divRef = useRef(null);
  //   console.log(divRef.current);
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-red-500 w-[300px] h-[200px] overflow-hidden">
        <img src="image1.png" className=" object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Testing;
