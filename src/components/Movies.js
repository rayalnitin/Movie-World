import React, { useEffect, useState } from "react";
import "./Movies.css";
import Showbox from "./Showbox";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=353e8016f562e342fc90f4962f127e55";

function Movies({ setShowHome, showhome }) {
  // const MOVIE_API = "https://api.themoviedb.org/3/"
  // const SEARCH_API = MOVIE_API + "search/movie"
  // const DISCOVER_API = MOVIE_API + "discover/movie"
  // const API_KEY = "e588720192965bd88bddb2ca0700875d"
  // const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"

  const [movies, setMovies] = useState([]);
  const [currpage, setCurrpage] = useState(1);

  useEffect(() => {
    setShowHome(false);
    fetch(API_URL + `&page=${currpage}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, [currpage, showhome]);
  console.log(movies)
  return (
    <div>
      <div className="container">
        {movies.map((movieReq) => (
          <Link
            to={`/movie/${movieReq.id}`}>
            <Showbox key={movieReq.id} {...movieReq} />
          </Link>
        ))}
      </div>
      <div>
        <Pagination currpage={currpage} setCurrpage={setCurrpage} />
      </div>
    </div>
  );
}

export default Movies;
