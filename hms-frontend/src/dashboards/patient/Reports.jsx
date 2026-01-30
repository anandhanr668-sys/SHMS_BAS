import React from "react";

const Reports = () => {
  const reports = [
    { id: 1, name: "Blood Test", date: "2026-01-11" },
    { id: 2, name: "X-Ray", date: "2026-01-20" }
  ];

  return (
    <div>
      <h2>Reports</h2>

      <ul>
        {reports.map((r) => (
          <li key={r.id}>
            {r.name} – {r.date}
            <button style={{ marginLeft: 10 }}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
