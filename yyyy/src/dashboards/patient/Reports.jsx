import React from "react";

const reports = [
  { name: "Blood Test Report", date: "10 Jan 2026" },
  { name: "ECG Report", date: "12 Jan 2026" },
  { name: "X-Ray Chest", date: "02 Nov 2025" },
];

const Reports = () => {
  return (
    <div>
      <h2>Medical Reports</h2>

      {reports.map((r, i) => (
        <div key={i} style={styles.row}>
          <div>
            <strong>{r.name}</strong>
            <p>{r.date}</p>
          </div>
          <button style={styles.button}>Download</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  row: {
    background: "white",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: "8px 14px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};

export default Reports;

