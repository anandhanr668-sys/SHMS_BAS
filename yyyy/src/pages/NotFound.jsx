import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={{ fontSize: 72 }}>404</h1>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" style={styles.link}>
        Back to Dashboard
      </Link>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  link: {
    marginTop: 20,
    padding: "10px 16px",
    background: "#2563eb",
    color: "white",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
  },
};

export default NotFound;

