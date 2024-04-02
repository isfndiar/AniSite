import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
  reducer: {
    data: favoriteSlice,
  },
});

store.subscribe(() => {
  console.log("add to store " + JSON.stringify(store.getState()));
});

export default store;
