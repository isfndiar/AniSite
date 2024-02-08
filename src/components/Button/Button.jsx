import React from "react";

const Button = (prop) => {
  const {
    onClick,
    title,
    classname = " bg-purple-700 text-white font-semibold hover:bg-purple-900",
  } = prop;
  return (
    <button
      onClick={onClick}
      className={` md:px-6  px-3 h-8   sm:h-10 ${classname} md:text-md   flex text-sm items-center justify-center rounded-md `}
    >
      {title}
    </button>
  );
};

export default Button;
