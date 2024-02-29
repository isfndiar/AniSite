import axios from "axios";
const CLIENT_ID = "be9944ca9e36070593feed73e3a0cf06";

export const getAnimeContinueWatching = async (callback) => {
  try {
    const config = {
      headers: {
        "X-MAL-CLIENT-ID": CLIENT_ID,
      },
    };
    const res = await axios.get(
      "https://api.jikan.moe/v4/anime?q=bleach&limit=4"
    );

    callback(res);
  } catch (error) {
    console.log(error);
  }
};

export const getAnime = async (callback) => {
  try {
    const res = await axios.get("anime.json");
    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};
