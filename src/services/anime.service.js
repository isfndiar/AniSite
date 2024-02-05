import axios from "axios";

const CLIENT_ID = "be9944ca9e36070593feed73e3a0cf06";
const CLIENT_SECRET =
  "d85e5fbbd655719031c0c7d36c3205dd642e305d26fd72184efd68588b0e12dd";

export const getApiAnime = async (callback) => {
  axios
    .get("https://api.nekosapi.com/v3/images")
    .then((res) => {
      callback(res.data.items);
    })
    .catch((err) => callback(err));
};
