import React from "react";

const BedStatus = () => {
  const beds = [
    { bed: "G-12", ward: "General", status: "Occupied" },
    { bed: "G-13", ward: "General", status: "Available" },
    { bed: "ICU-3", ward: "ICU", status: "Occupied" }
  ];

  return (
    <div>
      <h2>Bed Status</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Bed</th>
            <th>Ward</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {beds.map((b, i) => (
            <tr key={i}>
              <td>{b.bed}</td>
              <td>{b.ward}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BedStatus;
