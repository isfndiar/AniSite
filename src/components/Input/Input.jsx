import React from "react";

const Input = (props) => {
  const {
    type,
    placeholder,
    forId,
    wFull = "w-full",
    textSize = "text-sm",
  } = props;
  return (
    <input
      className={`bg-transparent px-2  outline-none ${wFull} ${textSize}`}
      type={type}
      placeholder={placeholder}
      id={forId}
      name={forId}
    />
  );
};

export default Input;
