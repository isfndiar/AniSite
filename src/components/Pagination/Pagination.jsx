import { useState } from "react";

const Pagination = ({ pageIndex }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (i) => {
    setActiveIndex(i + 1);
    pageIndex(i + 1);
  };
  return (
    <div className="flex justify-center mt-10 gap-7">
      {Array(5)
        .fill()
        .map((_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`h-8 w-8 text-sm rounded-full  ${
              activeIndex == i + 1 ? "bg-purple-400" : ""
            } `}
          >
            {i + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
