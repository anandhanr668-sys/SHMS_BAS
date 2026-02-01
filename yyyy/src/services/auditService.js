export const auditService = {
  getAuditLogs: () =>
    Promise.resolve([
      {
        user: "Admin",
        action: "Updated ward capacity",
        time: "10:30 AM",
      },
      {
        user: "Doctor",
        action: "Discharged patient",
        time: "11:15 AM",
      },
    ]),
};

