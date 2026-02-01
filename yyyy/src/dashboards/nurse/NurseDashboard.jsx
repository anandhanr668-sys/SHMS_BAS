import React from "react";

const NurseDashboard = () => {
  return (
    <div>
      <h2>Nurse Dashboard</h2>
      <p>Current shift overview</p>

      <div style={styles.grid}>
        <Card title="🧑 Assigned Patients" value="14" />
        <Card title="🩺 Vitals Pending" value="6" />
        <Card title="🛏 Beds Managed" value="22" />
        <Card title="⏰ Shift Ends In" value="3h 45m" />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div style={styles.card}>
    <p>{title}</p>
    <strong style={{ fontSize: 24 }}>{value}</strong>
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

export default NurseDashboard;

