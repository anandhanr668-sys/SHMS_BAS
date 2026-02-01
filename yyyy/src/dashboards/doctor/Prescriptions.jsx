import React, { useState } from "react";

const Prescriptions = () => {
  const [medicine, setMedicine] = useState("");
  const [instructions, setInstructions] = useState("");

  const addPrescription = () => {
    alert("💊 Prescription saved");
    console.log({ medicine, instructions });
  };

  return (
    <div style={styles.card}>
      <h2>Prescriptions</h2>

      <input
        placeholder="Medicine Name"
        onChange={(e) => setMedicine(e.target.value)}
        style={styles.input}
      />

      <textarea
        rows={4}
        placeholder="Dosage & Instructions"
        onChange={(e) => setInstructions(e.target.value)}
        style={styles.textarea}
      />

      <button onClick={addPrescription} style={styles.button}>
        Save Prescription
      </button>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: 500,
    background: "white",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 14,
    borderRadius: 8,
    border: "1px solid #cbd5f5",
  },
  textarea: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "1px solid #cbd5f5",
    marginBottom: 16,
  },
  button: {
    width: "100%",
    padding: 12,
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default Prescriptions;

