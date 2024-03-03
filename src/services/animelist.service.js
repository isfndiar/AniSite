import axios from "axios";

export const getAnimeContinueWatching = async (callback) => {
  try {
    const res = await axios.get(
      "https://api.jikan.moe/v4/anime?q=bleach&limit=4"
    );

    callback(res);
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeRecently = async (callback, page = 1) => {
  try {
    const res = await axios.get(
      `https://api.jikan.moe/v4/anime?sfw=true&page=${page}`
    );
    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeByID = async (callback, id = 1) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};
const getAnimeByEpisode = async (callback, id, episode) => {
  try {
    const res = await axios.get(
      `https://api.jikan.moe/v4/anime/${id}/episodes/${episode}`
    );
    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getAnime = [
  {
    node: {
      id: 52991,
      title: "Sousou no Frieren",
      main_picture: {
        medium: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        large: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
      },
    },
    ranking: {
      rank: 1,
    },
  },
  {
    node: {
      id: 5114,
      title: "Fullmetal Alchemist: Brotherhood",
      main_picture: {
        medium: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
        large: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
      },
    },
    ranking: {
      rank: 2,
    },
  },
  {
    node: {
      id: 9253,
      title: "Steins;Gate",
      main_picture: {
        medium: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
        large: "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg",
      },
    },
    ranking: {
      rank: 3,
    },
  },
  {
    node: {
      id: 28977,
      title: "Gintama°",
      main_picture: {
        medium: "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
        large: "https://cdn.myanimelist.net/images/anime/3/72078l.jpg",
      },
    },
    ranking: {
      rank: 4,
    },
  },
];
