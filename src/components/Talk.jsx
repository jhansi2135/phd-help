import "./Talk.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Talk() {
  const [more, setMore] = useState(true);
  const handleMoreClick = () => {
    setMore(false);
  };

  const handleLessClick = () => {
    setMore(true);
  };
  return (
    <div className="head">
      <h1>What do you want to talk about </h1>
      <h3>Topic</h3>
      <button id="btn" type="button">
        Supervisor
      </button>
      <button id="btn" type="button">
        Publishing
      </button>
      <button id="btn" type="button">
        Failure Experience
      </button>
      <button id="btn" type="button">
        Funding
      </button>
      {more ? (
        <button id="btn" type="button" onClick={handleMoreClick}>
          + more
        </button>
      ) : (
        <>
          <button id="btn" type="button">
            Work Life Balance
          </button>
          <button id="btn" type="button">
            Industry
          </button>
          <button id="btn" type="button" onClick={handleLessClick}>
            - less
          </button>
        </>
      )}

      <h3>Fields</h3>
      <button id="btn" type="button">
        Bio Science
      </button>
      <button id="btn" type="button">
        Physics
      </button>
      <button id="btn" type="button">
        computer Science
      </button>
      <button id="btn" type="button">
        Social Science
      </button>
      {more ? (
        <button id="btn" type="button" onClick={handleMoreClick}>
          + more
        </button>
      ) : (
        <button id="btn" type="button" onClick={handleLessClick}>
          - less
        </button>
      )}
      <Link to="/game">
        <button id="btn-back" type="button">
          Back
        </button>
      </Link>
      <button id="btn-next" type="button">
        Next
      </button>
      <Link to="/register">
        <b id="skip">Skip</b>
      </Link>
    </div>
  );
}
