import axios from "axios";

export const getMangaData = async (callback, page = 1, pagination) => {
  try {
    const res = await axios.get(
      `https://api.jikan.moe/v4/manga?sfw=true&limit=16&page=${page}`
    );
    callback(res.data.data);
    pagination(res.data.pagination);
  } catch (error) {
    console.log(error);
  }
};
