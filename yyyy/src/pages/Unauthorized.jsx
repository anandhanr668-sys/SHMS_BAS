import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div style={styles.container}>
      <h1>⛔ Access Denied</h1>
      <p>You do not have permission to view this page.</p>

      <Link to="/login" style={styles.link}>
        Go to Login
      </Link>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  link: {
    marginTop: 20,
    padding: "10px 16px",
    background: "#dc2626",
    color: "white",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
  },
};

export default Unauthorized;

