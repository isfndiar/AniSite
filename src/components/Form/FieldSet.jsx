import React from "react";

const FieldSet = (props) => {
  const { title, children } = props;
  return (
    <fieldset className=" px-2 pb-2 border border-white mb-2 ">
      <legend className=""> {title} </legend>
      {children}
    </fieldset>
  );
};

export default FieldSet;
