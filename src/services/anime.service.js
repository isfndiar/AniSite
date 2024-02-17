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

export const createApiAnime = [
  {
    id: 0,
    title: `jujutsu kaisen`,
    year: 2014,
    rating: 9.0,
    desc: "this anime is suc",
    imgUrl: "image1.jpg",
  },
  {
    id: 1,
    title: `Bleach`,
    year: 2000,
    rating: 9.0,
    desc: "Menyala abangkuh",
    imgUrl: "image2.jpg",
  },
  {
    id: 2,
    title: `Boruto`,
    year: 2018,
    rating: 4.5,
    desc: "Boruto is a spin-off and a sequel to Kishimoto's Naruto and follows the exploits of Naruto Uzumaki's son, Boruto Uzumaki, and his ninja team",
    imgUrl: "image3.jpg",
  },
];
