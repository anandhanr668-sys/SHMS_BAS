import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

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

  const handleLogin = () => {
    const { username, password } = credentials;

    // 🔐 TEMP / DEMO AUTH LOGIC
    // Replace this block with real API later
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    // 🎭 Demo role mapping (hackathon-friendly)
    let role = "PATIENT";

    if (username === "admin") role = "ADMIN";
    else if (username === "doctor") role = "DOCTOR";
    else if (username === "nurse") role = "NURSE";
    else if (username === "frontdesk") role = "FRONTDESK";

    // ✅ Update global auth state
    login({
      id: 1,
      name: username,
      role
    });

    // 🔀 Redirect based on role
    if (role === "ADMIN") navigate("/admin");
    if (role === "DOCTOR") navigate("/doctor");
    if (role === "NURSE") navigate("/nurse");
    if (role === "FRONTDESK") navigate("/frontdesk");
    if (role === "PATIENT") navigate("/patient");
  };

  return (
    <div className="login-page">
      <h2>HMS Login</h2>

      <input
        name="username"
        placeholder="Username (admin / doctor / nurse / frontdesk / patient)"
        value={credentials.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password (any value for demo)"
        value={credentials.password}
        onChange={handleChange}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
