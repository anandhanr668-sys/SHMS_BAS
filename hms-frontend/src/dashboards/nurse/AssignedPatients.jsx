import React from "react";

const AssignedPatients = () => {
  const patients = [
    { id: 1, name: "Ravi Kumar", ward: "General", bed: "G-12" },
    { id: 2, name: "Anita Sharma", ward: "ICU", bed: "ICU-3" }
  ];

  return (
    <div>
      <h2>Assigned Patients</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Ward</th>
            <th>Bed</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.ward}</td>
              <td>{p.bed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedPatients;
