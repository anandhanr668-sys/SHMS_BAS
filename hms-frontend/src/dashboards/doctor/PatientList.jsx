import React from "react";

const PatientList = () => {
  const patients = [
    { id: 1, name: "Ravi Kumar", diagnosis: "Fever" },
    { id: 2, name: "Anita Sharma", diagnosis: "Hypertension" }
  ];

  return (
    <div>
      <h2>Patient List</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Diagnosis</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.diagnosis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
