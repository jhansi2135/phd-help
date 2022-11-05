import "./Game.css";
import { Link } from "react-router-dom";

export function Game() {
  return (
    <div>
      <h1>Let's play a game to assess your mental health!</h1>

      <div id="img">
        <button type="button" id="play-btn">
          Play
        </button>
      </div>
      <Link to="/fill">
        <button type="button" id="btn-back">
          Back
        </button>
      </Link>
      <Link to="/talk">
        <button type="button" id="btn-next">
          Next
        </button>
      </Link>
      <Link to="/talk">
        <b id="skip">Skip</b>
      </Link>
    </div>
  );
}
