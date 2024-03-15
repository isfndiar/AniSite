import Modal from "@/layouts/ModalLayouts";
import FormModal from "../Form/FormModal";
import FieldSet from "../Form/Fieldset";
import Input from "../Input/Input";

const ModalEmail = (props) => {
  const { addData, handleCancel } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      modal: false,
    };
    addData(data);
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
      </FormModal>
    </Modal>
  );
};

export default ModalEmail;
