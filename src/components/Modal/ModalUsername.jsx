import Modal from "@/layouts/ModalLayouts";
import Input from "../Input/Input";
import FormModal from "../Form/FormModal";
import FieldSet from "../Form/FieldSet";

const ModalUsername = (props) => {
  const { addData, handleCancel } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      modal: false,
    };
    addData(data);
  };
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
      </FormModal>
    </Modal>
  );
};

export default ModalUsername;
