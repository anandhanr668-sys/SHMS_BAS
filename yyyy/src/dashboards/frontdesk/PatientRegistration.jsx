import React, { useState } from "react";

const PatientRegistration = () => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const register = () => {
    alert("✅ Patient registered successfully");
    console.log(patient);
  };

  return (
    <div style={styles.form}>
      <h2>Patient Registration</h2>

      <input
        name="name"
        placeholder="Patient Name"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="age"
        type="number"
        placeholder="Age"
        onChange={handleChange}
        style={styles.input}
      />

      <select
        name="gender"
        onChange={handleChange}
        style={styles.input}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <input
        name="contact"
        placeholder="Contact Number"
        onChange={handleChange}
        style={styles.input}
      />

      <button onClick={register} style={styles.button}>
        Register Patient
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
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default PatientRegistration;

