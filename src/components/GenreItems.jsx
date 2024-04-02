import React, { useEffect, useState } from "react";
import { bearer_token } from "../API_KEY";
import Card from "./Card";

function GenreItems({ genreId, type, name }) {
  // image url
  const imageUrl = `https://image.tmdb.org/t/p/`;
  const width_300 = "w300";
  const width_400 = "w400";

  //   console.log(genreId);
  // data urls
  const movieUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;

  const tvUrl = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=${genreId}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };

  // store movie or tv data
  const [data, setData] = useState();

  // load data at beginning
  useEffect(() => {
    if (type === "movie") {
      fetch(movieUrl, options)
        .then((response) => response.json())
        .then((obj) => setData(obj.results));
    } else {
      fetch(tvUrl, options)
        .then((response) => response.json())
        .then((obj) => setData(obj.results));
    }
  }, []);

  return (
    <div>
      <h1 className="text-white font-semibold text-2xl md:text-3xl shadow-md text-left mx-10 mt-5 mb-3">
        {name}
      </h1>
      <div className="flex flex-nowrap overflow-scroll scrollbar-hide px-4 mb-16">
        {data &&
          data.map((data_item) => (
            <>
              <div className="hidden md:block">
                <Card
                  key={data_item.id}
                  title={data_item.title}
                  vote_average={data_item.vote_average}
                  backdrop_path={imageUrl + width_400 + data_item.backdrop_path}
                />
              </div>
              <div className="md:hidden">
                <Card
                  key={data_item.id}
                  title={data_item.title}
                  vote_average={data_item.vote_average}
                  backdrop_path={imageUrl + width_300 + data_item.backdrop_path}
                />
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default GenreItems;
