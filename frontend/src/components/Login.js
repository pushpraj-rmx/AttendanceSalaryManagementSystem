import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Perform user authentication logic here
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ username, password }),
      // });

      if (response.ok) {
        // Authentication successful
        navigate("/dashboard"); // Redirect to dashboard or desired page
      } else {
        // Authentication failed
        setError("Invalid username or password. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder=""
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder=""
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        {/* Error Message */}
        {error && <div className="error">{error}</div>}

        {/* Submit Button */}
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </>
  );
}
