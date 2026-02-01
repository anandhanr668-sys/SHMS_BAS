import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/authStore";

/**
 * ProtectedRoute
 * - Blocks unauthenticated users
 * - Blocks unauthorized roles
 *
 * Usage:
 * <Route element={<ProtectedRoute allow={["ADMIN"]} />}>
 *   <Route path="/admin/settings" element={<SettingsPage />} />
 * </Route>
 */
export default function ProtectedRoute({ allow = [] }) {
  const { isAuthenticated, role } = useAuthStore();

  // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but role not allowed
  if (allow.length && !allow.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Authorized → render child routes
  return <Outlet />;
}
