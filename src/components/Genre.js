import React, { useEffect, useState } from "react";
import "./Genre.css";
import Showbox from "./Showbox";
import Pagination from "./Pagination";

function Genre({ setShowHome, selectedGenre }) {
  const [genreData, setGenreData] = useState([]);
  const [currpage, setCurrpage] = useState(1);

  useEffect(() => {
    setShowHome(false);
    fetch(
      `https://api.themoviedb.org/3/discover/${selectedGenre.type}?api_key=353e8016f562e342fc90f4962f127e55&with_genres=${selectedGenre.id}&page=${currpage}`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setGenreData(data.results);
      });
  }, [selectedGenre , currpage]);

  console.log(genreData);

  return (
    <>
      <div className="container">
        {genreData &&
          genreData.map((item) => <Showbox key={item.id} {...item} />)}
      </div>
      <div>
        <Pagination currpage={currpage} setCurrpage={setCurrpage} />
      </div>
    </>
  );
}

export default Genre;
