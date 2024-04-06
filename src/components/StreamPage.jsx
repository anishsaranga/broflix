import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { bearer_token } from "../API_KEY";

function StreamPage() {
  const location = useLocation();
  // tmdb item object
  const itemObj = location.state;
  const isMovie = itemObj.title ? true : false;
  // vid url
  const vidUrl = `https://vidsrc.xyz/embed/`;
  // imdb id
  const imdbIdObj = useParams();

  // api for season and episode details
  const tvApiUrl = `https://api.themoviedb.org/3/tv/${itemObj.id}`;
  // season
  const [seasonsCount, setSeasonsCount] = useState(1);
  const [episodesCount, setEpisodesCount] = useState(1);
  const [seriesData, setSeriesData] = useState(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };

  useEffect(() => {
    if (!isMovie) {
      fetch(tvApiUrl, options)
        .then((response) => response.json())
        .then((data) => data && setSeriesData(data));
    }
  }, []);

  // setting the number of seasons in case of tv show
  useEffect(() => {
    seriesData && setSeasonsCount(seriesData["seasons"].length);
  }, [seriesData]);
  // setting episodes
  useEffect(() => {
    seriesData &&
      setEpisodesCount(
        seriesData["seasons"][seasonsCount - 1]["episode_count"]
      );
  }, [seasonsCount]);

  // set final season and episode
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  // get 1-n array
  function createArray(N) {
    return Array.from({ length: N }, (_, index) => index + 1);
  }

  return (
    <>
      <div className="text-center items-center m-2 p-1 w-full h-[80vh]">
        {/* title */}
        <span className="text-2xl md:text-4xl my-4 shadow-md text-stone-200">
          {itemObj.title ? itemObj.title : itemObj.name}
        </span>
        {/* if tv show, put season and episode details */}
        {!isMovie && (
          <div className="flex flex-row justify-center items-center">
            {/* season */}
            <label className="m-2">
              <span className="text-stone-200">{"Season\t\t"}</span>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
              >
                {seasonsCount &&
                  createArray(seasonsCount).map((season) => (
                    <option key={season} value={season}>
                      {season}
                    </option>
                  ))}
              </select>
            </label>
            {/* episode */}
            <label className="m-2">
              <span className="text-stone-200">{"Episode\t\t"}</span>
              <select
                value={selectedEpisode}
                onChange={(e) => setSelectedEpisode(e.target.value)}
              >
                {episodesCount &&
                  createArray(episodesCount).map((episode) => (
                    <option key={episode} value={episode}>
                      {episode}
                    </option>
                  ))}
              </select>
            </label>
          </div>
        )}
        {/* embed vid */}
        {isMovie === true ? (
          <iframe
            className="size-full my-5 mx-auto"
            src={vidUrl + `movie?imdb=${imdbIdObj.imdbIdObj}`}
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            className="h-full w-full my-5 mx-auto"
            src={
              vidUrl +
              `tv?imdb=${imdbIdObj.imdbIdObj}&season=${selectedSeason}&episode=${selectedEpisode}`
            }
            allowFullScreen
          ></iframe>
        )}
      </div>
    </>
  );
}

export default StreamPage;
