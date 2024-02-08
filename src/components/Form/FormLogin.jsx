import InputForm from "../Input";
import * as Icon from "react-feather";
import Button from "../Button/Button";
export default function FormLogin() {
  return (
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
      <div className="mt-2">
        <Button title="Login" />
      </div>
    </form>
  );
}
