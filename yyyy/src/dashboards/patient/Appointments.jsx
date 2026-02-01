import React from "react";

const appointments = [
  {
    date: "20 Feb 2026",
    doctor: "Dr. Sharma",
    department: "Cardiology",
    time: "10:30 AM",
  },
];

const Appointments = () => {
  return (
    <div>
      <h2>Appointments</h2>

      {appointments.map((a, i) => (
        <div key={i} style={styles.card}>
          <strong>{a.date}</strong>
          <p>{a.doctor}</p>
          <span>{a.department} · {a.time}</span>
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

export default Appointments;

