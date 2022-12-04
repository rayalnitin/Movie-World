import React from "react";

import "./Showbox.css";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const Showbox = ({
  title,
  poster_path,
  vote_average,
  backdrop_path,
  original_name,
}) => {
  return (
      <div className="movie_card">
        <img src={poster_path ? API_IMG + poster_path : API_IMG + backdrop_path}/>
        <span>{title ? title : original_name}</span>
        <>
          <p>{vote_average}⭐</p>
        </>
      </div>
  );
};

export default Showbox;
