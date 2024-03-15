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
