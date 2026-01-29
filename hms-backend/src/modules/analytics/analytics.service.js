// src/modules/analytics/analytics.service.js

import pool from "../../config/db.js";

/* =========================
   DASHBOARD METRICS
========================= */

export const getDashboardMetrics = async () => {
  const totalPatients = await pool.query(
    `SELECT COUNT(*) FROM patients`
  );

  const totalVisits = await pool.query(
    `SELECT COUNT(*) FROM visits`
  );

  const activeVisits = await pool.query(
    `SELECT COUNT(*) FROM visits WHERE status = 'ACTIVE'`
  );

  const bedOccupancy = await pool.query(
    `SELECT
       COUNT(*) FILTER (WHERE status = 'OCCUPIED') AS occupied,
       COUNT(*) FILTER (WHERE status = 'AVAILABLE') AS available
     FROM beds`
  );

  return {
    total_patients: Number(totalPatients.rows[0].count),
    total_visits: Number(totalVisits.rows[0].count),
    active_visits: Number(activeVisits.rows[0].count),
    beds: {
      occupied: Number(bedOccupancy.rows[0].occupied),
      available: Number(bedOccupancy.rows[0].available),
    },
  };
};

/* =========================
   VISITS BY TYPE
========================= */

export const getVisitStats = async () => {
  const result = await pool.query(
    `SELECT visit_type, COUNT(*) AS count
     FROM visits
     GROUP BY visit_type`
  );
  return result.rows;
};

/* =========================
   TRIAGE DISTRIBUTION
========================= */

export const getTriageStats = async () => {
  const result = await pool.query(
    `SELECT triage_level, COUNT(*) AS count
     FROM visits
     GROUP BY triage_level`
  );
  return result.rows;
};
