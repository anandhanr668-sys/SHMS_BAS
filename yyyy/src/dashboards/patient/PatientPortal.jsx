import React from "react";

const PatientPortal = () => {
  return (
    <div>
      <h2>Patient Portal</h2>
      <p>Welcome back! Here's a quick overview of your health records.</p>

      <div style={styles.grid}>
        <Card title="📅 Upcoming Appointments" value="1" />
        <Card title="📄 Reports Available" value="4" />
        <Card title="💊 Active Prescriptions" value="2" />
        <Card title="🏥 Visits This Year" value="6" />
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
    padding: 22,
    borderRadius: 16,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
};

export default PatientPortal;

