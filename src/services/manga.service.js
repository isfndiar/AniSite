import axios from "axios";

export const getMangaData = async (callback, page = 1) => {
  try {
    const res = await axios.get(
      `https://api.jikan.moe/v4/manga?sfw=true&limit=20&page=${page}`
    );
    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getMangaByID = async (callback, id) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/manga/${id}/full`);
    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};
