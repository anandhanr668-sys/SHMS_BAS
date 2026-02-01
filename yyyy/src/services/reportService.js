export const reportService = {
  getReports: () =>
    Promise.resolve([
      { id: 1, name: "Discharge Summary" },
      { id: 2, name: "Daily Census Report" },
    ]),

  generateReport: (reportId) =>
    Promise.resolve({
      reportId,
      status: "Generated",
      url: "/mock-report.pdf",
    }),
};

