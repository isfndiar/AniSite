import React, { useState } from "react";

import * as Icon from "react-feather";

const Content = (props) => {
  const { title, src, desc } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex text-xl text-left px-2 items-start">
        {title}
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
            <img src={src} alt="" className=" h-72 rounded-3xl" />
            <div className=" text-sm text-left mt-5">{desc}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Content;
