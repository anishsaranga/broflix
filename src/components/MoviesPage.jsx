import React from "react";
import { useLoaderData } from "react-router-dom";
import { bearer_token } from "../API_KEY";
import GenreItems from "./GenreItems";

function MoviesPage() {
  const genresData = useLoaderData();
  return (
    <>
      <div className="text-stone-200 text-center text-2xl md:text-4xl mt-4">
        Movies
      </div>
      <div className="w-full h-1 p-10 mt-2 border-b-4 border-red-600 opacity-45 rounded-full"></div>

      {/* big screens */}
      <div className="hidden md:block">
        <div className="flex flex-col justify-center mx-10 my-10">
          {genresData.map((_genre) => (
            <GenreItems
              key={_genre.id}
              genreId={_genre.id}
              type="movie"
              name={_genre.name}
            />
          ))}
        </div>
      </div>
      {/* small screens */}
      <div className="md:hidden">
        <div className="flex flex-col justify-center mx-5 my-5">
          {genresData.map((_genre) => (
            <GenreItems
              key={_genre.id}
              genre={_genre.id}
              type="movie"
              name={_genre.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviesPage;

export const getMovieGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    options
  );
  const data = await response.json();
  return data ? data.genres : null;
};
