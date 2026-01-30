import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = () => {
    // TEMP auth logic (replace with real API)
    if (credentials.username && credentials.password) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", "admin"); // admin / doctor / nurse / frontdesk / patient
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <h2>HMS Login</h2>

      <input
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />

      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
