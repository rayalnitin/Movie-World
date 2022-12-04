import React, { useState } from "react";
import "./Pagination.css";

function Pagination({ currpage, setCurrpage }) {
  const [disable, setDisable] = useState(true);

  const nexthandler = () => {
    if (currpage === 1) {
      setDisable(false);
    }
    setCurrpage(currpage + 1);
  };
  const prevhandler = () => {
    if (currpage === 2) {
      setCurrpage(currpage - 1);
      setDisable(true);
    } else {
      setCurrpage(currpage - 1);
    }
  };

  return (
    <div className="page__nav">
      {currpage !== 1 && (
        <button
          onClick={prevhandler}
          className="btn__option"
          disabled={disable}
        >
          Previous
        </button>
      )}

      <div className="curr__btn">{currpage}</div>
      <button onClick={nexthandler} className="btn__option">
        Next
      </button>
    </div>
  );
}

export default Pagination;
