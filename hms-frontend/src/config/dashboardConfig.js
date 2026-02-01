export const dashboardConfig = {
  ADMIN: [
    { id: 1, title: "Patients", key: "patients" },
    { id: 2, title: "Doctors", key: "doctors" },
    { id: 3, title: "Beds Available", key: "beds" }
  ],
  DOCTOR: [
    { id: 1, title: "Today's Patients", key: "todayPatients" },
    { id: 2, title: "Pending Reports", key: "pendingReports" }
  ],
  NURSE: [
    { id: 1, title: "Ward Patients", key: "wardPatients" },
    { id: 2, title: "Free Beds", key: "bedsAvailable" }
  ],
  PATIENT: [
    { id: 1, title: "Appointments", key: "appointments" },
    { id: 2, title: "Prescriptions", key: "prescriptions" }
  ]
};
