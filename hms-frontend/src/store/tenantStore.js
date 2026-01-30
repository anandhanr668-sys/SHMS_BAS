import { create } from "zustand";

const useTenantStore = create((set) => ({
  tenantId: null,

  setTenant: (tenantId) => set({ tenantId })
}));

export default useTenantStore;
