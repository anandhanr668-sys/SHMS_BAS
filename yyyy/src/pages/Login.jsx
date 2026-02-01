import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = () => {
    alert("🔐 Login successful (mock)");
    console.log(credentials);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>🏥 Smart HMS</h2>
        <p style={{ opacity: 0.7 }}>
          Secure access to hospital systems
        </p>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={login} style={styles.button}>
          Login
        </button>

        <small style={{ marginTop: 10, opacity: 0.6 }}>
          Authorized personnel only
        </small>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, #020617, #0f172a)",
  },
  card: {
    width: 360,
    background: "white",
    padding: 28,
    borderRadius: 18,
    boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    marginTop: 14,
    borderRadius: 8,
    border: "1px solid #cbd5f5",
  },
  button: {
    width: "100%",
    marginTop: 20,
    padding: 12,
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default Login;

