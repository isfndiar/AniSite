import { Card } from "flowbite-react";

const Modal = (props) => {
  const { title, children } = props;

  return (
    <div className="fixed bg-black bg-opacity-35 left-0 right-0 top-0 bottom-0 flex justify-center items-center min-h-screen z-[99] ">
      <Card className="relative w-full max-w-md bg-gray-800  ">
        <p>{title}</p>
        {children}
      </Card>
    </div>
  );
};

export default Modal;

const EditUser = ({ children }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset className=" px-2 pb-2 border border-white ">
        <legend className=""> User Information </legend>
        <input
          className="border-none outline-none bg-transparent text-white px-2 "
          type="text"
          id="nama"
          name="nama"
          placeholder="jondoe"
        />
      </fieldset>
      {children}
    </form>
  );
};
