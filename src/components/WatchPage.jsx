import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

function WatchPage() {
  // recieveing sent tmdb item obj
  const location = useLocation();
  // imdb_id capture
  // some tv shows don't have imdb id.. implement later
  const { imdb_id } = useParams();

  const [itemObj, setItemObj] = useState();

  const imageUrl = `https://image.tmdb.org/t/p/w500`;

  console.log(itemObj);
  useEffect(() => {
    setItemObj(location.state);
  }, []);

  const navigate = useNavigate();
  // onclick handling
  const stream = () => {
    // if imdb_id is undefined, don't route
    if (imdb_id !== "undefined")
      navigate(`/broflix/stream/${imdb_id}`, { state: itemObj });
  };

  return (
    <>
      {/* left card (probably a watch button) right description and stuff */}
      <div className="flex flex-col md:flex-row justify-between items-center my-5 md:my-10 mx-2 md:mx-10">
        <div className="flex flex-col md:flex-row justify center items-center">
          <img
            className="text-white"
            src={itemObj && imageUrl + itemObj.poster_path}
            alt="Poster unavailable at the moment..."
          />
          {/* watch button */}
          <button
            class="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-full h-full w-auto p-4 mx-4"
            onClick={stream}
          >
            <div className="flex flex-row items-center justify-end">
              Watch Now <FaPlay size={20} className="mx-2" />
            </div>
          </button>
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
