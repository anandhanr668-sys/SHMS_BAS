// src/modules/insurance/insurance.model.js

class Insurance {
  constructor({
    id,
    tenantId,
    patientId,
    providerName,          // e.g. Star Health, ICICI Lombard
    policyNumber,
    policyType,            // CASHLESS | REIMBURSEMENT
    coverageAmount,
    validFrom,
    validTo,
    claimStatus = 'NONE',  // NONE | SUBMITTED | APPROVED | REJECTED
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.patientId = patientId;
    this.providerName = providerName;
    this.policyNumber = policyNumber;
    this.policyType = policyType;
    this.coverageAmount = coverageAmount;
    this.validFrom = validFrom;
    this.validTo = validTo;
    this.claimStatus = claimStatus;
    this.createdAt = createdAt;
  }
}

module.exports = Insurance;
