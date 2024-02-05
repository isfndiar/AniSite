import React from "react";

const Label = ({ forId, children }) => {
  return <label htmlFor={forId}>{children}</label>;
};

export default Label;
