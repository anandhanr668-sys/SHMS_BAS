export const sidebarConfig = {
  ADMIN: [
    { label: "Dashboard", path: "/admin" },
    { label: "Patients", path: "/admin/patients" },
    { label: "Appointments", path: "/admin/appointments" },
    { label: "Reports", path: "/admin/reports" },
    { label: "Settings", path: "/admin/settings" }
  ],
  DOCTOR: [
    { label: "My Patients", path: "/doctor" },
    { label: "Consultations", path: "/doctor/consultations" }
  ],
  NURSE: [
    { label: "Ward", path: "/nurse" },
    { label: "Vitals", path: "/nurse/vitals" }
  ],
  PATIENT: [
    { label: "Overview", path: "/patient" },
    { label: "Reports", path: "/patient/reports" }
  ]
};
