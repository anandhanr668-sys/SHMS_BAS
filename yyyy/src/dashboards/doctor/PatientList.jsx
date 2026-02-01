import React from "react";

const patients = [
  { id: 1, name: "Anita Sharma", age: 45, complaint: "Chest Pain" },
  { id: 2, name: "Rohit Mehra", age: 32, complaint: "Fever" },
  { id: 3, name: "Sunita Rao", age: 58, complaint: "Diabetes Review" },
];

const PatientList = () => {
  return (
    <div>
      <h2>Patient List</h2>

      {patients.map((p) => (
        <div key={p.id} style={styles.row}>
          <strong>{p.name}</strong>
          <span>Age: {p.age}</span>
          <span>{p.complaint}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 2fr",
    padding: 14,
    background: "white",
    marginBottom: 10,
    borderRadius: 12,
  },
};

export default PatientList;

