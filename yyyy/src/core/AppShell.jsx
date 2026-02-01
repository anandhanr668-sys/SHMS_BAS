import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import "../styles/dashboard.css";

const AppShell = () => {
  return (
    <div style={styles.shell}>
      <Sidebar />
      <div style={styles.main}>
        <Header />
        <main style={styles.content}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

const styles = {
  shell: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
  },
  sidebar: {
    width: 220,
    background: "#020617",
    color: "#e5e7eb",
    padding: 20,
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: "#0f172a",
    color: "white",
    padding: 16,
    fontWeight: 600,
  },
  content: {
    flex: 1,
    padding: 24,
    background: "#f8fafc",
  },
  footer: {
    padding: 10,
    textAlign: "center",
    background: "#e5e7eb",
  },
};

export default AppShell;

