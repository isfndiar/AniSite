import { useEffect } from "react";
import { useSelector } from "react-redux";

const FavoritePage = () => {
  const getFavorite = useSelector((state) => state.data.data);
  useEffect(() => {
    console.log(getFavorite);
  }, [getFavorite]);

  return (
    <div className="mt-20 px-7 mb-2">
      <div className="flex flex-wrap">
        {getFavorite.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" />
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-white">{item.userRating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
