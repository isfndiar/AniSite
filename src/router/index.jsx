import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";
import ErrorPage from "../pages/404";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import Anime from "../pages/anime/";
import Manga from "../pages/manga";
import AnimeByID from "../pages/anime/AnimeByID";
import AnimeByEpisodePage from "../pages/anime/animeByEpisode";
import TestPage from "../pages/test/components.test";
import ProfilePage from "../pages/profile";
import Aside from "../layouts/Aside";
import ComingSoon from "../pages/ComingSoon";

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
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/anime/:id",
    element: <AnimeByID />,
  },
  {
    path: "/anime/:id/episodes/:episodes",
    element: <AnimeByEpisodePage />,
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
    path: "/favorite",
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
