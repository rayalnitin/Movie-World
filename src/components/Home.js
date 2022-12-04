import React, { useState } from "react";
import { useEffect } from "react";
import "./Home.css";
import Query from "./Query";
import Showbox from "./Showbox";

function Home({setShowHome,showhome}) {
  
  const [user, setUser] = useState(true);
  const [keyword, setKeyword] = useState("movie");
  const [trend, setTrend] = useState([]);

  const moviesButton = () => {
    setUser(true);
    setKeyword("movie");
  };
  const televisionButton = () => {
    setUser(false);
    setKeyword("tv");
  };
  useEffect(() => {
    setShowHome(true);
    fetch(
      `https://api.themoviedb.org/3/${keyword}/popular?api_key=353e8016f562e342fc90f4962f127e55&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setTrend(data.results);
      });
  }, [keyword,showhome]);

  console.log("trend", trend);
  return (
    <div className="homepage">
      <div className="home__option">
        <p>Trending</p>
        <button
          className={`option__btn ${user ? "active" : " "}`}
          onClick={moviesButton}
        >
          🎞️ Movies
        </button>
        <button
          className={`option__btn ${!user ? "active" : " "}`}
          onClick={televisionButton}
        >
          📺 TV Shows
        </button>
      </div>
      <div className="container">
        {trend.map((trendReq) => (
          <Showbox key={trendReq.id} {...trendReq} />
        ))}
      </div>
    </div>
  );
}

export default Home;
