import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bearer_token } from "../API_KEY";
import Card from "./Card";

function SearchPage() {
  // this variable name should be same as captured in route.. else won't work
  const { term } = useParams();
  // searching url

  /// Since something is wrong with the API key using Token
  const url = `https://api.themoviedb.org/3/search/movie?query=${term}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };

  // storing data based on search
  const [data, setData] = useState();

  // load search data at initial load or based on search term
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, [term]);

  /// image url without setting the width param
  const image_url = `https://image.tmdb.org/t/p/`;
  const width_300 = `w300`;
  const width_400 = `w400`;

  return (
    <>
      <div className="my-10 text-center p-1 md:text-start border-sm md:ml-16 md:mr-auto">
        {console.log(data)}
        {data?.length != 0 ? (
          <div>
            <span className="text-red-700 text-xl md:text-2xl">
              Search Results for -{" "}
            </span>
            <span className="text-stone-300 text-2xl md:text-4xl">{term}</span>
          </div>
        ) : (
          <div className="items-baseline">
            <span className="text-red-700 text-xl md:text-3xl">Sorry - </span>
            <span className="text-stone-300 text-2xl md:text-4xl">
              {" "}
              No results found
            </span>
          </div>
        )}
      </div>
      {/* for small screens */}
      <div className="md:hidden">
        <div className="flex flex-wrap justify-center my-10 p-1">
          {
            data &&
              data.map((item) => (
                <Card key={item.id} title={item.title} itemObj={item} />
              ))
            // If no results found
          }
        </div>
      </div>

      {/* mediums and above */}
      <div className="hidden md:block">
        <div className="flex flex-wrap justify-center my-10 p-1">
          {data &&
            data.map((item) => (
              <Card key={item.id} title={item.title} itemObj={item} />
            ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
