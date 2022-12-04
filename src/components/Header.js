import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Header.css";

import Query from "./Query";

function Header({ showhome, info, setInfo, setSelectedGenre }) {
  return (
    <div className="navbar__bg">
      <Navbar setSelectedGenre={setSelectedGenre} />
      {showhome && <Query setInfo={setInfo} info={info} />}
    </div>
  );
}

export default Header;
