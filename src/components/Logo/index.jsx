import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  const { to, classname } = props;
  return (
    <Link to={to} className={classname}>
      <span className="text-purple-600 text-2xl font-bold font-mono">Ani</span>
      <span className="text-xl font-bold font-mono"> Site</span>
    </Link>
  );
};

export default Logo;
