import React from "react";
import { useEffect , useState } from "react";
import "./Topimdb.css";
import Showbox from "./Showbox";
import Pagination from "./Pagination";

function Topimdb({ setShowHome, showhome }) {
  

  const [user, setUser] = useState(true);
  const [keyword, setKeyword] = useState("movie");
  const [trend, setTrend] = useState([]);
  const [currpage, setCurrpage] = useState(1);

  const moviesButton = () => {
    setUser(true);
    setKeyword("movie");
    setCurrpage(1);
  };
  const televisionButton = () => {
    setUser(false);
    setKeyword("tv");
    setCurrpage(1);
  };

  useEffect(() => {
    setShowHome(false);
    fetch(
      `https://api.themoviedb.org/3/${keyword}/top_rated?api_key=353e8016f562e342fc90f4962f127e55&language=en-US&page=${currpage}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setTrend(data.results);
      });
  }, [keyword , showhome , currpage]);


  return (
    <div className="homepage">
      <div className="home__option">
        <p>Top Rated</p>
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
      <div>
        <Pagination currpage={currpage} setCurrpage={setCurrpage} />
      </div>
    </div>
  );
}

export default Topimdb;
