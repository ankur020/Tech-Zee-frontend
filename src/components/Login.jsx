import React, { useState, useContext } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { AllContext } from '../Context'
const Login = () => {
  const { ActivateAlert } = useContext(AllContext);

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    role: "",
  });
  let navigate = useNavigate();
  const handleOnChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const host = process.env.REACT_APP_HOST
  
  // const host = 'http://localhost:5000'
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        role: credentials.role.toLowerCase()
      }),
    });
    const json = await response.json();

    if (!json.success) {
      // alert("ENTER VALID CREDENTIALS");
      ActivateAlert("danger", "Invalid credentials")
    } else {
      ActivateAlert("success", "Successfully Entered")
      localStorage.setItem("userEmail", json.email);
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("role", json.role);
      localStorage.setItem("name", json.name);
      localStorage.setItem("dateOfJoining", json.date);

      navigate("/dashboard", {
        state: { useremail: localStorage.getItem("userEmail") },
      });
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <h1 className="heading-login-box">LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                className="user-box-input"
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleOnChange}
                required
              />
              <label className="user-box-label">Username</label>
            </div>
            <div className="user-box">
              <input
                className="user-box-input"
                type="password"
                name="password"
                value={credentials.password}
                autoComplete="on"
                onChange={handleOnChange}
                required
              />
              <label className="user-box-label">Password</label>
            </div>
            <div className="user-box">
              <input
                className="user-box-input"
                type="role"
                name="role"
                value={credentials.role}
                onChange={handleOnChange}
                required
              />
              <label className="user-box-label">Role</label>
            </div>

            <div className="link-to">
              <div className="login-button">
                <button className="login-box-button">Log In</button>
              </div>
              <Link to="/signup"><div className="login-button">
                <button className="login-box-button">New User? Sign Up</button>
              </div></Link>
            </div>
          </form>
          <button type="submit" className="login-with-google-btn">
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
