// src/utils/constants.js

module.exports = {
  USER_TYPES: {
    STAFF: 'STAFF',
    PATIENT: 'PATIENT',
  },

  VISIT_TYPES: {
    OPD: 'OPD',
    IPD: 'IPD',
    EMERGENCY: 'EMERGENCY',
  },

  PAYMENT_STATUS: {
    PENDING: 'PENDING',
    PAID: 'PAID',
    PARTIAL: 'PARTIAL',
  },

  BED_STATUS: {
    AVAILABLE: 'AVAILABLE',
    OCCUPIED: 'OCCUPIED',
    MAINTENANCE: 'MAINTENANCE',
  },

  CLAIM_STATUS: {
    NONE: 'NONE',
    SUBMITTED: 'SUBMITTED',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
  },
};
