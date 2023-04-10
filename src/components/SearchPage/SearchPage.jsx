import React from "react";
// import {useLocation} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

const SearchPage = () => {
  const location = useLocation();

  const valueQuery = location.search.replace("?movieName=", "");
  const [query, setQuery] = useState(valueQuery);
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    getSearchMovie(query);
  }, [query]);

  const getSearchMovie = (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ec65c7958beee32ce8074bd45dacf4b2&language=en-US&query=${value}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setDataAPI(data.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div id="result_search">
      {dataAPI &&
        dataAPI.map((item, id) => {
          return (
            <div key={id} className="card">
              <h2>{item.title}</h2>
              <h3>{item.release_date}</h3>
              <p>{item.overview}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SearchPage;
