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
import WatchPage from "./components/WatchPage.jsx";
import StreamPage from "./components/StreamPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/broflix/" element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route path="movies/">
        <Route loader={getMovieGenres} path="" element={<MoviesPage />} />
        <Route path="watch/:imdb_id" element={<WatchPage />} />
      </Route>

      <Route path="tv/">
        <Route loader={getTvGenres} path="" element={<TvPage />} />
        <Route path="watch/:imdb_id" element={<WatchPage />} />
      </Route>

      <Route path="search/:term">
        <Route path="" element={<SearchPage />} />
        <Route path="watch/:imdb_id" element={<WatchPage />} />
      </Route>
      <Route path="watch/:imdb_id" element={<WatchPage />} />

      <Route path="stream/">
        <Route path=":imdb_id" element={<StreamPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
