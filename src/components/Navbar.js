import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

function Navbar({ setSelectedGenre }) {
  const navigate = useNavigate();

  const allGenre = [
    {
      id: 12,
      name: "Adventure",
      type: "movie",
    },
    {
      id: 16,
      name: "Animation",
      type: "movie",
    },
    {
      id: 35,
      name: "Comedy",
      type: "movie",
    },
    {
      id: 80,
      name: "Crime",
      type: "movie",
    },
    {
      id: 99,
      name: "Documentary",
      type: "movie",
    },
    {
      id: 18,
      name: "Drama",
      type: "movie",
    },
    {
      id: 14,
      name: "Fantasy",
      type: "movie",
    },
    {
      id: 36,
      name: "History",
      type: "movie",
    },
    {
      id: 27,
      name: "Horror",
      type: "movie",
    },
    {
      id: 10402,
      name: "Music",
      type: "movie",
    },
    {
      id: 9648,
      name: "Mystery",
      type: "movie",
    },
    {
      id: 10749,
      name: "Romance",
      type: "movie",
    },
    {
      id: 878,
      name: "Science Fiction",
      type: "movie",
    },
    {
      id: 53,
      name: "Thriller",
      type: "movie",
    },
    {
      id: 10752,
      name: "War",
      type: "movie",
    },
    {
      id: 10759,
      name: "Action & Adventure",
      type: "tv",
    },
    {
      id: 10767,
      name: "Talk",
      type: "tv",
    },
    {
      id: 10763,
      name: "News",
      type: "tv",
    },
    {
      id: 10751,
      name: "Family",
      type: "tv",
    },
    {
      id: 10762,
      name: "Kids",
      type: "tv",
    },
    {
      id: 10764,
      name: "Reality",
      type: "tv",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
      type: "tv",
    },
    {
      id: 10766,
      name: "Soap",
      type: "tv",
    },
    {
      id: 10768,
      name: "War & Politics",
      type: "tv",
    },
    {
      id: 37,
      name: "Western",
      type: "tv",
    },
  ];

  const handlegenre = (item) => {
    setSelectedGenre(item);
    navigate(`/genre/${item.id}`);
  };

  return (
    <div className="navbar">
      <div className="logo__action" onClick={() => navigate("/Movie-World")}>
        <img src={logo} alt="logo image" className="logo__navbar" />
        <h2>Movie-World</h2>
      </div>
      <div className="menu__navbar">
        <div className="options__navbar" onClick={() => navigate("/Movie-World")}>
          HOME
        </div>
        <div className="options__navbar genre__list">
          GENRE
          <div className="genre__block">
            <div className="genre__flex">
              {allGenre.map((item) => {
                return (
                  <div
                    className="genre__options"
                    onClick={() => handlegenre(item)}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="options__navbar" onClick={() => navigate("/movies")}>
          MOVIES
        </div>
        <div className="options__navbar" onClick={() => navigate("/tvshows")}>
          TV SHOWS
        </div>
        <div
          className="options__navbar top_imdb"
          onClick={() => navigate("/topimdb")}
        >
          TOP IMDB
        </div>
      </div>
    </div>
  );
}

export default Navbar;
