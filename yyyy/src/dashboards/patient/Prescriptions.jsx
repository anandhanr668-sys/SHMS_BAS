import React from "react";

const prescriptions = [
  {
    medicine: "Atorvastatin",
    dosage: "10mg once daily",
    duration: "30 days",
  },
  {
    medicine: "Metformin",
    dosage: "500mg twice daily",
    duration: "60 days",
  },
];

const Prescriptions = () => {
  return (
    <div>
      <h2>Prescriptions</h2>

      {prescriptions.map((p, i) => (
        <div key={i} style={styles.card}>
          <strong>{p.medicine}</strong>
          <p>{p.dosage}</p>
          <span>{p.duration}</span>
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

export default Prescriptions;

