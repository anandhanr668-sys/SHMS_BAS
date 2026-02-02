// src/modules/billing/billing.model.js

class BillingItem {
  constructor({ description, amount, quantity = 1 }) {
    this.description = description;
    this.amount = amount;
    this.quantity = quantity;
    this.total = amount * quantity;
  }
}

class Billing {
  constructor({
    id,
    tenantId,
    patientId,
    visitId,
    items = [],
    grossAmount = 0,
    insuranceCovered = 0,
    netPayable = 0,
    paymentStatus = 'PENDING', // PENDING | PAID | PARTIAL
    paymentMode = null,        // CASH | CARD | UPI | ONLINE
    createdAt = new Date(),
  }) {
    this.id = id;
    this.tenantId = tenantId;
    this.patientId = patientId;
    this.visitId = visitId;
    this.items = items;
    this.grossAmount = grossAmount;
    this.insuranceCovered = insuranceCovered;
    this.netPayable = netPayable;
    this.paymentStatus = paymentStatus;
    this.paymentMode = paymentMode;
    this.createdAt = createdAt;
  }
}

module.exports = Billing;
