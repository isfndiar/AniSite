import { useState } from "react";

const Pagination = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex justify-center mt-10 gap-7">
      {Array(5)
        .fill()
        .map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i + 1)}
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
