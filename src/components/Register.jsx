import "./Register.css";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        id="name"
        name="fullname"
        type="text"
        placeholder="Full name"
        required
      />
      <br />
      <br />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email address"
        required
      />
      <br />
      <br />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <br />
      <br />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="confirm Password"
        required
      />
      <br />

      <Link to="/Fill">
        <input id="btn" type="submit" value="Create Account" />
      </Link>
      <Link to="/">
        <b id="cross">+</b>
      </Link>
    </div>
  );
}
