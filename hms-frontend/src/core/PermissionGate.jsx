import useAuthStore from "../store/authStore";

/**
 * PermissionGate
 * Usage:
 * <PermissionGate allow={["ADMIN", "DOCTOR"]}>
 *   <Component />
 * </PermissionGate>
 */
export default function PermissionGate({ allow = [], children }) {
  const { role, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return null; // or <Navigate to="/login" />
  }

  if (!allow.includes(role)) {
    return (
      <div style={{ padding: 20, color: "red" }}>
        You do not have permission to view this section.
      </div>
    );
  }

  return children;
}
