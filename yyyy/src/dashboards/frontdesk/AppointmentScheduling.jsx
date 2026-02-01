import React, { useState } from "react";

const AppointmentScheduling = () => {
  const [appointment, setAppointment] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const schedule = () => {
    alert("📅 Appointment scheduled");
    console.log(appointment);
  };

  return (
    <div style={styles.card}>
      <h2>Appointment Scheduling</h2>

      <input
        name="patient"
        placeholder="Patient Name"
        onChange={handleChange}
        style={styles.input}
      />

      <select
        name="doctor"
        onChange={handleChange}
        style={styles.input}
      >
        <option value="">Select Doctor</option>
        <option>Dr. Sharma (Cardiology)</option>
        <option>Dr. Rao (Orthopedics)</option>
        <option>Dr. Mehta (General)</option>
      </select>

      <input
        type="date"
        name="date"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="time"
        name="time"
        onChange={handleChange}
        style={styles.input}
      />

      <button onClick={schedule} style={styles.button}>
        Schedule Appointment
      </button>
    </div>
  );
};

const styles = {
  card: {
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
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default AppointmentScheduling;

