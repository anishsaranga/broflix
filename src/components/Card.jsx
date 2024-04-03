import React, { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";

// itemObj added for click-functionality (in the selected page, title etc. should be populated kada)
function Card({ backdrop_path, itemObj }) {
  const [showText, setShowText] = useState(false);
  const [itemTitle, setItemTitle] = useState(null);

  useEffect(
    () => setItemTitle(itemObj.title ? itemObj.title : itemObj.name),
    []
  );

  // route to selected movie/ tv page

  return (
    <>
      {/* <img src={backdrop_path} alt="" 
        className='p-1 m-1'/> */}
      <div
        className="relative"
        onMouseOver={() => setShowText(true)}
        onMouseOut={() => setShowText(false)}
      >
        <img
          src={backdrop_path}
          alt=""
          className="p-1 m-1 max-w-fit hover:opacity-65 duration-100"
        />
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
    </>
  );
}

export default Card;
