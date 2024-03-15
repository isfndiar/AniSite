import Modal from "@/layouts/ModalLayouts";
import FormModal from "../Form/FormModal";
import FieldSet from "../Form/FieldSet";
import Input from "../Input/Input";
import { useState } from "react";

const ModalEmail = (props) => {
  const { addData, handleCancel } = props;
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[1].value;
    if (!email) {
      setErrMsg("Harus Di Isi!! :(");
    } else {
      const data = {
        modal: false,
        email: email,
      };
      addData(data);
    }
  };
  return (
    <Modal title={"Update Your Email"}>
      <FormModal onSubmit={(e) => handleSubmit(e)} handleCancel={handleCancel}>
        <FieldSet title={"Email Address"}>
          <Input
            forId={"email"}
            type="text"
            textSize={"text-md"}
            placeholder="jondoe@gmail.com"
          />
        </FieldSet>
        {errMsg ? (
          <p className="text-red-500 text-sm text-center">{errMsg}</p>
        ) : null}
      </FormModal>
    </Modal>
  );
};

export default ModalEmail;
