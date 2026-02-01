import React, { useState } from "react";

const VitalsCapture = () => {
  const [vitals, setVitals] = useState({
    temperature: "",
    bp: "",
    pulse: "",
    oxygen: "",
  });

  const handleChange = (e) => {
    setVitals({ ...vitals, [e.target.name]: e.target.value });
  };

  const saveVitals = () => {
    alert("🩺 Vitals recorded");
    console.log(vitals);
  };

  return (
    <div style={styles.form}>
      <h2>Vitals Capture</h2>

      <input
        name="temperature"
        placeholder="Temperature (°C)"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="bp"
        placeholder="Blood Pressure"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="pulse"
        placeholder="Pulse Rate"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="oxygen"
        placeholder="Oxygen Saturation (%)"
        onChange={handleChange}
        style={styles.input}
      />

      <button onClick={saveVitals} style={styles.button}>
        Save Vitals
      </button>
    </div>
  );
};

const styles = {
  form: {
    maxWidth: 420,
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
  button: {
    width: "100%",
    padding: 12,
    background: "#0ea5e9",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default VitalsCapture;

