import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <h3 style={styles.logo}>HMS</h3>

      <NavLink to="/admin" style={styles.link}>
        Dashboard
      </NavLink>
      <NavLink to="/admin/forms" style={styles.link}>
        Form Builder
      </NavLink>
      <NavLink to="/admin/rules" style={styles.link}>
        Rules Engine
      </NavLink>
      <NavLink to="/admin/reports" style={styles.link}>
        Reports
      </NavLink>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: 220,
    background: "#020617",
    color: "#e5e7eb",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  logo: {
    marginBottom: 20,
  },
  link: {
    color: "#cbd5f5",
    textDecoration: "none",
    padding: "8px 0",
  },
};

export default Sidebar;

