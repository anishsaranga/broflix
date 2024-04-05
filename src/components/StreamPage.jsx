import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function StreamPage() {
  const location = useLocation();
  // tmdb item object
  const itemObj = location.state;
  const isMovie = itemObj.title ? true : false;
  // vid url
  const vidUrl = `https://vidsrc.xyz/embed/`;
  // season
  const [season, setSeason] = useState(1);
  const [episode, setEpisode] = useState(1);
  // imdb id
  const imdbIdObj = useParams();

  return (
    <>
      <div className="text-center items-center text-stone-200 m-2 p-1 w-full h-[80vh]">
        {/* title */}
        <span className="text-2xl md:text-4xl my-4 shadow-md">
          {itemObj.title ? itemObj.title : itemObj.name}
        </span>
        {/* if tv show, put season and episode details */}
        {itemObj.name && (
          <div className="flex flex-row justify-items-center items-center text-stone-200">
            <div></div>
            <div></div>
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
          <iframe className="h-full w-full my-5 mx-auto" src=""></iframe>
        )}
      </div>
    </>
  );
}

export default StreamPage;
