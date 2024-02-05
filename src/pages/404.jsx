import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-center space-x-1 bg-black text-white">
      <div className="bg-slate-800 border border-gray-400 p-10 rounded-md">
        <p className="text-3xl font-semibold mb-4">
          Your search is not Found !
        </p>
        <p className="text-xl font-semibold mb-4">404!!</p>
        <Link
          to={"/"}
          className="px-3 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-700 "
        >
          Back To Home ?
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
