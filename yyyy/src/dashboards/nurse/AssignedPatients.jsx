import React from "react";

const patients = [
  { id: 1, name: "Ravi Kumar", ward: "ICU", bed: "ICU-04" },
  { id: 2, name: "Anita Sharma", ward: "General", bed: "G-21" },
  { id: 3, name: "Mohit Verma", ward: "Surgery", bed: "S-12" },
];

const AssignedPatients = () => {
  return (
    <div>
      <h2>Assigned Patients</h2>

      {patients.map((p) => (
        <div key={p.id} style={styles.row}>
          <strong>{p.name}</strong>
          <span>{p.ward}</span>
          <span>{p.bed}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    padding: 12,
    background: "white",
    marginBottom: 10,
    borderRadius: 10,
  },
};

export default AssignedPatients;

