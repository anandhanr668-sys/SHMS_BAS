import { create } from "zustand";

export const useDashboardStore = create(() => ({
  admin: { patients: 320, doctors: 28, beds: 45 },
  doctor: { todayPatients: 12, pendingReports: 3 },
  nurse: { wardPatients: 18, bedsAvailable: 6 },
  patient: { appointments: 1, prescriptions: 2 }
}));
