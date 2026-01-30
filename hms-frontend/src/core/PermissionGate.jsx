import React from "react";

/**
 * PermissionGate
 * Usage:
 * <PermissionGate allowed={["ADMIN", "DOCTOR"]}>
 *   <Component />
 * </PermissionGate>
 */

const PermissionGate = ({ allowed = [], userRole, children }) => {
  if (!allowed.includes(userRole)) {
    return (
      <div style={{ padding: 20, color: "red" }}>
        You do not have permission to view this page.
      </div>
    );
  }

  return children;
};

export default PermissionGate;
