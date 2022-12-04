import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import srcImg from "../images/right-arrow.png";

function Query({info,setInfo}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const getData = (event) => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  const detectKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchData(event);
    }
  };
  const searchData = async (e) => {
    //
    // console.log("Seaching Data");
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=353e8016f562e342fc90f4962f127e55&language=en-US&query=${query}&page=1`
    );
    const json = await response.json();
    setInfo(json.results);
    console.log("info",info);
    navigate(`/search`, { state: info });
    setQuery("");
  };
  return (
    <div>
      <div className="input__section">
        <input
          className="search__movie"
          type="text"
          id="search"
          autoComplete="off"
          placeholder="Search Here..."
          onChange={getData}
          value={query}
          onKeyDown={detectKey}
        />
        <img className="search__icon" src={srcImg} onClick={searchData} />
      </div>
    </div>
  );
}

export default Query;
