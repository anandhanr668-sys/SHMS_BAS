import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Hospital Operations Overview</p>

      <div style={styles.grid}>
        <Card title="🏥 Active Wards" value="12" />
        <Card title="🛏 Beds Occupied" value="182 / 240" />
        <Card title="👩‍⚕️ Staff On Duty" value="96" />
        <Card title="📋 Pending Audits" value="3" />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div style={styles.card}>
    <h4>{title}</h4>
    <strong style={{ fontSize: 22 }}>{value}</strong>
  </div>
);

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
    marginTop: 20,
  },
  card: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
};

export default AdminDashboard;

