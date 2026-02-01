import React from "react";

const visits = [
  { date: "12 Jan 2026", doctor: "Dr. Sharma", reason: "Cardiology Checkup" },
  { date: "03 Nov 2025", doctor: "Dr. Mehta", reason: "Fever & Infection" },
  { date: "18 Aug 2025", doctor: "Dr. Rao", reason: "Orthopedic Review" },
];

const VisitHistory = () => {
  return (
    <div>
      <h2>Visit History</h2>

      {visits.map((v, i) => (
        <div key={i} style={styles.card}>
          <strong>{v.date}</strong>
          <p>{v.reason}</p>
          <span>{v.doctor}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    background: "white",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  },
};

export default VisitHistory;

