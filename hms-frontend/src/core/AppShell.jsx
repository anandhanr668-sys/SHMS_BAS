import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AppShell = () => {
  return (
    <div className="app-shell">
      {/* Header */}
      <header className="app-header">
        <div className="header-left">
          <h2>🏥 HMS Platform</h2>
        </div>

        <div className="header-right">
          <span className="user-name">Welcome, Admin</span>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      {/* Body */}
      <div className="app-body">
        <aside className="app-sidebar">
  <nav>
    <ul>
      <li>
        <NavLink to="/admin">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/admin/patients">Patients</NavLink>
      </li>
      <li>
        <NavLink to="/admin/appointments">Appointments</NavLink>
      </li>
      <li>
        <NavLink to="/admin/reports">Reports</NavLink>
      </li>
      <li>
        <NavLink to="/admin/settings">Settings</NavLink>
      </li>
    </ul>
  </nav>
</aside>


        <main className="app-content">
          <Outlet />
        </main>
      </div>

      <footer className="app-footer">
        © {new Date().getFullYear()} LCNC Hospital Management System
      </footer>
    </div>
  );
};

export default AppShell;
