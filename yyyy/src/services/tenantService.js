export const tenantService = {
  getTenants: () =>
    Promise.resolve([
      { id: 1, name: "City Hospital" },
      { id: 2, name: "Care Plus Clinic" },
    ]),

  switchTenant: (tenantId) =>
    Promise.resolve({ activeTenant: tenantId }),
};

