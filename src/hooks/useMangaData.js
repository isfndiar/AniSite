import { useEffect, useState } from "react";
import { getMangaData } from "@/services/manga.service";

const useMangaData = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  useEffect(() => {
    getMangaData((res) => setData(res), currentPage);

    return () => {
      setData([]);
    };
  }, [currentPage]);

  const selectorTheme = {
    layout: {
      table: {
        base: "text-sm text-gray-400",
        span: "font-semibold text-white",
      },
    },
    pages: {
      previous: {
        base: "ml-0 rounded-l-lg border  py-2 px-3 leading-tight  border-gray-700 bg-gray-800 text-gray-400 enabled:hover:bg-gray-700 enabled:hover:text-white",
      },
      next: {
        base: "rounded-r-lg border  py-2 px-3 leading-tight  border-gray-700 bg-gray-800 text-gray-400 enabled:hover:bg-gray-700 enabled:hover:text-white",
      },
      selector: {
        base: "w-12 border  py-2 leading-tight border-gray-700 bg-gray-800 text-gray-400 enabled:hover:bg-gray-700 enabled:hover:text-white",
        active:
          " hover:bg-cyan-100 hover:text-cyan-700 border-gray-700 bg-gray-700 text-white",
      },
    },
  };

  return {
    data,
    currentPage,
    onPageChange,
    selectorTheme,
  };
};

export default useMangaData;
