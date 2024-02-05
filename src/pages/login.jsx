import InputForm from "../components/Input";
import * as Icon from "react-feather";
const LoginPage = () => {
  return (
    <div className="bg-[url(./assets/bgAuth.png)]  bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div className=" z-0 after:absolute after:min-h-screen after:left-0  after:right-0 after:top-0 after:bottom-0  after:content-[''] after:bg-black after:opacity-35"></div>
      <div className=" z-10 bg-slate-700 text-white max-w-sm w-full py-10 px-4   rounded-3xl">
        <h1 className="text-center text-2xl font-bold font-mono text-purple-500 ">
          Login
        </h1>
        <p className=" text-xs text-center font-light text-gray-200 ">
          Enter your information
        </p>
        <form
          action=""
          className="flex  items-center justify-center flex-col mt-10 gap-3"
        >
          <InputForm name={"email"} type="text" placeholder={"type Your Email"}>
            <Icon.Mail />
          </InputForm>
          <InputForm name={"password"} type="password" placeholder={"********"}>
            <Icon.Lock />
          </InputForm>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
