import React from "react";

const PermissionGate = ({ allowedRoles = [], userRole, children }) => {
  if (!allowedRoles.includes(userRole)) {
    return (
      <div style={{ padding: 20, color: "red" }}>
        ⛔ Access Denied
      </div>
    );
  }

  return children;
};

export default PermissionGate;

