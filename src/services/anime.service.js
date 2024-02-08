import axios from "axios";

const CLIENT_ID = "be9944ca9e36070593feed73e3a0cf06";
const CLIENT_SECRET =
  "d85e5fbbd655719031c0c7d36c3205dd642e305d26fd72184efd68588b0e12dd";

export const getApiAnime = (callback) => {
  async function getData() {
    try {
      const res = await axios.get("https://api.nekosapi.com/v3/images");
      callback(res.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  getData();
};

export const getAnimeDetail = (id, callback) => {
  async function getData() {
    try {
      const res = await axios.get(`https://api.nekosapi.com/v3/images/${id}`);
      callback(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  getData();
};
