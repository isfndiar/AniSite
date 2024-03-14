import { Card, Flowbite } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, User } from "react-feather";
import ModalUsername from "@/components/Modal/ModalUsername";

const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [photoProfile, setPhotoProfile] = useState(false);
  const [value, setValue] = useState("jhondoe");
  const [email, setEmail] = useState("jhondoesmith@gmail.com");

  const addData = (data) => {
    setValue(data.value);
    setOpenModal(data.modal);
  };

  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div className=" w-full px-10 text-white mt-24">
      {openModal && (
        <ModalUsername
          addData={addData}
          handleCancel={() => setOpenModal(false)}
        />
      )}
      <h1 className="text-2xl font-semibold">Profile Account</h1>
      <Card className="w-full max-w-md sm:max-w-full mt-6 bg-gray-800">
        <div
          id="header"
          className="flex items-center gap-3 border-b pb-5 w-full"
        >
          <div
            onClick={() => setPhotoProfile((x) => !x)}
            className="p-3 bg-black rounded-full"
          >
            <User />
          </div>
          <h5 className="text-xl">Personal Information</h5>
        </div>
        <div id="subhead" className="text-sm font-light border-b pb-3 ">
          The information below only data dummy. database has not integrated
        </div>
        <div className="flex flex-col gap-3" onClick={(e) => handleClick(e)}>
          <UserDetail
            // handleClick={() => setOpenModal((openModal) => !openModal)}
            id={"edit-name-user"}
            title={"Name"}
            value={value}
          />
          <hr />
          <UserDetail
            id={"edit-email-user"}
            // handleClick={() => setOpenModal((openModal) => !openModal)}
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
    <div
      onClick={handleClick}
      className="flex justify-between items-center group  cursor-pointer"
    >
      <div className="group-hover:text-slate-400 flex flex-col sm:flex-row sm:justify-between  w-1/2">
        <p id={id}>{title}</p>
        <p>{value}</p>
      </div>
      <ChevronRight className="group-hover:text-slate-400" />
    </div>
  );
};
export default ProfilePage;
