import { Card } from "flowbite-react";

const Modal = (props) => {
  const { addData, handleCancel, title } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      modal: false,
    };
    addData(data);
  };

  return (
    <div className="fixed bg-black bg-opacity-35 left-0 right-0 top-0 bottom-0 flex justify-center items-center min-h-screen z-[99] ">
      <Card className="relative w-full max-w-md bg-gray-800  ">
        <p>{title}</p>
        <EditUser>
          <ButtonConfirmed handleCancel={handleCancel} />
        </EditUser>
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

const ButtonConfirmed = ({ handleCancel }) => {
  return (
    <div className="mt-4 flex justify-end space-x-3 lg:mt-6">
      <a
        onClick={handleCancel}
        href="#"
        className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
      >
        Cancel
      </a>
      <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        Confirm
      </button>
    </div>
  );
};
