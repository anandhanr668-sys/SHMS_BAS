// src/analytics/analytics.service.js

/**
 * MOCK data sources (replace with DB queries)
 */
const mockData = {
  patients: [],
  visits: [],
  bills: [],
  beds: [],
};

/**
 * Get dashboard metrics
 */
const getDashboardMetrics = async (tenantId) => {
  const totalPatients = mockData.patients.filter(
    (p) => p.tenantId === tenantId
  ).length;

  const totalVisits = mockData.visits.filter(
    (v) => v.tenantId === tenantId
  ).length;

  const activeVisits = mockData.visits.filter(
    (v) => v.tenantId === tenantId && v.status !== 'CLOSED'
  ).length;

  const totalRevenue = mockData.bills
    .filter((b) => b.tenantId === tenantId && b.paymentStatus === 'PAID')
    .reduce((sum, bill) => sum + bill.netPayable, 0);

  const occupiedBeds = mockData.beds.filter(
    (b) => b.tenantId === tenantId && b.status === 'OCCUPIED'
  ).length;

  return {
    totalPatients,
    totalVisits,
    activeVisits,
    totalRevenue,
    occupiedBeds,
  };
};

module.exports = {
  getDashboardMetrics,
};
