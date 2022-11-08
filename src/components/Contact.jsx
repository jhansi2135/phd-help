import "./Contact.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
    reply_to: "humerabanoo987@gmail.com",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <div className="btn">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="fromname"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="btn">
          <label htmlFor="email">Your Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="from_email"
            value={toSend.from_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="btn">
          <label htmlFor="message">Message</label>
          <br />
          {/* <input
            type="text"
            name="message"
            value={toSend.message}
            onChange={handleChange}
            required
          /> */}
          <textarea
            id="message"
            name="message"
            value={toSend.message}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/">
          <a href="mailto: abc@example.com">
            <input
              id="btn"
              type="submit"
              value="Send"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            />
          </a>
        </Link>
      </form>
    </div>
  );
}
