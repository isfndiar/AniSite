import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  const { to, classname, size } = props;
  return (
    <Link to={to} className={classname} style={{fontSize: size}}>
      <span className="text-purple-600 text-3xl font-bold font-kausan ">Ani</span>
      <span className="text-xl font-bold font-kausan text-white"> Site</span>
    </Link>
  );
};

export default Logo;
