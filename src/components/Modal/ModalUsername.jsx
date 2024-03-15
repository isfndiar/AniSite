import Modal from "@/layouts/ModalLayouts";
import Input from "../Input/Input";
import FormModal from "../Form/FormModal";
import { useEffect, useState } from "react";
import FieldSet from "../Form/FieldSet";

const ModalUsername = (props) => {
  const { addData, handleCancel } = props;
  const [errMsg, setErrMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstname = e.target[1].value;
    const lastname = e.target[3].value;
    if (!firstname && !lastname) {
      setErrMsg("Harus Di Isi!! :(");
    } else if (firstname && !lastname) {
      setErrMsg("isi nama akhir kamu");
    } else if (!firstname && lastname) {
      setErrMsg("isi nama depan mu");
    } else {
      const data = {
        modal: false,
        firstname: firstname || "",
        lastname: lastname || "",
      };
      addData(data);
      console.log(data);
    }
  };

  useEffect(() => {
    console.log(errMsg);
  }, [errMsg]);
  return (
    <Modal title={"Update Your name"}>
      <FormModal onSubmit={(e) => handleSubmit(e)} handleCancel={handleCancel}>
        <FieldSet title={"First Name"}>
          <Input
            textSize={"text-md"}
            type="text"
            forId="firstname"
            placeholder="jondoe"
          />
        </FieldSet>

        <FieldSet title={"Last Name"}>
          <Input
            textSize={"text-md"}
            type="text"
            forId="lastname"
            placeholder="loro"
          />
        </FieldSet>
        {errMsg ? (
          <p className="text-red-500 text-sm text-center">{errMsg}</p>
        ) : null}
      </FormModal>
    </Modal>
  );
};

export default ModalUsername;
