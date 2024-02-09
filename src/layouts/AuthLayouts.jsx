import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import { bgContainer, flexCen } from "./index";
export default function AuthLayouts(props) {
  const { children, header, desc } = props;
  return (
    <div className={`${bgContainer} h-screen ${flexCen}`}>
      <div className=" z-0 after:absolute after:min-h-screen after:left-0  after:right-0 after:top-0 after:bottom-0  after:content-[''] after:bg-black after:opacity-35"></div>
      <div className=" z-10 bg-slate-700 text-white max-w-sm w-full py-10 px-4   rounded-3xl relative">
        <Link
          to={"/"}
          className="absolute top-12 left-9 hover:border hover:border-white border border-transparent hover:p-1 p-1 rounded-full "
        >
          <Icon.ArrowLeft />
        </Link>
        <h1 className="text-center text-2xl font-bold font-mono text-purple-500 ">
          {header}
        </h1>
        <p className=" text-xs text-center font-light text-gray-200 ">{desc}</p>
        {children}
        <div className="text-xs mt-5  flex gap-2 justify-center">
          <p>
            {header == "Login" ? "Dont have an account?" : "Have an Account?"}{" "}
          </p>
          <Link
            className="txt-sm text-purple-500"
            to={header == "Login" ? "/register" : "/login"}
          >
            {header == "Login" ? "SignUp" : "Login"}
          </Link>
        </div>
      </div>
    </div>
  );
}
