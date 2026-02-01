import React from "react";

const logs = [
  { user: "Admin", action: "Updated bed capacity", time: "10:30 AM" },
  { user: "Doctor", action: "Discharged patient", time: "11:15 AM" },
];

const AuditLogs = () => {
  return (
    <div>
      <h2>Audit Logs</h2>

      {logs.map((log, i) => (
        <div key={i} style={styles.log}>
          <strong>{log.user}</strong> — {log.action}
          <span style={styles.time}>{log.time}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  log: {
    background: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  time: {
    float: "right",
    opacity: 0.6,
  },
};

export default AuditLogs;

