import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ErrorPage from "../pages/404";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import Navbar from "../layouts/Navbar";
import Anime from "../pages/anime";
import Manga from "../pages/manga";
import AnimeDetail from "../pages/animes";
import Testing from "../pages/_test/_testing";

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
    ],
  },
  {
    path: "/anime/:id",
    element: <AnimeDetail />,
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
    path: "/testing",
    element: <Testing />,
  },
]);
