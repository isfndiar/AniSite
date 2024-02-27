import axios from "axios";
const CLIENT_ID = "be9944ca9e36070593feed73e3a0cf06";

export const getAnimeSlider = async (callback) => {
  try {
    const config = {
      headers: {
        "X-MAL-CLIENT-ID": CLIENT_ID,
      },
    };
    const res = await axios.get(
      "https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=3",
      {
        headers: {
          "X-MAL-CLIENT-ID": CLIENT_ID,
        },
      }
    );

    callback(res);
  } catch (error) {
    console.log(error);
  }
};
