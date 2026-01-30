import React from "react";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute
 * Ensures only authenticated users can access routes
 */

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
