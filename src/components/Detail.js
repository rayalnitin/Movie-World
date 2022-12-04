import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./Detail.css";

const Detail = () => {
  const [current, setCurrent] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      await getData();
      window.scrollTo(0, 0);
    }
    fetchData();
  }, []);

  const getData = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=353e8016f562e342fc90f4962f127e55&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrent(data);
      });
  };
  console.log(current, "Detail component");

  return (
    <div className="card">
      <div className="card__intro">
        <img
          className="card__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            current ? current.backdrop_path : ""
          }`}
        />
      </div>
      <div className="card__detail">
        <div className="card__detailLeft">
          <div className="card__posterBox">
            <img
              className="card__poster"
              src={`https://image.tmdb.org/t/p/original${
                current ? current.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="card__detailRight">
          <div className="card__detailRightTop">
            <div className="card__name">
              {current ? current.original_title : ""}
            </div>
            <div className="card__tagline">
              {current ? current.tagline : ""}
            </div>
            <div className="card__rating">
              {current ? current.vote_average : ""} ⭐
              <span className="card__voteCount">
                {current ? "(" + current.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="card__runtime">
              {current ? current.runtime + " mins" : ""}
            </div>
            <div className="card__releaseDate">
              {current ? "Release date: " + current.release_date : ""}
            </div>
            <div className="card__genres">
              {current && current.genres
                ? current.genres.map((genre) => (
                    <>
                      <span className="card__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="card__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{current ? current.overview : ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
