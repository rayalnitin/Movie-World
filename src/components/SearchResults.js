import React from "react";
import Showbox from "./Showbox";

function SearchResults({ info }) {
  return (
    <>
      <div className="container">
        {info.length
          ? info.map((serch) => <Showbox key={serch.id} {...serch} />)
          : "No Data Found"}
      </div>
    </>
  );
}

export default SearchResults;
