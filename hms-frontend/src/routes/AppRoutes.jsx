import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

import AppShell from "../core/AppShell";
import ProtectedRoute from "../core/ProtectedRoute";

/* ================= ADMIN ================= */
import AdminLayout from "../dashboards/admin/AdminLayout";
import AdminDashboard from "../dashboards/admin/AdminDashboard";
import PatientsPage from "../dashboards/admin/PatientsPage";
import AppointmentsPage from "../dashboards/admin/AppointmentsPage";
import SettingsPage from "../dashboards/admin/SettingsPage";
import FormBuilderPage from "../dashboards/admin/FormBuilderPage";
import RulesBuilderPage from "../dashboards/admin/RulesBuilderPage";
import ReportDesignerPage from "../dashboards/admin/ReportDesignerPage";

/* ================= FRONT DESK ================= */
import FrontDeskDashboard from "../dashboards/frontdesk/FrontDeskDashboard";

/* ================= NURSE ================= */
import NurseDashboard from "../dashboards/nurse/NurseDashboard";

/* ================= DOCTOR ================= */
import DoctorDashboard from "../dashboards/doctor/DoctorDashboard";

/* ================= PATIENT ================= */
import PatientPortal from "../dashboards/patient/PatientPortal";

const isAuthenticated = () =>
  localStorage.getItem("auth") === "true";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========== PUBLIC ROUTES ========== */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* ========== PROTECTED APP ========== */}
        <Route
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated()}>
              <AppShell />
            </ProtectedRoute>
          }
        >

          {/* -------- ADMIN (NESTED) -------- */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="patients" element={<PatientsPage />} />
            <Route path="appointments" element={<AppointmentsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="forms" element={<FormBuilderPage />} />
            <Route path="rules" element={<RulesBuilderPage />} />
            <Route path="reports" element={<ReportDesignerPage />} />
          </Route>

          {/* -------- OTHER ROLES -------- */}
          <Route path="/frontdesk" element={<FrontDeskDashboard />} />
          <Route path="/nurse" element={<NurseDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/patient" element={<PatientPortal />} />

        </Route>

        {/* ========== FALLBACKS ========== */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
