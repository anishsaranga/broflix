import React from "react";
import { useLoaderData } from "react-router-dom";
import { bearer_token } from "../API_KEY";
import GenreItems from "./GenreItems";

function TvPage() {
  const genresData = useLoaderData();

  return (
    <>
      <div className="text-stone-200 text-center text-2xl md:text-4xl mt-4 hidden md:block">
        TV shows
      </div>
      <div className="w-full h-9 p-15 mt-2 border-b-4 border-red-600 opacity-45 my-2 rounded-full hidden md:block"></div>

      <div className="md:block">
        <div className="flex flex-col justify-center mx-5 md:mx-10 my-5 md:my-10">
          {genresData.map((_genre) => (
            <GenreItems
              key={_genre.id}
              genreId={_genre.id}
              type="tv"
              name={_genre.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TvPage;

// fetch genres data
export const getTvGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?language=en`,
    options
  );
  const data = await response.json();
  return data ? data.genres : null;
};
