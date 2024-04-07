import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { bearer_token } from "../API_KEY";

function TrailerPage() {
  const location = useLocation();
  //   console.log(location);
  // get item id for trailer to play
  const itemId = location.state.id;

  // vids of that id
  const vidsUrl = `https://api.themoviedb.org/3/movie/${itemId}/videos`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };

  // youtube trailer key
  const [youtubeKey, setYoutubeKey] = useState();
  //   console.log(location.state.id);
  useEffect(() => {
    fetch(vidsUrl, options)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((entry) => {
        entry.map((entryItem) => {
          if (
            entryItem.site === "YouTube" &&
            entryItem.type === "Trailer" &&
            entryItem.official === true
          ) {
            setYoutubeKey(entryItem.key);
          }
        });
      });
  }, []);

  return (
    <>
      <div className="flex flex-col text-center items-center m-2 p-1 w-full h-[80vh]">
        <span className="text-2xl md:text-4xl my-4 shadow-md text-stone-200">
          {location.state.title}
        </span>
        <div>
          <iframe
            className="m-5 h-[70vh] w-[90vw]"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default TrailerPage;
