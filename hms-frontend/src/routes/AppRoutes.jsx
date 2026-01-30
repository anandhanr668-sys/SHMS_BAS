import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

import AppShell from "../core/AppShell";
import ProtectedRoute from "../core/ProtectedRoute";

// Admin
import AdminDashboard from "../dashboards/admin/AdminDashboard";
import FormBuilderPage from "../dashboards/admin/FormBuilderPage";
import RulesBuilderPage from "../dashboards/admin/RulesBuilderPage";
import ReportDesignerPage from "../dashboards/admin/ReportDesignerPage";

// Front Desk
import FrontDeskDashboard from "../dashboards/frontdesk/FrontDeskDashboard";

// Nurse
import NurseDashboard from "../dashboards/nurse/NurseDashboard";

// Doctor
import DoctorDashboard from "../dashboards/doctor/DoctorDashboard";

// Patient
import PatientPortal from "../dashboards/patient/PatientPortal";

const isAuthenticated = () =>
  localStorage.getItem("auth") === "true";

const getRole = () =>
  localStorage.getItem("role");

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* Protected */}
        <Route
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated()}>
              <AppShell />
            </ProtectedRoute>
          }
        >
          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/forms" element={<FormBuilderPage />} />
          <Route path="/admin/rules" element={<RulesBuilderPage />} />
          <Route path="/admin/reports" element={<ReportDesignerPage />} />

          {/* Front Desk */}
          <Route path="/frontdesk" element={<FrontDeskDashboard />} />

          {/* Nurse */}
          <Route path="/nurse" element={<NurseDashboard />} />

          {/* Doctor */}
          <Route path="/doctor" element={<DoctorDashboard />} />

          {/* Patient */}
          <Route path="/patient" element={<PatientPortal />} />
        </Route>

        {/* Errors */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
