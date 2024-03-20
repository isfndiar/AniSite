import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import { getMangaData } from "../../services/manga.service";
import { Pagination } from "flowbite-react";
const Manga = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  useEffect(() => {
    getMangaData((res) => setData(res), currentPage);

    return () => {
      setData([]);
    };
  }, [currentPage]);

  useEffect;
  return (
    <div className="mt-20 px-7 mb-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-2">
        {data.map((item) => (
          <Card
            manga={true}
            chapter={item?.chapters | ""}
            key={item.mal_id + crypto.randomUUID()}
            id={item?.mal_id}
            src={item?.images?.jpg?.image_url}
            alt={item?.title}
            title={item?.title}
            episodes={item.episodes ? item.episodes : "-"}
            score={item.score ? item.score : "-"}
          />
        ))}
      </div>
      <div className="flex overflow-x-auto sm:justify-center my-7">
        <Pagination
          currentPage={currentPage}
          totalPages={3519}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default Manga;
