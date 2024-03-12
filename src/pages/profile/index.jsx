import { Card } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, User } from "react-feather";

const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [photoProfile, setPhotoProfile] = useState(false);
  const [value, setValue] = useState("jhondoe");
  const accountRef = useRef(null);
  useEffect(() => {}, []);

  const addData = (data) => {
    setValue(data.value);
    setOpenModal(data.modal);
  };
  return (
    <>
      <div ref={accountRef} className=" w-full px-10 text-white mt-24">
        {openModal && (
          <Modal addData={addData} handleCancel={() => setOpenModal(false)} />
        )}
        <h1 className="text-2xl font-semibold">Profile Account</h1>
        <Card className="w-full max-w-md mt-6">
          <div className="flex items-center gap-3 border-b pb-5 w-full">
            <div
              onClick={() => setPhotoProfile((x) => !x)}
              className="p-3 bg-black rounded-full"
            >
              <User />
            </div>
            <h5 className="text-xl">Personal Information</h5>
          </div>
          <div className="text-sm font-light border-b pb-3 ">
            The information below only data dummy. database has not integrated
          </div>
          <div
            onClick={() => setOpenModal((openModal) => !openModal)}
            className="flex justify-between items-center group  cursor-pointer"
          >
            <div className="group-hover:text-slate-400">
              <p>Name</p>
              <p>{value}</p>
            </div>
            <ChevronRight className="group-hover:text-slate-400" />
          </div>
        </Card>
      </div>
    </>
  );
};

const Modal = ({ addData, handleCancel }) => {
  const [value, setValue] = useState("jhondoe");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      value,
      modal: false,
    };
    addData(data);
  };

  return (
    <>
      <div className="fixed bg-black bg-opacity-35 left-0 right-0 top-0 bottom-0 flex justify-center items-center min-h-screen z-[99] ">
        <Card className="relative w-full max-w-md">
          <p>Update Your Name</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset className=" px-2 pb-2 border border-white">
              <legend> User Information </legend>
              <input
                className="border-none outline-none bg-transparent text-white px-2 "
                type="text"
                id="nama"
                name="nama"
                placeholder="jondoe"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </fieldset>
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
          </form>
        </Card>
      </div>
    </>
  );
};

function ButtonClose({ handleClick }) {
  return (
    <button onClick={handleClick} className=" absolute top-3 right-3 text-md">
      ✖️
    </button>
  );
}

export default ProfilePage;
