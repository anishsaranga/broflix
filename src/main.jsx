import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MoviesPage, { getMovieGenres } from "./components/MoviesPage";
import SearchPage from "./components/SearchPage.jsx";
import TvPage, { getTvGenres } from "./components/TvPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/broflix/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route loader={getMovieGenres} path="movies" element={<MoviesPage />} />
      <Route loader={getTvGenres} path="tv" element={<TvPage />} />
      <Route path="search/:term" element={<SearchPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
