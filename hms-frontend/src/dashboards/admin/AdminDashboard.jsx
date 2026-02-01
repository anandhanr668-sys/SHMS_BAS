import { useDashboardStore } from "../../store/dashboardStore";
import { dashboardConfig } from "../../config/dashboardConfig";
import DashboardCard from "../../components/common/DashboardCard";

export default function AdminDashboard() {
  const data = useDashboardStore(s => s.admin) || {};
  const widgets = dashboardConfig.ADMIN || [];

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Manage forms, rules, reports, staff, and hospital configuration.</p>

      <div style={grid}>
        {widgets.map(w => (
          <DashboardCard
            key={w.id}
            title={w.title}
            value={data[w.key] ?? "—"}
          />
        ))}
      </div>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
  marginTop: 20
};
