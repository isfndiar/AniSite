import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = ({ name, text, type, placeholder, children }) => {
  return (
    <div className=" bg-slate-800 py-2 flex  items-center rounded-lg px-4 w-full max-w-xs  group">
      <Label forId={name} children={children} />
      <Input type={type} forId={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
