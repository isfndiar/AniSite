import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ErrorPage from "../pages/404";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import Navbar from "../layouts/Navbar";
import Anime from "../pages/anime/";
import Manga from "../pages/manga";
import AnimeByID from "../pages/anime/AnimeByID";
import AnimeByEpisodePage from "../pages/anime/animeByEpisode";
import TestPage from "../pages/test/test_component";
import ProfilePage from "../pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
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
]);

