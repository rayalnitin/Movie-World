import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./components/Genre";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import Topimdb from "./components/Topimdb";
import Navbar from "./components/Navbar";
import Query from "./components/Query";
import React, { useState } from "react";
import SearchResults from "./components/SearchResults";
import Detail from "./components/Detail";
import DetailTV from "./components/DetailTV";

function App() {
  const [showhome, setShowHome] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [info, setInfo] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header
          setSelectedGenre={setSelectedGenre}
          showhome={showhome}
          info={info}
          setInfo={setInfo}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home setShowHome={setShowHome} showhome={showhome} />
              </>
            }
          />
          <Route
            path="/genre/:id"
            element={
              <Genre
                selectedGenre={selectedGenre}
                setShowHome={setShowHome}
                showhome={showhome}
              />
            }
          />
          <Route
            path="/movies"
            element={<Movies setShowHome={setShowHome} showhome={showhome} />}
          />
          <Route
            path="/tvshows"
            element={<Tvshows setShowHome={setShowHome} showhome={showhome} />}
          />
          <Route
            path="/topimdb"
            element={
              <>
                <Topimdb setShowHome={setShowHome} showhome={showhome} />
              </>
            }
          />
          <Route
            path="/search"
            element={<SearchResults info={info} setInfo={setInfo} />}
          />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/tv/:id" element={<DetailTV />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
