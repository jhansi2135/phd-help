import "./Fill.css";
import { Link } from "react-router-dom";

export function Fill() {
  return (
    <div className="fill">
      <h1>Can you tell us a bit more about Yourself</h1>
      <br />
      <div className="btn">
        <h3>Gender</h3>
        <input type="radio" id="female" name="gender" value="Female" />
        <label for="female">Female</label>
        <input type="radio" id="male" name="gender" value="Male" />
        <label for="male">Male</label>
        <input type="radio" id="any" name="gender" value="any" />
        <label for="any">I'd rather not say</label>
      </div>

      <div className="btn">
        <h3>Education</h3>
        <label for="education"> </label>
        <select name="education" id="edu" required>
          <option value="None" selected disabled>
            None
          </option>
          <option value="phd">Phd</option>
          <option value="Masters">Masters</option>
          <option value="Bachelors">Bachelors</option>
          <option value="other">other</option>
        </select>
      </div>

      <div className="btn">
        <h3>Age</h3>
        <input id="age" name="age" type="number" min="1" max="80" required />
      </div>
      <br />
      <div className="btn">
        <Link to="/game">
          <input id="btn" type="submit" value="Next" />
        </Link>

        <Link to="/register">
          <b id="skip">skip</b>
        </Link>
      </div>
    </div>
  );
}
