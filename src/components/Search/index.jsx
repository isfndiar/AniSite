import * as Icon from "react-feather";
const Search = ({ handleClick, classSearch, classIcon }) => {
  return (
    <>
      <div className={`${classSearch}`}>
        <input
          type="text"
          className="border-none w-full bg-transparent text-white placeholder:text-white py-1 px-1 outline-none "
          placeholder="Search"
        />
        <Icon.Search className="w-4" />{" "}
      </div>

    </>
  );
};

export default Search;
