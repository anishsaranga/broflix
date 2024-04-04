import React, { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API_KEY from "../API_KEY";
import { useWindowSize } from "@react-hook/window-size";

// itemObj added for click-functionality (in the selected page, title etc. should be populated kada)
function Card({ backdrop_path, itemObj }) {
  const [showText, setShowText] = useState(false);
  const [itemTitle, setItemTitle] = useState(null);

  // setting title if movie and name if tv
  useEffect(
    () => setItemTitle(itemObj.title ? itemObj.title : itemObj.name),
    []
  );

  const imageUrl = `https://image.tmdb.org/t/p/`;
  const [width] = useWindowSize();
  // console.log(window.width);

  // navigation obj
  const navigate = useNavigate();
  // function to route to selected item page
  const routeToSelected = () =>
    fetch(
      `https://api.themoviedb.org/3/movie/${itemObj.id}/external_ids?api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => data.imdb_id)
      .then((imdb_id) => navigate(`watch/${imdb_id}`, { state: itemObj }));

  // route to selected movie/ tv page

  return (
    <div onClick={routeToSelected}>
      {/* <img src={backdrop_path} alt="" 
        className='p-1 m-1'/> */}
      <div
        className="relative"
        onMouseOver={() => setShowText(true)}
        onMouseOut={() => setShowText(false)}
      >
        {width <= 768 ? (
          <img
            src={imageUrl + `w300` + itemObj.backdrop_path}
            alt=""
            className="p-1 m-1 max-w-fit hover:opacity-65 duration-100"
          />
        ) : (
          <img
            src={imageUrl + `w400` + itemObj.backdrop_path}
            alt=""
            className="p-1 m-1 max-w-fit hover:opacity-65 duration-100"
          />
        )}
        {showText && (
          <span className="text-white absolute align-middle p-5 m-auto bottom-5 text-2xl font-medium font-sans flex md:w-full justify-between ">
            {itemTitle}
            <span className="flex justify-between items-center">
              <FaImdb color="gold" size={25} />
              <span className="ml-2">{itemObj.vote_average.toFixed(1)}</span>
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export default Card;
