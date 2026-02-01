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

/* ================= OTHER ROLES ================= */
import FrontDeskDashboard from "../dashboards/frontdesk/FrontDeskDashboard";
import NurseDashboard from "../dashboards/nurse/NurseDashboard";
import DoctorDashboard from "../dashboards/doctor/DoctorDashboard";
import PatientPortal from "../dashboards/patient/PatientPortal";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========== PUBLIC ROUTES ========== */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* ========== ADMIN ROUTES ========== */}
        <Route element={<ProtectedRoute allow={["ADMIN"]} />}>
          <Route element={<AppShell />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="patients" element={<PatientsPage />} />
              <Route path="appointments" element={<AppointmentsPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="forms" element={<FormBuilderPage />} />
              <Route path="rules" element={<RulesBuilderPage />} />
              <Route path="reports" element={<ReportDesignerPage />} />
            </Route>
          </Route>
        </Route>

        {/* ========== FRONT DESK ========== */}
        <Route element={<ProtectedRoute allow={["FRONTDESK"]} />}>
          <Route element={<AppShell />}>
            <Route path="/frontdesk" element={<FrontDeskDashboard />} />
          </Route>
        </Route>

        {/* ========== NURSE ========== */}
        <Route element={<ProtectedRoute allow={["NURSE"]} />}>
          <Route element={<AppShell />}>
            <Route path="/nurse" element={<NurseDashboard />} />
          </Route>
        </Route>

        {/* ========== DOCTOR ========== */}
        <Route element={<ProtectedRoute allow={["DOCTOR"]} />}>
          <Route element={<AppShell />}>
            <Route path="/doctor" element={<DoctorDashboard />} />
          </Route>
        </Route>

        {/* ========== PATIENT ========== */}
        <Route element={<ProtectedRoute allow={["PATIENT"]} />}>
          <Route element={<AppShell />}>
            <Route path="/patient" element={<PatientPortal />} />
          </Route>
        </Route>

        {/* ========== FALLBACKS ========== */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
