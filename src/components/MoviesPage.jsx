import React from "react";
import { useLoaderData } from "react-router-dom";
import { bearer_token } from "../API_KEY";
import GenreItems from "./GenreItems";

function MoviesPage() {
  const genresData = useLoaderData();
  console.log(typeof genresData);
  return (
    <>
      <div className="text-stone-200 text-center text-2xl md:text-4xl mt-4 hidden md:block">
        Movies
      </div>
      <div className="w-full h-9 p-15 mt-2 border-b-4 border-red-600 opacity-45 my-2 rounded-full hidden md:block"></div>

      {/* big screens */}
      <div className="md:block">
        <div className="flex flex-col justify-center mx-5 md:mx-10 my-5 md:my-10">
          {genresData &&
            genresData.map((_genre) => (
              <GenreItems
                key={_genre.id}
                genreId={_genre.id}
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
