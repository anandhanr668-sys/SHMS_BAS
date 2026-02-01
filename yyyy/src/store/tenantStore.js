import { create } from "zustand";

export const useTenantStore = create((set) => ({
  tenants: ["City Hospital", "Care Plus Clinic"],
  activeTenant: "City Hospital",

  switchTenant: (tenant) =>
    set({ activeTenant: tenant }),
}));

