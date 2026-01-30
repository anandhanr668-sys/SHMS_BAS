import React from "react";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      date: "2026-02-01",
      doctor: "Dr. Rao",
      status: "Scheduled"
    },
    {
      id: 2,
      date: "2026-01-15",
      doctor: "Dr. Mehta",
      status: "Completed"
    }
  ];

  return (
    <div>
      <h2>Appointments</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{a.date}</td>
              <td>{a.doctor}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
