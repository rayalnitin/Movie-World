import React, { useState, useEffect } from "react";
import "./Tvshows.css";
import Showbox from "./Showbox";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const API_URL =
  "https://api.themoviedb.org/3/discover/tv?api_key=353e8016f562e342fc90f4962f127e55";

function Tvshows({ setShowHome, showhome }) {
  const [shows, setShows] = useState([]);
  const [currpage, setCurrpage] = useState(1);

  useEffect(() => {
    setShowHome(false);
  }, [showhome]);

  useEffect(() => {
    fetch(API_URL + `&page=${currpage}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShows(data.results);
      });
  }, [currpage]);

  console.log(shows);
  return (
    <div>
      <div className="container">
        
          {
          shows.map((showsReq) => (
            <Link to={`/tv/${showsReq.id}`}>
            <Showbox key={showsReq.id} {...showsReq} />
            </Link>
          ))}
      </div>
      <div>
        <Pagination currpage={currpage} setCurrpage={setCurrpage} />
      </div>
    </div>
  );
}

export default Tvshows;
