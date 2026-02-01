import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          <li><NavLink to="/admin">Dashboard</NavLink></li>
          <li><NavLink to="/admin/patients">Patients</NavLink></li>
          <li><NavLink to="/admin/appointments">Appointments</NavLink></li>
          <li><NavLink to="/admin/reports">Reports</NavLink></li>
          <li><NavLink to="/admin/settings">Settings</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}
