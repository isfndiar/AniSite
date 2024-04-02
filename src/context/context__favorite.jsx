import { createContext, useState } from "react";

const FavoriteContext = createContext();

const FavoriteManga = ({ children }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("favorite")) || ""
  );

  return (
    <FavoriteContext.Provider value={{ data, setData }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const favorite = FavoriteContext;
export default FavoriteManga;
