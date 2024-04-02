import React, { useEffect, useState } from "react";
import Card from "./Card";
import API_KEY from "../API_KEY";

function CategoryItems({ category }) {
  // image url without setting the width param
  const image_url = `https://image.tmdb.org/t/p/`;
  const withGenreUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=`;

  const request_urls = {
    popular:
      `https://api.themoviedb.org/3/movie/popular` + `?api_key=${API_KEY}`,
    top_rated:
      `https://api.themoviedb.org/3/movie/top_rated` + `?api_key=${API_KEY}`,
    upcoming:
      `https://api.themoviedb.org/3/movie/upcoming` + `?api_key=${API_KEY}`,
    trending:
      `https://api.themoviedb.org/3/trending/movie/day` + `?api_key=${API_KEY}`,
    trending_tv:
      `https://api.themoviedb.org/3/trending/tv/week` + `?api_key=${API_KEY}`,
    popular_tv:
      `https://api.themoviedb.org/3/tv/popular` + `?api_key=${API_KEY}`,
    top_rated_tv:
      `https://api.themoviedb.org/3/tv/top_rated` + `?api_key=${API_KEY}`,
  };

  // to store response
  const [data, setData] = useState([]);
  // load at component render once
  useEffect(() => {
    fetch(request_urls[category])
      .then((response) => response.json())
      .then((res) => setData(res.results));
  }, []);

  //{ console.log(`${category}`, movies);}

  // category headings
  const category_headings = {
    popular: "Popular",
    top_rated: "Top Rated",
    upcoming: "Upcoming",
    trending: "Trending",
    trending_tv: "Trending in TV",
    popular_tv: "Popular in TV",
    top_rated_tv: "Top Rated in TV",
  };

  return (
    <>
      <h1 className="text-white font-semibold text-3xl shadow-md text-left mx-10 mt-7 mb-3 scrollbar-hide">
        {category_headings[category]}
      </h1>
      {/* for bigger screen the url to hit must change */}
      <div className="hidden md:block">
        <div className="flex flex-row flex-nowrap overflow-scroll scrollbar-hide px-4 mb-16">
          {/* Add left button */}
          {/* movie cards */}
          {data.map((item) => (
            <Card
              backdrop_path={image_url + "w400" + item.backdrop_path}
              key={item.id}
              title={item.title ? item.title : item.name}
              vote_average={item.vote_average}
            />
            // movie has title and tv has name attribute
          ))}
          {/* Add right button */}
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex flex-row flex-nowrap overflow-scroll scrollbar-hide px-4 mb-16">
          {/* Add left button */}
          {/* movie cards */}
          {data.map((item) => (
            <Card
              backdrop_path={image_url + "w300" + item.backdrop_path}
              key={item.id}
              title={item.title ? item.title : item.name}
              vote_average={item.vote_average}
            />
          ))}
          {/* Add right button */}
        </div>
      </div>
    </>
  );
}

export default CategoryItems;
