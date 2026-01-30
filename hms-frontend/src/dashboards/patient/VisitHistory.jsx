import React from "react";

const VisitHistory = () => {
  const visits = [
    { id: 1, date: "2026-01-10", doctor: "Dr. Rao", reason: "Fever" },
    { id: 2, date: "2026-01-20", doctor: "Dr. Mehta", reason: "Follow-up" }
  ];

  return (
    <div>
      <h2>Visit History</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((v) => (
            <tr key={v.id}>
              <td>{v.date}</td>
              <td>{v.doctor}</td>
              <td>{v.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitHistory;
