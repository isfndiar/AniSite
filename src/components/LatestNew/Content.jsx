import React, { useState } from "react";

import * as Icon from "react-feather";

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex text-xl text-left px-2 items-start">
        Jujustu kaisen is the most anime best in 2023
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="outline-none"
        >
          <Icon.ChevronUp
            className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}
          />
        </button>
      </div>
      <div className="flex flex-col items-center  mt-10 ">
        {isOpen && (
          <>
            <img src="Jujutsu.jpg" alt="" className=" h-72 rounded-3xl" />
            <div className=" text-sm text-left mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              modi soluta expedita delectus, minus quae consectetur dolor quasi
              ipsam repellendus!
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              ratione, nesciunt odit exercitationem excepturi odio debitis fugit
              nostrum consectetur fugiat.
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Content;
