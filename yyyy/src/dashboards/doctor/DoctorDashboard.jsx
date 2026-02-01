import React from "react";

const DoctorDashboard = () => {
  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <p>Today's clinical overview</p>

      <div style={styles.grid}>
        <Card title="👨‍⚕️ Patients Today" value="18" />
        <Card title="🩺 Consultations Pending" value="6" />
        <Card title="💊 Prescriptions Issued" value="12" />
        <Card title="🏥 Discharges Planned" value="3" />
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
    borderRadius: 14,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
};

export default DoctorDashboard;

