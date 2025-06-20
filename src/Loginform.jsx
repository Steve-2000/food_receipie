import axios from "axios";
import React, { useState } from "react";
import "./loginform.css";

export default function Loginform({SetIsOpen}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let endpoint = signup ? "signup" : "login";
    console.log("Endpoint:", endpoint);
    await axios
      .post(`http://localhost:5000/${endpoint}`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log("Response:", res.data);
        // alert(`Success! You are now ${endpoint}`);
        SetIsOpen();
        
      })
      .catch((err) => {
        setError(err.response.data.message || "An error occurred");
        console.error("Error:", err);
      });
  };
  return (
    <>
      <div className="form-page-container">
        <div className="login-signup-card card">
          <h4 className="form-icon-header">
            {signup ? (
              <>
                <i className="fas fa-user-plus"></i> Sign Up
              </>
            ) : (
              <>
                <i className="fas fa-lock"></i> Login
              </>
            )}
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label custom-label">
                Email address
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label custom-label">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="btn btn-primary w-100 rounded-pill py-2 mt-2"
            >
              {signup ? "Sign Up" : "Login"}
            </button>

            <p
              className="mt-3 text-center"
              onClick={() => {
                setSignup((prev) => !prev);
              }}
            >
              {signup ? "Already have an account?" : "Don’t have an account?"}
            </p>
            <p>{error}</p>
          </form>
        </div>
      </div>
    </>
  );
}
