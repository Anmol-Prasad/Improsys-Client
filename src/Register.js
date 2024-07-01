import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/user/register", {
        name,
        phoneNumber,
        email,
        password,
      });

      if (response.status === 201) {
        // Registration successful, redirect to sign-in page or perform any other action
        console.log("Registration successful");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <div className="outerbox-mob">
        <div className="navbox-mob">Register</div>
        <div className="textboxlong-mob">
          <form className="foslong-mob" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="inputstyle-mob"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="inputstyle-mob"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="inputstyle-mob"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="inputstyle-mob"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="inputstyle-mob"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <div className="error">{error}</div>}
            <button className="formbtn-mob" style={{ marginTop: "50px" }}>
              CONTINUE
            </button>
          </form>
          <div className="downtext-mob">
            Already have an account?
            <Link to="/">
              <b>SignIn</b>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
