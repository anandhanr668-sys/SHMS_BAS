import React, { useState } from "react";

const Discharge = () => {
  const [summary, setSummary] = useState("");

  const dischargePatient = () => {
    alert("🏥 Patient discharged successfully");
    console.log(summary);
  };

  return (
    <div style={styles.card}>
      <h2>Patient Discharge</h2>

      <textarea
        rows={6}
        placeholder="Discharge summary & follow-up instructions"
        onChange={(e) => setSummary(e.target.value)}
        style={styles.textarea}
      />

      <button onClick={dischargePatient} style={styles.button}>
        Confirm Discharge
      </button>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: 600,
    background: "white",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  textarea: {
    width: "100%",
    padding: 14,
    borderRadius: 10,
    border: "1px solid #cbd5f5",
    marginBottom: 16,
  },
  button: {
    width: "100%",
    padding: 12,
    background: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default Discharge;

