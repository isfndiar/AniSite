import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    data: [],
  },
  reducers: {
    favoriteItem(state, action) {
      const findFavorite = state.data.find((id) => id == action.payload.id);
      if (findFavorite) return;
      state.data.push(action.payload);
    },
  },
});

export const { favoriteItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
