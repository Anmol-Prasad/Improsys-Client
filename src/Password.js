import { useState } from "react";
import "./App.css";
import LogoImg from "./Material/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Password() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, number } = location.state || {};
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email || null,
      phoneNumber: number || null,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/user/login",
        payload
      );

      if (response.status === 200) {
        navigate("/home", { state: { email: email || number } });
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="outerbox-mob">
      <div className="logobox-mob">
        <img
          src={LogoImg}
          alt=""
          style={{
            height: "300px",
            display: "block",
            margin: "auto",
          }}
        />
      </div>
      <div className="textbox-mob">
        <form className="formstyle-mob" onClick={handleSubmit}>
          <div className="formtext-mob">Enter Password</div>
          <input
            type="password"
            placeholder="Enter your password"
            className="inputstyle-mob"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error">{error}</div>}{" "}
          {/* Display error message */}
          <button
            className="formbtn-mob"
            style={{ marginTop: "50px" }}
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Password;
