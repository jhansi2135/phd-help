import "./Login.css";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="Login">
      <h1>Login</h1>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your Email... "
        required
      />
      <br />
      <br />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your Password..."
        required
      />
      <button type="button" id="btn">
        Login
      </button>
      <Link to="/">
        <b id="cross">+</b>
      </Link>
    </div>
  );
}
