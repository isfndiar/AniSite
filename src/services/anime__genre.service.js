import axios from "axios";

export const getAnimeGenre = async (callback) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/genres/anime`);
    callback(res.data.data);
    // console.log(res.data.data);
  } catch (error) {
    console.log("Not found ", error);
  }
};
export const getAnimeByGenre = async (callback, genre) => {
  try {
    const res = await axios.get(
      `https://api.jikan.moe/v4/anime?genres=${genre}`
    );
    callback(res.data.data);
    // console.log(res.data.data);
  } catch (error) {
    console.log("Not found ", error);
  }
};
