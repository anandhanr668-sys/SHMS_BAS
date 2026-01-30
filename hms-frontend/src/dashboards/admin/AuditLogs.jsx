import React from "react";

const AuditLogs = () => {
  return (
    <div>
      <h2>Audit Logs</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Admin</td>
            <td>Created Form</td>
            <td>2026-01-29 10:45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogs;
