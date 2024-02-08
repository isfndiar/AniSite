import React from "react";

const Input = ({ type, placeholder, forId, wFull = "w-full" }) => {
  return (
    <input
      className={`bg-transparent  text-sm px-2  outline-none ${wFull}`}
      type={type}
      placeholder={placeholder}
      id={forId}
      name={forId}
    />
  );
};

export default Input;
