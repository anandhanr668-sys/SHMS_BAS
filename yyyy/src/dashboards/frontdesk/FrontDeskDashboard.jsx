import React from "react";

const FrontDeskDashboard = () => {
  return (
    <div>
      <h2>Front Desk Dashboard</h2>
      <p>Daily hospital intake overview</p>

      <div style={styles.grid}>
        <Card title="🧑 New Registrations" value="28" />
        <Card title="📅 Appointments Today" value="64" />
        <Card title="⏳ Waiting Patients" value="9" />
        <Card title="🚑 Emergency Walk-ins" value="3" />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div style={styles.card}>
    <p>{title}</p>
    <strong style={{ fontSize: 26 }}>{value}</strong>
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
    borderRadius: 14,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
};

export default FrontDeskDashboard;

