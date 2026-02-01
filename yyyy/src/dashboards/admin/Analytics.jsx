import React from "react";

const Analytics = () => {
  return (
    <div>
      <h2>Analytics & Insights</h2>

      <div style={styles.grid}>
        <Metric title="Avg Stay (days)" value="4.6" />
        <Metric title="Readmission Rate" value="8.2%" />
        <Metric title="Bed Utilization" value="76%" />
      </div>
    </div>
  );
};

const Metric = ({ title, value }) => (
  <div style={styles.metric}>
    <p>{title}</p>
    <strong>{value}</strong>
  </div>
);

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 16,
  },
  metric: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    textAlign: "center",
  },
};

export default Analytics;

