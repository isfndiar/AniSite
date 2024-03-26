import axios from "axios";

// Function to get recently released anime
export const getAnimeRecently = async (callback, page = 1) => {
  try {
    const res = await axios.get(
      `https://api.jikan.moe/v4/anime?sfw=true&limit=8&page=${page}`
    );
    // Callback to pass the response data
    callback(res.data.data);
  } catch (error) {
    console.error("Error fetching recently released anime:", error);
  }
};

// Function to get Anime by Id
export const getAnimeByID = async (callback, id = 1) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
    // callback to pass the response data
    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

// Data(array) anime for Slider
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
  },
];

// Function to get Recent Anime Recommendations
export const getRecentAnimeRecommendations = async (callback, id = 1) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}/news`);
    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeRandom = async (callback) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/40748/videos`);
    callback(res.data.data.episodes);
    // console.log(res.data.data);
  } catch (error) {
    console.log("Not found ", error);
  }
};
