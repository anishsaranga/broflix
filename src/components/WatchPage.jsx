import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function WatchPage() {
  // recieveing sent tmdb item obj
  const location = useLocation();
  // imdb_id capture
  // some tv shows don't have imdb id.. implement later
  const { imdb_id } = useParams();

  const [itemObj, setItemObj] = useState();

  const imageUrl = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    setItemObj(location.state);
  }, []);

  console.log(location);
  return (
    <>
      {/* left card (probably a watch button) right description and stuff */}
      <div className="flex flex-col md:flex-row justify-between items-center my-5 md:my-10 mx-2 md:mx-10">
        <div>
          <img
            className="text-white"
            src={itemObj && imageUrl + itemObj.poster_path}
            alt="Poster unavailable at the moment..."
          />
          {/* possible button goes here */}
        </div>

        <div className="m-1 md:m-3 p-1 md:p-3 max-w-full md:w-[45%]">
          <div className="mb-3">
            <span className="text-red-700 text-xl md:text-2xl">Title : </span>
            <span className="text-stone-300 text-2xl md:text-4xl">
              {itemObj && (itemObj.title ? itemObj.title : itemObj.name)}
            </span>
          </div>
          <div className="mb-3">
            <span className="text-red-700 text-lg md:text-xl">
              Description :{" "}
            </span>
            <span className="text-stone-300 text-lg md:text-xl">
              {itemObj && itemObj.overview}
            </span>
          </div>
          <div className="mb-3">
            <span className="text-red-700 text-lg md:text-xl">
              Vote Average :{" "}
            </span>
            <span className="text-yellow-500 text-lg md:text-xl">
              {itemObj && itemObj.vote_average.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchPage;
