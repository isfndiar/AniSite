import InputForm from "../Input";
import * as Icon from "react-feather";
import Button from "../Button/Button";

export default function FormRegister() {
  return (
    <form
      action=""
      className="flex  items-center justify-center flex-col mt-10 gap-3"
    >
      <InputForm name={"username"} type="text" placeholder={" JhonDoe"}>
        <Icon.User />
      </InputForm>
      <InputForm name={"email"} type="text" placeholder={"type Your Email"}>
        <Icon.Mail />
      </InputForm>
      <InputForm name={"password"} type="password" placeholder={"password"}>
        <Icon.Lock />
      </InputForm>
      <InputForm
        name={"confirmPassword"}
        type="password"
        placeholder={"confirm password"}
      >
        <Icon.Lock />
      </InputForm>
      <div className="mt-2">
        <Button title="Login" />
      </div>
    </form>
  );
}
