import { Suspense, lazy } from "react";
import { Pagination } from "flowbite-react";
import CardAniMangaLoader from "@/Loader/CardAniMangaLoader";
import useMangaData from "../../hooks/useMangaData";
const CardManga = lazy(() => import("@/components/Card/CardManga"));
const Manga = () => {
  const { data, currentPage, onPageChange, selectorTheme } = useMangaData();

  const renderCard = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-3 sm:gap-x-0">
        {data.map((item) => (
          <Suspense
            key={item.mal_id + crypto.randomUUID()}
            fallback={<CardAniMangaLoader />}
          >
            <CardManga
              chapter={item?.chapters | ""}
              id={item?.mal_id}
              src={item?.images?.jpg?.image_url}
              alt={item?.title}
              title={item?.title}
              episodes={item.episodes ? item.episodes : "-"}
              score={item.score ? item.score : "-"}
            />
          </Suspense>
        ))}
      </div>
    );
  };
  return (
    <div className="mt-20 px-7 mb-2">
      {renderCard()}
      <div className="flex overflow-x-auto sm:justify-center my-7">
        <Pagination
          theme={selectorTheme}
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
