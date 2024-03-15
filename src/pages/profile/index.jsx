import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { ChevronRight, User } from "react-feather";
import ModalUsername from "@/components/Modal/ModalUsername";
import ModalEmail from "@/components/Modal/ModalEmail";

const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [photoProfile, setPP] = useState(false);
  const [value, setValue] = useState("jhondoe");
  const [idModal, setIdModal] = useState("");
  const [email, setEmail] = useState("jhondoesmith@gmail.com");

  // scroll effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addData = (data) => {
    setValue(data.value);
    setOpenModal(data.modal);
  };

  const handleClickModal = (id) => {
    setIdModal(id);
    setOpenModal((x) => !x);
  };
  return (
    <div className=" w-full px-10 text-white mt-24">
      {openModal && idModal == "name" ? (
        <ModalUsername
          addData={addData}
          handleCancel={() => setOpenModal(false)}
        />
      ) : openModal && idModal == "email" ? (
        <ModalEmail handleCancel={() => setOpenModal(false)} />
      ) : null}
      <h1 className="text-2xl font-semibold">Profile Account</h1>
      <Card className="w-full max-w-md sm:max-w-full mt-6 bg-gray-800">
        <head className="flex items-center gap-3 border-b pb-5 w-full">
          <div
            onClick={() => setPP((x) => !x)}
            className={`${
              photoProfile
                ? "fixed-center bg-black bg-opacity-35 z-[99] "
                : "bg-black rounded-full overflow-hidden w-20 h-20"
            } transition-all`}
          >
            <img
              src="photoprofile1.jpg"
              className={`${
                photoProfile ? "rounded-full " : ""
              } h-full object-cover object-center transition-all`}
            />
          </div>
          <h5 className="text-xl">Personal Information</h5>
        </head>
        <div id="subhead" className="text-sm font-light border-b pb-3 ">
          The information below only data dummy. database has not integrated
        </div>
        <div className="flex flex-col gap-3">
          <UserDetail
            handleClick={handleClickModal}
            id={"name"}
            title={"Name"}
            value={value}
          />
          <hr />
          <UserDetail
            handleClick={handleClickModal}
            id={"email"}
            title={"Email"}
            value={email}
          />
        </div>
      </Card>
    </div>
  );
};

const UserDetail = ({ handleClick, title, value, id }) => {
  return (
    <button
      onClick={() => handleClick(id)}
      className="flex justify-between items-center group  cursor-pointer"
    >
      <div className="group-hover:text-slate-400 flex flex-col sm:flex-row sm:justify-between  w-1/2">
        <p id={id}>{title}</p>
        <p>{value}</p>
      </div>
      <ChevronRight className="group-hover:text-slate-400" />
    </button>
  );
};
export default ProfilePage;
