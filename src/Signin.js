import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="outerbox-mob">
      <Logo />
      <div className="textbox-mob">
        <form className="formstyle-mob">
          <div className="formtext-mob">Sign In</div>
          <input
            type="text"
            placeholder="Phone Number"
            className="inputstyle-mob"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className="formtext-mob">OR</div>
          <input
            type="text"
            placeholder="Email"
            className="inputstyle-mob"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Link to="/password" state={{ email, number }}>
            <button className="formbtn-mob" style={{ marginTop: "50px" }}>
              CONTINUE
            </button>
          </Link>
        </form>
        <div className="downtext-mob">
          Don't have an account?
          <Link to="/register">
            <b> Register</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
