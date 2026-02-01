import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* Core */
import AppShell from "../core/AppShell";

/* Entry Pages */
import Login from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

/* Admin */
import AdminDashboard from "../dashboards/admin/AdminDashboard";
import FormBuilderPage from "../dashboards/admin/FormBuilderPage";
import RulesBuilderPage from "../dashboards/admin/RulesBuilderPage";
import ReportDesignerPage from "../dashboards/admin/ReportDesignerPage";
import MasterData from "../dashboards/admin/MasterData";
import WardBedManagement from "../dashboards/admin/WardBedManagement";
import StaffManagement from "../dashboards/admin/StaffManagement";
import AuditLogs from "../dashboards/admin/AuditLogs";
import Analytics from "../dashboards/admin/Analytics";

/* Front Desk */
import FrontDeskDashboard from "../dashboards/frontdesk/FrontDeskDashboard";
import PatientRegistration from "../dashboards/frontdesk/PatientRegistration";
import AppointmentScheduling from "../dashboards/frontdesk/AppointmentScheduling";

/* Nurse */
import NurseDashboard from "../dashboards/nurse/NurseDashboard";
import AssignedPatients from "../dashboards/nurse/AssignedPatients";
import VitalsCapture from "../dashboards/nurse/VitalsCapture";
import BedStatus from "../dashboards/nurse/BedStatus";

/* Doctor */
import DoctorDashboard from "../dashboards/doctor/DoctorDashboard";
import PatientList from "../dashboards/doctor/PatientList";
import Consultation from "../dashboards/doctor/Consultation";
import Prescriptions from "../dashboards/doctor/Prescriptions";
import Discharge from "../dashboards/doctor/Discharge";

/* Patient */
import PatientPortal from "../dashboards/patient/PatientPortal";
import VisitHistory from "../dashboards/patient/VisitHistory";
import Reports from "../dashboards/patient/Reports";
import PatientPrescriptions from "../dashboards/patient/Prescriptions";
import Appointments from "../dashboards/patient/Appointments";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Entry / Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* App Layout */}
      <Route element={<AppShell />}>
        {/* Default */}
        <Route path="/" element={<Navigate to="/admin" />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/forms" element={<FormBuilderPage />} />
        <Route path="/admin/rules" element={<RulesBuilderPage />} />
        <Route path="/admin/reports" element={<ReportDesignerPage />} />
        <Route path="/admin/master-data" element={<MasterData />} />
        <Route path="/admin/wards" element={<WardBedManagement />} />
        <Route path="/admin/staff" element={<StaffManagement />} />
        <Route path="/admin/audit" element={<AuditLogs />} />
        <Route path="/admin/analytics" element={<Analytics />} />

        {/* Front Desk */}
        <Route path="/frontdesk" element={<FrontDeskDashboard />} />
        <Route path="/frontdesk/register" element={<PatientRegistration />} />
        <Route
          path="/frontdesk/appointments"
          element={<AppointmentScheduling />}
        />

        {/* Nurse */}
        <Route path="/nurse" element={<NurseDashboard />} />
        <Route path="/nurse/patients" element={<AssignedPatients />} />
        <Route path="/nurse/vitals" element={<VitalsCapture />} />
        <Route path="/nurse/beds" element={<BedStatus />} />

        {/* Doctor */}
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor/patients" element={<PatientList />} />
        <Route path="/doctor/consultation" element={<Consultation />} />
        <Route path="/doctor/prescriptions" element={<Prescriptions />} />
        <Route path="/doctor/discharge" element={<Discharge />} />

        {/* Patient */}
        <Route path="/patient" element={<PatientPortal />} />
        <Route path="/patient/visits" element={<VisitHistory />} />
        <Route path="/patient/reports" element={<Reports />} />
        <Route
          path="/patient/prescriptions"
          element={<PatientPrescriptions />}
        />
        <Route path="/patient/appointments" element={<Appointments />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

