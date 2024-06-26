import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/";
import ErrorPage from "../pages/404";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import Anime from "../pages/anime/";
import Manga from "../pages/manga/manga";
import AnimeByID from "../pages/anime/_id";
import TestPage from "../pages/test/components.test";
import ProfilePage from "../pages/profile";
import Aside from "../layouts/Aside";
import ComingSoon from "../pages/ComingSoon";
import MangaByTitle from "../pages/manga/_title";
import NewsPage from "../pages/news";
import GenrePage from "../pages/Genre";
import FavoritePage from "../pages/favorite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Aside />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/anime",
        element: <Anime />,
      },
      {
        path: "/manga",
        element: <Manga />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/genre",
        element: <GenrePage />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
    ],
  },
  {
    path: "/anime/:id",
    element: <AnimeByID />,
  },

  {
    path: "/manga/:title/:id",
    element: <MangaByTitle />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/mylist",
    element: <ComingSoon />,
  },
  {
    path: "/evaluation",
    element: <ComingSoon />,
  },
  {
    path: "/download",
    element: <ComingSoon />,
  },
  {
    path: "/dates",
    element: <ComingSoon />,
  },
  {
    path: "/setting",
    element: <ComingSoon />,
  },
  {
    path: "/gallery",
    element: <ComingSoon />,
  },
]);
