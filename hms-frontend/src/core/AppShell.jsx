import React from "react";
import { Outlet } from "react-router-dom";

/**
 * AppShell
 * ---------------------------------------------------
 * Global application layout
 * Used for all authenticated pages
 *
 * Structure:
 *  - Header (top)
 *  - Sidebar (left)
 *  - Main Content (center)
 *  - Footer (bottom)
 */

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

      {/* Body Section */}
      <div className="app-body">
        {/* Sidebar */}
        <aside className="app-sidebar">
          <nav>
            <ul>
              <li>Dashboard</li>
              <li>Patients</li>
              <li>Appointments</li>
              <li>Reports</li>
              <li>Settings</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="app-content">
          {/* Routed pages will render here */}
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        © {new Date().getFullYear()} LCNC Hospital Management System
      </footer>
    </div>
  );
};

export default AppShell;
